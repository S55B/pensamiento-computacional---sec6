# pensamiento-computacional---sec6
Ejercicios y entregas de código para el curso de pensamiento computacional

--

## Solemne 1


https://editor.p5js.org/s5BB/sketches/uqstEXnnd

--

## Solemne 2 — Composición Bauhaus Reactiva

**Autor:** Sebastián Mejias  
**Referente:** Henryk Berlewi como principal, Referentes secundarios: Mieczysław Szczuka y El Lissitzky/ Bauhaus

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
(Me ayude en cosas que no sabia o no me funcionaban directamente con la pagina oficial de tutoriales y recursos dentro de la pagina P5.JS)
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


  
# EXAMEN 

Sistema visual interactivo en p5.js — Examen Final, Pensamiento Computacional.

<img width="695" height="698" alt="image" src="https://github.com/user-attachments/assets/31330f5b-f548-4482-991d-e2e395c65e73" />


---

## Información del proyecto

* **Nombre del proyecto:** Mecano-Faktura
* **Autor:** Sebastián Mejías
* **Asignatura:** Pensamiento Computacional
* **Entrega:** Examen Final
* **Formato:** Sistema visual interactivo en p5.js

**Descripción general:**
*Mecano-Faktura* es un sistema visual interactivo en p5.js que traduce la lógica de la Mecano-Faktura de Henryk Berlewi a un sistema computacional de tres estados. El proyecto pasa desde una portada inicial, a una composición geométrica interactiva, para finalmente llegar a la mecanización automática de una imagen. Esta imagen es reconstruida por el computador usando únicamente unidades geométricas rojas, negras y crema.

---

## Descripción objetiva

El proyecto funciona como una máquina visual de tres estados. Cada estado presenta una lógica distinta:

1. **Portada:** pantalla inicial con título, autor, formas geométricas e instrucción de inicio.
2. **Composición:** escena geométrica interactiva inspirada en la obra de Berlewi.
3. **Mecano-Faktura:** estado generativo donde una imagen es leída por el sistema y reconstruida como mosaico geométrico.

En pantalla se ve un lienzo cuadrado de 699 × 699 píxeles con fondo crema. Según el estado activo, aparecen formas básicas como cuadrados, rectángulos, círculos, triángulos, texto y una grilla de unidades geométricas generadas a partir de la imagen `aura.png`.

### Elementos visuales

* Fondo crema.
* Cuadrados y rectángulos negros.
* Círculos y cuadrado rojo.
* Triángulo negro.
* Barras crecientes.
* Nombre del autor rotado.
* Mosaico de círculos rojos, cuadrados negros y espacios vacíos.
* Texto de navegación en pantalla.

### Inputs utilizados

* `mouseX`: modifica separación y color en la composición.
* `mouseY`: modifica el desplazamiento de un rectángulo.
* Teclado:

  * **ESPACIO:** pasar de portada a composición.
  * **M:** mecanizar / volver a composición.
  * **E:** activar o desactivar modo especial.
  * **N:** mostrar u ocultar el nombre del autor.
  * **R:** volver a la portada.

### Outputs generados

El sistema genera una salida visual dinámica que cambia de composición, color, posición y estructura según los inputs del usuario y el estado activo. En el estado final, el output principal es una imagen mecanizada, reconstruida como una grilla de unidades geométricas.

---

## Descripción conceptual

La idea central del proyecto nace desde la Mecano-Faktura de Henryk Berlewi. Berlewi propuso mecanizar la pintura, reduciéndola a unidades geométricas estandarizadas, repetibles y reproducibles. Esta postura buscaba alejar la obra de la expresión manual del artista y acercarla a una lógica más mecánica, sistemática y constructiva.

Este proyecto lleva esa idea al contexto computacional. En vez de copiar únicamente la estética visual de Berlewi, el sistema intenta traducir su lógica: una imagen deja de ser tratada como una superficie continua y pasa a ser leída como información. Luego, el computador interpreta esa información y la reconstruye mediante reglas, condiciones y módulos geométricos.

El recorrido entre los tres estados representa una transformación: primero aparece una entrada visual simple, luego una composición geométrica manipulable, y finalmente una mecanización automática donde la imagen `aura.png` es procesada por el sistema.

