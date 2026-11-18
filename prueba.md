# Ranking de jugadores

# **Prueba de Nivel - JavaScript**

## **Objetivo de la Prueba**

Este ejercicio tiene como objetivo evaluar tus conocimientos en JavaScript moderno (ES6+), incluyendo:

- Manipulación del DOM.
- Estructuras de control.
- Funciones.
- Arrays.
- Objetos.
- Validación de datos.
- Ordenación de datos.
- Testing.

Los ejercicios están diseñados para medir la comprensión y aplicación de estos conceptos sin depender de la memorización.

### **Instrucciones**

- Lee atentamente cada pregunta/escenario antes de responder.
- Usa JavaScript siguiendo las buenas prácticas de JavaScript moderno (ES6+).
- Organiza el código de forma clara y legible.
- Avanza paso a paso. Primero consigue que funcione la lógica principal y después implementa el resto de funcionalidades.
- Puedes consultar documentación oficial y buscadores.
- No está permitido utilizar herramientas de Inteligencia Artificial para generar código ni copiar soluciones completas de terceros.
- Se valorará especialmente la capacidad de razonamiento, organización y resolución de problemas.

---

### Recomendación de trabajo

Se recomienda abordar el ejercicio en dos fases:

- **Paso 1:** Implementa una solución funcional que cumpla los requisitos y criterios de aceptación.
- **Paso 2:** Una vez la aplicación funcione correctamente, mejora la organización del código separando la lógica de negocio de la manipulación del DOM.

---

### **Descripción**

#### Ranking de jugadores

Implementarás una aplicación para gestionar el ranking de jugadores de un juego.

- El usuario **DEBE** poder introducir el nombre de un jugador y su puntuación mediante un formulario.
- El usuario **PUEDE** añadir el jugador pulsando un botón.
- El usuario **DEBE** poder ver la puntuación de cada jugador.
- El usuario **DEBE** poder ver un ranking con todos los jugadores registrados, ordenados según su puntuación.

---

### **Funcionalidades**

- Crear una página HTML con:
    - Un campo de entrada para el nombre del jugador.
    - Un campo de entrada para la puntuación.
    - Un botón para añadir los datos.
    - Una sección donde mostrar mensajes al usuario.
    - Una sección donde mostrar el ranking de jugadores.
- Validar los datos introducidos por el usuario.
- Mostrar un mensaje indicando si los datos son válidos o no.
- Si los datos son válidos, añadir el jugador y su puntuación al ranking.
- Si el jugador ya existe en el ranking, actualizar su puntuación en lugar de crear un nuevo jugador.
- Después de añadir o actualizar correctamente un jugador, mostrar o actualizar el ranking.
- Mostrar los jugadores ordenados de mayor a menor puntuación.
- Si todavía no se ha registrado ningún jugador, mostrar un mensaje indicando que todavía no hay jugadores registrados.
- Si los datos introducidos no son válidos, mostrar un mensaje de error y mantener el ranking sin cambios.

---

### **Criterios de Aceptación**

#### Funcional

Un jugador será considerado **válido** cuando cumpla todas las siguientes condiciones:

- El nombre no puede estar vacío.
- La puntuación debe ser un número.
- La puntuación debe ser igual o superior a **0**.

Ejemplo:

```
Sergi
150
```

Además:

- Si los datos son válidos y el jugador no existe, se añadirá al ranking.
- Si el jugador ya existe, se actualizará su puntuación.
- No podrá haber dos jugadores con el mismo nombre en el ranking.
- Si los datos no son válidos, se mostrará un mensaje de error.
- Si se produce un error de validación, el ranking no deberá modificarse.
- Después de añadir o actualizar correctamente un jugador, el ranking deberá actualizarse.
- El ranking mostrará todos los jugadores ordenados de **mayor a menor puntuación**.
- Cada jugador deberá aparecer una sola vez en el ranking.

---

### **Técnico**

- La lógica de validación y gestión de jugadores deberá implementarse en funciones independientes del DOM.
- Las funciones encargadas de validar o manipular datos no deberán acceder directamente al DOM.
- Cada jugador deberá almacenarse como un objeto.
- Mantener un array con todos los jugadores registrados.
- Utilizar funciones con una única responsabilidad siempre que sea posible.
- Organizar el código de forma clara y mantenible.
- La lógica para añadir un jugador deberá comprobar si el jugador ya existe antes de crear uno nuevo.
- Si el jugador ya existe, deberá actualizarse su puntuación sin crear un jugador duplicado.
- La lógica de negocio deberá poder probarse sin depender del DOM.

Ejemplo de estructura:

```jsx
const players = [
  {
    name: "Sergi",
    score: 150
  },
  {
    name: "Rubén",
    score: 200
  }
];
```

Después de ordenar el ranking:

```jsx
[
  {
    name: "Rubén",
    score: 200
  },
  {
    name: "Sergi",
    score: 150
  }
];
```

No es obligatorio utilizar exactamente esta estructura, pero la información de cada jugador debe quedar correctamente organizada y ser reutilizable para mostrar el ranking.

---

### **Como empezar el proyecto**

- Crea la carpeta donde quieras desarrollar el ejercicio.
- Abre la carpeta en Visual Studio Code.
- En la terminal ejecuta:

```bash
npm install -D vitest
```

- En el archivo `package.json`, si aún no existe, crea el script:

```json
"scripts": {
  "test": "vitest"
}
```

- Añade un archivo `.gitignore` con:

```
node_modules/
```

- Crea un repositorio en **GitHub** y vincula tu proyecto.

---

### **Casos de prueba (formato Gherkin)**

#### Feature: Ranking de jugadores

#### Scenario: Añadir jugador válido

```gherkin
Given el jugador "Sergi" con una puntuación de 150
When el usuario pulsa "Añadir"
Then el jugador aparece en el ranking con 150 puntos
```

#### Scenario: Datos inválidos

```gherkin
Given el jugador "Sergi" con una puntuación de -20
When el usuario pulsa "Añadir"
Then se muestra un mensaje de error
```

#### Scenario: Actualizar jugador existente

```gherkin
Given el jugador "Sergi" con una puntuación de 150 ya existe
When el usuario intenta añadir a "Sergi" con una puntuación de 200
Then la puntuación de "Sergi" se actualiza a 200
And "Sergi" aparece una sola vez en el ranking
```

#### Scenario: Ranking ordenado

```gherkin
Given los jugadores "Sergi" con 150 puntos y "Rubén" con 200 puntos
When el usuario añade ambos jugadores
Then "Rubén" aparece antes que "Sergi" en el ranking
```

---

### **Tests**

- Implementar al menos un test unitario utilizando Vitest.
- El test debe validar uno de los escenarios definidos en los casos de prueba.
- El test debe ejecutarse correctamente mediante `npm test`.
- Se recomienda probar la lógica de negocio del ranking de jugadores de forma aislada, sin interactuar con el DOM.

---

### **Antes de empezar**

- Desinstala o mutea Copilot (es importante para construir tu propio pensamiento).

---

### **Entrega**

- Mediante Moodle, entrega el enlace al repositorio de GitHub con la solución.

¡Buena suerte! 🚀