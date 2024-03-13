DESARROLLO DE APLICACIÓN CON REACT Y CREATE VITE CON CONEXIÓN A LA API DE MARVEL
Esta aplicación representa una implementación de desarrollo utilizando React y la herramienta Create Vite. En su estructura, se integra con la API de Marvel para proporcionar una experiencia interactiva y dinámica.

CARACTERÍSTICAS DESTACADAS

- GESTIÓN DEL ESTADO CON ContextAPI de React: La aplicación adopta un enfoque eficiente en la gestión del estado gracias a la integración de Context, lo que permite una manipulación eficaz de datos a lo largo de la aplicación.
- ORGANIZACIÓN MODULAR: La funcionalidad se ha segregado cuidadosamente de los componentes principales y se ha organizado en directorios especializados, denominados "helpers" o "Hooks", fortaleciendo la legibilidad y mantenimiento del código.
- Estilización con CSS: El diseño de la aplicación se ha cuidado meticulosamente mediante estilos en CSS, dando como resultado una presentación visual atractiva tal y como se indicaba en Figma.

INSTRUCCIONES DE DESPLIEGUE
Siga estos pasos para instalar la aplicación en su entorno local:

1. Instalación de Dependencias: Ejecute `npm install`. Este comando descargará todas las dependencias necesarias para el proyecto en el directorio actual.
2. Iniciar la Aplicación en modo desarrollo: Ejecute `npm run dev`. Con este comando, la aplicación está configurada para arrancar localmente y automáticamente en http://127.0.0.1:3000/
3. Aplicación en modo producción: Ejecute `npm run build`. Para realizar la traspilación, optimización, empaquetado y generación de archivos estáticos, una vez transpilado el proyecto, se puede probar si la transpilación ha sido correcta, ejecutando `npx http-server`, se ejecutará en http://192.168.1.33:8080
4. Se han subido las variables de entorno, el archivo .env.local, debido a que son necesarias para que el proyecto funcione.
   En circunstancias normales y reales, este archivo nunca se sube junto con el proyecto, debido a que las variables de entorno es una información sensible, debiendo cada usuario, crear manualmente el archivo .env, he incluir dichas variables, una vez clonado el proyecto.
