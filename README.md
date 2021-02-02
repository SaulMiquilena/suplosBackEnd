# suplosBackEnd
Prueba suplos desarrollador backend

### Los requisitos para poder ejecutar el proyecto:

a. PHP Versión 7.3.21
b. MySQL Versión 5.7.31

### Ejecutar la aplicación

1. Crear una base de datos MySQL con el nombre "intelcost_bienes", utilizando colación "utf8_general_ci".
2. En esta nueva base de datos importaremos el archivo "intelcost_bienes.sql" ubicado dentro de la aplicación en la carpeta "bd".
3. Copiar la carpeta de la aplicación en el servidor donde se ejecutará, o en la carpeta "httdocs" de XAMPP o en la carpeta "www" de WAMP en el caso de ejecutarse en un equipo personal.
4. En la carpeta de la aplicación ya ubicada en el servidor, se debe modificar los datos de conexión de la aplicación a la base de datos. En la carpeta "php" ubicada dentro de la carpeta de la aplicación se encuentra el archivo "conn.php". Se deben cambiar los valores de las variables "$dbhost", "$dbuser" y "$dbpass" a las configuradas en el servidor para uso de la aplicación.
5. En un navegador ir a la dirección de la aplicación, de ser ejecutada en un computador personal utilizando ya sea XAMPP o WAMPP sería "localhost/suplosBackEnd".

```<?php
	
	function Connection() {
		$dbhost = 'localhost'; 
		$dbuser = 'root';
		$dbpass = '';
		$db = 'intelcost_bienes';
		$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
		 
		return $conn;
	}
	 
	function CloseCon($conn) {
	 	$conn->close();
	}
`