### Referente de diseño

* **Henryk Berlewi**
* **Obra / teoría:** Mecano-Faktura / Mechano-Facture
* **Periodo:** vanguardias geométricas, constructivismo y abstracción moderna
* **Principios rescatados:** geometría, repetición, mecanización, reducción formal, uso de unidades visuales simples y eliminación del gesto manual.

### Principio de diseño explorado

El principio principal es la reducción de una imagen compleja a un sistema modular. El proyecto convierte una imagen abstracta con gradientes en una estructura discreta de círculos rojos, cuadrados negros y fondo crema. Así, lo orgánico o continuo se vuelve mecánico, geométrico y reproducible.

---

## Sistema computacional

### Inputs

* Movimiento horizontal del mouse (`mouseX`).
* Movimiento vertical del mouse (`mouseY`).
* Teclas: ESPACIO, M, E, N y R.
* Imagen `aura.png`, utilizada como recurso multimedia y dato de entrada.

### Procesos

* Uso de una variable `estado` para controlar las tres escenas del sistema.
* Uso de condicionales para decidir qué pantalla se muestra.
* Uso de `map()` para transformar la posición del mouse en separación o desplazamiento.
* Uso de `random()` para generar variaciones visuales.
* Uso de booleanos para activar o desactivar modos.
* Uso de bucles `for` para repetir formas.
* Uso de bucles anidados para recorrer la pantalla como una grilla.
* Lectura de píxeles de la imagen mediante `fuente.get()`.
* Cálculo de brillo y predominancia del rojo en cada zona de la imagen.
* Traducción de esos datos en unidades geométricas.

### Estados

* **Estado 0 — Portada:** introduce el proyecto y espera el input de inicio.
* **Estado 1 — Composición:** presenta una composición geométrica interactiva.
* **Estado 2 — Mecano-Faktura:** procesa la imagen y la reconstruye como mosaico geométrico.

### Eventos

* **ESPACIO:** cambia de portada a composición.
* **M:** cambia de composición a Mecano-Faktura y también permite volver.
* **E:** activa o desactiva el modo especial del círculo rojo.
* **N:** muestra u oculta el nombre del autor.
* **R:** vuelve a la portada desde cualquier estado.

### Outputs

* Portada inicial con instrucción parpadeante.
* Composición geométrica que responde al mouse.
* Círculo rojo con variación cromática en modo especial.
* Nombre del autor visible u oculto.
* Imagen reconstruida como mosaico de unidades rojas, negras y crema.

---

## Explicación de la interacción

El sistema recibe datos desde el mouse, el teclado y la imagen `aura.png`.

En la composición, `mouseX` se transforma mediante `map()` en un valor de separación para los rectángulos superiores. También se usa para cambiar el color del cuadrado central cuando el cursor cruza la mitad del lienzo. Por otro lado, `mouseY` se transforma en desplazamiento para mover un rectángulo largo en el lado derecho de la composición.

El teclado controla los cambios de estado y los modos internos. La tecla **M** permite pasar desde la composición hacia la mecanización de la imagen. La tecla **E** activa un modo especial donde el círculo rojo usa `random()` para variar su intensidad. La tecla **N** muestra u oculta el nombre del autor, y la tecla **R** permite volver a la portada.

En el estado de Mecano-Faktura, el programa recorre el lienzo usando dos bucles anidados. Cada celda de la grilla se asocia a una zona de la imagen `aura.png`. El sistema lee el color de esa zona y calcula dos valores: el brillo y la rojez. Si la zona tiene predominancia roja, se dibuja un círculo rojo. Si la zona es oscura, se dibuja un cuadrado negro. Si la zona es clara, no se dibuja nada y queda visible el fondo crema.

De esta manera, la imagen original se transforma en una composición mecánica, modular y geométrica.

---

## Recursos multimedia utilizados

### Imagen: `aura.png`

El proyecto utiliza una imagen abstracta con gradientes creada específicamente para este sistema. Esta imagen no cumple una función decorativa. Su rol es alimentar el estado generativo del proyecto.

En el estado de Mecano-Faktura, el código lee los píxeles de `aura.png` y transforma sus valores de color en decisiones visuales. La imagen funciona como dato de entrada: sus zonas rojas generan círculos rojos, sus zonas oscuras generan cuadrados negros y sus zonas claras dejan visible el fondo crema.

