// import sumar from "./sumador";

const first = document.querySelector("#publicacion");
const form = document.querySelector("#tweet-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = first.value;

  div.innerHTML = div.innerHTML + "<p> - " +firstNumber + "</p>";
  if(firstNumber!="")
  {
    div.innerHTML = div.innerHTML + "<p> - " +firstNumber + "</p>";
  }
  else
  {
    const mensaje = "No se puede ingresar un post sin texto";
    alert(mensaje);
  }
});
