console.log("Funcionando!");

var btn_todo = document.getElementById("btn_todo");
const tareas = [];

if ("content" in document.createElement("template")) {

  btn_todo.addEventListener("click", () => {
    var nombre = document.getElementById("nombre").value;
    var horas_estimadas = document.getElementById("horas_estimadas").value;

    if (nombre != "") {
      const tbody = document.querySelector("tbody");
      const template = document.querySelector("#template");

      const clone = template.content.cloneNode(true);
      let td = clone.querySelectorAll("td");

      td[0].textContent = nombre + "-" + horas_estimadas;
      tbody.appendChild(clone);
    } else {
      alert("Debe ingresar un nombre y un numero de horas estimadas");
    }
  });
}


/* mobe_right = document.getElementById("mobe_right");

if (mobe_right != null) {
  mobe_right.addEventListener("click", () => {
    console.log("bien!");
  });
} else {
  console.log("No hay mobe");
}
 */
