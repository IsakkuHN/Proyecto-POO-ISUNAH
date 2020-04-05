var empresas = [
  {
    correoEmpresa: "diunsa@algo.com",
    contraseñaEmpresa: "123456789",
    nombreEmpresa: "Diunsa",
    pais: "Honduras",
    direccionEmpresa: "Tegucigalpa",
    banner: "diunsa-banner.png",
    logotipo: "diunsa-logo.png",
    redes: "DiunsaFB",
    sucursales: [
      {
        longitudLatitud: "",
        nombreSucursal: "",
        promociones: []
      }
    ],
    productos: [
      {
        nombreProducto: "Huawei P20",
        precio: "L.20,000.00",
        descripcionProducto: "algo debe ir aqui",
        fotografia: "huawei-p20-lite-500x500.jpg", fechaInicio: "15 de febrero 2020",
        fechaFinal: "15 de mayo 2020",
        sucursales: "Tegucigalpa, SPS",
        comentarios: [{
          autor: "Moncho",
          calificacion: "5/5",
          descripcionComentario: "Excelente Oferta"
        },
        {
          autor: "Maria",
          calificacion: "5/5",
          descripcionComentario: "Excelente Oferta"
        },
        {
          autor: "Juan Gabriel",
          calificacion: "5/5",
          descripcionComentario: "Excelente Oferta"
        }
        ]
      },
      {
        nombreProducto: "Huawei P10",
        precio: "L.20,000.00",
        descripcionProducto: "algo debe ir aqui",
        fotografia: "huawei-p20-lite-500x500.jpg",
        fechaInicio: "15 de febrero 2020",
        fechaFinal: "15 de mayo 2020",
        sucursales: "Tegucigalpa, SPS",
        comentarios: [{
          autor: "Moncho",
          calificacion: "5/5",
          descripcionComentario: "Excelente Oferta"
        },
        {
          autor: "Maria",
          calificacion: "5/5",
          descripcionComentario: "Excelente Oferta, necesitamos mas ofertas asi."
        },
        {
          autor: "Juan Gabriel",
          calificacion: "5/5",
          descripcionComentario: "Excelente Oferta"
        }
        ]
      },
      {
        nombreProducto: "Huawei P30",
        precio: "L.25,000.00",
        descripcionProducto: "algo debe ir aqui",
        fotografia: "huawei-p20-lite-500x500.jpg",
        fechaInicio: "15 de febrero 2020",
        fechaFinal: "15 de mayo 2020",
        sucursales: "Tegucigalpa, SPS",
        comentarios: [{
          autor: "Moncho",
          calificacion: "5/5",
          descripcionComentario: "Excelente Oferta"
        },
        {
          autor: "Maria",
          calificacion: "5/5",
          descripcionComentario: "Excelente Oferta, necesitamos mas ofertas asi."
        },
        {
          autor: "Juan Gabriel",
          calificacion: "5/5",
          descripcionComentario: "Excelente Oferta"
        }
        ]
      }
    ]
  }
];

var clientes = [{
  nombreCliente: "Juanito",
  direccionCliente: "Col. Humuya",
  correoCliente: "joche@algo.com",
  contraseñaCliente: "123456789",
  urlFoto: "foto-cliente.jpg",
  promocionesFavoritas: [empresas[0].productos[0]],
  empresasFavoritas: [empresas[0].nombreEmpresa],
  compras: [],
  carrito: []
}]

console.log(empresas);
console.log(clientes);

//Generador de perfil de la empresa
document.getElementById("contenidoPerfil").innerHTML = "";
for (let i = 0; i < empresas.length; i++) {
  document.getElementById("contenidoPerfil").innerHTML = `
  <div id="foto">
  <h2>
      ${empresas[i].nombreEmpresa}
  </h2>
  <div class="bannerEmpresa"
      style="
        background-image: url(../img/${empresas[i].banner});">
        <div class="bannerContenido ">
      <img src="../img/${empresas[i].logotipo}" alt=""
          class="img-thumbnail rounded-circle" style="height: 200px;">
          </div>
  </div>
  </div>
  `;
}

