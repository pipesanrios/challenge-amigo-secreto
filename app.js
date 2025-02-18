// Array global que almacenará los nombres de los amigos
const amigos = [];

function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const inputAmigo = document.getElementById("amigo");
  const nombre = inputAmigo.value.trim(); // Elimina espacios en blanco al inicio y al final

  // Validar que el campo no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Verificar si el nombre ya está registrado
  if (amigos.includes(nombre)) {
    alert("El nombre ya está registrado.");
    return;
  }

  // Actualizar el array de amigos
  amigos.push(nombre);
  
  // Limpiar el campo de entrada
  inputAmigo.value = "";

  // Opcional: Mostrar en consola la lista actualizada de amigos
  console.log("Lista de amigos:", amigos);
}

// Agregar event listener para detectar la tecla Enter en el input
document.getElementById("amigo").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Previene el comportamiento por defecto, como enviar un formulario
    agregarAmigo();
  }
});
