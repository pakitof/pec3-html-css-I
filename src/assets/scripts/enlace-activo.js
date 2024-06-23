let urlActual = window.location.href;
let paginaCargada = urlActual.split("/").at(-1).split(".")[0];
const enlace = document.querySelector(`.menu-elemento-${paginaCargada}`);

enlace.classList.add("enlace-activo");
