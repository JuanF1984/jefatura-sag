import type { Institucion } from "@/data/types";

/**
 * Coordenadas geográficas de las instituciones del distrito.
 *
 * Este archivo contiene ÚNICAMENTE información geográfica/técnica. Nombre, dirección general,
 * localidad general, teléfono y correo salen de `src/data/instituciones.ts`; la unión entre
 * ambos datasets se hace SIEMPRE por CUE (ver `geoDeInstitucion` /
 * `ubicacionesVerificadasDeInstitucion`).
 *
 * Una institución puede tener **una o varias** ubicaciones. La mayoría tiene una sola; los
 * servicios de Educación de Adultos (EEPA / CEA) funcionan en varias sedes reales y llevan
 * un punto por sede en `ubicaciones[]`. No se fuerza una coordenada «principal».
 *
 * El bloque de datos de más abajo lo genera `pnpm run importar:kml` a partir del KML público
 * del Google My Maps del distrito (`mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho`). Ver el detalle del
 * origen, la exportación y el matcheo en `docs/mapa-instituciones.md` y el estado de cada
 * institución en `docs/mapa-instituciones-reporte.md`. No editar el bloque a mano.
 */

/** Un punto físico donde funciona la institución. */
export type UbicacionGeo = {
  lat: number;
  lng: number;
  /** De dónde salió la coordenada. */
  fuente: string;
  /** true si la coordenada pasó las verificaciones automáticas del importador. */
  verificado: boolean;
  /**
   * Nombre de la sede cuando la institución funciona en varias (tal como viene del KML, sin
   * inventar). Ausente en las instituciones de una sola ubicación.
   */
  sede?: string;
  /**
   * Dirección puntual de esta sede si el KML la aporta y puede asociarse específicamente a
   * este punto. La dirección/localidad general siguen viniendo de `instituciones.ts`.
   */
  direccion?: string;
};

export type InstitucionGeo = {
  /** CUE de la institución en `instituciones.ts` con la que se enlaza (formato `0605344-00`). */
  cue: string;
  /**
   * 1..N puntos. Una institución normal tiene exactamente uno; un servicio multi-sede, varios.
   * Estructura común: el caso de una sola sede es simplemente `ubicaciones` con un elemento.
   */
  ubicaciones: UbicacionGeo[];
};

// ---GEO-GENERADA-INICIO---
/**
 * Generado por `pnpm run importar:kml` a partir del KML del Google My Maps del distrito.
 * Sólo información geográfica/técnica: la unión con nombre/dirección/localidad se hace por CUE
 * contra `src/data/instituciones.ts`. Un CUE puede tener 1..N `ubicaciones` (varias sedes
 * reales, caso Educación de Adultos). No editar a mano: volver a correr el script.
 */
