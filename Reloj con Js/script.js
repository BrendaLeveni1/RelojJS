// Obtener el canvas y el contexto de dibujo
const canvas = document.getElementById('clock');
const context = canvas.getContext('2d');

// Definir las dimensiones del canvas
const width = canvas.width;
const height = canvas.height;

// Definir el radio del reloj
const radius = width / 2 - 10;

function drawClock() {
  // Obtener la hora actual
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Dibujar el fondo del reloj
  context.fillStyle = '#f7a79f';
  context.beginPath();
  context.arc(width/2, height/2, radius, 0, 2 * Math.PI);
  context.fill();
 

  // Dibujar las horas
  context.strokeStyle = '#000';
  context.lineWidth = 6;
  context.beginPath();
  context.moveTo(width/2, height/2);
  context.lineTo(width/2 + 0.4 * radius * Math.sin((hours % 12 + minutes / 60) * 2 * Math.PI / 12), height/2 - 0.4 * radius * Math.cos((hours % 12 + minutes / 60) * 2 * Math.PI / 12));
  context.stroke();

  // Dibujar los minutos
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(width/2, height/2);
  context.lineTo(width/2 + 0.6 * radius * Math.sin(minutes * 2 * Math.PI / 60), height/2 - 0.6 * radius * Math.cos(minutes * 2 * Math.PI / 60));
  context.stroke();

  // Dibujar los segundos
  context.strokeStyle = '#f00';
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(width/2, height/2);
  context.lineTo(width/2 + 0.8 * radius * Math.sin(seconds * 2 * Math.PI / 60), height/2 - 0.8 * radius * Math.cos(seconds * 2 * Math.PI / 60));
  context.stroke();
}

    
  
    // Actualizar el reloj cada segundo
    setInterval(drawClock, 1000);
    