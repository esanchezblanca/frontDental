# App clínica dental
Proyecto que recrea la parte frontend con react de una app de citas de una consulta de dentistas. 

### Requisitos e instalación 
Descargue el zip del proyecto, descomprímalo y ábralo con Visual Studio Code o cualquier programa similar.
Descargue también el backend del siguiente enlace: https://github.com/esanchezblanca/backendDentista.git

Al abrir las dos carpetas del proyecto: clínicareact y backendDentista.
Abra un terminal en Visual Studio situándose en la carpeta **clinicareact** y escriba **npm start** para que el navegador abra en localhost el proyecto. Abra un segundo terminal situándose en la carpeta **backend** y arranque el servidor con el comando **nodemon app.js**.

### Funcionamiento
Vamos a describir un ejemplo de uso de la aplicación de citas.
Al arrancar el servidor y la aplicación podrá ver que se abre la página por el home. En esta página aparece una barra de navegación y varios elementos en el cuerpo de la página que nos aportan información sobre la clínica.

En caso de no tener usuario, podemos dirigirnos al botón **register** que está situado en la esquina superior derecha, en la barra de navegación. Nos pedirá una serie de datos para registrarnos. Puede introducirlos.
Sin embargo, para obtener una experiencia mejor, recomendamos utilizar uno de los usuarios que ya vienen registrados en el botón **Login**.
	Mail: **pruebaguest@guest.com**
	Contraseña: **12345**

Una vez enviado este formulario, nos aparecerá una nueva página de citas con dos tarjetas: añadir cita y ver las pendientes.
En la página de añadir cita encontramos un calendario y un desplegable con los servicios de los que dispone la clínica.
En ver citas pendientes recibiremos la información listada de las citas futuras.

## Licencia 

Este proyecto ha sido realizado por Elena Sánchez de la Blanca y está sujeto a la licencia MIT. Para obtener más información, por favor diríjase al archivo LICENSE que encontrará adjunto.
