##Instalar homebrew.


Referencia: [brew](https://brew.sh/)

Ejecutar en terminal:
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Es probable que haya que instalar las utilidades de linea de comandos de xcode (aparece como notificación de actualización).

## Instalación MySQL Server
Ejecutar en terminal:

``
brew install mysql
``

``
brew tap homebrew/services 
``

``
brew services start mysql
``

A continuación, la guía en https://gitlab.com/blueoceanstart/hack-a-bos/jsb03co/mod5-bd/tree/master/configuracion_entorno_sql sin utilizar `sudo`.

