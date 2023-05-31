// presentar 
let body = document.getElementById('body')
body.innerHTML = `
  <header>
        <div id="logoFoto">
            <img src="./imagenes/logo(TuFuturo).png">
        </div>
        <nav class='menu'>
            <input type='checkbox' id='responsive-menu' onclick='updatemenu()'><label></label>
            <ul>
              <li><a href='#logoFoto'>Inicio</a></li>
              <li><a class='dropdown-arrow' href='#Servicios'>Servicios</a>
                <ul class='sub-menus'>
                  <li><a href='#ataudes'>Ataudes</a></li>
                  <li><a href='http://'>Flores</a></li> 
                  <li><a href='http://'>Urna</a></li>
                </ul>
              </li>
              <li><a href='http://'>Planes</a></li>
              <li><a href='http://'>Contacto</a></li>
            </ul>
          </nav>
        </nav>
    </header>
    <main>
        <section id="inici">
            <div class="texto">
                <p class="mediano">A tu alcance</p>
                <p class="grande">TU MEJOR DESCANSO</p>
                <p class="pequeño">Quieres un descanso eterno y seguro? Ven a tu futuro</p>
                <p class="pequeño">el lugar donde tu seres queridos te despediran por ultima vez</p>
                <div id="boton_descubrelo_center">
                    <button id="boton_descubrelo"><a href="#Servicios">DESCÚBRELO</a></button>
                </div>
            </div>
            <div id="flecha_container">
                <div class="flechita">&darr;</div>
            </div>
        </section>
        <section id="Servicios">
            <div class="container">
                <h2 class="titulo">SERVICIOS</h2>
            </div>
            <div class="container">
                <nav class="menu" id="menu_1">
                    <ul>
                      <li><a href='#ataud'>Ataudes</a></li>
                      <li><a href='#flores'>Flores</a></li>
                      <li><a href='http://'>urnas</a></li>
                    </ul>
                </nav>
            </div>
            <div class="container">
                <h2 class="titulo" id="ataud">Ataudes</h2>
            </div>
            <div id="ataudes"></div>
            <div class="container">
                <h2 class="titulo" id="flor">Flores</h2>
            </div>
            <div id="flores"></div>
            <div class="container">
                <h2 class="titulo" id="urna">Urnas</h2>
            </div>
            <div id="urnas"></div>
        </section>
        <section id="Planes">
            <div class="container">
                <h2 class="titulo">PLANES</h2>
            </div>
            <div class="texto">
                <p>En esta sección encontraras nuestros planes para tus seres mas queridos.</p>
            </div>
            <div id="planes"></div>
        </section>
        <section id="contacto-container">
            <h3>Contacto</h3>
            <div id="contacto">
                <form id="formulario">
                    <div class="form-group">
                        <label class="texto" for="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre"  placeholder="nombre" required>
                    </div>
                    <div class="form-group">
                        <label class="texto" for="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido" placeholder="apellido" required>
                    </div>
                    <div class="form-group">
                        <label class="texto" for="correo">Correo electrónico:</label>
                        <input type="text" id="correo" name="correo" placeholder="Correo Electrónico" required>
                    </div>
                    <div class="form-group">
                        <label class="texto" for="correo">Comentanos</label>
                        <input type="text" id="cosas" name="correo" placeholder="Lo que quieras" required>
                    </div>
                    <div class="form-group">
                        <input type="submit" value="Enviar">
                    </div>
                </form>
            </div>
        </section>
    </main>     
`;

ataudes();
flores();
urnas();
Servicios();
function ataudes() {
    const url = "https://tu-futuro.glitch.me/ataudes";

    fetch(url)
        .then(response => response.json())
        .then (data => {
            console.log(data);
            for (let i = 0; i < 20; i++){
                mostrarAtaudes(data[i]);
            }
        })

}

function mostrarAtaudes(ataudes) {
    let ataudesContainer = document.getElementById('ataudes');
    console.log('hola');
    ataudesContainer.innerHTML += `
        <div id="objeto${ataudes.id}" class="casilla">
            <img height="300px" width="300px" src="${ataudes.img}"/>
            <p class="texto">${ataudes.nombre}</p>
            <p class="texto">${ataudes.precio}</p>
        </div>
    `;
}

function flores() {
    const url = "https://tu-futuro.glitch.me/flores";

    fetch(url)
        .then(response => response.json()) 
        .then (data => {
            console.log(data);
            for (let i = 0; i < 20; i++){
                mostrarFlores(data[i]);
            }
        })
}

function mostrarFlores(flores) {
    let floresContainer = document.getElementById('flores');
    floresContainer.innerHTML += `
        <div id="objeto${flores.id}" class="casilla">
            <img height="300px" width="300px" src="${flores.img}"/>
            <p class="texto">${flores.nombre}</p>
            <p class="texto">${flores.precio}</p>
        </div>
    `;
}

function urnas() {
    const url = "https://tu-futuro.glitch.me/urnas";

    fetch(url)
        .then(response => response.json()) 
        .then (data => {
            console.log(data);
            for (let i = 0; i < 20; i++){
                mostrarUrnas(data[i]);
            }
        })
}

function mostrarUrnas(urnas) {
    let urnasContainer = document.getElementById('urnas');
    urnasContainer.innerHTML += `
        <div id="objeto${urnas.id}" class="casilla">
            <img height="300px" width="300px" src="${urnas.img}"/>
            <p class="texto">${urnas.nombre}</p>
            <p class="texto">${urnas.precio}</p>
        </div>
    `;
}

function Servicios() {
    const url = "https://tu-futuro.glitch.me/servicios";
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (let i = 0; i < 10; i++) {
          mostrarServicios(data[i]);
        }
      });
}
  
function mostrarServicios(servicios) {
    let serviciosContainer = document.getElementById("planes");
    serviciosContainer.innerHTML += `
          <div id="objeto${servicios.id}" class="casilla">
              <img height="300px" width="300px" src="${servicios.img}"/>
              <p class="texto">${servicios.nombre}</p>
              <p class="texto">${servicios.precio}</p>
          </div>
      `;
}



// Menu
function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
        document.getElementById('menu').style.borderBottomRightRadius = '0'; 
        document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
        document.getElementById('menu').style.borderRadius = '9px';
    }
}   

let login1 = document.getElementById("formulario");

login1.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    
    // Obtener los valores del formulario
    let nombre = login1.nombre.value;
    let apellido = login1.apellido.value;
    let correo = login1.correo.value;
    let cosas = login1.cosas.value;
    console.log(nombre);
    
    // Crear un objeto con los datos del formulario
    let data = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        cosas: cosas
    };
    
    // Realizar la solicitud POST utilizando fetch
    fetch('https://tu-futuro.glitch.me/contactos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      // Comprobar el estado de la respuesta
      if (response.ok) {
        // La solicitud fue exitosa
        console.log('Registro exitoso');
        // Aquí puedes realizar alguna acción adicional, como redirigir al usuario a otra página
      } else {
        // La solicitud falló
        console.log('Error en el registro');
      }
    })
    .catch(function(error) {
      console.log('Error en la solicitud:', error);
    });
});