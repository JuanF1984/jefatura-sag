# Oferta Educativa 2027 — fuente, criterios y pendientes

Fuente vigente: `material-original/oferta-educativa-2027/OFERTAS 2027 EXPO EDU SAG  V2.xlsx` (1 hoja, "Hoja 1", recibida el 17/11/2026).
Versión anterior: `OFERTAS 2027 EXPO EDU SAG .xlsx` (23/10/2026). Los cambios entre ambas están en "Cambios de la V2".
Dataset publicado: `src/data/oferta-educativa.ts` (curado a mano). Página: `/oferta-educativa`.

## Por qué el dataset 2027 no se generó con el script

`pnpm run migrar:oferta -- "<ruta>"` revisa la planilla y se niega a escribir porque la fila 32
(fila 30 en la V1) es un subencabezado intermedio del CFP 401 (`TRAYECTO` / `PERFIL DEL EGRESADO`). A partir de ahí
los perfiles del egresado del CFP están cargados en la columna "perfil del ingresante". Leerla
automáticamente publicaría los perfiles en el campo equivocado.

Para el próximo ciclo conviene pedir la planilla con una fila por oferta y estas columnas:
`Escuela | Orientación/Trayecto | Familia (opcional) | Perfil del ingresante | Perfil del egresado`.

## Cambios de la V2

Se compararon celda por celda las dos planillas. La V2 agrega dos filas del ISFD 142 y por eso las filas del CFP 401 se corrieron dos lugares. Los trayectos y perfiles del CFP no cambiaron.

| Fila V2 | Cambio | Publicado |
|---|---|---|
| 3–4 | EES 1: Comunicación y Economía y Administración, con perfiles | Sí |
| 8 | EES 3: Economía y Administración, con perfiles | Sí |
| 13 | EES 8: perfil del ingresante | Sí |
| 14 | EES 9: perfil del ingresante | Sí |
| 24–30 | ISFD 142: 5 profesorados y un perfil del ingresante común (celda combinada D24:D30). Sin perfil del egresado | Sí, el perfil común se repite en cada profesorado |

## Publicado (15 instituciones, 37 ofertas)

| Grupo | Institución (CUE) | Ofertas |
|---|---|---|
| Secundaria | EES 1 (0609036-00) | Comunicación, Economía y Administración |
| Secundaria | EES 2 (0609034-00) | Ciencias Sociales, Ciencias Naturales, Economía y Administración |
| Secundaria | EES 3 (0620100-00) | Economía y Administración |
| Secundaria | EES 4 (0622086-00) | Arte — Artes Visuales |
| Secundaria | EES 5 (0620454-00) | Ciencias Sociales |
| Secundaria | EES 8 (0619818-00) | Arte — Música |
| Secundaria | EES 9 (0619819-00) | Educación Física |
| Secundaria | EES 10 (0624530-00) | Bachiller en Turismo |
| Técnica y Agraria | EEST 1 (0605343-00) | Técnico Electromecánico, Técnico en Energías Renovables, Técnico en Multimedios |
| Técnica y Agraria | CEPT 2 (0609037-00) | Técnico en Producción Agropecuaria con orientación en Administración |
| Jóvenes y Adultos | CENS 451 (0623755-00) | Bachiller en Economía y Administración |
| Jóvenes y Adultos | Plan FinEs (sin CUE) | Bachiller en Ciencias Sociales |
| Jóvenes y Adultos | EEPA 702 (0604332-00) | Nivel primario (equivalente a 6.º año) |
| Superior | ISFD 142 (0604335-00) | Profesorado de Educación Primaria, de Educación Inicial, de Historia, de Biología y de Lengua y Literatura |
| Formación Profesional | CFP 401 (0617001-00) | 14 trayectos (ver abajo) |

CFP 401, agrupado por familias. Las familias son una organización visual del sitio, no son denominaciones oficiales:

- Metalmecánica: Soldador Básico, Soldador
- Instalaciones eléctricas y de gas: Electricista en Inmuebles, Gasista de Unidades Unifuncionales
- Cuidados y salud: Operadora/or de Cuidados de Adultas/os Mayores, Auxiliar en Atención al Público en Instituciones de Salud
- Informática: Habilidades Digitales, Usuaria/o de IA Generativa, Programador de Sistemas Informáticos Multimediales
- Alimentación: Elaboración de Alfajores Regionales, Despostador, Manipulador de Alimentos
- Textil: Operador de Máquina para la Confección de Indumentaria

## Excluido (revisar con la fuente)