export const institucionesGeo: InstitucionGeo[] = [
  {
    cue: "0603011-00",
    ubicaciones: [
      {
        lat: -34.439543,
        lng: -59.44321,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0603012-00",
    ubicaciones: [
      {
        lat: -34.296081,
        lng: -59.322137,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0603013-00",
    ubicaciones: [
      {
        lat: -34.505332,
        lng: -59.337541,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0603014-00",
    ubicaciones: [
      {
        lat: -34.434216,
        lng: -59.260924,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0603016-00",
    ubicaciones: [
      {
        lat: -34.3652521,
        lng: -59.3725819,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0603017-00",
    ubicaciones: [
      {
        lat: -34.412516,
        lng: -59.411247,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0603018-00",
    ubicaciones: [
      {
        lat: -34.446954,
        lng: -59.449522,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0604332-00",
    ubicaciones: [
      {
        lat: -34.4402675,
        lng: -59.4566824,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
        sede: "Bo. Familia Propietaria",
        direccion: "Calle 507 e/ Mitre Oeste y Avellaneda Oeste",
      },
      {
        lat: -34.4593827,
        lng: -59.4414163,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
        sede: "Bo. San Bernardo",
        direccion: "Mendez e/ Calle 44 y Calle 46",
      },
      {
        lat: -34.4616957,
        lng: -59.451186,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
        sede: "CEPT",
        direccion: "Acceso Cámpora e/ Ruta 7 y Ruta 41",
      },
      {
        lat: -34.4550909,
        lng: -59.429969,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
        sede: "CIC",
        direccion: "Rawson y Calle 51",
      },
      {
        lat: -34.4447968,
        lng: -59.3595035,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
        sede: "Cucullu",
        direccion: "Acceso 9 de Julio 186 - Cucullu",
      },
      {
        lat: -34.4383873,
        lng: -59.4427059,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
        sede: "EP N°12",
        direccion: "Av.Scully 660",
      },
      {
        lat: -34.4597713,
        lng: -59.4182985,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
        sede: "EPN°02",
        direccion: "Ruta N°7 Km 99,5",
      },
      {
        lat: -34.4488229,
        lng: -59.449808,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
        sede: "Hogar Geriátrico Ntra. Señora de Luján",
        direccion: "Rawson y Av. Cámpora",
      },
    ],
  },
  {
    cue: "0604332-01",
    ubicaciones: [
      {
        lat: -34.4374579,
        lng: -59.4539328,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
        sede: "Bo. Bicentenario",
        direccion: "Sarmiento y 507",
      },
      {
        lat: -34.4437562,
        lng: -59.4419363,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
        sede: "Centro de Jubilados San Andrés",
        direccion: "Moreno y Lavalle",
      },
      {
        lat: -34.4430634,
        lng: -59.4470764,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
        sede: "EP N°01",
        direccion: "Rivadavia 600",
      },
    ],
  },
  {
    cue: "0604332-02",
    ubicaciones: [
      {
        lat: -34.3653697,
        lng: -59.3730317,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
        sede: "Azcuénaga",
        direccion: "Julia Vildosola 116, Azcuénaga",
      },
      {
        lat: -34.4616492,
        lng: -59.4515325,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
        sede: "CEPT",
        direccion: "Acceso Cámpora e/ Ruta 7 y Ruta 41",
      },
      {
        lat: -34.5463038,
        lng: -59.4251919,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
        sede: "La Florida",
        direccion: "Ruta 41 Km 244, La Florida",
      },
      {
        lat: -34.296397,
        lng: -59.32173,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
        sede: "Solis",
        direccion: "Manuel Belgrano e/ Gral San Martín y Av 25 de Mayo, Solis",
      },
      {
        lat: -34.505805,
        lng: -59.337733,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
        sede: "Villa Espil",
        direccion: "Alvis y Pelaez, Villa Espil",
      },
    ],
  },
  {
    cue: "0604334-00",
    ubicaciones: [
      {
        lat: -34.45225,
        lng: -59.438014,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0604335-00",
    ubicaciones: [
      {
        lat: -34.447322,
        lng: -59.448911,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605229-00",
    ubicaciones: [
      {
        lat: -34.61106,
        lng: -59.631593,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605230-00",
    ubicaciones: [
      {
        lat: -34.388212,
        lng: -59.432591,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605231-00",
    ubicaciones: [
      {
        lat: -34.41242,
        lng: -59.411158,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605232-00",
    ubicaciones: [
      {
        lat: -34.36787,
        lng: -59.300162,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605233-00",
    ubicaciones: [
      {
        lat: -34.535672,
        lng: -59.505648,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605234-00",
    ubicaciones: [
      {
        lat: -34.462996,
        lng: -59.5673,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605235-00",
    ubicaciones: [
      {
        lat: -34.459629,
        lng: -59.452709,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605236-00",
    ubicaciones: [
      {
        lat: -34.523769,
        lng: -59.747326,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605343-00",
    ubicaciones: [
      {
        lat: -34.447365,
        lng: -59.442648,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605344-00",
    ubicaciones: [
      {
        lat: -34.442988,
        lng: -59.447103,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605345-00",
    ubicaciones: [
      {
        lat: -34.459581,
        lng: -59.418372,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605346-00",
    ubicaciones: [
      {
        lat: -34.3654812,
        lng: -59.3729118,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605347-00",
    ubicaciones: [
      {
        lat: -34.51774,
        lng: -59.381327,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605348-00",
    ubicaciones: [
      {
        lat: -34.519296,
        lng: -59.674449,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605349-00",
    ubicaciones: [
      {
        lat: -34.296422,
        lng: -59.321903,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605350-00",
    ubicaciones: [
      {
        lat: -34.396379,
        lng: -59.514233,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605351-00",
    ubicaciones: [
      {
        lat: -34.438523,
        lng: -59.442856,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605352-00",
    ubicaciones: [
      {
        lat: -34.434219,
        lng: -59.260791,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605353-00",
    ubicaciones: [
      {
        lat: -34.43015,
        lng: -59.65593,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605354-00",
    ubicaciones: [
      {
        lat: -34.5460277,
        lng: -59.4253427,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605355-00",
    ubicaciones: [
      {
        lat: -34.478834,
        lng: -59.500978,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605356-00",
    ubicaciones: [
      {
        lat: -34.522934,
        lng: -59.575727,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0605357-00",
    ubicaciones: [
      {
        lat: -34.505697,
        lng: -59.33755,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0609033-00",
    ubicaciones: [
      {
        lat: -34.443237,
        lng: -59.446272,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0609034-00",
    ubicaciones: [
      {
        lat: -34.447636,
        lng: -59.449045,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0609035-00",
    ubicaciones: [
      {
        lat: -34.452006,
        lng: -59.43836,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0609036-00",
    ubicaciones: [
      {
        lat: -34.4430053,
        lng: -59.4470567,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0609037-00",
    ubicaciones: [
      {
        lat: -34.461508,
        lng: -59.451363,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0609038-00",
    ubicaciones: [
      {
        lat: -34.445126,
        lng: -59.359326,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0611805-00",
    ubicaciones: [
      {
        lat: -34.454282,
        lng: -59.440201,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0611808-00",
    ubicaciones: [
      {
        lat: -34.447452,
        lng: -59.448995,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0611809-00",
    ubicaciones: [
      {
        lat: -34.444898,
        lng: -59.35967,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0612612-00",
    ubicaciones: [
      {
        lat: -34.611051,
        lng: -59.633288,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0614294-00",
    ubicaciones: [
      {
        lat: -34.5461647,
        lng: -59.4256276,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0616386-00",
    ubicaciones: [
      {
        lat: -34.441583,
        lng: -59.43869,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0616496-00",
    ubicaciones: [
      {
        lat: -34.442008,
        lng: -59.438239,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0617001-00",
    ubicaciones: [
      {
        lat: -34.447259,
        lng: -59.442973,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0619036-00",
    ubicaciones: [
      {
        lat: -34.428132,
        lng: -59.554308,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0619818-00",
    ubicaciones: [
      {
        lat: -34.450522,
        lng: -59.433305,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0619819-00",
    ubicaciones: [
      {
        lat: -34.438346,
        lng: -59.443059,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0620100-00",
    ubicaciones: [
      {
        lat: -34.444707,
        lng: -59.359359,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0620443-00",
    ubicaciones: [
      {
        lat: -34.296447,
        lng: -59.322088,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0620454-00",
    ubicaciones: [
      {
        lat: -34.505924,
        lng: -59.337951,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0620918-00",
    ubicaciones: [
      {
        lat: -34.443738,
        lng: -59.446242,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0620922-00",
    ubicaciones: [
      {
        lat: -34.459561,
        lng: -59.452699,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0621371-00",
    ubicaciones: [
      {
        lat: -34.459703,
        lng: -59.418074,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0621372-00",
    ubicaciones: [
      {
        lat: -34.478635,
        lng: -59.500699,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0621373-00",
    ubicaciones: [
      {
        lat: -34.367962,
        lng: -59.300293,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0621375-00",
    ubicaciones: [
      {
        lat: -34.388734,
        lng: -59.433106,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0621376-00",
    ubicaciones: [
      {
        lat: -34.534436,
        lng: -59.506491,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0621377-00",
    ubicaciones: [
      {
        lat: -34.523519,
        lng: -59.575736,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0621378-00",
    ubicaciones: [
      {
        lat: -34.463,
        lng: -59.56745,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0621394-00",
    ubicaciones: [
      {
        lat: -34.524045,
        lng: -59.747242,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0621439-00",
    ubicaciones: [
      {
        lat: -34.517873,
        lng: -59.381234,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0622086-00",
    ubicaciones: [
      {
        lat: -34.434217,
        lng: -59.260852,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0622087-00",
    ubicaciones: [
      {
        lat: -34.611054,
        lng: -59.632432,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0622087-01",
    ubicaciones: [
      {
        lat: -34.546415,
        lng: -59.425486,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0622959-00",
    ubicaciones: [
      {
        lat: -34.427999,
        lng: -59.553112,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0623755-00",
    ubicaciones: [
      {
        lat: -34.443046,
        lng: -59.447124,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0624529-00",
    ubicaciones: [
      {
        lat: -34.437739,
        lng: -59.456344,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0624530-00",
    ubicaciones: [
      {
        lat: -34.365379,
        lng: -59.372784,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
  {
    cue: "0631374-00",
    ubicaciones: [
      {
        lat: -34.39658,
        lng: -59.51395,
        fuente: "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)",
        verificado: true,
      },
    ],
  },
];
// ---GEO-GENERADA-FIN---

const geoPorCue = new Map(institucionesGeo.map((g) => [g.cue, g]));

/** Devuelve la entrada geo de una institución (con sus ubicaciones), o `undefined` si no tiene. */
export function geoDeInstitucion(institucion: Institucion): InstitucionGeo | undefined {
  return institucion.cue ? geoPorCue.get(institucion.cue) : undefined;
}

/**
 * Devuelve TODAS las ubicaciones verificadas de una institución (0..N). Es lo que usa la UI:
 * si el array está vacío, la card no muestra «Ver en el mapa»; si tiene una, se ve un
 * marcador; si tiene varias, se ven todas. Una coordenada dudosa no se ofrece al público.
 */
export function ubicacionesVerificadasDeInstitucion(institucion: Institucion): UbicacionGeo[] {
  const geo = geoDeInstitucion(institucion);
  return geo ? geo.ubicaciones.filter((u) => u.verificado) : [];
}
