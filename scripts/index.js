// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

// ACTIVIDAD

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.
// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.
// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."
// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.
// 2) Que la contraseña tenga al menos 5 caracteres.
// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"
// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.

window.addEventListener("load", () => {
  console.log("La página se ha cargado correctamente.");
  let correo = document.getElementById("email-input");
  let contraseña = document.getElementById("password-input");
  let formulario = document.querySelector("form");
  let mensaje = document.createElement("div");
  let mensaje2 = document.createElement("div");
  let mensaje3 = document.createElement("div");
  let iniciarSesion = document.querySelector("h1");
  mensaje.textContent = "Inciando sesión...";
  mensaje.style.position = "fixed"; // Fija la posición del mensaje
  mensaje.style.top = "65%"; // Lo coloca en la mitad vertical de la ventana
  mensaje.style.left = "50%"; // Lo coloca en la mitad horizontal de la ventana
  mensaje.style.transform = "translate(-50%, -50%)"; // Centra el mensaje
  mensaje.style.color = "red";
  mensaje2.textContent = "Inicio de sesión exitoso!";
  mensaje2.style.position = "fixed"; // Fija la posición del mensaje
  mensaje2.style.top = "65%"; // Lo coloca en la mitad vertical de la ventana
  mensaje2.style.left = "50%"; // Lo coloca en la mitad horizontal de la ventana
  mensaje2.style.transform = "translate(-50%, -50%)"; // Centra el mensaje
  mensaje2.style.color = "green";
  mensaje3.innerHTML = "Bienvenido al sitio 😀";
  mensaje3.style.position = "fixed"; // Fija la posición del mensaje
  mensaje3.style.top = "50%"; // Lo coloca en la mitad vertical de la ventana
  mensaje3.style.left = "50%"; // Lo coloca en la mitad horizontal de la ventana
  mensaje3.style.transform = "translate(-50%, -50%)"; // Centra el mensaje
  mensaje3.style.color = "blue";
  mensaje3.style.fontSize = "30px";
  mensaje3.style.backgroundColor = "pink";

  correo.addEventListener("change", (e)=>{
    console.log("Estoy cambiando el email");
    let correoelectronico = correo.value.trim();
    let validarCorreoElectronico = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (validarCorreoElectronico.test(correoelectronico)) {
      console.log("correo electrónico válido");

      contraseña.addEventListener("change", ()=> {
        console.log("Estoy cambiando la contraseña");
        let contraseñaValor = contraseña.value.trim();
    
        if (contraseñaValor.length < 5) {
          alert("La contraseña debe tener al menos 5 caracteres");
          
        } else {
          console.log("Contraseña ingresada correctamente")
        }
      });
            
    } else {
      alert("correo electrónico no válido");
    }
  });

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Procesando inicio de sesión...");
    document.body.appendChild(mensaje);
    let correoelectronico = correo.value.trim();
    let contraseñaValor = contraseña.value.trim();

    // Itera sobre la base de datos para encontrar coincidencias
    let usuarioEncontrado = baseDeDatos.usuarios.find(usuario => usuario.email === correoelectronico && usuario.password === contraseñaValor);

    // Simulando una demora de 3 segundos
    setTimeout(() => {
      document.body.removeChild(mensaje);
      if (usuarioEncontrado) {
        console.log("Inicio de sesión exitoso!");
        document.body.appendChild(mensaje2);
        
        
        
      } else {
        alert("Alguno de los datos ingresados son incorrectos");
      }
    }, 3000); // 3000 milisegundos = 3 segundos

    // Simulando una demora adicional de 1 segundo (total de 4 segundos)
  setTimeout(() => {
    if (usuarioEncontrado) {
      document.body.appendChild(mensaje3);
      document.body.removeChild(mensaje2);
      formulario.style.display = "none"; // Ocultar el formulario después de 4 segundos
      iniciarSesion.style.display = "none";
    }
  }, 4000); // 4000 milisegundos = 4 segundos
  });
});








/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */
