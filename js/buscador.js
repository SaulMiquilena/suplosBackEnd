/* 
	Declaración de Listados a cargar (Ciudades y Tipos) 
*/
const miListaCiudades = document.getElementById("selectCiudad");
const miListaTipos    = document.getElementById("selectTipo");

/* 
	Declaración de Listados a cargar (Ciudades y Tipos) en pestaña de Reportes 
*/
const miListaCiudadesReporte = document.getElementById("selectCiudadReporte");
const miListaTiposReporte    = document.getElementById("selectTipoReporte");

/* 
	Fuente de datos de Bienes (JSON) 
*/
const miFuente = new Request('data-1.json');

/* 
	Carga arreglo ordenado de elementos en un listado 
	arreglo: Es el Array ordenado
	lista: Elemento lista donde serán cargados los elementos de arrglo ordenado
*/
function cargaListados(arreglo, lista){
	for(const elemento of arreglo){
		let opcionElemento = document.createElement('option');
	    
	    opcionElemento.appendChild(
	        document.createElement('strong')
	    ).textContent = elemento;

	    opcionElemento.value = elemento;

	    lista.appendChild(opcionElemento);
	}
}

/*
	Cargamos el listado de resultados según el listado recibido.
*/
function cargaResultados(arreglo, tabla){
	const imagenElemento = '<img src="./img/home.jpg" alt="Hogar" width="330" style="float: left;">';
	const cantidadResultados = Object.keys(arreglo).length;

	tabla.innerHTML = "";

	let titulo = document.createElement('div');
	titulo.setAttribute("class", "tituloContenido card");
	titulo.setAttribute("style", "justify-content: center;");

	titulo.innerHTML = "<h5>Resultados de la búsqueda: " + cantidadResultados + "</h5><div class='divider'></div>";

	tabla.appendChild(titulo);
	
	for(const elemento of arreglo){
		let divElemento = document.createElement('div');

		let divRowDivTextoElemento = document.createElement('div');

		let ciudad = elemento.Ciudad;
		let textoCiudad = `<b>Ciudad: </b> ${ciudad}`;
		let objetoTextoCiudad = document.createElement('p');
		objetoTextoCiudad.innerHTML = textoCiudad;

		let codigo_postal = elemento.Codigo_Postal;
		let textoCodigoPostal = `<b>C&oacute;digo Postal: </b> ${codigo_postal}`;
		let objetoTextoCodigoPostal = document.createElement('p');
		objetoTextoCodigoPostal.innerHTML = textoCodigoPostal;

		let direccion = elemento.Direccion;
		let textoDireccion = `<b>Direcci&oacute;n: </b> ${direccion}`;
		let objetoTextoDireccion = document.createElement('p');
		objetoTextoDireccion.innerHTML = textoDireccion;

		let precio = elemento.Precio;
		let textoPrecio = `<b>Precio: </b> ${precio}`;
		let objetoTextoPrecio = document.createElement('p');
		objetoTextoPrecio.innerHTML = textoPrecio;

		let telefono = elemento.Telefono;
		let textoTelefono = `<b>Tel&eacute;fono: </b> ${telefono}`;
		let objetoTextoTelefono = document.createElement('p');
		objetoTextoTelefono.innerHTML = textoTelefono;

		let tipo = elemento.Tipo;
		let textoTipo = `<b>Tipo: </b> ${tipo}`;
		let objetoTextoTipo = document.createElement('p');
		objetoTextoTipo.innerHTML = textoTipo;

		divRowDivTextoElemento.appendChild(objetoTextoCiudad);
		divRowDivTextoElemento.appendChild(objetoTextoCodigoPostal);
		divRowDivTextoElemento.appendChild(objetoTextoDireccion);
		divRowDivTextoElemento.appendChild(objetoTextoPrecio);
		divRowDivTextoElemento.appendChild(objetoTextoTelefono);
		divRowDivTextoElemento.appendChild(objetoTextoTipo);

		let bienId = elemento.Id;
		let objetoBotonGuardar = document.createElement('div');		
		objetoBotonGuardar.innerHTML = `<div class="botonField">
            								<button class="btn" onclick="guardarBien(${bienId})" id="guardarButton" style="float:left;">Guardar</button>
          								</div>`;
        divRowDivTextoElemento.appendChild(objetoBotonGuardar);

		divRowDivTextoElemento.setAttribute("style", "float: left; padding-left: 1rem;");

		divElemento.innerHTML = imagenElemento;
		divElemento.appendChild(divRowDivTextoElemento);
		divElemento.setAttribute("style", "width: 100%;");
		divElemento.className = "tituloContenido card";

		tabla.appendChild(divElemento);
	}
}

