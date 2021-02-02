<?php
	include 'conn.php';

	if (isset($_POST['bien_id'])){
		$bien_id = $_POST['bien_id'];
		
		$mysqli = Connection();

		if ($mysqli->connect_errno) {
		    echo "Problemas Conectando a Base de Datos";
		    /*echo "Errno: " . $mysqli->connect_errno . "\n <br />";
		    echo "Error: " . $mysqli->connect_error . "\n <br />";*/  
		    exit;
		}	

		$deshabilitado = 0;
		$sql = $mysqli->prepare("UPDATE bienes SET habilitado = ? WHERE id = ?");
        $sql->bind_param("si", $deshabilitado, $bien_id);
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