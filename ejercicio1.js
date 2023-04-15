/*
Verificar nombre de usurio y contrasea
contra usuario registrado
informar el resultado del login 
*/

const USUARIO_NOMBRE_REGISTRADO = "pepe";
const USUARIO_CONTRASENIA_REGISTRADO = "asd123"

let usuarioNombreIngresado = prompt("Ingrese Nombre de Ususario");
let usuarioCOntraseniaIngresado = prompt ("Ingrese su contraseña");

if ((usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO) && (usuarioCOntraseniaIngresado == USUARIO_CONTRASENIA_REGISTRADO)) {
    document.write ('Bienvenido a su Cuenta Sr. "' + usuarioNombreIngresado +'"');
}
else {
    document.write ("Nombre de Usuario y/o Contrseña incorrectos!!" ); 
}