/*
	Cargamos el listado de resultados según el listado recibido.
*/
function cargaMisResultados(arreglo, tabla){
	const imagenElemento = '<img src="./img/home.jpg" alt="Hogar" width="330" style="float: left;">';
	const cantidadResultados = Object.keys(arreglo).length;
	
	tabla.innerHTML = "";

	let titulo = document.createElement('div');
	titulo.setAttribute("class", "tituloContenido card");
	titulo.setAttribute("style", "justify-content: center;");

	titulo.innerHTML = "<h5>Bienes guardados: " + cantidadResultados + "</h5><div class='divider'></div>";

	tabla.appendChild(titulo);
	
	if(cantidadResultados > 0){
		for(const elemento of arreglo){
			let divElemento = document.createElement('div');

			let divRowDivTextoElemento = document.createElement('div');
			let ciudad = elemento.ciudad;
			let textoCiudad = `<b>Ciudad: </b> ${ciudad}`;
			let objetoTextoCiudad = document.createElement('p');
			objetoTextoCiudad.innerHTML = textoCiudad;

			let codigo_postal = elemento.codigo_postal;
			let textoCodigoPostal = `<b>C&oacute;digo Postal: </b> ${codigo_postal}`;
			let objetoTextoCodigoPostal = document.createElement('p');
			objetoTextoCodigoPostal.innerHTML = textoCodigoPostal;

			let direccion = elemento.direccion;
			let textoDireccion = `<b>Direcci&oacute;n: </b> ${direccion}`;
			let objetoTextoDireccion = document.createElement('p');
			objetoTextoDireccion.innerHTML = textoDireccion;

			let precio = elemento.precio;
			let textoPrecio = `<b>Precio: </b> ${precio}`;
			let objetoTextoPrecio = document.createElement('p');
			objetoTextoPrecio.innerHTML = textoPrecio;

			let telefono = elemento.telefono;
			let textoTelefono = `<b>Tel&eacute;fono: </b> ${telefono}`;
			let objetoTextoTelefono = document.createElement('p');
			objetoTextoTelefono.innerHTML = textoTelefono;

			let tipo = elemento.tipo;
			let textoTipo = `<b>Tipo: </b> ${tipo}`;
			let objetoTextoTipo = document.createElement('p');
			objetoTextoTipo.innerHTML = textoTipo;

			divRowDivTextoElemento.appendChild(objetoTextoCiudad);
			divRowDivTextoElemento.appendChild(objetoTextoCodigoPostal);
			divRowDivTextoElemento.appendChild(objetoTextoDireccion);
			divRowDivTextoElemento.appendChild(objetoTextoPrecio);
			divRowDivTextoElemento.appendChild(objetoTextoTelefono);
			divRowDivTextoElemento.appendChild(objetoTextoTipo);

			let bienId = elemento.id;
			let objetoBotonEliminar = document.createElement('div');		
			objetoBotonEliminar.innerHTML = `<div class="botonField">
	            								<button class="btn" onclick="removerBien(${bienId})" id="removerButton" style="float:left;">Eliminar</button>
	          								</div>`;
	        divRowDivTextoElemento.appendChild(objetoBotonEliminar);

			divRowDivTextoElemento.setAttribute("style", "float: left; padding-left: 1rem;");

			divElemento.innerHTML = imagenElemento;
			divElemento.appendChild(divRowDivTextoElemento);
			divElemento.setAttribute("style", "width: 100%;");
			divElemento.className = "tituloContenido card";

			tabla.appendChild(divElemento);
		}
	}
}

/*
	Remueve el simbolo "$" para realizar el filtrado por comparación de precios de los bienes.
*/
function removerSimbolo(precio){
	let valor = precio.split("$");
	return valor[1];
}

