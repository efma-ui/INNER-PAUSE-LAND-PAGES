/**
 * INNER PAUSE Pro - Core Data & Sales Copy
 * Extracted from the clinical & spiritual framework of INNER PAUSE
 */

export interface AreaDetail {
  id: string;
  name: string;
  icon: string;
  desc: string;
  longDesc: string;
  patterns: { id: string; text: string; scienceObs: string; verse?: string }[];
  defaultVerse: string;
  calmContext: string;
}

export const DISTRESS_AREAS: AreaDetail[] = [
  {
    id: "spiritual",
    name: "Espiritual",
    icon: "🙏",
    desc: "Fe, culpa excesiva, duda, relación con Dios y pensamientos intrusivos",
    longDesc: "Aborda la escrupulosidad religiosa y la hipervigilancia espiritual. La mente confunde dudas humanas con falta de fe o rechazo divino.",
    defaultVerse: "“Echa sobre el Señor tu carga, y Él te sustentará.” (Salmo 55:22)",
    calmContext: "Tu pausa puede enfocarse en soltar la necesidad de certeza espiritual inmediata y volver al presente.",
    patterns: [
      {
        id: "spiritual_doubt",
        text: "Siento que debería estar completamente seguro/a de mi fe.",
        scienceObs: "La duda intenta buscar seguridad absoluta donde la fe y la vida relacional piden confianza. No necesitas resolver todas tus dudas hoy para estar en paz.",
        verse: "“El Señor fortalece a los que dudan y sostiene a los cansados.” (Inspirado en Marcos 9:24)"
      },
      {
        id: "spiritual_guilt",
        text: "Tengo miedo de haber hecho algo espiritualmente incorrecto.",
        scienceObs: "La culpa excesiva a menudo busca prevenir un castigo imaginario. Tu mente intenta protegerte moralmente, pero te está exigiendo un estándar imposible.",
        verse: "“Si nuestro corazón nos recrimina, Dios es mayor que nuestro corazón.” (Inspirado en 1 Juan 3:20)"
      },
      {
        id: "spiritual_rejection",
        text: "Me preocupa que Dios esté enojado conmigo o me haya rechazado.",
        scienceObs: "El miedo a que Dios esté distante o molesto es una alarma mental ante la vulnerabilidad. No refleja la realidad de tu vínculo seguro.",
        verse: "“¿Puede una madre olvidar a su hijo de pecho? Aun si ella lo olvidara, yo nunca te olvidaré.” (Inspirado en Isaías 49:15)"
      },
      {
        id: "spiritual_wrong_prayer",
        text: "Me preocupa no haber orado correctamente o con las palabras exactas.",
        scienceObs: "Tu mente intenta hipercontrolar la forma en que te acercas a lo sagrado. Recuerda que la gracia no depende de la perfección de tus palabras.",
        verse: "“El Espíritu mismo intercede por nosotros con gemidos indecibles cuando no sabemos cómo orar.” (Inspirado en Romanos 8:26)"
      },
      {
        id: "spiritual_thought",
        text: "Me preocupa que un pensamiento involuntario diga algo sobre mi fe o carácter.",
        scienceObs: "Un pensamiento intrusivo no define quién eres ni tu fe; es solo ruido mental automático pasando por tu pantalla mental.",
        verse: "“Lleva cautivo todo pensamiento a la obediencia, descansando en su paz.” (Inspirado en 2 Corintios 10:5)"
      }
    ]
  },
  {
    id: "health",
    name: "Salud & Cuerpo",
    icon: "❤️",
    desc: "Síntomas corporales, cibercondría y temor a enfermedades graves",
    longDesc: "Desactiva la hipervigilancia de sensaciones biológicas normales que el cerebro ansioso traduce erróneamente en emergencias médicas.",
    defaultVerse: "“El Señor es quien restaura tus fuerzas y cuida de cada parte de tu cuerpo.” (Salmo 103:2-3)",
    calmContext: "Tu pausa puede ayudarte a observar las sensaciones sin convertirlas automáticamente en una conclusión.",
    patterns: [
      {
        id: "health_symptom",
        text: "Un síntoma me hace pensar inmediatamente que podría tener algo grave.",
        scienceObs: "Prestarle lupa a una sensación corporal hace que se sienta el doble de intensa. No tienes que resolver el misterio de tu cuerpo hoy mismo.",
        verse: "“Puedes descansar sabiendo que tu vida está sostenida en Sus manos.” (Salmo 31:14-15)"
      },
      {
        id: "health_check",
        text: "Siento la necesidad de revisar y palpar mi cuerpo repetidamente.",
        scienceObs: "Revisar el cuerpo busca calmar la ansiedad momentánea, pero le enseña al cerebro que hay un peligro constante. Prueba soltar la mano y distraer tu foco.",
        verse: "“No temas por el mañana físico; cada día trae su propio cuidado y provisión.” (Mateo 6:34)"
      },
      {
        id: "health_search",
        text: "Quiero buscar síntomas en internet para asegurarme de que no sea nada malo.",
        scienceObs: "Buscar síntomas online es una trampa de certeza: alimenta tu miedo y apaga tu tranquilidad. Cierra las pestañas de búsqueda por tu bienestar.",
        verse: "“La paz de Dios, que sobrepasa todo entendimiento, guardará tus pensamientos.” (Filipenses 4:7)"
      },
      {
        id: "health_worst",
        text: "Mi mente se va directamente al peor diagnóstico médico posible.",
        scienceObs: "Tu mente elige el peor escenario porque confunde preocupación con prevención. Imaginar lo peor no previene nada; solo te agota.",
        verse: "“Echa tu carga sobre el Señor, y Él te sustentará en todo momento.” (Salmo 55:22)"
      }
    ]
  },
  {
    id: "relationships",
    name: "Relaciones",
    icon: "🤝",
    desc: "Miedo al rechazo, abandono, sobreanálisis de mensajes y tonos",
    longDesc: "Detiene el desgaste del sobrepensamiento interpersonal, la lectura de mente y la necesidad de comprobación constante en la pareja o amigos.",
    defaultVerse: "“El amor perfecto echa fuera el temor al rechazo y al abandono.” (1 Juan 4:18)",
    calmContext: "Tu pausa puede ayudarte a dejar de analizar temporalmente las señales y volver al momento presente.",
    patterns: [
      {
        id: "relationship_rejection",
        text: "Temo que alguien esté molesto conmigo aunque no tenga evidencia clara.",
        scienceObs: "Ante la duda, la mente asume el rechazo para 'protegerse' por anticipado. Date cuenta de que esto es una suposición de tu mente, no un hecho real.",
        verse: "“Puedes confiar en que Dios guía tus vínculos hacia la gracia y la comprensión.” (Proverbios 3:3-4)"
      },
      {
        id: "relationship_message",
        text: "Analizo demasiado un mensaje de texto, tono de voz o comentario frío.",
        scienceObs: "Estás intentando descifrar un tono como si fuera un examen definitivo. La mayoría de las veces, un mensaje es solo un mensaje.",
        verse: "“Hay paciencia y refugio en los momentos de desacuerdo o silencio.” (Efesios 4:2)"
      },
      {
        id: "relationship_reassurance",
        text: "Necesito preguntar varias veces '¿estás bien conmigo?' para quedarme tranquilo/a.",
        scienceObs: "Preguntar repetidamente calma la duda por un instante, pero debilita tu confianza interna. Prueba sostener la calma por ti mismo/a.",
        verse: "“El amor no se irrita fácilmente, no guarda rencor y todo lo soporta.” (1 Corintios 13:5-7)"
      },
      {
        id: "relationship_mindreading",
        text: "Intento adivinar exactamente lo que la otra persona está pensando en secreto.",
        scienceObs: "Estás intentando leer la mente ajena. Como eso es biológicamente imposible, tu mente llena los espacios vacíos con tus propios temores.",
        verse: "“Guarda tu corazón con toda diligencia, porque de él mana la vida.” (Proverbios 4:23)"
      }
    ]
  },
  {
    id: "future",
    name: "Futuro & Incertidumbre",
    icon: "🧭",
    desc: "Escenarios catastróficos, espirales de '¿y si...?' e ilusión de control",
    longDesc: "Desmantela la obsesión por prever todos los riesgos antes de que ocurran, reconectándote con la acción presente.",
    defaultVerse: "“Porque yo sé los pensamientos que tengo acerca de vosotros, planes de bienestar y no de mal.” (Jeremías 29:11)",
    calmContext: "Tu pausa puede ayudarte a dejar por unos momentos los escenarios futuros y volver a lo que existe ahora.",
    patterns: [
      {
        id: "future_catastrophe",
        text: "Mi mente imagina automáticamente el peor desenlace posible.",
        scienceObs: "Imaginar catástrofes es lo que hace un cerebro ansioso para intentar adelantarse al dolor. No significa que vaya a pasar; es solo una simulación mental.",
        verse: "“No se angustien por el mañana, el cual tendrá sus propios afanes.” (Mateo 6:34)"
      },
      {
        id: "future_control",
        text: "Siento que si pienso lo suficiente podré controlar el resultado final.",
        scienceObs: "La ilusión de control te agota intentando prever lo imprevisible. Soltar el control no es rendirse; es dejar de gastar energía en lo que no depende de ti.",
        verse: "“Confía en el Señor de todo corazón, y no en tu propia inteligencia.” (Proverbios 3:5)"
      },
      {
        id: "future_if",
        text: "Me quedo atrapado/a en laberintos mentales de '¿y qué pasa si...?'",
        scienceObs: "Los escenarios de '¿y si...?' son un laberinto sin salida biológica. No intentes resolver el laberinto; sal de él sintiendo el suelo bajo tus pies.",
        verse: "“Estad quietos, y reconoced que yo soy Dios.” (Salmo 46:10)"
      }
    ]
  },
  {
    id: "work",
    name: "Trabajo & Exigencia",
    icon: "💼",
    desc: "Perfeccionismo paralizante, miedo a fallar y revisión excesiva",
    longDesc: "Separa tu valor como ser humano de tu rendimiento laboral diario y rompe el ciclo de autoexigencia destructiva.",
    defaultVerse: "“El esfuerzo humano descansa cuando confías en que el fruto proviene de Él.” (Salmo 127:1-2)",
    calmContext: "Tu pausa puede ayudarte a soltar temporalmente la necesidad de revisar o perfeccionar y simplemente respirar.",
    patterns: [
      {
        id: "work_perfection",
        text: "Siento que si no lo hago perfecto, he fallado por completo.",
        scienceObs: "El perfeccionismo te trata como si un error laboral fuera una catástrofe identitaria. Un error es solo un dato, no una definición de tu valor.",
        verse: "“No tienes que demostrar tu valor a través del perfeccionismo; ya eres aceptado.” (Efesios 2:10)"
      },
      {
        id: "work_review",
        text: "Reviso cuatro o cinco veces lo que hice por miedo a haberme equivocado.",
        scienceObs: "Revisar una y otra vez desgasta tu confianza interna. Cuando revisas por cuarta vez, ya no buscas corregir un error: buscas una falsa calma temporal.",
        verse: "“Hagan todo de corazón, para el Señor y no para agradar a la crítica humana.” (Colosenses 3:23)"
      },
      {
        id: "work_responsibility",
        text: "Siento que todo el peso y el resultado dependen exclusivamente de mí.",
        scienceObs: "No todo el peso del mundo descansa sobre tus hombros. Está bien delegar, soltar y aceptar que los demás también pueden hacer su parte.",
        verse: "“Vengan a mí todos ustedes que están cansados y agobiados, y yo les daré descanso.” (Mateo 11:28)"
      }
    ]
  }
];

