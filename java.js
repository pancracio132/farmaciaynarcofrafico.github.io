function mostrarMensaje() {

    const mensajes = [

        "La ciencia puede salvar vidas o destruirlas.",

        "El narcotráfico utiliza conocimiento químico avanzado.",

        "La ética es el límite entre la medicina y el crimen.",

        "La farmacia protege vidas mediante regulación y control.",

        "La ciencia sin conciencia puede convertirse en peligro."
    ];

    const random =
        Math.floor(Math.random() * mensajes.length);

    document.getElementById("mensaje").innerText =
        mensajes[random];
}

/* EFECTO DE ENTRADA */

window.onload = () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "1.5s";

        document.body.style.opacity = "1";

    }, 200);

};
