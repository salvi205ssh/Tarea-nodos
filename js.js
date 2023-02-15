console.log("Funcionando!");

var btn_todo = document.getElementById("btn_todo");
const tareas = [];

// Verifica si el elemento "template" es compatible con la propiedad "content"
if ("content" in document.createElement("template")) {
  // Agrega un controlador de eventos al botón con id "btn_todo"
  btn_todo.addEventListener("click", () => {
    // Obtiene los valores de los elementos de entrada con id "nombre" y "horas_estimadas"
    var nombre = document.getElementById("nombre").value;
    var horas_estimadas = document.getElementById("horas_estimadas").value;

    // Si el valor de "nombre" no está vacío, continúa con la ejecución del código
    if (nombre != "") {
      // Selecciona el cuerpo de la tabla
      const tbody = document.querySelector("tbody");

      // Selecciona el contenido del elemento "template"
      const template = document.querySelector("#template");

      // Clona el contenido del elemento "template"
      const clone = template.content.cloneNode(true);

      // Selecciona los elementos "td" de la fila clonada
      let td = clone.querySelectorAll("td");

      // Asigna el valor de "nombre" y "horas_estimadas" al primer "td" de la fila clonada
      td[0].textContent = nombre + "-" + horas_estimadas;
      td[0].innerHTML +=
        "<br><button type='button' id='btn_right' onclick='deletenode()'>X</button>" +
        "<button type='button' id='btn_delete' onclick='mover()'>=></button>";

      // Agrega la fila clonada a la tabla
      tbody.appendChild(clone);
    } else {
      // Si el valor de "nombre" está vacío, muestra un mensaje de alerta pidiendo que se ingrese un nombre y un número de horas estimadas
      alert("Debe ingresar un nombre y un numero de horas estimadas");
    }
  });
}

function mover() {
  console.log("moviendo");
}

function deletenode() {
  console.log("borrando");

  // Selecciona el contenido del elemento "template"
  const template = document.querySelector("#template");

  template.remove();

  console.log(template);
}
