# pensamiento-computacional---sec6
Ejercicios y entregas de código para el curso de pensamiento computacional

--

## Primer ejercicio

**negrita** *italica*

- LISTA 1
- LISTA 2

https://p5js.org/

--

## Solemne 2 — Composición Bauhaus Reactiva

**Autor:** Sebastián Mejias  
**Referente:** Henryk Berlewi / Bauhaus

--

# Descripción objetiva

Un sistema visual dinámico e interactivo programado en p5.js que genera una composición gráfica inspirada en el trabajo de Henryk Berlewi y la estética Bauhaus. La composición reacciona en tiempo real al movimiento del mouse y a la interacción con el teclado.

**¿Qué se ve en pantalla?**  
Una composición geométrica de fondo marfil construida con rectángulos, cuadrados, un triángulo y un círculo, organizada en una disposición asimétrica de tensión visual característica del diseño moderno.

**Elementos visuales:**
- 8 rectángulos superiores que se separan progresivamente
- 3 cuadrados negros en progresión de tamaño
- 1 cuadrado central grande (negro o rojo según posición del mouse)
- 1 triángulo negro superior
- 7 rectángulos crecientes hacia abajo izquierda
- 4 rectángulos crecientes hacia abajo derecha
- 1 círculo rojo inferior
- 1 rectángulo largo vertical derecho (se desplaza con el mouse)
- 1 texto rotado 90° con el nombre del autor (aparece por la izquierda)
- 1 rectángulo horizontal inferior fijo

**Inputs:**
- `mouseX` — posición horizontal del mouse
- `mouseY` — posición vertical del mouse
- Tecla `E` — activa/desactiva modo especial

**Outputs:**
- Separación dinámica de rectángulos superiores
- Cambio de color del cuadrado central (negro ↔ rojo)
- Desplazamiento lateral del rectángulo largo
- Aparición del texto del autor desde la izquierda
- Parpadeo del círculo rojo con tonos aleatorios (modo especial)

--

# Descripción conceptual

**Idea central:**  
Traducir la lógica de Berlewi de tensión visual mediante geometría y contraste a un sistema computacional que reacciona continuamente al usuario. La composición no es estática: responde, se transforma y mantiene coherencia visual a través de reglas matemáticas.

**Corriente de diseño:** Bauhaus 

**Referente principal:** Henryk Berlewi (1894–1967), pionero del diseño gráfico constructivista polaco vinculado al movimiento Bauhaus. Desarrolló la teoría *Mechano-Faktura* (1923), basada en ilusiones ópticas y ritmo visual a través de la repetición sistemática de formas geométricas simples.
**Referentes secundarios:** Mieczysław Szczuka (1898-1927), artista y diseñador de la vanguardia constructivista polaca, vinculado al movimiento revolucionario y al fotomontaje experimental. Desarrolló composiciones dinámicas basadas en geometría, tipografía y contraste visual, integrando arte, política y comunicación gráfica moderna.
**Referentes secundarios:** El Lissitzky (1890–1941), artista, arquitecto y diseñador ruso asociado al constructivismo y suprematismo. Desarrolló el sistema Proun, enfocado en la relación entre espacio, geometría y movimiento visual, influyendo profundamente en la tipografía moderna, el diseño editorial y la composición arquitectónica de las vanguardias europeas.
* La selección de ambos referentes secundarios fue en base a sus obras, tanto Mieczysław Szczuka como El Lissitzky trabajan el diseño como un sistema dinámico y activo, donde la composición genera tensión, ritmo y percepción de movimiento. Sus obras no se entienden como imágenes estáticas, sino como estructuras visuales que guían la mirada y producen interacción perceptiva mediante geometrías, diagonales, contraste y organización espacial.

Estas referencias sirvieron de inspiración para reinterpretar una obra de Henryk Berlewi en un formato interactivo, trasladando los principios constructivistas y ópticos hacia un entorno digital.
* En la carpeta de imagenes subí una obra de cada uno, la cual me sirvio de inspiración al momento de construir una base interactiva en  mi proyecto * 


**Principio explorado:** Ritmo visual y tensión geométrica mediante repetición con variación.

--

### Input / Output y sistema

| Input | Proceso | Output visual |
|---|---|---|
| `mouseX` | `map()` → espaciado | 8 rectángulos superiores se separan |
| `mouseX > width/2` | Condicional `if/else` | Cuadrado central negro ↔ rojo |
| `mouseY` | `map()` → desplazamiento | Rectángulo largo se mueve a la derecha |
| `mouseY` | Dirección opuesta | Texto del autor aparece por la izquierda |
| Tecla `E` | Toggle `!modoEspecial` | Círculo parpadea con `random()` |

**Requisitos técnicos:**
-  Variables propias: `colorRojo`, `colorNegro`, `tamanoCresciente`, `modoEspecial`
-  Condicionales: `if/else` para color del cuadrado central y modo especial del círculo
-  Función propia: `dibujarES()`
-  Bucle: `for` para los 8 rectángulos superiores
-  `map()`: posición del mouse → espaciado y desplazamiento
-  `random()`: variación de color en modo especial
-  Input continuo: mouse en cada frame
-  Interactividad: teclado cambia estado del sistema

--

### Diagrama de flujo

<img width="726" height="931" alt="image" src="https://github.com/user-attachments/assets/407b19ab-1fa5-4017-be3b-acfecaaa6eb0" />


--

### Link al sketch en p5.js

[Ver sketch en p5.js](https://editor.p5js.org/s5BB/sketches/cEeC01fAp)
  
