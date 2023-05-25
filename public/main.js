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

















// fetch
/*fetchDB();
function fetchDB() {

    const url = 'http://192.168.21.105:3000/posts'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // presentar ataudes
            for (let i = 0; i < 20; i++) {
                console.log[data[i]]
                mostrarAtaudes(data[i]);
            }
            // presentar flores
            for (let i = 20; i < 40; i++) {
                mostrarFlores(data[i]);
            }
            // presentar urnas
            for (let i = 40; i < 60; i++) {
                mostrarUrnas(data[i]);
            }
        })
}

function mostrarAtaudes(ataudes) {
    let ataudesContainer = document.getElementById('ataudes');
    ataudesContainer.innerHTML += `
        <div id="objeto${ataudes.id}" class="casilla">
            <img height="300px" width="300px" src="${ataudes.img}"/>
            <p class="texto">${ataudes.nombre}</p>
            <p class="texto">${ataudes.precio}</p>
        </div>
    `;
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

function mostrarUrnas(urnas) {
    let urnasContainer = document.getElementById('urnas');
    urnasContainer.innerHTML += `
        <div id="objeto${urnas.id}" class="casilla">
            <img height="300px" width="300px" src="${urnas.img}"/>
            <p class="texto">${urnas.nombre}</p>
            <p class="texto">${urnas.precio}</p>
        </div>
    `;
}*/

// Menu
function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
        document.getElementById('menu').style.borderBottomRightRadius = '0'; 
        document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
        document.getElementById('menu').style.borderRadius = '9px';
    }
}   


