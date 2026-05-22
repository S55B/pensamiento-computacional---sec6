// SOLEMNE 2 — Pensamiento Computacional
// Referente: Henryk Berlewi

// 0. COLORES 
// negro (16, 16, 16)
// blanco/fondo (226, 220, 200)
// rojo (255, 0, 0)

// 1. VARIABLES
let colorRojo;
let colorNegro;
let tamanoCresciente;
let modoEspecial = false;

// 2. TAMAÑO DEL LIENZO
function setup() {
  createCanvas(699, 850); 
  colorRojo = color(255, 0, 0);
  colorNegro = color(16, 16, 16);
  tamanoCresciente = 0;
}

function draw() {
  background(226, 220, 200);

// 3. RECTANGULOS SUPERIOR DERECHA ( Bucle FOR y MAP) 
// 4. MouseX para que los rectángulos se separen.
// 5. MAP, INPUT CONTINUO
  fill(colorNegro);
  let espaciado = map(mouseX, 0, width, 0, 30); 
  for (let i = 0; i < 8; i++) {
    let yBase = 115 + (i * 48);
    quad(90, yBase + (i * espaciado), 172, yBase + (i * espaciado), 172, yBase + 25 + (i * espaciado), 90, yBase + 25 + (i * espaciado));
  }

// 6. CUADRADOS NEGROS COSTADO/ CENTRO
  fill(colorNegro);
  quad(250, 235, 277, 235, 277, 264, 250, 264);
  quad(227, 280, 277, 280, 277, 330, 227, 330);
  quad(197, 346, 277, 346, 277, 427, 197, 427);

// 7. CUADRADO ROJO CENTRAL (Condicional IF/ELSE)
  noStroke();
  // El cuadrado cambia de color si el mouse cruza la mitad de la pantalla
  if (mouseX > width / 2) {
    fill(colorRojo);
  } else {
    fill(0); // Negro puro
  }
  quad(288, 235, 482, 235, 482, 427, 288, 427);
  
// 8. LLAMADA A FUNCIÓN PROPIA
  dibujarES();
}

// 9. DEFINICIÓN DE FUNCIÓN (ORDENAR EL SISTEMA)
function dibujarES() {

  // 10. TRIANGULO NEGRO SUPERIOR
  fill(colorNegro);
  triangle(289, 116, 289, 225, 398, 225);

  // 11. RECTANGULOS CRESCIENTES IZQ
  fill(colorNegro);
  quad(102, 609, 111, 609, 111, 651, 102, 651);
  quad(121, 591, 134, 591, 134, 651, 121, 651);
  quad(145, 568, 163, 568, 163, 651, 145, 651);
  quad(173, 542, 196, 542, 196, 651, 173, 651);
  quad(206, 512, 234, 512, 234, 652, 205, 652);
  quad(245, 476, 277, 476, 277, 652, 245, 652);
  quad(288, 438, 326, 438, 326, 652, 289, 652);

  // 12. RECTANGULOS CRESCIENTES DER
  quad(337, 438, 428, 437, 428, 456, 337, 456);
  quad(337, 477, 459, 477, 459, 498, 337, 498);
  quad(336, 519, 494, 519, 494, 547, 336, 547);
  quad(336, 568, 532, 568, 532, 600, 336, 600);

  // 13. CIRCULO ROJO ABAJO (Condicional IF/ELSE + random())
  noStroke();
  if (modoEspecial) {
    fill(random(255), 0, 0); // Color rojo aleatorio si se activa el modo
  } else {
    fill(colorRojo);
  }
  ellipse(428, 658, 84, 84);

  // 14. RECTANGULO LARGO DERECHA — se desplaza con mouseY
  // map(): mientras más arriba el mouse, más se mueve hacia la derecha
  fill(colorNegro);
  let desplazamiento = map(mouseY, 0, height, 80, 0);

  // 14.1. Rectángulo largo: se desplaza hacia la derecha al subir el mouse
  quad(553 + desplazamiento, 235,
       609 + desplazamiento, 235,
       609 + desplazamiento, 690,
       553 + desplazamiento, 691);

  // 15. TEXTO ROTADO IZQUIERDA — aparecera del lado izq.
  // Se mueve en dirección opuesta al rectángulo largo
  push();
  fill(colorNegro);
  noStroke();
  textSize(13);
  textAlign(CENTER, CENTER);
  translate(30 - desplazamiento, 462); // (entra por la izquierda al subir el mouse)
  rotate(-HALF_PI);                    // (rotado 90° igual que el rectángulo)
  text("Sebastián Mejias", 0, 0);      //  (nombre del autor, obra p5.js)
  pop();

  // 16. RECTANGULO HORIZONTAL INFERIOR (fijo)
  fill(colorNegro);
  quad(102, 666, 326, 666, 326, 709, 102, 708);
}

// 17. EVENTO DE TECLADO PARA CAMBIO DE ESTADO
function keyPressed() {
  if (key === 'e' || key === 'E') {
    modoEspecial = !modoEspecial; // Cambia el comportamiento del círculo
  }
}