document.getElementById("contenidoProductos").innerHTML = "";
for (let i = 0; i < empresas.length; i++) {
  for (let j = 0; j < empresas[i].productos.length; j++) {
    document.getElementById("contenidoProductos").innerHTML += `
    <div class="col-lg-4 text-center">
                <svg class="bd-placeholder-img rounded-circle" width="140" height="140"
                    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                    aria-label="Placeholder: 140x140">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777"
                        dy=".3em">140x140</text>
                </svg><h1></h1><br>
                <h2>${empresas[i].productos[j].nombreProducto}</h2><br>
                    <button class="btn btn-outline-danger" href="#" role="button" data-target="#ventanaModalEmpresa"
                        data-toggle="modal" onclick="descripcionProductoModal(id)" id="${empresas[i].productos[j].nombreProducto}" value="${empresas[i].productos[j].nombreProducto}">Ver Mas »
                    </button>
            </div>
    `;
  }
}

function descripcionProductoModal(identidad) {

  document.getElementById("ventanaModalEmpresa").innerHTML = "";
  let bandera = false;

  for (let i = 0; i < empresas.length; i++) {
    for (let j = 0; j < empresas[i].productos.length; j++) {
      for (let k = 0; k < empresas[i].productos[j].comentarios.length; k++) {
        if (empresas[i].productos[j].nombreProducto === document.getElementById(identidad).value) {
          let interno = empresas[i].productos[j].comentarios;
          let comments = "";
          for (let m = 0; m < interno.length; m++) {
            comments +=
              `<h6>
            ${interno[m].autor}
          </h6>
          <h6>
            ${interno[m].calificacion}
          </h6>
          <h6>
            ${interno[m].descripcionComentario}
          </h6><br>`;
          }
          document.getElementById("ventanaModalEmpresa").innerHTML = `
          <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">${empresas[i].productos[j].nombreProducto}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="contenidoll-modal">
                    <div class="text-center mb-3">
                        <svg class="bd-placeholder-img rounded-circle text-center" width="140" height="140"
                            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                            role="img" aria-label="Placeholder: 140x140">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777"
                                dy=".3em">140x140</text>
                        </svg>
                    </div>

                    <h3>Descripcion</h3>
                    <p>
                    ${empresas[i].productos[j].descripcionProducto}
                    </p>
                    <h2>Duracion de la Oferta</h2>
                      <p>
                        ${empresas[i].productos[j].fechaInicio} - ${empresas[i].productos[j].fechaFinal}
                      </p>

                    <h2>Comentarios</h2>
                    ${comments}

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger" data-dismiss="modal"><i class="fas fa-times"></i></button>
                    <button type="button" class="btn btn-outline-success">Añadir al carrito <i class="fas fa-cart-plus"></i></button>
                </div>
            </div>
        </div>
        `;
          bandera = true;
        }
        if (bandera === true) {
          break;
        }
      }
      if (bandera === true) {
        break;
      }
    }
    if (bandera === true) {
      break;
    }
  }

}

function comprobarLogin() {
  let bandera = false;
  let usuario = document.getElementById("inputEmailLogin").value;
  let contrasenia = document.getElementById("inputPasswordLogin").value;
  console.log(usuario);
  console.log(contrasenia);
  var nameActual;

  for (let i = 0; i < empresas.length; i++) {
    if ((usuario === empresas[i].correoEmpresa) && (contrasenia === empresas[i].contraseñaEmpresa)) {
      bandera = true;
      nameActual = empresas[i].nombreEmpresa;
    }
  }

  for (let j = 0; j < clientes.length; j++) {
    if ((usuario === clientes[j].correoCliente) && (contrasenia === clientes[j].contraseñaCliente)) {
      bandera = true;
      nameActual = clientes[j].nombreCliente;
    }
  }

  if (bandera === false) {
    alert("usuario o contraseña invalido");
  }

  else {
    alert("Bienvenido " + nameActual);
    document.getElementById("navegacion-bar").innerHTML = "";
    document.getElementById("navegacion-bar").innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"><img src="img/01-16-___logo2.png" style="height: 50px;"></a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Foxer<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Tienda</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="../html/perfilEmpresa.html">Bienvenido ${nameActual}</a>
          </li>
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="..." aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0 mr-sm-2" type="button">Buscar</button>
          <button class="btn btn-outline-success my-2 my-sm-0 " type="button">
            <i class="fas fa-shopping-cart"></i>
          </button>
        </form>
      </div>
    </nav>
    `;

  }
}

(function cargarNav() {
  document.getElementById("navegacion-bar-perfil").innerHTML = comprobarLogin();
})();