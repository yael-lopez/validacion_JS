/*Dentro de este archivo crearemos la funcion para validar el formulario, la validacion que tendra es que no aceptara 
campos vacios*/

//Creacion de una funcion para validar campos vacios
function validarForm() {
	/*Creamos variables para tener acceso al valor de los inputs, en este caso estamos accediendo a las variables
	a traves de su ID*/
	let nombre = document.getElementById("nombre").value;
	let paterno = document.getElementById("paterno").value;
	let materno = document.getElementById("materno").value;

	//Creamos la condicion para saber si los campos estan vacios o no
	if(nombre == '' || paterno == '' || materno == ''){
		/*Hacemos llamado a la alerta, la cual recibe 3 parametros 
		1. El titulo que se le mostrar al cliente
		2. Una pequeña descripcion, la cual ayudara a saber porque ocurrio el error
		3. Icono que se le mostrara, en este ultimo parametro solo puedes poner 3 formas
		  -success -> Empleado cuando todo sale bien
		  -warning -> Empleado cuando se desea mostrar una advertencia
		  -error -> Empleado cuando el cliente omite algo o hizo algo indevido*/
		Swal.fire("¡Error!", "¡Todos los campos son obligatorios!", "error");
		//Retornamos falso para que el codigo no avance, es decir, no haga mas acciones
		return false;
	}

	/*En caso de que se haya cumplido todo aqui se pondra el codigo para hacer una inserccion a una 
	base de datos.
	Nota: Puede variar */

	//Se retorna falso para que por si existen mas funciones no se ejecuten otras :D
	return false;
}


/* ---------------------------------------------------------------------------- */
//En caso de que gustes validar campo por campo la funcion quedaria asi
//Si ocuparas esta funcion recuerda llamarla en el HTML :D
function validarCampo() {
	let nombre = document.getElementById("nombre").value;
	let paterno = document.getElementById("paterno").value;
	let materno = document.getElementById("materno").value;
	if(nombre == ''){
		Swal.fire("¡Error!", "¡El campo nombre es obligatorio!", "error");
		return false;
	}else if(paterno == ''){
		Swal.fire("¡Error!", "¡El campo apellido paterno es obligatorio!", "error");
		return false;
	}else if(materno == ''){
		Swal.fire("¡Error!", "¡El campo apellido materno es obligatorio!", "error");
		return false;
	}
	return false;
}