DESARROLLO DE APLICACIÓN CON REACT Y CREATE VITE CON CONEXIÓN A LA API DE MARVEL
Esta aplicación representa una implementación de desarrollo utilizando React y la herramienta Create Vite. En su estructura, se integra con la API de Marvel para proporcionar una experiencia interactiva y dinámica.

CARACTERÍSTICAS DESTACADAS

- ORGANIZACIÓN MODULAR: La funcionalidad se ha segregado cuidadosamente de los componentes principales y se ha organizado en directorios especializados, denominados "helpers", "utils" y "Hooks", fortaleciendo la legibilidad y mantenimiento del código.

- GESTIÓN DEL ESTADO CON CONTEXT de React: La aplicación adopta un enfoque eficiente en la gestión del estado gracias a la integración de Context, lo que permite una manipulación eficaz de datos a lo largo de la aplicación.

- PERSISTENCIA DE DATOS EN SESSIONSTORAGE: Se ha implementado la funcionalidad para agregar datos al sessionStorage, lo que proporciona persistencia a los datos incluso después de actualizar la página. Esta característica mejora la experiencia del usuario al permitir que ciertos datos se conserven entre sesiones de navegación.

- CONFIGURACION Y REALIZACIÓN DE TEST UNITARIOS CON VITEST: A pesar de todo, y con mucho trabajo, he conseguido configurar vitest y hacer algun test básico a la aplicación.

- CREACIÓN Y ESTILIZACIÓN DE COMPONENTES: Tanto la creación de los componentes como la estilización de los mismos, ha sido creada a mano y desde cero, sin utilización ninguna de librerias externas, siendo la aplicación, 100% responsive.

- ESTILIZACIÓN CON CSS: El diseño de la aplicación se ha cuidado meticulosamente mediante estilos en CSS, también se han utilizado variables, dando como resultado una presentación visual atractiva, tal y como se indicaba en Figma.

INSTRUCCIONES DE DESPLIEGUE
Siga estos pasos para instalar la aplicación en su entorno local:

1. Instalación de Dependencias: Ejecute `npm install`. Este comando descargará todas las dependencias necesarias para el proyecto en el directorio actual.

2. Iniciar la Aplicación en modo desarrollo: Ejecute `npm run dev`. Con este comando, la aplicación está configurada para arrancar localmente y automáticamente en http://127.0.0.1:3000/

3. Aplicación en modo producción: Ejecute `npm run build`. Para realizar la traspilación, optimización, empaquetado y generación de archivos estáticos, una vez transpilado el proyecto. Se puede probar si la transpilación ha sido correcta, ejecutando `npx http-server`, se ejecutará en http://192.168.1.33:8080

4. Ejecución de test unitarios: Los test se pueden ejecutar con `npm test`.

5. Se han subido las variables de entorno, el archivo .env.local, debido a que son necesarias para que el proyecto funcione.
   En circunstancias normales y reales, este archivo nunca se sube junto con el proyecto, debido a que las variables de entorno es una información sensible, debiendo cada usuario, crear manualmente el archivo .env, e incluir dichas variables, una vez clonado el proyecto.
