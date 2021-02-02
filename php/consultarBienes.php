<?php
	include 'conn.php';
		
	$mysqli = Connection();

	if ($mysqli->connect_errno) {
	    echo "Problemas Conectando a Base de Datos";
	    /*echo "Errno: " . $mysqli->connect_errno . "\n <br />";
	    echo "Error: " . $mysqli->connect_error . "\n <br />";*/  
	    exit;
	}
	$habilitado = 1;
	$sql = $mysqli->prepare("SELECT 
								b.*, 
								c.nombre as ciudad, 
								t.nombre as tipo 
							FROM 
								bienes b, 
								ciudades c, 
								tipos_bien t 
							WHERE 
								c.id = b.ciudad_id 
								AND t.id = b.tipo_bien_id 
								AND b.habilitado = ?");
	$sql->bind_param("i", $habilitado);
	if(!$sql->execute()) {
        echo "Sorry, website troubles. \n <br />";
        /*echo "Errno: " . $mysqli->errno . "\n <br />";
        echo "Error: " . $mysqli->error . "\n <br />";*/
        exit;
    }

    $resultado = $sql->get_result();  

    if ($resultado->num_rows > 0) {
    	while($fila = $resultado->fetch_array(MYSQLI_ASSOC)) {
	            $objetoBien[] = $fila;
	    }
	    echo json_encode($objetoBien);
    } else {
    	echo json_encode (new stdClass);
    }

    $sql->close();
	CloseCon($mysqli);