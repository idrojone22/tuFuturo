// BD
let arrayataudes = [1, 2, 3, 4];
let  informacionAtaudes = [
    {
        id: 1,
        precio: 350,
        nombre: 'Básico',
        img:  '../imagenes/ataudes0.png',
        descripcion: ''
    },
    {
        id: 2,
        precio: 400,
        nombre: 'Infantil',
        img:  '../imagenes/ataudes1.png',
        descripcion: ''
    },
    {
        id: 3,
        precio: 600,
        nombre: 'Adulto',
        img:  '../imagenes/ataudes2.png',
        descripcion: ''
    },
    {
        id: 4,
        precio: 1000,
        nombre: 'Senior',
        img:  '../imagenes/ataudes3.png',
        descripcion: ''
    },
    {
        id: 5,
        precio: 350,
        nombre: 'Básico',
        img:  '../imagenes/ataudes4.jpeg',
        descripcion: ''
    },
    {
        id: 6,
        precio: 400,
        nombre: 'Infantil',
        img:  '../imagenes/ataudes5.jpeg',
        descripcion: ''
    },
    {
        id: 7,
        precio: 600,
        nombre: 'Adulto',
        img:  '../imagenes/ataudes6.jpg',
        descripcion: ''
    },
    {
        id: 8,
        precio: 1000,
        nombre: 'Senior',
        img:  '../imagenes/ataudes6.jpg',
        descripcion: ''
    },
    {
        id: 9,
        precio: 600,
        nombre: 'Adulto',
        img:  '../imagenes/ataudes6.jpg',
        descripcion: ''
    },
    {
        id: 10,
        precio: 1000,
        nombre: 'Senior',
        img:  '../imagenes/ataudes6.jpg',
        descripcion: ''
    },
    {
        id: 11,
        precio: 350,
        nombre: 'Básico',
        img:  '../imagenes/ataudes0.png',
        descripcion: ''
    },
    {
        id: 12,
        precio: 400,
        nombre: 'Infantil',
        img:  '../imagenes/ataudes1.png',
        descripcion: ''
    },
    {
        id: 13,
        precio: 600,
        nombre: 'Adulto',
        img:  '../imagenes/ataudes2.png',
        descripcion: ''
    },
    {
        id: 14,
        precio: 1000,
        nombre: 'Senior',
        img:  '../imagenes/ataudes3.png',
        descripcion: ''
    },
    {
        id: 15,
        precio: 350,
        nombre: 'Básico',
        img:  '../imagenes/ataudes4.jpeg',
        descripcion: ''
    },
    {
        id: 16,
        precio: 400,
        nombre: 'Infantil',
        img:  '../imagenes/ataudes5.jpeg',
        descripcion: ''
    },
    {
        id: 17,
        precio: 600,
        nombre: 'Adulto',
        img:  '../imagenes/ataudes6.jpg',
        descripcion: ''
    },
    {
        id: 18,
        precio: 1000,
        nombre: 'Senior',
        img:  '../imagenes/ataudes6.jpg',
        descripcion: ''
    },
    {
        id: 19,
        precio: 600,
        nombre: 'Adulto',
        img:  '../imagenes/ataudes6.jpg',
        descripcion: ''
    },
    {
        id: 20,
        precio: 1000,
        nombre: 'Senior',
        img:  '../imagenes/ataudes6.jpg',
        descripcion: ''
    }
]
// presentar 
let body = document.getElementById('body')
body.innerHTML = `
  <header>
        <div id="logoFoto">
            <img src="../imagenes/logo(TuFuturo).png">
        </div>
        <nav class='menu'>
            <input type='checkbox' id='responsive-menu' onclick='updatemenu()'><label></label>
            <ul>
              <li><a href='http://'>Inicio</a></li>
              <li><a class='dropdown-arrow' href='http://'>Servicios</a>
                <ul class='sub-menus'>
                  <li><a href='http://'>Ataudes</a></li>
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
            <div id="texto">
                <p class="mediano">A tu alcance</p>
                <p class="grande">TU MEJOR DESCANSO</p>
                <p class="pequeño">Quieres un descanso eterno y seguro? Ven a tu futuro</p>
                <p class="pequeño">el lugar donde tu seres queridos te despediran por ultima vez</p>
                <div id="boton_descubrelo_center">
                    <button id="boton_descubrelo">DESCÚBRELO</button>
                </div>
            </div>
            <div id="imagen_ataud_container">
                <img id="imagen_ataud" src="../imagenes/ataud.png">
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
                      <li><a href='http://'>Ataudes</a></li>
                      <li><a href='http://'>Flores</a></li>
                      <li><a href='http://'>urnas</a></li>
                    </ul>
                </nav>
            </div>
            <div id="ataudes"></div>
        </section>
    </main>     
`;

// Menu
function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
        document.getElementById('menu').style.borderBottomRightRadius = '0'; 
        document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
        document.getElementById('menu').style.borderRadius = '9px';
    }
}

// presentar ataudes
mostrarAtaudes();
function mostrarAtaudes() {
    let ataudes = document.getElementById('ataudes');
    console.log(ataudes);
    console.log(informacionAtaudes);
    for (let i = 0; i < informacionAtaudes.length; i++) {
    ataudes.innerHTML += 
    `
        <div id="objeto${informacionAtaudes[i].id}" class="casilla">
            <img height="300px" width="300px" src="${informacionAtaudes[i].img}"/>
            <p class="texto">${informacionAtaudes[i].nombre}</p>
            <p class="texto">${informacionAtaudes[i].precio}</p>
        </div>
    `;
  }
}
