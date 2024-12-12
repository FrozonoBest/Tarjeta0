const tarjeta = document.querySelector('.tarjeta');
const confetiContainer = document.getElementById("box-content");
const botonConfeti = document.getElementById("party-button");


// Efecto 3D dinámico al mover el mouse
  tarjeta.addEventListener('mousemove', (event) => {
  const { offsetWidth: width, offsetHeight: height } = tarjeta;
  const { offsetX: x, offsetY: y } = event;

  // Calcular rotación basado en la posición del mouse
  const rotacionX = ((y / height) - 0.5) * 20;
  const rotacionY = ((x / width) - 0.5) * -20;

  // Aplicar rotación en la tarjeta
  tarjeta.style.transform = `rotateX(${rotacionX}deg) rotateY(${rotacionY}deg)`;
});

// Restablecer la animación cuando se sale del área
  tarjeta.addEventListener('mouseleave', () => {
  tarjeta.style.transform = 'rotateX(0) rotateY(0)';
});


  function crearConfeti() {
  for (let i = 0; i < 100; i++) {
    const confeti = document.createElement("div");
    confeti.classList.add("box");
    confeti.style.left = `${Math.random() * 100}%`;
    confeti.style.animationDelay = `${Math.random() * 2}s`;
    confeti.style.backgroundColor = generarColorAleatorio();
    confetiContainer.appendChild(confeti);

    // Eliminar confeti después de la animación
    setTimeout(() => confeti.remove(), 3000);
  }
}

// Generar color aleatorio
function generarColorAleatorio() {
  const colores = ["#ff6f61", "#ffc107", "#4caf50", "#2196f3", "#9c27b0"];
  return colores[Math.floor(Math.random() * colores.length)];
}

// Evento del botón
botonConfeti.addEventListener("click", crearConfeti);

// Activar confeti automáticamente al cargar
crearConfeti();

botonConfeti.addEventListener("click",function(){
  this.classList.toggle("clicked");
  if (this.classList.contains("clicked")) {
      this.innerHTML = "🎅";  // Cambia el texto a un corazón al hacer clic
  } else {
      this.innerHTML = " ⛄Prospero año nuevo⛄"; // Restaura el texto original
  }

   // Mostrar la imagen con animación
  var imagen = document.getElementById("image");
  if (imagen.style.display === "none") {
    imagen.style.display = "block";
    setTimeout(function() {
       imagen.style.opacity = "1"; // Aparece la imagen con opacidad
     }, 10); // Delay para activar la transición
  } else {
    imagen.style.opacity = "0"; // La imagen se desvanece
    setTimeout(function() {
       imagen.style.display = "none"; // La imagen se oculta después de la transición
     }, 500); // Tiempo que tarda en desvanecerse
  }
});
