# Nube Académica — Prototipo funcional Ver. 6.2.1

Proyecto Integrador II · grupo **GT2-GP13** · UNAN-León.

**Cobertura actual: 11 de 14 requisitos implementados y verificados = 78,6 %, aproximado al 80 %.** La versión incorpora los nueve requisitos funcionales de la matriz, más **RNF-04 Respaldo y recuperación** y **RNF-05 Interfaz adaptable y accesibilidad**. Permanecen pendientes RNF-01 Disponibilidad, RNF-02 Seguridad productiva y RNF-03 Rendimiento.

## Requisitos implementados

1. **RF-01** — Inicio de sesión con credenciales de demostración.
2. **RF-02** — Menú y permisos por rol: Estudiante, Docente y Administrador académico.
3. **RF-03** — Consulta académica por período con información separada por estudiante.
4. **RF-04** — Gestión de registros académicos con validación y persistencia local.
5. **RF-05** — Repositorio documental con carga y descarga del archivo real en el navegador.
6. **RF-06** — Búsqueda integrada y filtros respetando permisos del rol.
7. **RF-07** — Notificaciones internas por destinatario y estado de lectura independiente.
8. **RF-08** — Reportes académicos por período con exportación CSV consistente con el filtro.
9. **RF-09** — Bitácora de accesos y operaciones críticas, visible solo para administrador.
10. **RNF-04** — Respaldo y recuperación local mediante exportación e importación validada de archivos JSON.
11. **RNF-05** — Interfaz adaptable y accesible: navegación por teclado, foco visible, enlace para saltar al contenido, adaptación móvil y preferencia de movimiento reducido.

## Utilidad para estudiantes y docentes

La versión 4 amplía el prototipo con una **Agenda Académica** enfocada en el uso diario:

- **Estudiantes:** pueden registrar tareas, exámenes, clases y recordatorios; consultar asignatura y fecha límite; marcar actividades como completadas o reabrirlas; además conservan consulta de calificaciones, documentos, búsqueda y notificaciones.
- **Docentes:** disponen de planificación y seguimiento de actividades académicas, recordatorios de publicación/revisión, repositorio documental, búsqueda y notificaciones.
- **Continuidad de la demostración:** estudiantes y docentes pueden exportar un respaldo de los datos locales y restaurar una copia válida.

## Requisitos pendientes

- **RNF-01 — Disponibilidad:** requiere medición en un entorno de operación durante un período definido.
- **RNF-02 — Seguridad productiva:** requiere autenticación/autorización del lado del servidor, HTTPS e infraestructura productiva.
- **RNF-03 — Rendimiento:** requiere pruebas de carga y mediciones de tiempos de respuesta.

El prototipo continúa siendo una demostración académica y no sustituye sistemas institucionales oficiales.

## Abrir

Se recomienda servir la carpeta con un servidor local:

```bash
python -m http.server 8000
```

Luego abre `http://localhost:8000`.

También puede abrirse `index.html` directamente para revisar la mayor parte de la interfaz.

## Cuentas de demostración

| Rol | Correo | Contraseña |
|---|---|---|
| Estudiante | estudiante@unanleon.edu.ni | Demo123! |
| Docente | docente@unanleon.edu.ni | Demo123! |
| Administrador | admin@unanleon.edu.ni | Demo123! |
| Segundo estudiante | ana.castillo@unanleon.edu.ni | Demo123! |

## Archivos y persistencia

Los documentos de ejemplo están en `sample-files/`. Las cargas nuevas se guardan como blobs en **IndexedDB** y sus metadatos en `localStorage`. La agenda, notificaciones, registros y demás datos de demostración se conservan localmente en el navegador.

## Respaldo y recuperación — RNF-04

Desde **Agenda académica** se puede:

- **Exportar respaldo:** genera un archivo JSON con usuarios, registros, documentos, notificaciones, bitácora y agenda.
- **Restaurar respaldo:** valida el formato `NubeAcademicaBackup-v1` antes de sustituir los datos locales y vuelve a renderizar la aplicación.

## Adaptabilidad y accesibilidad — RNF-05

La interfaz incorpora diseño responsive para pantallas pequeñas, navegación por teclado, foco visible, enlace de salto al contenido, tablas desplazables y respeto de `prefers-reduced-motion`.

## Pruebas

Con Node.js instalado:

```bash
node tests/run-tests.js
node tests/test-rnf-utility.js
```

La entrega mantiene **10/10 pruebas automatizadas de lógica** y añade **8/8 verificaciones** de agenda, respaldo/recuperación y adaptabilidad.

## Publicar en GitHub Pages

Sube a la raíz del repositorio `index.html`, `styles.css`, `logic.js`, `script.js`, `README.md`, la carpeta `sample-files/` y, si deseas conservarlas en el repositorio, `tests/`.

## Estado de la entrega

- **Aplicación:** 11/14 requisitos = **78,6 % ≈ 80 %**.
- **Artículo:** **100 % de los apartados solicitados por la rúbrica redactados**.
- **Enfoque de la Ver. 4:** mayor utilidad para estudiantes y docentes mediante agenda académica, seguimiento de actividades, documentos, avisos y continuidad de datos.


## Mejoras de utilidad Ver. 5
La interfaz principal ya no muestra bloques de porcentaje/cobertura de requisitos; esa información pertenece a la documentación del proyecto y no al producto final.

### Estudiante
- Mis asignaturas con horario, docente y próximas actividades.
- Actividades con estado Pendiente, Entregado y Calificado.
- Entrega de archivos (evidencia demostrativa por nombre de archivo).
- Consulta de nota y retroalimentación del docente.
- Notificaciones cuando se publica o califica una actividad.

### Docente
- Vista de asignaturas impartidas y cantidad de estudiantes.
- Creación y publicación de actividades por asignatura.
- Recepción de entregas de estudiantes.
- Calificación y retroalimentación.
- Notificación automática al estudiante al publicar la nota.

### Flujo demostrable
Docente publica actividad → estudiante recibe aviso → estudiante entrega → docente recibe la entrega → docente califica → estudiante recibe calificación y retroalimentación.

## Interfaz y paleta
Se mantiene la paleta azul marino, azul medio y cian de la versión anterior. Es coherente con un entorno académico/institucional, mantiene buen contraste y diferencia correctamente navegación, acciones y estados. Se priorizó mejorar la jerarquía y utilidad antes que cambiar una identidad visual que ya funcionaba.


## Ajuste de interfaz Ver. 6
La interfaz de uso diario fue separada de la documentación técnica del proyecto. Los porcentajes de avance, códigos RF/RNF y la matriz de cobertura ya no se muestran a estudiantes ni docentes. La cobertura del proyecto continúa documentándose aquí y en los entregables académicos.

El respaldo y la recuperación se trasladaron a **Administrador → Configuración**, porque son funciones de gestión del sistema y no tareas propias de estudiantes o docentes.

La agenda se compactó visualmente y los perfiles académicos mantienen como centro las asignaturas, actividades, entregas, calificaciones, retroalimentación, documentos y notificaciones.


## Corrección urgente Ver. 6.2.1
- Corrige la carga de **Mis asignaturas** y **Actividades y entregas** para estudiante y docente.
- Reinicia los datos de flujo académico al cambiar de versión, evitando estados vacíos heredados de versiones anteriores.
- El botón **Crear actividad** se muestra únicamente al docente.
- **Restablecer demo** se muestra únicamente al administrador.
- Respaldo y recuperación se mantiene exclusivamente en **Administrador → Configuración**.
- Se añadieron parámetros de versión a CSS/JS para evitar que GitHub Pages reutilice archivos antiguos en caché.
