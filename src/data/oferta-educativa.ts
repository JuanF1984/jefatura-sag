import type { GrupoOferta, OfertaInstitucion } from "@/data/types";

/** Ciclo lectivo al que corresponde la oferta publicada en /oferta-educativa. */
export const cicloOferta = 2027;

/**
 * Orden y títulos de los grupos de la página. Un grupo sin instituciones no se
 * muestra (ni en el índice ni en la página).
 */
export const gruposOferta: { id: GrupoOferta; titulo: string; descripcion: string }[] = [
  {
    id: "secundaria",
    titulo: "Secundaria",
    descripcion: "Orientaciones de las escuelas de educación secundaria.",
  },
  {
    id: "tecnica-agraria",
    titulo: "Técnica y Agraria",
    descripcion: "Tecnicaturas de la educación secundaria técnica y agraria.",
  },
  {
    id: "jovenes-adultos",
    titulo: "Jóvenes y Adultos",
    descripcion: "Propuestas para jóvenes y adultos que quieren terminar la primaria o la secundaria.",
  },
  {
    id: "superior",
    titulo: "Superior",
    descripcion: "Carreras de nivel superior.",
  },
  {
    id: "formacion-profesional",
    titulo: "Formación Profesional",
    descripcion: "Trayectos de formación profesional.",
  },
];

// ---OFERTA-GENERADA-INICIO---
/**
 * Versión curada a mano a partir de
 * `material-original/oferta-educativa-2027/OFERTAS 2027 EXPO EDU SAG  V2.xlsx`.
 * Sólo incluye ofertas confirmadas; las filas excluidas y las correcciones
 * ortográficas aplicadas están detalladas en docs/oferta-educativa-2027.md.
 * La planilla 2027 tiene una estructura irregular (ver ese documento), por eso
 * no se generó con `pnpm run migrar:oferta`. Cuando llegue una planilla
 * normalizada, el script reemplaza este bloque.
 */
