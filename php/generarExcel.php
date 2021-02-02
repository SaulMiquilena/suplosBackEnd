<?php
	if (isset($_POST['parametros'])){
		$arreglo = $_POST['parametros'];			
		$arreglo = json_decode($arreglo, true);

		header("Pragma: public");
		header('Content-Type: application/vnd.ms-excel; charset=utf-8"');
		header("Content-Disposition: attachement: filename=reporteMisBienes.xlsx");
		header('Cache-Control: max-age=0');

?>
		<h1>Reporte de Mis Bienes</h1>

		<table>
		  	<tr>
			    <th>Ciudad</th>
			    <th>C&oacute;digo Postal</th>
			    <th>Direcci&oacute;n</th>
			    <th>Precio</th>
			    <th>Tel&eacute;fono</th>
			    <th>Tipo</th>
		  	</tr>		  	
	    	<?php
	    		for ($i=0; $i < count($arreglo); $i++) { 
	    			echo "<tr>";
	    			echo "<td>".$arreglo[$i]['ciudad']."</td>";
	    			echo "<td>".$arreglo[$i]['codigo_postal']."</td>";
	    			echo "<td>".$arreglo[$i]['direccion']."</td>";
	    			echo "<td>".$arreglo[$i]['precio']."</td>";
	    			echo "<td>".$arreglo[$i]['telefono']."</td>";
	    			echo "<td>".$arreglo[$i]['tipo']."</td>";
	    			echo "</tr>";
	    		}
	    	?>		  	
		</table>

<?php
	}

?>