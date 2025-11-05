# PRUEBA DE DESAFÍO PARA DESARROLLADORES WEB FRONTEND

Esta prueba está diseñada para evaluar tus habilidades técnicas en desarrollo frontend y tu capacidad
para estructurar una aplicación completa, manejando datos externos, estados y lógica de interfaz.

Puedes apoyarte en herramientas de desarrollo modernas, incluyendo inteligencia artificial (IA), pero
deberás entender y poder explicar tu solución durante una entrevista técnica posterior.

Valoramos la calidad, organización y claridad del código, así como la estructura de la aplicación, el
manejo del estado, la navegación y la experiencia de usuario.Si tienes alguna pregunta o necesitas
aclaraciones adicionales, no dudes en contactarnos.

## DESCRIPCIÓN TÉCNICA

Realizar un sitio web (SPA) para la colección de láminas digitales basados en universo Star Wars. El sitio debe consumir el API RESTful público Star Wars API (SWAPI) https://swapi.dev/documentation de donde
obtendrá los datos de las láminas a coleccionar. Para esta prueba solo se utilizarán como coleccionables
las películas, los personajes y las naves presentes en este universo.

### Consideraciones:

1. Cada usuario que ingresa al sitio obtiene automáticamente un álbum digital vacío.
2. El álbum está compuesto por 3 secciones: Películas (6 láminas), Personajes (82 láminas), Naves
(36 láminas).
3. Las láminas están categorizadas en 2 grupos, especiales y regulares, las cuales deben ser
identificadas visualmente como tales. Todas las 6 películas, los 20 primeros personales y las 10
primeras naves son consideradas láminas especiales.
4. El sitio contendrá un menú con 2 opciones, “Obtener Láminas”, “Mi álbum”.
5. La opción “Obtener Láminas” debe mostrar 4 sobres disponibles y listos para abrir (hacer clic),
solo se puede abrir un sobre a la vez, es por ello que el resto de sobres pendientes deben
permanecer bloqueados durante 1 minuto con un contador de tiempo visible, este contador
debe permanecer incluso si el usuario se dirige a la sección “Mi álbum”. La acción de bloqueo
por 1 minuto de los sobres restantes se debe ejecutar cada vez que se abre un sobre disponible.
6. Cada sobre contiene 5 láminas, las láminas pueden venir en 2 configuraciones: la primera
configuración contiene 1 película, 3 personajes y 1 nave; la segunda configuración contiene 3
personajes y 2 naves. Tanto la configuración del sobre como las láminas que contienen deben
ser aleatorias.
7. Al abrir un sobre se debe realizar una consulta al API según la configuración de este y mostrar al
usuario las 5 láminas obtenidas. El número de la lámina debe ser el mismo del id del recurso del
API. Si la lámina no se encuentra presente en el álbum del usuario deberá contener un botón
“Agregar al álbum”, si la lámina ya se encuentra presente deberá contener un botón
“Descartar”. Cada una de las láminas deberá indicar la categoría (Especial, Regular), la sección
del álbum a la que pertenece (Películas, Personajes, Naves), el número de lámina y el nombre
del recurso.

8. Una vez se tomen las acciones sobre todas las láminas se podrá descartar el sobre actual y
seleccionar un nuevo sobre.

9. En la opción “Mi álbum” se presentará al usuario todas las láminas obtenidas según su sección
(Películas, Personajes, Naves), cada sección inicia con la lámina 1 correspondiente al id del
recurso del API. Para las posiciones que aún no poseen láminas solo saldrá el número o id
correspondiente, las posiciones que ya tengan una lámina asignada aparecerán el número de
lámina y el nombre del recurso, sobre estas últimas el usuario podrá hacer clic y se deberá
mostrar toda la información disponible para el recurso consultando de nuevo el API.

### Indicaciones adicionales:

- El objetivo de la prueba es evaluar las aptitudes de desarrollo frontend, se recomienda no gastar
tiempo y esfuerzo en desarrollos backend ya que no serán tomados en cuenta. Por ello se
entrega un API totalmente funcional.
- Se sugiere utilizar la librería React.js para el desarrollo del aplicativo. El diseño del sitio, uso de
frameworks CSS y todos los assets o recursos visuales a utilizar quedan a disposición del
programador.
- El control de versiones del proyecto debe ser realizado utilizando GIT. Se tendrá en
consideración el manejo del repositorio, por ello se recomienda realizar commits por cada tarea
que consideren finalizada.
Entregables:
- Crear un repositorio público (bitbucket, github, gitlab, etc) para su revisión.
- Al completar la prueba enviar un correo de notificación a cesar@iot4a.com colocando las urls
del hosting y del repositorio.