export const ofertaEducativa: OfertaInstitucion[] = [
  {
    cue: "0609036-00",
    grupo: "secundaria",
    ofertas: [
      {
        denominacion: "Comunicación",
        perfilIngresante:
          "Poseer saberes básicos construidos durante la escolaridad primaria. Comprender consignas sencillas, tanto orales como escritas. Expresar ideas, opiniones, experiencias y conocimientos oralmente y por escrito. Resolver situaciones problemáticas utilizando estrategias propias. Establecer vínculos respetuosos con compañeros y docentes. Escuchar y respetar las opiniones de los demás. Reconocer y aceptar las diferencias. Reconocerse como sujetos de derecho e integrantes activos de una comunidad educativa.",
        perfilEgresado:
          "Pensamiento crítico: analiza e interpreta críticamente los medios de comunicación, sus discursos y su influencia en la sociedad.\n\nCompetencias comunicacionales: se expresa oralmente y por escrito, argumenta ideas y comunica mensajes con claridad.\n\nProducción multimedial: crea contenidos utilizando diferentes lenguajes y formatos: gráfico, radial, audiovisual y digital.\n\nParticipación ciudadana: comprende la comunicación como herramienta para ejercer derechos, participar democráticamente y transformar la realidad social.\n\nTrabajo colaborativo y compromiso social: desarrolla proyectos comunicacionales colectivos, respetando la diversidad y las necesidades de la comunidad.",
      },
      {
        denominacion: "Economía y Administración",
        perfilIngresante:
          "Poseer saberes básicos construidos durante la escolaridad primaria. Comprender consignas sencillas, tanto orales como escritas. Expresar ideas, opiniones, experiencias y conocimientos oralmente y por escrito. Resolver situaciones problemáticas utilizando estrategias propias. Establecer vínculos respetuosos con compañeros y docentes. Escuchar y respetar las opiniones de los demás. Reconocer y aceptar las diferencias. Reconocerse como sujetos de derecho e integrantes activos de una comunidad educativa.",
        perfilEgresado:
          "Pensamiento económico y crítico: comprende y analiza los fenómenos económicos, sociales y productivos de su entorno.\n\nGestión y administración: conoce y aplica herramientas básicas de organización, planificación y gestión de recursos en diferentes tipos de organizaciones.\n\nCultura emprendedora: desarrolla iniciativa, creatividad y capacidad para diseñar proyectos y propuestas de emprendimiento.\n\nResolución de problemas y toma de decisiones: interpreta información económica y contable, evalúa alternativas y propone soluciones fundamentadas.\n\nResponsabilidad social y ciudadana: actúa con compromiso ético, reconoce el impacto social y ambiental de las decisiones económicas y valora el trabajo colaborativo.",
      },
    ],
  },
  {
    cue: "0609034-00",
    grupo: "secundaria",
    ofertas: [
      {
        denominacion: "Ciencias Sociales",
        perfilIngresante:
          "Interés en expresar sus opiniones y debatir, participación en actividades comunitarias.",
        perfilEgresado:
          "Estudiante crítico e interpretativo de los procesos históricos, políticos, culturales y comunitarios que atraviesan a la sociedad.",
      },
      {
        denominacion: "Ciencias Naturales",
        perfilIngresante:
          "Apertura a distintas áreas del conocimiento y curiosidad por nuestro laboratorio.",
        perfilEgresado:
          "Estudiante reflexivo y con pensamiento científico, capacitado para comprender el mundo socio-natural mediante la alfabetización científica y ambiental.",
      },
      {
        denominacion: "Economía y Administración",
        perfilIngresante:
          "Motivación en proyectos vinculados a emprendimientos, proyectos productivos y logro de metas concretas.",
        perfilEgresado:
          "Estudiante analítico y propositivo, capaz de interpretar la dinámica de las organizaciones, los mercados y las decisiones socioeconómicas a diferentes escalas.",
      },
    ],
  },
  {
    cue: "0620100-00",
    grupo: "secundaria",
    ofertas: [
      {
        denominacion: "Economía y Administración",
        perfilIngresante:
          "Se reconozca como parte de una comunidad rural y valore su identidad local.",
        perfilEgresado:
          "Estudiante con desarrollo de su creatividad y el pensamiento crítico, comprometido con el mundo actual. Toda la comunidad educativa trabaja en conjunto para garantizar las trayectorias de nuestros estudiantes. Formamos egresados que no solo conocen la teoría de Economía y Administración, sino que la practican: realizan prácticas de aproximación al mundo laboral y crean microemprendimientos (calculan, venden, deciden y aprenden del trabajo real) para poder elegir su futuro con más herramientas. Los preparamos no solo para el mundo del trabajo sino también para estudios superiores y para vivir en sociedad.",
      },
    ],
  },
  {
    cue: "0622086-00",
    grupo: "secundaria",
    ofertas: [
      {
        denominacion: "Arte — Artes Visuales",
        perfilEgresado:
          "Producir proyectos artísticos con sentido crítico, creativo y situado en un contexto local. Conocer y utilizar técnicas, materiales y tecnologías tradicionales y contemporáneas. Valorar el patrimonio cultural local, provincial y nacional como parte de su identidad. Continuar estudios superiores universitarios o de formación artística, o insertarse en el mundo del trabajo vinculado a la cultura, el diseño y la comunicación visual.",
      },
    ],
  },
  {
    cue: "0620454-00",
    grupo: "secundaria",
    ofertas: [
      {
        denominacion: "Ciencias Sociales",
        perfilEgresado:
          "Estudiante capaz de comprender la complejidad de las sociedades actuales, los procesos históricos, geográficos, económicos, políticos, psicológicos y culturales que las conforman.",
      },
    ],
  },
  {
    cue: "0619818-00",
    grupo: "secundaria",
    ofertas: [
      {
        denominacion: "Arte — Música",
        perfilIngresante:
          "Nuestra escuela abre sus puertas a cada joven que elija transitar la educación secundaria como una oportunidad de crecimiento, aprendizaje y construcción de futuro. Creemos en una escuela cercana, democrática y abierta a la comunidad.\n\nComo escuela de Arte — Música, entendemos el lenguaje musical como un medio de expresión, sensibilidad y creación colectiva. Quien forme parte de nuestra institución es aquel/aquella que asume un compromiso activo con el estudio, valora la convivencia democrática, tiene disposición para el esfuerzo y la superación, y asiste con regularidad y participación. Aquí encontrará un lugar donde su voz importa, donde sus trayectorias son cuidadas y donde cada logro es un objetivo compartido.",
        perfilEgresado:
          "Se espera que los egresados sean capaces de aplicar sus habilidades de forma responsable y crítica, demostrando tolerancia, solidaridad y aprovechando las herramientas tecnológicas y artísticas en su interacción con el entorno.",
      },
    ],
  },
  {
    cue: "0619819-00",
    grupo: "secundaria",
    ofertas: [
      {
        denominacion: "Educación Física",
        perfilIngresante:
          "El estudiante interesado en el deporte y en la promoción de hábitos saludables, con la intención de ejercer en el futuro una actividad laboral vinculada al deporte.",
        perfilEgresado:
          "El egresado será capaz de comprender y valorar las prácticas corporales, motrices, deportivas y recreativas como parte de una formación integral, promoviendo hábitos saludables.",
      },
    ],
  },
  {
    cue: "0624530-00",
    grupo: "secundaria",
    ofertas: [
      {
        denominacion: "Bachiller en Turismo",
        perfilIngresante:
          "Estudiante interesado en el Turismo, que busque orientar su proyecto de vida con un emprendimiento relacionado al turismo en el ámbito rural, la sustentabilidad y accesibilidad.",
        perfilEgresado:
          "El bachiller en Turismo comprenderá el Turismo como actividad productiva, analizará problemáticas económicas, culturales y ambientales vinculadas al desarrollo del turismo y propondrá alternativas de intervención comunitaria, con la mirada en principios de accesibilidad y sustentabilidad.",
      },
    ],
  },
  {
    cue: "0605343-00",
    grupo: "tecnica-agraria",
    ofertas: [
      {
        denominacion: "Técnico Electromecánico",
        perfilEgresado:
          "El técnico del sector electromecánico está capacitado para manifestar conocimientos, habilidades, destrezas, valores y actitudes en situaciones reales de trabajo, conforme a criterios de profesionalidad propios de su área y de responsabilidad social.",
      },
      {
        denominacion: "Técnico en Energías Renovables",
        perfilEgresado:
          "El técnico en energías renovables está capacitado para manifestar conocimientos, habilidades, destrezas, valores y actitudes en situaciones reales de trabajo conforme a criterios de profesionalidad propios de su área y de responsabilidad social al:\n\nProyectar y diseñar equipos e instalaciones de energías renovables; montar e instalar; operar y mantener.",
      },
      {
        denominacion: "Técnico en Multimedios",
        perfilEgresado:
          "El técnico en multimedios está capacitado para crear contenido digital, piezas digitales innovadoras, desarrollar habilidades en programas multimediales, aprender sobre el funcionamiento de la PC; planificar proyectos audiovisuales y radiofónicos; acercamiento práctico a equipo de audio; creación de programas de radio en vivo y diseño de revistas; también, trabajar con Arduino, impresión 3D, animación y diseño gráfico.",
      },
    ],
  },
  {
    cue: "0609037-00",
    grupo: "tecnica-agraria",
    ofertas: [
      {
        denominacion: "Técnico en Producción Agropecuaria con orientación en Administración",
        perfilIngresante:
          "Tendrán prioridad estudiantes con residencia en el medio rural, sin escuela secundaria en cercanía (cupo máximo por año: 20 estudiantes).",
        perfilEgresado:
          "El técnico está capacitado para organizar una empresa agropecuaria de baja o mediana escala, manejar procesos productivos animales, vegetales y desarrollar mantenimiento primario de maquinarias.",
      },
    ],
  },
  {
    cue: "0623755-00",
    grupo: "jovenes-adultos",
    ofertas: [
      {
        denominacion: "Bachiller en Economía y Administración",
        perfilIngresante:
          "La persona joven, adulta o adulta mayor que ingresa al CENS en la orientación de Economía y Administración debe tener 18 años de edad cumplidos al 30 de junio del ciclo lectivo en el que se inscribe. Para su inscripción y la definición de su trayectoria formativa, se tendrán en cuenta los años aprobados del nivel primario, secundario y de la Educación General Básica (EGB), según corresponda.\n\nCuenta con saberes, experiencias y conocimientos construidos a lo largo de su trayectoria personal, social y laboral, y manifiesta interés en completar sus estudios secundarios, ampliar sus oportunidades de formación e inserción laboral y comprender la realidad económica y social. Debe contar con disponibilidad para cursar en el turno noche.",
        perfilEgresado:
          "La persona joven, adulta o adulta mayor egresada del Bachiller en Economía y Administración está capacitada para analizar procesos económicos y organizacionales, interpretar información contable y financiera, participar en la gestión y administración de organizaciones y desarrollar emprendimientos productivos, recuperando sus saberes y experiencias de vida y trabajo.\n\nDesde una perspectiva crítica, solidaria y transformadora, podrá ejercer una ciudadanía activa y democrática, participar en el desarrollo de su comunidad y continuar estudios superiores y trayectos de formación profesional.",
      },
    ],
  },
  {
    nombre: "Plan FinEs",
    grupo: "jovenes-adultos",
    ofertas: [
      {
        denominacion: "Bachiller en Ciencias Sociales",
        perfilIngresante:
          "La persona joven, adulta o adulta mayor que ingresa al Plan FinEs debe contar con 18 años de edad cumplidos y tener estudios secundarios pendientes de finalización. Su trayectoria formativa se definirá considerando los estudios previamente cursados y aprobados, así como sus saberes y experiencias personales, sociales y laborales.\n\nSe espera que resida en una localidad rural o barrios alejados al centro, así como también disponibilidad horaria en los turnos mañana, tarde o noche.",
        perfilEgresado:
          "La persona joven, adulta o adulta mayor egresada del Bachiller en Ciencias Sociales está capacitada para analizar críticamente las problemáticas sociales, políticas y culturales, comprender los procesos históricos y las relaciones sociales, e interpretar las desigualdades y las transformaciones de la sociedad.\n\nDesde una perspectiva de derechos, recuperando sus saberes y experiencias de vida, podrá ejercer una ciudadanía activa y democrática, participar en proyectos de transformación social y comunitaria, y continuar estudios superiores y trayectos de formación profesional.",
      },
    ],
  },
  {
    cue: "0604332-00",
    grupo: "jovenes-adultos",
    ofertas: [
      {
        denominacion: "Nivel primario (equivalente a 6.º año)",
        perfilIngresante:
          "La persona joven o adulta que ingresa a la Escuela Primaria de Adultos debe tener 14 años de edad cumplidos al 30 de junio del ciclo lectivo en curso. Posee saberes y experiencias construidos en su vida cotidiana, familiar, social y laboral, y presenta diferentes trayectorias de escolarización.\n\nSe espera que pueda participar de las propuestas de enseñanza a partir de sus conocimientos previos, fortalecer sus capacidades y avanzar en la alfabetización y la formación integral, en un espacio educativo que reconozca sus particularidades y garantice su derecho a la educación.",
        perfilEgresado:
          "La persona egresada de la Escuela Primaria de Adultos está capacitada para utilizar la lectura, la escritura, el pensamiento matemático y diversos lenguajes para comprender e intervenir en situaciones de la vida cotidiana, interpretar críticamente la información y analizar su entorno social, cultural y natural.\n\nAsimismo, podrá ejercer una ciudadanía activa y responsable, reconocer sus derechos y obligaciones, desenvolverse en el mundo del trabajo y continuar sus estudios secundarios, fortaleciendo su autonomía y su capacidad para construir y desarrollar proyectos personales y colectivos.",
      },
    ],
  },
  {
    cue: "0604335-00",
    grupo: "superior",
    ofertas: [
      {
        denominacion: "Profesorado de Educación Primaria",
        perfilIngresante:
          "El estudiante de nivel superior de la provincia de Buenos Aires es considerado como sujeto de derecho, protagonista de su formación. En tal sentido, la política educativa provincial garantiza el acceso, la permanencia y el egreso, considerando que el conocimiento es un bien público, un derecho personal y social garantizado por el Estado.",
      },
      {
        denominacion: "Profesorado de Educación Inicial",
        perfilIngresante:
          "El estudiante de nivel superior de la provincia de Buenos Aires es considerado como sujeto de derecho, protagonista de su formación. En tal sentido, la política educativa provincial garantiza el acceso, la permanencia y el egreso, considerando que el conocimiento es un bien público, un derecho personal y social garantizado por el Estado.",
      },
      {
        denominacion: "Profesorado de Historia",
        perfilIngresante:
          "El estudiante de nivel superior de la provincia de Buenos Aires es considerado como sujeto de derecho, protagonista de su formación. En tal sentido, la política educativa provincial garantiza el acceso, la permanencia y el egreso, considerando que el conocimiento es un bien público, un derecho personal y social garantizado por el Estado.",
      },
      {
        denominacion: "Profesorado de Biología",
        perfilIngresante:
          "El estudiante de nivel superior de la provincia de Buenos Aires es considerado como sujeto de derecho, protagonista de su formación. En tal sentido, la política educativa provincial garantiza el acceso, la permanencia y el egreso, considerando que el conocimiento es un bien público, un derecho personal y social garantizado por el Estado.",
      },
      {
        denominacion: "Profesorado de Lengua y Literatura",
        perfilIngresante:
          "El estudiante de nivel superior de la provincia de Buenos Aires es considerado como sujeto de derecho, protagonista de su formación. En tal sentido, la política educativa provincial garantiza el acceso, la permanencia y el egreso, considerando que el conocimiento es un bien público, un derecho personal y social garantizado por el Estado.",
      },
    ],
  },
  {
    cue: "0617001-00",
    grupo: "formacion-profesional",
    ofertas: [
      {
        denominacion: "Soldador Básico",
        familia: "Metalmecánica",
        perfilEgresado:
          "Es un profesional capacitado para realizar soldaduras simples en acero de bajo carbono (sin requerimientos estructurales ni riesgos para equipos o personas) mediante soldadura eléctrica por arco voltaico, además de efectuar cortes con equipos oxiacetilénicos y de plasma.\n\nEjecución técnica: Interpreta planos y órdenes de trabajo bajo supervisión directa, preparando superficies y calibrando equipos de soldadura y oxicorte.\n\nConocimiento técnico: Comprende las características fundamentales de los metales y el impacto térmico que la soldadura genera sobre ellos (deformaciones y variaciones dimensionales).",
      },
      {
        denominacion: "Soldador",
        familia: "Metalmecánica",
        perfilEgresado:
          "Es un profesional calificado para trabajar en líneas de ensamble, construcción y reparación de maquinarias y estructuras, realizando uniones, rellenado de metales y cortes (en materiales ferrosos y no ferrosos) a partir de planos, muestras u órdenes de trabajo. Maneja múltiples procesos avanzados de soldadura (MIG-MAG, electrodos revestidos y TIG) y corte (oxicorte y plasma).\n\nPreparación y configuración: Selecciona los equipos, accesorios, consumibles (gases, electrodos, materiales de aporte) y parámetros técnicos necesarios, además de preparar las superficies y regular las máquinas.\n\nControl y resolución: Aplica controles dimensionales y de forma sobre su trabajo, enciende y opera los equipos, y resuelve contingencias o fallas básicas. Aplica rigurosamente las normas de seguridad e higiene industrial.\n\nAutonomía y supervisión: Opera bajo supervisión en lo referente estrictamente a los procedimientos técnicos de soldadura regulados por normativas nacionales o internacionales, pero no requiere supervisión en cuanto a su desempeño profesional general.",
      },
      {
        denominacion: "Electricista en Inmuebles",
        familia: "Instalaciones eléctricas y de gas",
        perfilEgresado:
          "Alcance técnico e instalaciones: Capacitado/a para prestar y comercializar servicios en instalaciones eléctricas de baja tensión (BT) y muy baja tensión (MBT) de hasta 12 kVA en inmuebles residenciales, comerciales y administrativos, en obra o terminados.\n\nEjecución y mantenimiento: Habilitado/a para realizar canalizaciones, cableados, montaje y conexión de tableros, sistemas de puesta a tierra y verificación o reparación de componentes, bajo normativas técnicas y de seguridad e higiene vigentes.\n\nGestión y emprendimiento: Capaz de elaborar, organizar, gestionar y operar en forma integral y autónoma su propio emprendimiento de instalaciones eléctricas.\n\nAutonomía y toma de decisiones: Facultado/a para resolver problemas en situaciones complejas, supervisar el trabajo de personal a cargo y determinar la necesidad de articular con profesionales de nivel superior cuando la situación lo requiera.",
      },
      {
        denominacion: "Gasista de Unidades Unifuncionales",
        familia: "Instalaciones eléctricas y de gas",
        perfilEgresado:
          "Diseño e instalación: Capacitado/a para proyectar, dimensionar y ejecutar instalaciones de gas natural en viviendas unifuncionales, incluyendo el tendido de cañerías, montaje de reguladores, medidores y artefactos.\n\nControl y mantenimiento: Competente para realizar pruebas de hermeticidad, presión y diagnóstico de fugas, así como tareas de mantenimiento, calibración y reparación de artefactos e instalaciones conforme a las normas técnicas y de seguridad e higiene vigentes.\n\nGestión y trámites: Habilitado/a para confeccionar planos, realizar el cálculo de cargas y gestionar la tramitación administrativa y legal ante las empresas prestadoras del servicio de gas para la aprobación de obras.\n\nAutonomía y emprendimiento: Capaz de organizar, administrar y operar de forma autónoma su propio emprendimiento de servicios técnicos, coordinar personal a cargo y prestar asesoramiento directo al cliente.",
      },
      {
        denominacion: "Operadora/or de Cuidados de Adultas/os Mayores",
        familia: "Cuidados y salud",
        perfilEgresado:
          "Es un profesional capacitado para brindar apoyos y cuidados integrales (físicos, psíquicos y socioculturales) a las personas adultas mayores, basándose en una perspectiva de derechos humanos y en la normativa vigente (Ley Nacional N.° 27.360). Puede desempeñarse de forma autónoma, bajo supervisión, en equipos interdisciplinarios o en el ámbito comunitario (público, privado, de la seguridad social o gremial).\n\nÁreas de intervención: Gestiona la alimentación, higiene, administración de medicamentos (según prescripción médica), trámites, recreación y la promoción del desarrollo personal e inclusión social.\n\nTrabajo articulado: Interactúa activamente con la persona mayor, su familia, profesionales y actores comunitarios para detectar necesidades, gestionar demandas y denunciar cualquier situación de vulneración de derechos.\n\nUtilidad social y comunitaria: Su labor concibe el cuidado como un derecho social, ayudando a redistribuir las tareas de cuidado tradicionalmente recargadas sobre las mujeres en el ámbito familiar, a la vez que promueve la integración comunitaria y el bienestar de los adultos mayores.",
      },
      {
        denominacion: "Auxiliar en Atención al Público en Instituciones de Salud",
        familia: "Cuidados y salud",
        perfilEgresado:
          "Atención y asesoramiento: Capacitado para garantizar una atención eficiente a los usuarios, gestionando y orientando sobre trámites y procedimientos vinculados a prestaciones médicas.\n\nComunicación y gestión de conflictos: Aplicación de técnicas de comunicación efectiva con el público y los sectores internos de la organización, con herramientas orientadas a la resolución de problemas.\n\nTrabajo en equipo: Apto para integrarse y adaptarse de manera colaborativa a diversos equipos de trabajo.",
      },
      {
        denominacion: "Habilidades Digitales",
        familia: "Informática",
        perfilEgresado:
          "Competencia general: Capacitado para operar dispositivos, programas y herramientas de la web, aplicando criterios de seguridad, análisis crítico de la información y comunicación digital efectiva en diversos ámbitos laborales y profesionales.\n\nManejo de información y producción digital: Habilidad para buscar, evaluar y procesar información digital, así como para crear y editar contenidos virtuales en distintos formatos e interactuar en entornos digitales.\n\nComunicación y trabajo colaborativo: Dominio de plataformas virtuales y canales de comunicación en línea para promover la interacción, el intercambio de información y la colaboración en equipos de trabajo.\n\nSeguridad y cuidado digital: Aplicación de buenas prácticas en la gestión de datos personales, uso responsable de internet y protección de dispositivos en entornos digitales.",
      },
      {
        denominacion: "Usuaria/o de IA Generativa",
        familia: "Informática",
        perfilEgresado:
          "La/el egresado de esta propuesta de formación estará capacitado para utilizar herramientas de chat generativo, formular solicitudes (prompts) de manera progresiva, identificando aspectos básicos vinculados al uso responsable de inteligencia artificial.",
      },
      {
        denominacion: "Programador de Sistemas Informáticos Multimediales",
        familia: "Informática",
        perfilEgresado:
          "Competencia general: Capacitado/a para desarrollar, programar e integrar componentes de software que procesan e interactúan con diversos tipos de medios digitales (texto, imagen, audio, video y animación), respondiendo a requerimientos funcionales y de diseño en entornos multimediales e interactivos.\n\nDesarrollo e integración de software: Dominio de lenguajes de programación y bibliotecas específicas para la creación de aplicaciones multimediales, garantizando la correcta integración de recursos gráficos, sonoros e interactivos.\n\nDiseño e interactividad: Aplicación de principios de interfaz de usuario (UI) y experiencia de usuario (UX) para optimizar la navegabilidad, accesibilidad y la respuesta de los sistemas interactivos.\n\nPruebas y mantenimiento: Diagnóstico, depuración y optimización del código, asegurando el rendimiento, la compatibilidad multiplataforma y el correcto funcionamiento de las aplicaciones desarrolladas.\n\nTrabajo colaborativo: Habilidad para integrarse en equipos multidisciplinarios (diseñadores gráficos, maquetadores, comunicadores y especialistas en contenidos) adaptándose a las normas de seguridad y estándares del sector TIC.",
      },
      {
        denominacion: "Elaboración de Alfajores Regionales",
        familia: "Alimentación",
        perfilEgresado:
          "Competencia general: Capacitado/a para elaborar alfajores artesanales y regionales, gestionando los procesos de producción, selección de materias primas, amasado, horneado, rellenado, bañado y empaquetado, cumpliendo con los estándares de calidad y las normas de inocuidad alimentaria.\n\nProcesos productivos y técnicas: Manejo y dosificación de insumos, elaboración de masas autóctonas o tradicionales, control de tiempos de cocción, preparación de rellenos (dulces, mermeladas, cremas) y aplicación de coberturas (glaseados, chocolates).\n\nSeguridad e higiene alimentaria: Aplicación rigurosa de las Buenas Prácticas de Manufactura (BPM), manipulación higiénica de alimentos, mantenimiento de utensilios y equipamiento, y acondicionamiento del espacio de trabajo.\n\nPresentación y conservación: Acondicionamiento, fraccionamiento, empaque y etiquetado adecuado del producto final para su conservación, comercialización y puesta en valor del patrimonio gastronómico local.",
      },
      {
        denominacion: "Despostador",
        familia: "Alimentación",
        perfilEgresado:
          "Recepción y procesamiento de materia prima: Capacitado/a para la recepción de medias reses, cuartos o piezas con hueso, realizando la separación de carne y hueso en mantas o piezas anatómicas específicas según las órdenes de trabajo.\n\nÁmbitos de desempeño: Habilitado/a para desarrollar su actividad en despostadas dentro de plantas frigoríficas (ciclo completo, ciclo I y/o ciclo II), fábricas de chacinados y sectores específicos de supermercados.\n\nCalidad y seguridad: Ejecución de tareas bajo el cumplimiento estricto de normas de control de calidad de proceso, Buenas Prácticas de Manufactura (BPM) y reglamentaciones de higiene, seguridad industrial, laboral y medioambiental.",
      },
      {
        denominacion: "Manipulador de Alimentos",
        familia: "Alimentación",
        perfilEgresado:
          "Gestión sanitaria e inocuidad: Capacitado/a para aplicar las Buenas Prácticas de Manufactura (BPM) y las normas de higiene en la recepción, almacenamiento, elaboración, fraccionamiento, transporte y servicio de alimentos, garantizando su inocuidad y previniendo Enfermedades Transmitidas por Alimentos (ETA).\n\nControl y conservación de insumos: Manejo, rotación y conservación adecuada de materias primas e insumos mediante el control de temperaturas, fechas de vencimiento y condiciones de almacenamiento seguro para evitar la contaminación cruzada.\n\nHigiene de entornos y equipamiento: Aplicación rigurosa de procedimientos operativos estandarizados de sanitización (POES) en instalaciones, equipos, herramientas y utensilios del área de producción alimentaria.\n\nCumplimiento normativo: Conocimiento y aplicación de la legislación alimentaria vigente (Código Alimentario Argentino), actuando con responsabilidad sobre la salud colectiva en establecimientos comerciales, industriales o comunitarios.",
      },
      {
        denominacion: "Operador de Máquina para la Confección de Indumentaria",
        familia: "Textil",
        perfilEgresado:
          "El operador de máquinas para la confección de indumentaria estará capacitado para realizar las siguientes funciones, siguiendo las normas de seguridad e higiene y el cuidado de las condiciones y medios de trabajo:\n\n1. Acondicionar los materiales e insumos de trabajo necesarios para realizar las operaciones de costura solicitadas.\n\n2. Preparar las máquinas y realizar el mantenimiento preventivo para realizar el trabajo solicitado.\n\n3. Operar máquinas y herramientas para realizar el trabajo solicitado.",
      },
    ],
  },
];
// ---OFERTA-GENERADA-FIN---
