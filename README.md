# Nube Académica — Prototipo funcional Ver. 4 (avance global estimado 80 %)

Proyecto Integrador II · grupo **GT2-GP13** · UNAN-León.

**Avance global declarado por el equipo: 80 % (estimado).** La cobertura de requisitos íntegramente comprobados sigue siendo **9/14 = 64,3 %**. El 80 % no se presenta como número de requisitos aceptados: 11/14 = 78,6 % y 12/14 = 85,7 %. Esta entrega añade mejoras parciales de accesibilidad y diseño adaptable (RNF-05), todavía sin validación formal.

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

Los cinco requisitos no funcionales de la matriz (RNF-01 a RNF-05) siguen pendientes de aceptación. El prototipo continúa siendo una demostración web: no sustituye sistemas oficiales ni afirma integración productiva con identidad institucional o una nube real.

## Abrir

Se recomienda servir la carpeta con un servidor local para que las descargas incluidas funcionen de forma consistente:

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

El segundo estudiante permite comprobar que RF-03 no reutiliza las notas del primer estudiante.

## Archivos reales

Los documentos de ejemplo están en `sample-files/`. Las cargas nuevas se guardan como blobs en **IndexedDB** y sus metadatos en `localStorage`, por lo que el botón Descargar recupera el contenido real dentro del mismo navegador.

## Pruebas automatizadas

Con Node.js instalado:

```bash
node tests/run-tests.js
```

La entrega incluye 10 pruebas de lógica para cobertura, separación de estudiantes, búsqueda, filtros, notificaciones, reportes, CSV y permisos.

## Publicar en GitHub Pages

Sube a la raíz del repositorio `index.html`, `styles.css`, `logic.js`, `script.js`, `README.md` y la carpeta `sample-files/`. GitHub Pages puede alojar esta demostración estática; una autenticación institucional, API o base compartida requiere servicios de servidor adicionales.

## Estado de entrega actual
- Aplicación: avance global **80 % estimado** por el equipo; 9/14 requisitos completos verificados.
- Artículo: **100 % de secciones de la rúbrica redactadas**; revisión editorial y ORCID de coautores pendientes.
- Nuevas mejoras: navegación por teclado, enlace de salto, tablas desplazables y movimiento reducido.

## Estado de entrega actual
- Aplicación: avance global **80 % estimado** por el equipo; 9/14 requisitos completos verificados.
- Artículo: **100 % de secciones de la rúbrica redactadas**; revisión editorial y ORCID de coautores pendientes.
- Nuevas mejoras: navegación por teclado, enlace de salto, tablas desplazables y movimiento reducido.

## Utilidad para estudiantes y docentes
- **Estudiantes:** agenda personal de tareas, exámenes y recordatorios; consulta de calificaciones, horarios, documentos y avisos.
- **Docentes:** planificación de actividades, recordatorios de publicación/revisión, carga documental y notificaciones.
- **Continuidad:** respaldo y restauración de los datos locales de demostración.
