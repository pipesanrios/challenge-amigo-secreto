let amigos = [];

function agregarAmigo() {
  let inputAmigo = document.getElementById("amigo");
  let nombre = inputAmigo.value.trim();

   if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

    if (amigos.includes(nombre)) {
    alert("El nombre ya está registrado.");
    return;
  }

    amigos.push(nombre);
    inputAmigo.value = "";

  mostrarAmigos();
}

function mostrarAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");

   listaAmigos.innerHTML = "";

   for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
      if (amigos.length === 0) {
      alert("No hay amigos disponibles para sortear.");
      return;
    }
  
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    let amigoSorteado = amigos[indiceAleatorio];
  
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
  }

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); 
      agregarAmigo();
    }
  });