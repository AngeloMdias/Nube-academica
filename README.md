# Nube Académica — Prototipo funcional Ver. 3 (64.3 %)

Proyecto Integrador II · grupo **GT2-GP13** · UNAN-León.

Esta versión implementa **9 de 14 requisitos (64.3 %)** y corresponde a la meta del 60 % de la semana 7.

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
