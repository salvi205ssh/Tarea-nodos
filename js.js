console.log("Funcionando!");

var btn_todo = document.getElementById("btn_todo");
var mobe_right = null;

btn_todo.addEventListener("click", () => {
  var nombre = document.getElementById("nombre").value;
  var horas_estimadas = document.getElementById("horas_estimadas").value;

  if (nombre != "") {
    var fila =
      "<tr><td>" +
      nombre +
      "-" +
      horas_estimadas +
      "<br>" +
      "  <button id='mobe_right'> X </button>" +
      "  <button id='delete'> => </button>" +
      "</td></tr>";

    var celda = document.createElement("TR");
    celda.innerHTML = fila;

    document.getElementById("TableTodo").appendChild(celda);
  } else {
    alert("Debe ingresar un nombre");
  }
});

mobe_right = document.getElementById("mobe_right");

if (mobe_right != null) {
  mobe_right.addEventListener("click", () => {
    console.log("bien!");
  });
} else {
  console.log("No hay mobe");
}
