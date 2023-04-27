// BD
let  informacionAtaudes = [
    {
        id: 1,
        precio: 350,
        nombre: 'Básico',
        img:  '../imagenes/ataudes/ataudes0.png',
        descripcion: ''
    },
    {
        id: 2,
        precio: 400,
        nombre: 'Infantil',
        img:  '../imagenes/ataudes/ataudes1.png',
        descripcion: ''
    },
    {
        id: 3,
        precio: 600,
        nombre: 'Adulto',
        img:  '../imagenes/ataudes/ataudes2.png',
        descripcion: ''
    },
    {
        id: 4,
        precio: 1000,
        nombre: 'Senior',
        img:  '../imagenes/ataudes/ataudes3.png',
        descripcion: ''
    },
    {
        id: 5,
        precio: 350,
        nombre: 'Básico',
        img:  '../imagenes/ataudes/ataudes4.jpeg',
        descripcion: ''
    },
    {
        id: 6,
        precio: 400,
        nombre: 'Infantil',
        img:  '../imagenes/ataudes/ataudes5.jpeg',
        descripcion: ''
    },
    {
        id: 7,
        precio: 600,
        nombre: 'Adulto',
        img:  '../imagenes/ataudes/ataudes6.jpeg',
        descripcion: ''
    },
    {
        id: 8,
        precio: 1000,
        nombre: 'Senior',
        img:  '../imagenes/ataudes/ataudes7.jpeg',
        descripcion: ''
    },
    {
        id: 9,
        precio: 600,
        nombre: 'Adulto',
        img:  '../imagenes/ataudes/ataudes8.jpeg',
        descripcion: ''
    },
    {
        id: 10,
        precio: 1000,
        nombre: 'Senior',
        img:  '../imagenes/ataudes/ataudes9.jpeg',
        descripcion: ''
    },
    {
        id: 11,
        precio: 350,
        nombre: 'Básico',
        img:  '../imagenes/ataudes/ataudes10.jpeg',
        descripcion: ''
    },
    {
        id: 12,
        precio: 400,
        nombre: 'Infantil',
        img:  '../imagenes/ataudes/ataudes11.jpg',
        descripcion: ''
    },
    {
        id: 13,
        precio: 600,
        nombre: 'Adulto',
        img:  '../imagenes/ataudes/ataudes12.jpeg',
        descripcion: ''
    },
    {
        id: 14,
        precio: 1000,
        nombre: 'Senior',
        img:  '../imagenes/ataudes/ataudes13.jpeg',
        descripcion: ''
    },
    {
        id: 15,
        precio: 350,
        nombre: 'Básico',
        img:  '../imagenes/ataudes/ataudes14.jpeg',
        descripcion: ''
    },
    {
        id: 16,
        precio: 400,
        nombre: 'Infantil',
        img:  '../imagenes/ataudes/ataudes15.jpeg',
        descripcion: ''
    },
    {
        id: 17,
        precio: 600,
        nombre: 'Adulto',
        img:  '../imagenes/ataudes/ataudes16.jpeg',
        descripcion: ''
    },
    {
        id: 18,
        precio: 1000,
        nombre: 'Senior',
        img:  '../imagenes/ataudes/ataudes17.jpeg',
        descripcion: ''
    },
    {
        id: 19,
        precio: 600,
        nombre: 'Adulto',
        img:  '../imagenes/ataudes/ataudes18.jpeg',
        descripcion: ''
    },
    {
        id: 20,
        precio: 1000,
        nombre: 'Senior',
        img:  '../imagenes/ataudes/ataudes19.jpeg',
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
            <div id="flores">
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