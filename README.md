
# PROYECTO WEBPACK CON LINTERS Y DESPLIEGUE EN AZURE

## Tabla de Contenido
- [Descripción del Proyecto](#descripción-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Características Principales](#características-principales)
- [Instalación](#instalación)
- [Uso](#uso)
- [Pruebas](#pruebas)
- [Despliegue](#despliegue)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Comandos Importantes](#comandos-importantes)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Autor](#autor)
- [Agradecimientos](#agradecimientos)
- [Preguntas Frecuentes](#preguntas-frecuentes)
- [Referencias](#referencias)

---

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

1. Instala las dependencias:
   ```bash
   npm install

1. Para compilar el proyecto en modo desarrollo, ejecuta:
   ```bash
   npm run build-dev

1. Para compilar en modo producción, usa:
   ```bash
   npm run build-prod

Iniciar el Servidor de Desarrollo
1. Para iniciar el servidor de desarrollo, ejecuta:
   ```bash
   npm start

Pruebas
1. Ejecuta los linters para verificar la calidad del código:
HTML,
CSS,
JavaScript:
   ```bash
   npx hint .
   npx stylelint "src/**/*.css"
   npx eslint .


Despliegue

1. El proyecto está configurado para desplegarse       automáticamente en Azure mediante GitHub Actions. Para desplegar manualmente, ejecuta:
   ```bash
   npm run build-prod


**Estructura del Proyecto**

```
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
```
**Comandos Importantes**

Instalar dependencias:
```bash
   npm installd
```
Instalar dependencias:
```bash
   npm run build-dev
```
Compilar en modo producción:
```bash
  npm run build-prod
```
Iniciar servidor de desarrollo:
```bash
npm start
```
Ejecutar linters:

```bash
npx hint .  # Verifica HTML
npx stylelint "src/**/*.css"  # Verifica CSS
npx eslint .  # Verifica JavaScript
```

Contribuir
¡Las contribuciones son bienvenidas! Si deseas contribuir al proyecto, sigue estos pasos:

Haz un fork del repositorio.

Crea una rama con tus cambios:

```bash
git checkout -b nombre-de-tu-rama
```

Realiza tus cambios y haz commit:

```bash
git add .
git commit -m "Descripción de tus cambios"
```
Envía un pull request.

---

## **Licencia**
- Este proyecto está bajo la licencia `MIT`.
---

---

## **Autor**
- Tu Nombre: Diller Chaguala
- GitHub: `@dillerchaguala`.
---

## **Agradecimientos**
Agradezco al instructor del SENA por su apoyo y guía.

## **Preguntas Frecuentes**

### **¿Cómo puedo contribuir al proyecto?**
Puedes hacer un fork del repositorio, crear una rama con tus cambios y enviar un pull request.

### **¿Cómo ejecuto el proyecto en producción?**
Ejecuta el siguiente comando:
```
npm run build-prod
```



<p align="right"><a href="#readme-top">Volver al inicio</a></p>