export const BIOLOGICAL_FACTORS = [
  {
    id: "sleep",
    label: "Dormí poco o mal",
    scientificImpact: "Dormir menos de 6-7 horas reduce la actividad del córtex prefrontal e hiperactiva la amígdala cerebral, multiplicando la reactividad al estrés y los pensamientos catastróficos involuntarios."
  },
  {
    id: "water",
    label: "He tomado poca agua",
    scientificImpact: "Una deshidratación de apenas 1.5% disminuye el volumen plasmático y el flujo de oxígeno al encéfalo. Esto provoca mareos sutiles, confusión mental y taquicardia que la mente interpreta erróneamente como crisis de pánico."
  },
  {
    id: "screens",
    label: "Exceso de pantallas y luz azul",
    scientificImpact: "La sobreestimulación lumínica y el bombardeo continuo de microestímulos digitales mantienen al sistema nervioso simpático en alerta de lucha o huida, saturando la memoria de trabajo."
  },
  {
    id: "food",
    label: "Salté comida o comí muy poco",
    scientificImpact: "La hipoglucemia en sangre fuerza a las glándulas suprarrenales a secretar cortisol y adrenalina de emergencia para elevar glucosa, generando temblor interior y angustia biológicamente idéntica a la ansiedad clínica."
  }
];

