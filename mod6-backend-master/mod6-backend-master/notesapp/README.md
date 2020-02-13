# NotesApp
App para aprender:
* Cómo funciona un servidor http con Node.js
* Cómo funciona una API REST
* Cómo funciona Express.js
  * app.use para conectar middlewares:
    * routers
    * funciones controladores
    * middlewares de gestión de errores
    * custom para personalizar el 404 Not Found) 

# Express: Cómo crear un nuevo endpoint

## 1. Crear función controladora tonta (que devuelva 2xx y ya)
```
// ./notesapp/app/webserver/controllers/user/upload-avatar-controller.js
'use strict';

async function uploadAvatar(req, res, next) {
  return res.status(201).send();
}

module.exports = uploadAvatar;
```
## 2. Crear el router conectando la función controladora y si es un endpoint para un usuario logueado, conectar el middleware de autenticación
```
// ./notesapp/app/webserver/routes/user-router.js
'use strict';

const express = require('express');
const checkAccountSession = require('../controllers/account/check-account-session');
const uploadAvatar = require('../controllers/user/upload-avatar-controller');

router.post('/avatar', checkAccountSession, uploadAvatar);

module.exports = router;
```
## 3. Actualizar el index.js de los routers para exportar el nuevo router (si no lo está ya)
```
// ./notesapp/app/webserver/routes/index.js
'use strict';

const user = require('./user-router');

module.exports = {
  user,
};
```

## 4. Conectar el nuevo router (la primera vez) a express
```
// ./notesapp/index.js
app.use('/api/users', routes.users);
```
# Express: Qué tiene que hacer la función controladora. Caso típico.
## 1. Validar datos
```
async function validate(payload) {
  const schema = Joi.object({
    userId: Joi.string().guid({
      version: ['uuidv4'],
    }).required(),
  });

  Joi.assert(payload, schema);
}

async function uploadAvatar(req, res, next) {
  const { file } = req;
  const { userId, } = req.claims;

  const payload = {
    userId,
  };

  try {
    await validate(payload);
  } catch (e) {
    return res.status(400).send(e);
  }

  if (!file || !file.buffer) {
    return res.status(400).send({
      message: 'upload an image',
    });
  }

  return res.status(201).send();
}

module.exports = uploadAvatar;
```
## 2. Lógica negocio: Queries BBDD / Subir archivo / Enviar email
```
async function uploadAvatar(req, res, next) {
  // ...
  cloudinary.v2.uploader.upload_stream({
    resource_type: 'image',
    public_id: userId,
    width: 200,
    height: 200,
    format: 'jpg',
    crop: 'limit',
  }, async (err, result) => {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    }

    const {
      secure_url: secureUrl,
    } = result;

    const sqlQuery = `UPDATE users
      SET avatar_url = ?
      WHERE id = ?`;
    
    try {
      const connection = await mysqlPool.getConnection();
      await connection.execute(sqlQuery, [secureUrl, userId]);
      connection.release();
    } catch (e) {
      return res.status(500).send({
        message: e.message,
      });
    }
  }).end(file.buffer);
}
```
## 3. Mapper de datos (transformar algo de A a B si procede)
No aplica en este ejemplo. Puedes pegar un vistazo al reduce del getNotes donde se transforman los datos y se devuelve el Object.values del Array de notas reducido
## 4. Devolver datos al usuario
```
res.header('Location', secureUrl);
return res.status(201).send();
```
## 5. Todo junto
```
'use strict';

const cloudinary = require('cloudinary');
const Joi = require('@hapi/joi');
const mysqlPool = require('../../../database/mysql-pool');

cloudinary.config({
  cloud_name: process.env.CLOUDINARI_CLOUD_NAME,
  api_key: process.env.CLOUDINARI_API_KEY,
  api_secret: process.env.CLOUDINARI_API_SECRET,
});

async function validate(payload) {
  const schema = Joi.object({
    userId: Joi.string().guid({
      version: ['uuidv4'],
    }).required(),
  });

  Joi.assert(payload, schema);
}

async function uploadAvatar(req, res, next) {
  const { file } = req;
  const { userId } = req.claims;

  const payload = {
    userId,
  };

  try {
    await validate(payload);
  } catch (e) {
    return res.status(400).send(e);
  }

  if (!file || !file.buffer) {
    return res.status(400).send();
  }

  cloudinary.v2.uploader.upload_stream({
    resource_type: 'image',
    public_id: userId,
    width: 200,
    height: 200,
    format: 'jpg',
    crop: 'limit',
  }, async(err, result) => {
    if (err) {
      return res.status(400).send(err);
    }

    const {
      etag,
      secure_url: secureUrl,
    } = result;

    // Update user to set avatar url
    const updateAvatarQuery = `UPDATE users
      SET avatar_url g= ?
      WHERE id = ?`;

    try {
      const connection = await mysqlPool.getConnection();
      await connection.execute(updateAvatarQuery, [secureUrl, userId]);
      connection.release();

      res.header('Location', secureUrl);
      return res.status(201).send();
    } catch (e) {
      console.error(e);
      return res.status(500).send({
        message: e.message,
      });
    }
  }).end(file.buffer);
}

module.exports = uploadAvatar;

```

**Consideraciones para el flujo de upload avatar**

Nota: El ejemplo anterior, es solo un ejemplo de cómo hacer un caso típico. Para el caso del upload avatar, necesitamos además poner un middleware que interprete los archivos subidos (multer):
```
// ./notesapp/app/webserver/routes/user-router.js
'use strict';

const express = require('express');
const multer = require('multer');
const checkAccountSession = require('../controllers/account/check-account-session');
const uploadAvatar = require('../controllers/user/upload-avatar-controller');

const upload = multer();
const router = express.Router();

router.post('/avatar', checkAccountSession, upload.single('avatar'), uploadAvatar);

module.exports = router;
```