markdown
Copy
# **PROYECTO WEBPACK CON LINTERS Y DESPLIEGUE EN AZURE**

## **Descripción del Proyecto**
Este proyecto es una configuración básica de **Webpack** para un proyecto de desarrollo web. Incluye la configuración de loaders para **CSS**, **HTML**, y plugins como `html-webpack-plugin` y `webpack-dev-server`. Además, se integra con linters como **ESLint**, **Stylelint**, y **Hint** para garantizar la calidad del código. El proyecto también está configurado para desplegarse automáticamente en **Azure** mediante **GitHub Actions**.

---

## **Tecnologías Utilizadas**
### **Tech Stack**
- **Webpack**: Empaquetador de módulos.
- **Babel**: Transpilador de JavaScript.
- **ESLint**: Linter para JavaScript.
- **Stylelint**: Linter para CSS.
- **Hint**: Linter para HTML.
- **HTML, CSS, JavaScript**: Tecnologías base.

---

## **Características Principales**
- **Configuración de Webpack**: Incluye loaders para CSS, HTML y plugins como `html-webpack-plugin`.
- **Integración con Linters**: ESLint, Stylelint, y Hint para garantizar la calidad del código.
- **Servidor de Desarrollo**: Uso de `webpack-dev-server` para desarrollo local.
- **Despliegue Automático**: Configuración de GitHub Actions para despliegue en Azure.

---

## **Instalación**
Para instalar las dependencias del proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/proyecto-webpack.git
   cd proyecto-webpack
Instala las dependencias:

bash
Copy
npm install
Uso
Compilar el Proyecto
Para compilar el proyecto en modo desarrollo, ejecuta:

bash
Copy
npm run build-dev
Para compilar en modo producción, usa:

bash
Copy
npm run build-prod
Iniciar el Servidor de Desarrollo
Para iniciar el servidor de desarrollo, ejecuta:

bash
Copy
npm start
Pruebas
Ejecuta los linters para verificar la calidad del código:

HTML:

bash
Copy
npx hint .
CSS:

bash
Copy
npx stylelint "src/**/*.css"
JavaScript:

bash
Copy
npx eslint .
Despliegue
El proyecto está configurado para desplegarse automáticamente en Azure mediante GitHub Actions. Para desplegar manualmente, ejecuta:

bash
Copy
npm run build-prod
Estructura del Proyecto
Copy
proyecto-webpack/
├── dist/
├── node_modules/
├── src/
│   ├── assets/
│   ├── js/
│   ├── index.html
│   └── main.js
├── .babelrc
├── .eslintrc
├── .gitignore
├── .stylelintrc
├── package-lock.json
├── package.json
├── server.js
└── webpack.config.js
Comandos Importantes
Instalar dependencias:

bash
Copy
npm install
Compilar en modo desarrollo:

bash
Copy
npm run build-dev
Compilar en modo producción:

bash
Copy
npm run build-prod
Iniciar servidor de desarrollo:

bash
Copy
npm start
Ejecutar linters:

bash
Copy
npx hint .  # Verifica HTML
npx stylelint "src/**/*.css"  # Verifica CSS
npx eslint .  # Verifica JavaScript
Contribuir
¡Las contribuciones son bienvenidas! Si deseas contribuir al proyecto, sigue estos pasos:

Haz un fork del repositorio.

Crea una rama con tus cambios:

bash
Copy
git checkout -b nombre-de-tu-rama
Realiza tus cambios y haz commit:

bash
Copy
git add .
git commit -m "Descripción de tus cambios"
Envía un pull request.

Licencia
Este proyecto está bajo la licencia MIT.

Autor
Tu Nombre

GitHub: @tu-usuario

LinkedIn: Tu Perfil

Agradecimientos
Agradezco a mis compañeros de aprendizaje y al instructor de SENA por su apoyo y guía.

Preguntas Frecuentes
¿Cómo puedo contribuir al proyecto?
Puedes hacer un fork del repositorio, crear una rama con tus cambios y enviar un pull request.

¿Cómo ejecuto el proyecto en producción?
Ejecuta el siguiente comando:

bash
Copy
npm run build-prod
Referencias
Documentación de Webpack

Documentación de ESLint

Documentación de Stylelint

Documentación de Hint

<p align="right"><a href="#readme-top">Volver al inicio</a></p> ```
Explicación del Formato
Títulos en Negrita: Usé # para los títulos y ** para resaltar el texto en negrita.

Ejemplo: # **PROYECTO WEBPACK CON LINTERS Y DESPLIEGUE EN AZURE**.

Comandos en Cuadritos: Usé bash ``` para mostrar los comandos en un cuadrito.

Ejemplo:

markdown
Copy
```bash
npm install
Copy
Listas: Usé - para listas no numeradas y 1. para listas numeradas.

Ejemplo:

markdown
Copy
- **Compilar en modo desarrollo**:
  ```bash
  npm run build-dev
Copy
Código de Bloque: Usé para mostrar bloques de código.

Ejemplo:

markdown
Copy
proyecto-webpack/
├── dist/
├── node_modules/
└── src/

Copy
Enlaces: Usé [texto](enlace) para enlaces.

Ejemplo: [GitHub](https://github.com/dillerchaguala).

