let botonAgregar = document.getElementById("agregar");
let contenedor = document.getElementById("contenedor");
let botonEliminar = document.getElementById("limpiar");
let itemElem = document.getElementById("item");

// Funcion que guarda los datos en localStorage
function guardarEnLocalStorage() {
  let parrafos = contenedor.getElementsByTagName("p");
  let parrafosArray = [];
  for (let i = 0; i < parrafos.length; i++) {
    parrafosArray.push(parrafos[i].textContent);
  }
  localStorage.setItem("parrafos", JSON.stringify(parrafosArray));
};

// Funcion que carga los datos del localStorage
function cargarLocalStorage() {
  let parrafosArray = JSON.parse(localStorage.getItem("parrafos"));
  if (parrafosArray) {
    for (let i = 0; i < parrafosArray.length; i++) {
      let parrafosElem = document.createElement("p");
      parrafosElem.appendChild(document.createTextNode(parrafosArray[i]));
      contenedor.appendChild(parrafosElem);
    }
  }
};
cargarLocalStorage();

// Funcion que agrega elementos al listado
botonAgregar.addEventListener("click", () =>{
    let texto = itemElem.value;
    if (texto) {
        let parrafosElem = document.createElement("p");
        parrafosElem.appendChild(document.createTextNode(texto));
        contenedor.appendChild(parrafosElem);
        itemElem.value = "";
        guardarEnLocalStorage();
    }
});

// Funcion que elimina elementos de listado / localStorage
botonEliminar.addEventListener("click", () =>{
    contenedor.innerHTML = "";
    guardarEnLocalStorage();
});
