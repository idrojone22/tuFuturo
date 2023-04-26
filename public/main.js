// BD

let  informacionAtaudes = [
  {
    id: 1,
    precio: 350,
    nombre: 'Básico',
    descripcion: ''
  },
  {
    id: 2,
    precio: 400,
    nombre: 'Infantil',
    descripcion: ''
  },
  {
    id: 3,
    precio: 600,
    nombre: 'Adulto',
    descripcion: ''
  },
  {
    id: 4,
    precio: 1000,
    nombre: 'Senior',
    descripcion: ''
  }
]

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
  // informacionAtaudes.forEach( (e) => {
  //   ataudes.innerHTML += `
  //   <div id="objeto${informacionAtaudes[e].id}" class="casilla">
  //     <img height="300px" width="300px" src="img/ataudes${i}.jpg"/>
  //     <p class="texto">${informacionAtaudes[e].nombre}</p>
  //     <p class="texto">${informacionAtaudes[e].precio}</p>
  //     <button onclick="giro(${i})" class="bot" id="boton${informacionAtaudes[e].id}">Añadir al carrito</button>">
  //   </div>
  //   `;
  // });
  for (let i = 0; i < informacionAtaudes.length; i++) {
    ataudes.innerHTML += `
    <div id="objeto${informacionAtaudes[i].id}" class="casilla">
      <img height="300px" width="300px" src="img/ataudes${i}.jpg"/>
      <p class="texto">${informacionAtaudes[i].nombre}</p>
      <p class="texto">${informacionAtaudes[i].precio}</p>
      <button onclick="giro(${i})" class="bot" id="boton${informacionAtaudes[i].id}">Añadir al carrito</button>">
    </div>
    `;
  }
}


  

