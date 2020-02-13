# Configuración del entorno de prácticas

Se detallan a continuación las instrucciones a ejecutar para preparar en entorno de prácticas.

Importante:
1. Descargar de GitLab el proyecto `md5-db`  
 Abriremos un terminal, nos situaremos en la carpeta que nos interese y ejecutaremos:  
`git clone https://gitlab.com/blueoceanstart/hack-a-bos/jsbXXco/mod5-bd.git`  
En dónde `XX` es vuestro número de grupo.

2. Antes de ejecutar cualquier sentencia leerse el bloque entero, por ejemplo, si estamos en el paso `1.1` 
leeremos todo el texto del paso `1.1` antes de ejecutarlo.
3. Si al ejecutar una sentencia aparece un **WARNING**, el sistema nos informa de una eventualidad.   
**No ha ocurrido ningún error** (**No** necesitemos repetir la sentencia).   
  En nuestro caso se nos mostrará el aviso de que poner la
contraseña por línea de comandos es inseguro.
4. En caso de que ocurra algún error es importante leer qué es lo que ocurre.  
5. Cuando el sistema solicite una contraseña fijarse en qué contraseña solicita: La de vuestro usuario de `linux`, 
la del usuario `root` que vamos a crear o la del usuario `demo` que también vamos a crear.
6. Cuando la sentencia que ejecutemos comience por `mysql` debemos tener en cuenta que:  
    * `-u usuario` Indica que vamos a conectarnos con el usuario `usuario`
    * `-pcontraseña` Indica que la contraseña es `contraseña` y **no hay espacio** entre la p y la contraseña
    * `-p` Indica que queremos que nos solicite la contraseña (pero no se la ponemos en texto plano) 
    
    
Vamos a relizar las siguientes tareas:
* Instalar servidor de bases de datos MySQL
* Comprobar que se ha instalado correctamente
* Establecer contraseña al usuario administrador de MySQL `root`
* Crear un usuario para trabajar con él:  `demo`
* Crear las tablas con las que realizaremos las prácticas (`emp` y `dept`)


## 1. Instalación MySQL Server
#### 1.1 Actualizar paquetes disponibles 
Abrir un terminal y ejecutar:
```shell script
sudo apt-get update
```
Nos solicitará la contraseña de nuestro usuario de Linux, y se la proporcionaremos
```shell script
[sudo] contraseña para nombre-de-usuario: 
```
El sistema descargará una lista de ficheros de internet, cuando termine nos mostrará 
`Leyendo lista de paquetes... Hecho` y nos dejará escribir de nuevo en el terminal.

### 1.2 Instalar MySQL Server
Desde un terminal ejecutamos
```shell script
sudo apt-get install mysql-server
```
El sistema comprobará qué ficheros debe descargarse de internet y nos pedirá que le confirmemos que deseamos instalarlo
```shell script
Se utilizarán 161 MB de espacio de disco adicional después de esta operación.
¿Desea continuar? [S/n] S
``` 
Pulsamos **S** para indicarle que si.  
Se descargará los ficheros de internet y los instalará.  
Cuando termine nos permitirá escribir de nuevo en el terminal.

### 1.3 Comprobar que se ha instalado
Ejecutaremos 
```shell script
mysql --version
```
Si el proceso de instalación ha ido bien se debería mostrar una línea similar a:
```shell script
mysql  Ver 14.14 Distrib 5.7.27, for Linux (x86_64) using  EditLine wrapper
```

### 1.4 Establecer configuración de seguridad inicial
MySQL tiene un usuario de administración que se llama `root`.  
Lo primero que vamos a hacer es asignarle como contraseña `root` y ajustar la configuración básica de seguridad
 
En un terminal ejecutar
```shell script
sudo mysql_secure_installation
```
Lo primero que nos preguntará el asistente es si deseamos usar contraseñas seguras, en un entorno real debería activarse
pero nosotros le vamos a decir que no porque vamos a usar una constraseña muy sencilla.
```shell script
Would you like to setup VALIDATE PASSWORD plugin?

Press y|Y for Yes, any other key for No: n
```
A Continuación nos solicita qué contraseña queremos asignarle al usuario `root`, en un alarde de originalidad 
vamos a ponerle `root`
```shell script
Please set the password for root here.

New password: 
Re-enter new password: 
```

Finalmente nos relizará unas preguntas sobre seguridad, le diremos a todo que si: `y`
```shell script
Remove anonymous users: y
Disallow root login remotely: y
Remove test database and access to it: y
Reload privilege tables now: y
```

Al finalizar el asistente se mostrará por pantalla `All done!` y nos devolverá al terminal.

## 2. Permisos de acceso
En esta sección estableceremos los permisos de acceso para dos usuarios:  
* `root` cuya contraseña será `root`
* Crearemos un nuevo usuario `demo`, cuya contraseña será `password`.   
Con el usuario `demo` es con el que haremos las prácticas.

### 2.1 Permisos de acceso para root
Desde un terminal ejecutar:
```shell script
sudo mysql -u root
```

Esto abrirá una *consola de MySQL*, lo sabemos porque la línea comieza por `mysql>` en vez de por `$`

En la consola de MySQL las sentencias terminan con `;`  
Si dejamos una sentencia a medio escribir y pulsamos intro mysql no sabe que la sentencia ha terminado. 
Siempre hay que poner el `;` para que mysql ejecute el código.  
Cuando MySQL ejecuta una sentencia siempre indica el resultado de la misma, nosotros nos fijaremos en que 
ponga `Query OK`, independientemente del número de tuplas que se hayan visto involucradas.    

