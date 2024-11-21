# Automatización de Pruebas Credisiman (Android)

Este proyecto es para automatizar pruebas realizadas a la aplicación Credisiman, teniendo en cuenta los flujos críticos y/o repetitivos.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado Node.js en tu sistema y Android Studio para poder desplegar el dispositivo virtual. De igual manera, asegurate de colocar las capabilities del dispositivo dentro del archivo de configuracion de WebdriverIO (wdio.conf.js). Puedes descargar e instalar Node.js desde [nodejs.org](https://nodejs.org/) y Android Studio desde (https://developer.android.com/studio?hl=es-419)

## Instalación

Sigue estos pasos para instalar las dependencias necesarias para el proyecto:

1. **Clona el repositorio** (si aún no lo has hecho):
    ```
    git clone (URL_DEL_REPOSITORIO)
    cd credisiman_and
    ```

2. **Instala las dependencias del proyecto**:
    ```
    npm install
    ```

## Uso

Para ejecutar las pruebas automatizadas, sigue estos pasos:

1. **Asegúrate de instalar Appium**. Puedes descargar Appium con el siguiente comando:
    ```
    npm install -g appium
    ```
2. **Asegúrate de que Appium esté corriendo**. Puedes iniciar Appium con el siguiente comando:
    ```
    appium
    ```
3. **. Instalar Appium Doctor (opcional pero recomendado)**

Appium Doctor es una herramienta que te ayuda a verificar que todos los requisitos necesarios para ejecutar Appium estén instalados correctamente. Para instalar Appium Doctor, ejecuta: 

    ```
    npm install -g appium-doctor
    ```

4. **. Ejecuta las pruebas**

Ejecuta todas las pruebas a través del siguiente comando:

    ```
    npm run wdio
    ```
O puedes ejecutar una prueba especifica a traves del comando:

    ```
npx wdio run wdio.conf.js --spec test/specs/NOMBREDELAPRUEBA.JS
    ```

Esto ejecutará todas las pruebas especificadas en el directorio de especificaciones.

## Banco de datos

Tomar en cuenta que en la raiz del proyecto se encuentra un archivo JSON llamado users.json se encuentra el core de usuarios que se utiliza en cada una de las pruebas. En este JSON se podrán agregar nuevos usuarios o modificar los que ya se encuentran ingresados y colocar los permisos que tiene cada usuario para una mejor organización.

## Dependencias

El archivo `package.json` del proyecto incluye las siguientes dependencias:

```json
{
  "name": "credisiman_and",
  "type": "module",
  "devDependencies": {
    "@wdio/appium-service": "^8.26.1",
    "@wdio/cli": "^8.26.1",
    "@wdio/local-runner": "^8.26.1",
    "@wdio/mocha-framework": "^8.24.12",
    "@wdio/spec-reporter": "^8.24.12",
    "appium": "^2.2.3",
    "appium-uiautomator2-driver": "^2.34.2",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
  },
  "scripts": {
    "pretest": "lsof -ti:4723 | xargs kill -9",
    "wdio": "wdio run ./wdio.conf.js"
  }
}