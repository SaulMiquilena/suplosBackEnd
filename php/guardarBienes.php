<?php
	include 'conn.php';

	if (isset($_POST['ciudad']) && isset($_POST['tipo']) && isset($_POST['direccion']) && isset($_POST['codigo_postal']) && isset($_POST['telefono']) && isset($_POST['precio'])){
		$ciudad = $_POST['ciudad'];
		$tipo = $_POST['tipo'];
		$direccion = $_POST['direccion'];
		$codigo_postal = $_POST['codigo_postal'];
		$telefono = $_POST['telefono'];
		$precio = $_POST['precio'];

		$mysqli = Connection();

		if ($mysqli->connect_errno) {
		    echo "Problemas Conectando a Base de Datos";
		    /*echo "Errno: " . $mysqli->connect_errno . "\n <br />";
		    echo "Error: " . $mysqli->connect_error . "\n <br />";*/  
		    exit;
		}

		/* 
			Preguntamos si la ciudad existe en nuetra base de datos
			De no existir la insertamos y obtenemos el nuevo ID
			Si existe se utiliza el ID de la consulta
		*/

		$ciudad_id = null;
		$sql_ciudad = $mysqli->prepare("SELECT id FROM ciudades WHERE nombre LIKE ?");
		$ciudad_param = "%$ciudad%";
		$sql_ciudad->bind_param("s", $ciudad_param);
		if(!$sql_ciudad->execute()) {
	        echo "Sorry, website troubles. \n <br />";
	        /*echo "Errno: " . $mysqli->errno . "\n <br />";
	        echo "Error: " . $mysqli->error . "\n <br />";*/
	        exit;
	    }
	    $resultado_ciudad = $sql_ciudad->get_result();  

	    if ($resultado_ciudad->num_rows > 0) {
	    	$fila = $resultado_ciudad->fetch_array(MYSQLI_ASSOC);
			$ciudad_id = $fila['id'];
	    } else {
	    	$sql_ciudad = $mysqli->prepare("INSERT INTO ciudades (nombre) values (?)");
	        $sql_ciudad->bind_param("s", $ciudad);
	        if(!$resultado_ciudad = $sql_ciudad->execute()) {
		        echo "Sorry, website troubles. \n <br />";
		        /*echo "Errno: " . $mysqli->errno . "\n <br />";
		        echo "Error: " . $mysqli->error . "\n <br />";*/
		        exit;
		    }
		    $ciudad_id = $mysqli->insert_id;
	    }
	    $sql_ciudad->close();

	    /* 
			Preguntamos si el tipo de bien existe en nuetra base de datos
			De no existir la insertamos y obtenemos el nuevo ID
			Si existe se utiliza el ID de la consulta
		*/

		$tipo_bien_id = null;
		$sql_tipo_bien = $mysqli->prepare("SELECT id FROM tipos_bien WHERE nombre LIKE ?");
		$tipo_param = "%$tipo%";
		$sql_tipo_bien->bind_param("s", $tipo_param);
		if(!$sql_tipo_bien->execute()) {
	        echo "Sorry, website troubles. \n <br />";
	        /*echo "Errno: " . $mysqli->errno . "\n <br />";
	        echo "Error: " . $mysqli->error . "\n <br />";*/
	        exit;
	    }
	    $resultado_tipo_bien = $sql_tipo_bien->get_result();  

	    if ($resultado_tipo_bien->num_rows > 0) {
	    	$fila = $resultado_tipo_bien->fetch_array(MYSQLI_ASSOC);
			$tipo_bien_id = $fila['id'];
	    } else {
	    	$sql_tipo_bien = $mysqli->prepare("INSERT INTO tipos_bien (nombre) values (?)");
	        $sql_tipo_bien->bind_param("s", $tipo);
	        if(!$resultado_tipo_bien = $sql_tipo_bien->execute()) {
		        echo "Sorry, website troubles. \n <br />";
		        /*echo "Errno: " . $mysqli->errno . "\n <br />";
		        echo "Error: " . $mysqli->error . "\n <br />";*/
		        exit;
		    }
		    $tipo_bien_id = $mysqli->insert_id;
	    }
	    $sql_tipo_bien->close();

	    /*
	    	Insertamos el bien en nuestra base de datos
	    */

		$sql = $mysqli->prepare("INSERT INTO bienes (ciudad_id, tipo_bien_id, direccion, codigo_postal, telefono, precio) values (?, ?, ?, ?, ?, ?)");
        $sql->bind_param("iissss", $ciudad_id, $tipo_bien_id, $direccion, $codigo_postal, $telefono, $precio);
        if(!$result = $sql->execute()) {
	        echo "Sorry, website troubles. \n <br />";
	        /*echo "Errno: " . $mysqli->errno . "\n <br />";
	        echo "Error: " . $mysqli->error . "\n <br />";*/
	        exit;
	    }

        $sql->close();
		CloseCon($mysqli);
		return $result;
	}