Esto abrirá un _bash_ SQL, ahí ejecutar:
```mysql-sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
```
```mysql-sql
GRANT ALL PRIVILEGES on *.* to 'root'@'localhost' IDENTIFIED BY 'root';
```
```mysql-sql
FLUSH PRIVILEGES;
```

Ya hemos terminado de ejecutar sentencias de MySQL, para salir escribiremos `exit`  

Para finalizar comprobamos que podemos acceder a MySQL con el usuario root, escribiremos:
```
mysql -u root –p
```
Y si todo ha ido bien entrará en la consola de MySQL. 
Escribiremos `exit` para salir.
```mysql-sql
mysql> exit
Bye
```

### 2.2 Crear el usuario 'demo'
Desde un terminal accederemos con el usuario `root` (Su contraseña es `root`):
```shell script
mysql -u root -p
```
Desde la consola de MySQL ejecutaremos las siguientes sentencias:
```
CREATE USER 'demo'@'localhost' IDENTIFIED BY 'password';
```
```mysql-sql
GRANT ALL PRIVILEGES ON *.* TO 'demo'@'localhost';
```  
```mysql-sql
FLUSH PRIVILEGES;
```
Ya hemos terminado de ejecutar sentencias de MySQL, para salir escribiremos `exit`  

Finalmente comprobaremos que nuestro usuario `demo` se puede conectar.
```mysql-sql
mysql -u demo –p
```


Y si todo ha ido bien entrará en la consola de MySQL. 
Escribiremos `exit` para salir.
```mysql-sql
mysql> exit
Bye
```

## 3. Creación de las tablas de prácticas
En esta sección ejecutaremos el script que introduce los datos en la base de datos y, a continuación, comprobaremos
que el usuario `demo` puede consultarlos.
### 3.1 Script de creación de tablas
Iremos al directorio en dónde hayamos descargado el código de GitLab y nos situaremos en el 
subdirectorio `configuracion_entorno_sql`.  
Una vez allí ejecutamos `ls` para comprobar que el fichero `mysql_emp_dept.sql` está en ese directorio  
Ejemplo:
```shell script
santiquetzal@santiquetzal-VirtualBox:~/mod5-bd/configuracion_entorno_sql$ ls
mysql_emp_dept.sql  README.md
```

Ahora ejecutaremos el script `mysql_emp_dept.sql`.  
Esto creará el esquema `example` y las tablas `emp` y `dept`.

**IMPORTANTE:** `-ppassword` es todo junto (sin espacio entre ellos)
```
mysql -u demo -ppassword < mysql_emp_dept.sql
```
El sistema nos indicará que no es aconsejable usar la contraseña directamente en la línea de comandos 
(más que nada porque la puede ver todo el mundo) mediante el mensaje `mysql: [Warning] Using a password on the command line interface can be insecure`.  
Es un `warning`, no nos preocupa.

### 3.2 Comprobación de datos
Accedemos con el usuario demo:
```shell script
mysql -u demo -p
```
Y le preguntamos a MySQL que nos muestre que esquemas existen:
```mysql-sql
show schemas;
```
En el resultado que se muestre debe aparecer algo equivalente a:
```mysql-sql
+--------------------+
| Database           |
+--------------------+
| information_schema |
| example            | <===== Esta es la que hemos creado nosotros
| mysql              |
| performance_schema |
| sys                |
+--------------------+
```

## 4. MySQL Workbench
Instalaremos y configuraremos el cliente de MySQL
### 4.1 Instalación de MySQL Workbench
Desde un terminal ejecutaremos
```
sudo apt-get install mysql-workbench
```

### 4.2 Configuración de la conexión a la base de datos
Iremos desde, el escritorio de Linux, a: `Aplicaciones`, Seleccionaremos `Todas` (en las parte de abajo), 
y pulsaremos sobre `MySQL Workbench`.  
Esto abrirá una aplicación de escritorio.  
Pulsaremos en el `+` que está a la derecha de `MySQL Connections` y cubriremos con los siguientes datos
```
Conection name: Example
Hostname: 127.0.0.1
Port: 3306
User: demo
Default schema: example
```
Pulsaremos sobre `Test connection`.
Se abrirá una ventana emergente que nos solicita la contraseña, pondremos `password`, y marcamos 
`Save password in KeyChain` para que el sistema la recuerde y no nos la pida cada vez que nos queramos conectar.  
Si todo ha ido bien se mostrará una ventana emergente que pondrá `Successfully made the MySQL connection`

## 5. Desinstalar

En caso de que queramos eliminar MySQL:

```
sudo apt-get remove --purge mysql-server mysql-client mysql-common -y
sudo apt-get autoremove -y
sudo apt-get autoclean

rm -rf /etc/mysql
rm -rf /var/lib/mysql
```
**CUIDADO:**  No ejecutar si no se está seguro  
En ocasiones pueden quedar ficheros relacionados con MySQL después de la desinstalación.  
Con el siguiente comando localizaremos cualquier fichero que comience por `mysql`.  
**OJO:** ¡Puede haber ficheros que usan otras aplicaciones que comiencen por mysql!
```
sudo find / -iname 'mysql*'
```
**PELIGRO:** Sólo ejecutar si realmente estamos seguros de lo que hacemos.  
Con esta sentencia eliminamos todos los resultados anteriores.
Nota: Si solamente queremos borrar unos ficheros en particular tendremos que eliminarlos manualmente.
```
sudo find / -iname 'mysql*' -exec rm -rf {} \;
```