| Fila (V2) | Dato | Motivo |
|---|---|---|
| 11, 12 | EES 6, EES 7 | Sin orientación cargada |
| 23 | "Diseño-Curricular para el Nivel Primario.pdf" | Celda suelta, sin archivo ni enlace |
| 37 | Operadora/or de Cuidados de Personas con Discapacidad | Marcado "(2028)": no es oferta 2027 |
| 42 | Electricidad (continuidad) | Anotación interna y perfil de "Electricista Industrial" (no coincide) |
| 43 | Montador Electricista Domiciliario | El perfil corresponde a "Instalador/a de Instalaciones Sanitarias Domiciliarias" |
| 45 | Operador de Informática para Administración y Gestión | El perfil se titula "Operador/a de Herramientas Informáticas para la Gestión Administrativa" |
| 50–54 | ORIENTACION PROFESIONAL (×5) | Fila repetida; "articulación con instituciones", no es oferta abierta |

## Ajustes aplicados al publicar (sólo forma, sin agregar información)

- **Ortografía y tildes:**
  - Economía, Administración, energías, electromecánico, radiofónicos, creación, también, hábitos
  - Técnico, Producción, cercanía, máximo, está
  - "comprende" → "comprender" (EES 5)
  - "critica/demostrado/herramients/interación" → "crítica/demostrando/herramientas/interacción" (EES 8)
  - "econímicas" → "económicas" y "proponer" → "propondrá" (EES 10)
  - "socila" → "social", "propio" → "propios" (EEST 1)
  - "agropecuario/adminostracion" → "Agropecuaria/Administración", "un empresa" → "una empresa" y "estudiante" → "estudiantes" (CEPT 2)
  - "gas natura" → "gas natural", "utencilios" → "utensilios" (CFP)
  - Espacio faltante en "escritas.Expresar" (EES 1)
  - "critico", "la trayectorias", "practicas", "Laboral", "aprender de trabajo", "PReparandolos", "tambien" y puntuación (EES 3)
  - Punto final faltante (EES 8); "habitos" → "hábitos", "intensión" → "intención" (EES 9)
  - "estudiante de superior" → "estudiante de nivel superior", "estado" → "Estado" y espacios dobles (ISFD 142)
- **Denominaciones:**
  - "Arte-Arte Visuales" → "Arte — Artes Visuales"
  - "Arte Música" → "Arte — Música"
  - "Ed. Física" → "Educación Física"
  - "Confección Indumentaria" → "Confección de Indumentaria"
  - "Economia y Administracion" → "Economía y Administración" (EES 1 y EES 3)
  - "Prof." → "Profesorado de" (ISFD 142)
  - En el CFP se pasaron las mayúsculas sostenidas a formato título.
- **Anotaciones internas quitadas del nombre:** "(sede)", "(sede o no)", "(localidad)" y "Trayecto especial (…)". En este último se publicó sólo la denominación que estaba entre paréntesis.
- **Perfiles del CFP:**
  - Se quitó la línea inicial "Perfil Profesional: …", que repite la denominación.
  - Se quitó el subtítulo "Competencias y Alcance:".
  - Los rótulos de párrafo pasaron a minúscula inicial (p. ej. "Ejecución técnica:").
  - Los saltos de línea manuales se unieron en párrafos.
- **Perfiles del egresado de la EES 1:** se quitó la numeración "1." … "5." para que el rótulo de cada párrafo se muestre en negrita, como en el CFP.
- **Perfil del ingresante de la EES 8:** los saltos de línea se unieron en dos párrafos.
- **Nombre de cada institución:** se toma de `src/data/instituciones.ts` por CUE, no del Excel.

## Inconsistencias para consultar

1. EES 9: el Excel dice "Eva Duarte" y `instituciones.ts` dice "Eva Perón". En la página se muestra el nombre de `instituciones.ts`.
2. EEST 1: el código aparece escrito como "EEST T N 1" y como "EES T N 1".
3. CEPT 2: el criterio de prioridad y el cupo (20 por año) están en la columna "perfil del ingresante". Confirmar que es correcto publicarlos ahí.
4. Plan FinEs: no hay sede ni institución de referencia, así que su tarjeta no tiene enlace a /instituciones.
5. CFP 401: la sede de los trayectos marcados "(sede)", "(sede o no)" y "(localidad)" sigue sin definir.
6. EES 4 y 5 y EEST 1 no tienen perfil del ingresante.
7. EES 1: la columna "Nombre" dice "46356" (parece un número de fecha de Excel). En la página se muestra el nombre de `instituciones.ts`.
8. EES 3: el perfil del egresado describe también a la escuela ("Toda la comunidad educativa trabaja…"). Se publicó tal cual, con correcciones de forma.
9. ISFD 142: no tiene perfil del egresado y el perfil del ingresante es el mismo para los cinco profesorados.

## Qué se muestra en la página

Sólo el **perfil del egresado**. El perfil del ingresante se conserva en `src/data/oferta-educativa.ts`
(es dato de la planilla) pero no se publica. Las ofertas sin perfil del egresado (p. ej. los
profesorados del ISFD 142) se muestran sólo con su denominación, sin desplegable.
