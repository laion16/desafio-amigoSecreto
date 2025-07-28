# Proyecto: Amigo Secreto

<p align="center">
  <img alt="Imagen del Amigo Secreto" src="assets/amigo-secreto.png">
</p>


<p align="center">
    <img src="https://img.shields.io/badge/status-culminado-508050">
    <img src = "https://img.shields.io/badge/lenguaje-javascript-blue?logo=javascript">
</p>

## 📄 Descripción del proyecto 

El presente proyecto es un sistema web que emula el sorteo de un nombre de una lista de amigos, los cuales previamente se ingresarán.

## 🛠️ Funcionalidades del proyecto
* `Ingreso de nombres`: El sistema permitirá al usuario ingresar los nombres que formarán parte de la lista de amigos.

    ### Digitacion del nombre
    <img width=750 alt="Digitación del nombre" src="./assets/images-md/digitacion-nombre.png">
    
    ### Inclusioń del nombre a la lista
    <img width=750 alt="Incorporación del nombre a la lista" src="./assets/images-md/inclusion-nombre.png">


* `Validación de nombres`: El sistema validará los nombres ingresados, para ello controla casos como el ingreso de una cadena vacía o un nombre repetido. Además, para que el nombre sea válido se toma en consideración que este como mínimo tenga tres caracteres.

    ### Ingreso de un nombre repetido
    <img width=750 alt="Ingreso de un nombre repetido" src="./assets/images-md/repetido-nombre.png">
    
    ### Alerta de repetición
    <img width=750 alt="Alerta de repetición" src="./assets/images-md/repetido-alerta.png">

    ### Ingreso de cadena vacía
    <img width=750 alt="Ingreso de cadena vacía" src="./assets/images-md/vacio-nombre.png">
    
    ### Alerta de cadena vacía
    <img width=750 alt="Alerta de cadena vacía" src="./assets/images-md/vacio-alerta.png">    

* `Sorteo de nombres`: El sistema sorteará un nombre de la lista una vez se haga clic en el botón.

    ### Digitacion del nombre
    <img width=750 alt="Sorteo del nombre" src="./assets/images-md/sorteo-amigo.png">

## 👀 Posibles problemas y soluciones

El sistema está desarrollado bajo algunos supuestos que durante el uso podrían disminnuir la experiencia, tales como:

* Si bien el sistema permite sortear un nombre de una lista ya ingresada, para volver a ingresar a otra lista se debe recargar la página. Esto puede manejarse con la incorporacion de un botón, una vez se quiera borrar la lista de amigos actual.
* A nivel de interfaz, una vez se ingresan un cantidad considerable de nombres se genera un scroll lo que podría generar incomodidad. Esto podría manejarse con el empleo de código html y css, en los elementos `<li>` los cuales contienen los nombres ingresados.
* A nivel de accesibilidad, se podría incorporar una funcionalidad tal que permita, mediante audio, realizar las funciones del sistema. De tal forma, que ya no solo sea un tema de escritura sino que mediante voz también se pueda realizar el flujo del sorteo. 

## 📋 Tecnologías empleadas

El sistema está desarrollado con tecnologías básicas, siendo estas las siguientes:

* HTML.
* Javascript.
* CSS.

## 📁 Acceso al proyecto

* Dado que el sistema está desarrollado con tecnología básica no requiere de algo adicional a la clonación del repositorio.
* Para la clonación, ejecute el siguiente comando.

    ```
    git clone https://github.com/laion16/desafio-amigoSecreto.git
    ```

## ⚙️ Despliegue del sistema

Puede probar la [demo](https://laion16.github.io/desafio-amigoSecreto/) del sistema, el cual fue desplegado en GitHub Pages.

## 🚨 Licencia

Este proyecto está bajo la Licencia (MIT) - mira el archivo [LICENSE](./LICENSE) para detalles.

## 🖋️ Autor

* **Laion16** - *Desarrollo de las funcionalidades sistema / Documentación* - [Laion16](https://github.com/laion16)