export const COMPETITOR_COMPARISON = [
  {
    feature: "Precio y Modelo de Pago",
    innerPause: "$17 USD Vitalicio (o $10 USD activo por 6 meses hasta Julio 2027)",
    calm: "$78 - $90 USD cada 6 meses ($13 - $15 USD/mes que la gente paga mensualmente)",
    headspace: "$78 USD cada 6 meses (Cobros mensuales de $12.99 USD recurrentes)",
    hallow: "$60 - $75 USD cada 6 meses en cuotas",
    therapy: "$60 - $120 USD por cada sesión individual"
  },
  {
    feature: "Deconstrucción Cognitiva TCC / ACT",
    innerPause: "Sí: Desglose guiado en 5 áreas de alta rumiación",
    calm: "No (Solo audios de relajación pasiva)",
    headspace: "Básico (Packs generales de respiración)",
    hallow: "No (Contenido puramente litúrgico y rezos)",
    therapy: "Sí (Requiere semanas y agendamiento)"
  },
  {
    feature: "Anclaje Espiritual & Bíblico Libre de Culpa",
    innerPause: "Sí: Promesas bíblicas contextualizadas sin escrupulosidad",
    calm: "No (Enfoque secular sin componente de fe)",
    headspace: "No (Sin perspectiva de fe)",
    hallow: "Solo rezos guiados (sin herramientas cognitivas)",
    therapy: "Rara vez (Pocos terapeutas integran fe con TCC)"
  },
  {
    feature: "Auditoría de Carga Biológica y Somática",
    innerPause: "Sí: Explica cómo sueño, agua, glucosa y pantallas simulan pánico",
    calm: "No",
    headspace: "No",
    hallow: "No",
    therapy: "Mención verbal superficial"
  },
  {
    feature: "Pausa de Calma 4-2-6 con Bio-Mensajes Adaptativos",
    innerPause: "Sí: Medición pre/post 1-10 y frases adaptadas al disparador",
    calm: "Respirador genérico estándar",
    headspace: "Temporizador de respiración plano",
    hallow: "No disponible",
    therapy: "Enseñanza verbal en sesión"
  },
  {
    feature: "Privacidad Total (Cero Rastreo en Servidores)",
    innerPause: "100% Local en tu dispositivo (Sin venta de datos íntimos)",
    calm: "Datos alojados en servidores de la nube",
    headspace: "Telemetría y perfiles en la nube",
    hallow: "Cuentas obligatorias en la nube",
    therapy: "Notas clínicas en archivo del consultorio"
  }
];