/*
	Filtrado del arreglo recibido de bienes
*/
function filtradoResultados(ciudad,tipo,precios){
	fetch(miFuente)
		.then(respuesta => respuesta.json())
		.then(data => {
			let resultados = "";
			console.log(data);
			if(ciudad != "" && tipo != ""){
				resultados = data.filter(function (bien){
					let precio = removerSimbolo(bien.Precio);
			  		return bien.Ciudad == ciudad &&	
			  			   bien.Tipo == tipo &&
			  			   precio <= precios[1] &&
			  			   precio >= precios[0];
				});	
			}
			else if(ciudad != "" && tipo == ""){
				resultados = data.filter(function (bien){
					let precio = removerSimbolo(bien.Precio);
			  		return bien.Ciudad == ciudad &&
			  			   precio <= precios[1] &&
			  			   precio >= precios[0];
				});	
			}
			else if(ciudad == "" && tipo != ""){
				resultados = data.filter(function (bien){
					let precio = removerSimbolo(bien.Precio);
			  		return bien.Tipo == tipo &&
			  			   precio <= precios[1] &&
			  			   precio >= precios[0];
				});	
			}
			else {
				resultados = data;
			}
	
			let tabla = document.getElementById('divResultadosBusqueda1');			
			cargaResultados(resultados, tabla);
		});
}


/*
	Usamos la fuente JSON para obtener los datos de los bienes.
	Establecemos en arreglos separados Ciudades y Tipos.
	Filtradmos Ciudades y Tipos repetidos.
	Ordenamos las Ciudades y Tipos alfabétiamente.
	Cargamos los listados correspondientes.
*/

function cargaJson(){
	fetch(miFuente)
		.then(respuesta => respuesta.json())
		.then(data => {
			const ciudadesSinFiltrar = [];
			const tiposSinFiltrar = [];
			
			for (const bien of data){
				ciudadesSinFiltrar.push(bien.Ciudad);
				tiposSinFiltrar.push(bien.Tipo);		
			}

			let ciudadesFiltradas = Array.from(new Set(ciudadesSinFiltrar));
			let ciudadesOrdenadas = ciudadesFiltradas.sort();
			cargaListados(ciudadesOrdenadas, miListaCiudades);

			let tiposFiltradas = Array.from(new Set(tiposSinFiltrar));	
			let tiposOrdenadas = tiposFiltradas.sort();
			cargaListados(tiposOrdenadas, miListaTipos);

			let tabla = document.getElementById('divResultadosBusqueda1');
			
			cargaResultados(data, tabla);
		});
}

/* 
	Carga Inicial de todos los resultados.
	Se muestran en el primer tab que pertenece a "Bienes Disponibles"
*/
cargaJson();


/*
	Evento de Búsqueda
	Parametros Ciudad, Tipo y Rango de Precio
*/

document.getElementById("submitButton").addEventListener("click", function(e){
	e.preventDefault();

	let elementoCiudad = document.getElementById("selectCiudad");
	let ciudad = elementoCiudad.options[elementoCiudad.selectedIndex].value;

	let elementoTipo = document.getElementById("selectTipo");
	let tipo = elementoTipo.options[elementoTipo.selectedIndex].value;

	let rangoPrecio = document.getElementById("rangoPrecio").value;
	let precios = rangoPrecio.split(";");

	filtradoResultados(ciudad,tipo,precios);
});

/*
	Busqueda dentro del JSON fuente de un bien en especifico por su ID
*/

function encontrarBienJSON(bien_id){
	return fetch(miFuente)
		.then(respuesta => respuesta.json())
		.then(data => {
			return data.find( bien => bien.Id === bien_id );
		});
}

/* 
	Guardamos el Bien en la base de Datos
*/

function guardarBien(bien_id){
	let url = 'php/guardarBienes.php';

	let bien = encontrarBienJSON(bien_id);
	
	bien.then(resultado => {
		let form = new FormData();
		form.append('ciudad', resultado.Ciudad);
		form.append('tipo', resultado.Tipo);
		form.append('direccion', resultado.Direccion);
		form.append('codigo_postal', resultado.Codigo_Postal);
		form.append('telefono', resultado.Telefono);
		form.append('precio', resultado.Precio);

		fetch(url, {
		  	method: 'POST',
		  	body: form,
		})
		.catch(error => console.error('Error:', error))
		.then(respuesta => {
			console.log("Guardado Exitoso!");
		});

	});
}

/* 
	Eliminamos/deshabilitamos un Bien
*/

