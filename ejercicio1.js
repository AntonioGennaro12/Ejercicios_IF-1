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

const miLista           = document.querySelector ("#mi-lista")

const USUARIO_NOMBRE_REGISTRADO        = ["Antonio", "Juan", "Pedro", "Carlos" ];
const USUARIO_CONTRASENIA_REGISTRADO   = ["clave55", "gato", "pardo", "abcd"];

function impUsuario (nombre){
    miParrafo.style.color = "green";
    miParrafo.textContent = "Bienvenido a su Cuenta : " + nombre +"";
}

function tomaInfo ()  {
    let usuarioNombreIngresado      = inpUsuario.value ;
    let usuarioCOntraseniaIngresado = impContrasenia.value ;
    let encontrado = false;

    for (let index = 0; index < USUARIO_NOMBRE_REGISTRADO.length; index++) {
        const nombre = USUARIO_NOMBRE_REGISTRADO[index];
        const contrasenia = USUARIO_CONTRASENIA_REGISTRADO [index];

        if ((usuarioNombreIngresado == nombre) && (usuarioCOntraseniaIngresado == contrasenia)) {
            impUsuario (usuarioNombreIngresado); 
            encontrado  = true;      
        }
    }
    if (!encontrado) {
        miParrafo.style.color = "red";
        miParrafo.textContent =  "Usuario y/o Contrasenia incorrectos!!"; 
    }
}

function mostrarLista() {
    miLista.innerHTML= "";
    for (let index = 0; index < USUARIO_NOMBRE_REGISTRADO.length; index++) {
        const nombre = USUARIO_NOMBRE_REGISTRADO[index];
        const contrasenia = USUARIO_CONTRASENIA_REGISTRADO [index];
        miLista.innerHTML +=  `
            <li> Nombre: ${nombre}  - - -> Contrasenia: ${contrasenia}</li>
        `;
        
    }

}