function mostrarMensaje() {

  const mensajes = [
    "El conocimiento sin ética puede convertirse en peligro.",
    "La ciencia no es buena ni mala, depende de su uso.",
    "La farmacia y el narcotráfico comparten la misma base química, pero no el mismo propósito.",
    "La decisión final siempre es humana."
  ];

  const random = Math.floor(Math.random() * mensajes.length);

  document.getElementById("mensaje").innerText =
    mensajes[random];
}

// efecto de carga

window.onload = () => {
  document.body.classList.remove("preload");
};
