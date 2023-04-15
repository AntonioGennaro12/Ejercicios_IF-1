/*
Verificar nombre de usurio y contraseña
contra usuario registrado
informar el resultado del intento de login 
Se agrega otra cuenta registrada y se verifica
contra las 2, solo un usuario por vez.
*/

const USUARIO1_NOMBRE_REGISTRADO = "pepe";
const USUARIO2_NOMBRE_REGISTRADO = "jose";
const USUARIO1_CONTRASENIA_REGISTRADO = "asd123"
const USUARIO2_CONTRASENIA_REGISTRADO = "qwe456"

let usuarioNombreIngresado = prompt("Ingrese Nombre de Ususario");
let usuarioCOntraseniaIngresado = prompt ("Ingrese su contraseña");

if ((usuarioNombreIngresado == USUARIO1_NOMBRE_REGISTRADO) && (usuarioCOntraseniaIngresado == USUARIO1_CONTRASENIA_REGISTRADO)) {
    document.write ('Bienvenido a su Cuenta Sr. "' + usuarioNombreIngresado +'"');
}
else if ((usuarioNombreIngresado == USUARIO2_NOMBRE_REGISTRADO) && (usuarioCOntraseniaIngresado == USUARIO2_CONTRASENIA_REGISTRADO)) {
    document.write ('Bienvenido a su Cuenta Sr. "' + usuarioNombreIngresado +'"'); 
}
else {
    document.write ("Nombre de Usuario y/o Contrseña incorrectos!!" ); 
}