export const PRICING_TIERS = [
  {
    id: "lifetime",
    name: "Acceso Vitalicio Completo",
    badge: "MÁS POPULAR · PAGO ÚNICO",
    price: 17,
    originalPrice: 65,
    billingText: "Un solo pago de $17 USD de por vida (Sin cobros recurrentes nunca)",
    savings: "Ahorras cientos de dólares frente a los cobros mensuales del mercado",
    highlight: true,
    cta: "Obtener Acceso Vitalicio ($17 USD)",
    features: [
      "Acceso completo e ilimitado de por vida a INNER PAUSE Pro",
      "Un solo pago único: jamás tendrás mensualidades ni renovaciones",
      "Módulo de Desglose Mente (5 áreas clínicas y espirituales)",
      "Filtro de Verdad para reestructuración cognitiva TCC / ACT",
      "Pausa de Calma 4-2-6 con biofeedback adaptativo",
      "Analizador Somático de Carga Física (sueño, agua, glucosa)",
      "Catálogo dinámico de Promesas y Anclajes de fe",
      "Registro de Evidencia personal ilimitado",
      "100% Privado en tu dispositivo",
      "Garantía incondicional de reembolso de 7 días"
    ]
  },
  {
    id: "semiannual",
    name: "Plan Semestral Activo",
    badge: "ACCESO FLEXIBLE",
    price: 10,
    originalPrice: 35,
    billingText: "Pago de $10 USD activo por seis meses (la suscripción terminaría en Julio 2027)",
    savings: "Equivale a solo $1.66 USD al mes mientras esté activa",
    highlight: false,
    cta: "Comenzar Plan Semestral ($10 USD)",
    features: [
      "Acceso completo a la aplicación web durante 6 meses",
      "Suscripción programada para finalizar en Julio 2027",
      "Equivale a solo $1.66 USD al mes (máxima accesibilidad)",
      "Módulo de Desglose Mente y Filtro de Verdad",
      "Pausa de Calma 4-2-6 y Analizador de Carga Biológica",
      "100% Privado: datos en tu dispositivo",
      "Garantía incondicional de satisfacción de 7 días"
    ]
  },
  {
    id: "duo",
    name: "Plan Dúo Vitalicio (2 Licencias)",
    badge: "Para Parejas o Familiares",
    price: 25,
    originalPrice: 90,
    billingText: "Un solo pago vitalicio para 2 usuarios independientes",
    savings: "Solo $12.50 USD por persona con acceso de por vida",
    highlight: false,
    cta: "Obtener Plan Dúo Vitalicio ($25 USD)",
    features: [
      "2 Códigos de Acceso vitalicios independientes para 2 personas",
      "Privacidad absoluta: cada usuario tiene su espacio privado",
      "Ideal para ti y tu cónyuge, hijo/a o persona de confianza",
      "Todas las herramientas clínicas y de fe incluidas de por vida",
      "Garantía incondicional de satisfacción de 7 días para ambos"
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: "Rose",
    role: "17 años",
    location: "Houston, TX",
    quote: "Es realmente una herramienta muy útil y te ayuda a ordenar tus pensamientos cuando lo necesitas. Me ayudó a encontrar estrategias para entender lo que estaba pasando y a entender por qué me sentía como me sentía, me ayudó a tener momentos de estabilidad y a conciliar el sueño.",
    area: "Claridad Mental & Estabilidad Emocional",
    stars: 5
  }
];

export const FAQ_ITEMS = [
  {
    question: "¿INNER PAUSE es solo para personas creyentes o religiosas?",
    answer: "No. INNER PAUSE fue diseñado con una arquitectura modular basada en neurociencia cognitiva (TCC y ACT). Las áreas de salud, trabajo, futuro y relaciones son 100% universales y aplicables para cualquier persona. El módulo espiritual está especialmente diseñado para quienes sufren rumiación de culpa, duda o escrupulosidad de fe, brindando anclajes bíblicos que las apps convencionales ignoran por completo."
  },
  {
    question: "¿Por qué ofrecen $17 vitalicio o $10 activo por seis meses?",
    answer: "Para brindar una accesibilidad real y sin trampas. Puedes elegir el Plan Vitalicio por $17 USD en un solo pago de por vida (sin renovaciones futuras), o el Plan Semestral de $10 USD activo por seis meses (la suscripción terminaría en Julio de 2027 en este caso, lo que equivale a apenas $1.66 USD al mes). Comparado con los $13 a $15 USD mensuales que cobra el mercado comercial, es un ahorro inmediato extraordinario."
  },
  {
    question: "¿Cómo funciona el código de acceso personal?",
    answer: "Inmediatamente después de completar tu pedido, el sistema genera de manera privada tu código de acceso exclusivo e intransferible. Puedes guardarlo y usarlo para ingresar a la plataforma desde tu teléfono móvil o computadora sin contraseñas complicadas."
  },
  {
    question: "¿Mis pensamientos y reflexiones íntimas se guardan en algún servidor?",
    answer: "Absolutamente NO. A diferencia de las aplicaciones comerciales que recopilan tus datos para entrenar algoritmos o vender publicidad, INNER PAUSE almacena todas tus notas de evidencia, reflexiones y registros exclusivamente en el almacenamiento local de tu navegador (LocalStorage). Nadie más tiene acceso a lo que escribes."
  },
  {
    question: "¿Esto sustituye la terapia psicológica o el tratamiento médico?",
    answer: "No. INNER PAUSE es una herramienta de autorregulación emocional y deconstrucción del pensamiento para situaciones cotidianas de sobrepensamiento y estrés. Como se indica claramente en el descargo de responsabilidad, no diagnostica ni reemplaza la atención psiquiátrica, psicológica o médica profesional."
  },
  {
    question: "¿Qué pasa si compro INNER PAUSE y siento que no me ayuda?",
    answer: "Cuentas con nuestra Garantía de Satisfacción Total de 7 Días. Si dentro de los primeros 7 días pruebas la herramienta y sientes que no te ayudó a encontrar claridad mental, simplemente nos envías un correo con tu número de orden y te reembolsamos el 100% de tu dinero de inmediato, sin preguntas ni letras chicas."
  },
  {
    question: "¿Puedo usar la aplicación desde mi teléfono iPhone o Android?",
    answer: "Sí. INNER PAUSE funciona perfectamente en cualquier navegador móvil (Safari, Chrome, Firefox) y en ordenadores, con tiempos de carga instantáneos sin ocupar espacio de almacenamiento en tu teléfono."
  }
];
