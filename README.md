MapaProvincialEspa-aInteractivo
===============================

Mapa de España interactivo y accesible (utilizando HTML + jQuery) en el que las provincias se resaltan al pasar por encima con el ratón o si estas se encuentra a foco.
Además se añade la posiblidad de mostrar un tooltip al pasar por encima de cada una de las provincias.

Es en repositorio se encuentran todos los ficheros necesarios para disponer del mapa interactivo.
Cada provincia quedará resaltada, bien pasando con el ratón sobre su zona del mapa correspondiente 
(o si el área de la provincia está a foco en su nabegación tabular), o bien sobre el texto del listado (o foco del mismo).

El listado de provincias queda prácticamente libre de css para que el usuario los pueda adaptar libremente a sus necesidades.

Ficheros existentes:
====================

* index.html: posee el código que pinta el mapa y lo divide en sus áreas correspondientes.
* css/estilos.css: posee las css básicas para el mapa. Descomentando la línea /*zoom:.5;-o-transform: scale(.5);-moz-transform: scale(.5)*/ y poniendo los datos necesarios, podemos escalar el mapa para que nos encaje en el tamaño deseado.
* css/jquery.qtip.min.css: posee las css optimizadas para el plugin (qTip2) que aplica el tooltip a las provincias.
* css/jquery.qtip.css: la misma css que anteriormente pero sin comprimir, para hacer los cambios que consideremos necesarios
* js/jquery-1.10.2.min.js: importamos la libraría jquery
* js/jquery-1.10.2.min.map: necesario para la librería jquery
* js/jquery.qtip.min.js: javascript que incorpora la funcionalidad del plugin qTip2
* js/javascript.js: javascript que maneja los eventos para que las provincias se resalten. Queda preparada la gestión de eventos click y keypress de cada provincia.
* img/: esta carpeta contiene las imágenes necesarias.