function removerBien(bien_id){
	let url = 'php/removerBienes.php';
		
	let form = new FormData();
	form.append('bien_id', bien_id);
	
	fetch(url, {
	  	method: 'POST',
	  	body: form,
	})
	.catch(error => console.error('Error:', error))
	.then(respuesta => {
		consultarMisBienes();
		console.log("Eliminación Exitosa!");
	});
}

/*
	Consulta de los Bienes guardados en la base de datos
*/

function consultarMisBienes(){
	let url = 'php/consultarBienes.php';

	fetch(url, {
	  	method: 'POST',
	})
	.catch(error => console.error('Error:', error))
	.then(respuesta => respuesta.json())
	.then(respuesta => {
		let tabla = document.getElementById('divResultadosBusqueda2');
		cargaMisResultados(respuesta, tabla);
	});
}

/*
	Consultamos la Base de datos para obtener un JSON con los datos de los bienes guardados.
	Establecemos en arreglos separados Ciudades y Tipos.
	Filtradmos Ciudades y Tipos repetidos.
	Ordenamos las Ciudades y Tipos alfabétiamente.
	Cargamos los listados correspondientes.
*/

function cargaJsonReportes(){
	let url = 'php/consultarBienes.php';

	fetch(url, {
	  	method: 'POST',
	})
	.catch(error => console.error('Error:', error))
	.then(respuesta => respuesta.json())
	.then(data => {
		if(Object.keys(data).length > 0){
			const ciudadesSinFiltrar = [];
			const tiposSinFiltrar = [];
			
			for (const bien of data){
				ciudadesSinFiltrar.push(bien.ciudad);
				tiposSinFiltrar.push(bien.tipo);		
			}

			miListaCiudadesReporte.innerHTML = '<option value="">Elige una ciudad</option>';
			miListaTiposReporte.innerHTML = '<option value="">Elige un tipo</option>';

			let ciudadesFiltradas = Array.from(new Set(ciudadesSinFiltrar));
			let ciudadesOrdenadas = ciudadesFiltradas.sort();
			cargaListados(ciudadesOrdenadas, miListaCiudadesReporte);

			let tiposFiltradas = Array.from(new Set(tiposSinFiltrar));	
			let tiposOrdenadas = tiposFiltradas.sort();
			cargaListados(tiposOrdenadas, miListaTiposReporte);	
		} else {
			console.log("No posee Bienes guardados.");
		}		
	});
}


/*
	Generación del archivo Excel
	Consultamos los bienes guardados en la base de datos
	luego gereamos una tabla html, colocamos headers que especifiquen que es un archivo excel
	Exportamos el archivo

	NOTA: Puede que el archivo inque que pueda estar dañado, pero es solo una advertencia.
	Al decirle a Excel que continue y abra el archivo, se podrá ver la tabla con los resultados.
*/
function generarExcel(ciudad, tipo){
	let url = 'php/consultarBienesReporte.php';

	let form = new FormData();
	form.append("ciudad", ciudad);
	form.append("tipo", tipo);

	fetch(url, {
	  	method: 'POST',
	  	body: form
	})
	.catch(error => console.error('Error:', error))
	.then(respuesta => respuesta.text())
	.then(data => {
		let parametros = new FormData();
		parametros.append("parametros", data);
		
		fetch('php/generarExcel.php', {
			method: 'POST',
			body: parametros
		})
		.catch(error => console.error('Error:', error))
		.then(respuesta => respuesta.blob())
 		.then(blob => URL.createObjectURL(blob))
 		.then(uril => {
		 	var link = document.createElement("a");
		 	link.href = uril;
		 	link.download = "reporteMisBienes.xlsx";
		 	document.body.appendChild(link);
		 	link.click();
		 	document.body.removeChild(link);
		});
	});
}

/*
	Evento de Generar Excel
	Parametros Ciudad y Tipo
*/

document.getElementById("excelButton").addEventListener("click", function(e){
	e.preventDefault();

	let elementoCiudad = document.getElementById("selectCiudadReporte");
	let ciudad = elementoCiudad.options[elementoCiudad.selectedIndex].value;

	let elementoTipo = document.getElementById("selectTipoReporte");
	let tipo = elementoTipo.options[elementoTipo.selectedIndex].value;

	generarExcel(ciudad,tipo);
});