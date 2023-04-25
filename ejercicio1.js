/*
Verificar nombre de usurio y contraseña
contra usuario registrado
informar el resultado del intento de login 
Se agrega otra cuenta registrada y se verifica
contra las 2, solo un usuario por vez.
Se agrega uso de elementos "Label" , "Input" y "button"
*/
const inpUsuario        = document.querySelector("#nombre-usuario")
const impContrasenia    = document.querySelector("#nombre-contrasenia")
const miParrafo         = document.querySelector("#mi-parrafo")

const USUARIO1_NOMBRE_REGISTRADO        = "Antonio12";
const USUARIO2_NOMBRE_REGISTRADO        = "JuanPedro";
const USUARIO1_CONTRASENIA_REGISTRADO   = "clave055"
const USUARIO2_CONTRASENIA_REGISTRADO   = "gatopardo"

function impUsuario (nombre){
    miParrafo.textContent = "Bienvenido a su Cuenta Usuario: " + nombre +"";
}

function tomaInfo ()  {
    let usuarioNombreIngresado      = inpUsuario.value ;
    let usuarioCOntraseniaIngresado = impContrasenia.value ;
    
    if ((usuarioNombreIngresado == USUARIO1_NOMBRE_REGISTRADO) && 
                (usuarioCOntraseniaIngresado == USUARIO1_CONTRASENIA_REGISTRADO)) {
        impUsuario (usuarioNombreIngresado);
    }
    else if ((usuarioNombreIngresado == USUARIO2_NOMBRE_REGISTRADO) && 
                (usuarioCOntraseniaIngresado == USUARIO2_CONTRASENIA_REGISTRADO)) {
        impUsuario (usuarioNombreIngresado); 
    }
    else {
        miParrafo.textContent =  "Nombre de Usuario y/o Contrsenia incorrectos!!"; 
    }
}