Sin esta imagen, el estado final no tendría información visual que procesar.

---

## Instrucciones de uso

1. Abrir el link público del proyecto en p5.js.
2. En la portada, presionar **ESPACIO** para comenzar.
3. En la composición:

   * Mover el mouse horizontalmente para modificar la separación de los rectángulos.
   * Mover el mouse verticalmente para desplazar el rectángulo derecho.
   * Presionar **E** para activar o desactivar el modo especial del círculo rojo.
   * Presionar **N** para mostrar u ocultar el nombre del autor.
   * Presionar **M** para pasar al estado de Mecano-Faktura.
4. En Mecano-Faktura:

   * Observar cómo la imagen se reconstruye como mosaico geométrico.
   * Presionar **M** para volver a la composición.
   * Presionar **R** para volver a la portada.

---

## Diagrama de flujo

El diagrama de flujo explica el recorrido completo del sistema, incluyendo estados, inputs, procesos, decisiones, outputs y transiciones.

![Diagrama de flujo](diagrama.png)

---

## Registro visual

### Referente

Se considera como referente principal la obra y teoría de Henryk Berlewi, especialmente su Mecano-Faktura, por su interés en mecanizar la pintura y reducir la composición a elementos geométricos reproducibles.

![Referente Berlewi](referentes/berlewi.png)

### Bocetos

Los bocetos iniciales exploraron la traducción de la estética de Berlewi a una composición propia con fondo crema, formas negras y acentos rojos.

![Boceto inicial](capturas/boceto.png)

### Iteraciones

Durante el proceso se realizaron pruebas de composición, escala, interacción con mouse y activación de modos mediante teclado. Una decisión importante fue transformar la composición de la Solemne II en un estado dentro de un sistema mayor.

![Iteración composición](capturas/composicion.png)

### Capturas del proyecto

**Estado 0 — Portada**

![Portada](capturas/portada.png)

**Estado 1 — Composición interactiva**

![Composición](capturas/composicion.png)

**Estado 2 — Mecano-Faktura**

![Mecano-Faktura](capturas/mecano-faktura.png)

---

## Estructura del repositorio

El repositorio contiene:

* `sketch.js` — código principal del proyecto.
* `aura.png` — imagen multimedia utilizada como dato de entrada.
* `README.md` — documentación del proyecto.
* `diagrama.png` — diagrama de flujo digital.
* Carpeta `capturas/` — imágenes del proceso y estados del sistema.
* Carpeta `referentes/` — imágenes o material visual de referencia.

---

## Reflexión final

Una de las principales decisiones del proyecto fue no trabajar la referencia de Henryk Berlewi únicamente como una estética visual, sino como una lógica de funcionamiento. Por eso el sistema no solo usa rojo, negro, crema y geometría, sino que intenta traducir la idea de mecanización a través del código.

La composición interactiva funciona como una etapa intermedia: todavía se reconoce como una construcción geométrica manipulable, pero ya responde a reglas computacionales. El estado final lleva esa lógica más lejos, porque la imagen `aura.png` deja de ser una imagen tradicional y se convierte en información que el sistema analiza, clasifica y reconstruye.

Las principales dificultades estuvieron en organizar los tres estados, controlar las transiciones con teclado y lograr que la imagen funcionara como un recurso activo dentro del sistema. También fue necesario ajustar la escala de la composición para que calzara correctamente dentro del lienzo cuadrado y mantener una relación visual clara con el referente.

A partir del proyecto aprendí a estructurar un sistema visual más complejo usando variables, condicionales, funciones propias, bucles, `map()`, `random()` y recursos multimedia. También entendí mejor cómo el pensamiento computacional puede aplicarse al diseño: no solo para producir una imagen final, sino para crear reglas, procesos y comportamientos visuales.

**Link para ejecutar:** [PEGA AQUÍ TU LINK PÚBLICO DE P5.JS]
**Link editable / código:** [PEGA AQUÍ TU LINK EDITABLE DE P5.JS]
**Repositorio GitHub:** [PEGA AQUÍ TU LINK DE GITHUB]

