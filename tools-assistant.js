export const toolsArray = [
    { type: "code_interpreter" },
    {
        type: "function",
        function: {
            name: "obtenerClima",
            description: "Devuelve el clima actual de una ciudad.",
            parameters: {
                type: "object",
                properties: {
                    ciudad: { type: "string", description: "Nombre de la ciudad" }
                },
                required: ["ciudad"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "consultarCotizacionDolar",
            description: "Devuelve la cotización del dólar en Argentina.",
            parameters: {
                type: "object",
                properties: {
                    tipo: {
                        type: "string",
                        enum: ["oficial", "blue"],
                        description: "Tipo de cambio"
                    }
                },
                required: ["tipo"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "buscarWikipedia",
            description: "Devuelve un resumen de un tema desde Wikipedia.",
            parameters: {
                type: "object",
                properties: {
                    tema: { type: "string", description: "Tema a buscar" }
                },
                required: ["tema"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "convertirDivisas",
            description: "Convierte una cantidad de una moneda a otra.",
            parameters: {
                type: "object",
                properties: {
                    cantidad: { type: "number" },
                    de: { type: "string" },
                    a: { type: "string" }
                },
                required: ["cantidad", "de", "a"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "definirPalabra",
            description: "Devuelve la definición de una palabra en español.",
            parameters: {
                type: "object",
                properties: {
                    palabra: { type: "string" }
                },
                required: ["palabra"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "generarChiste",
            description: "Devuelve un chiste aleatorio para alegrar el día.",
            parameters: {
                type: "object",
                properties: {}
            }
        }
    },
    {
        type: "function",
        function: {
            name: "generarCodigo",
            description: "Genera un snippet de código para una tarea.",
            parameters: {
                type: "object",
                properties: {
                    lenguaje: { type: "string", description: "Ej: JavaScript, Python" },
                    tarea: { type: "string", description: "Descripción de la tarea" }
                },
                required: ["lenguaje", "tarea"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "explicarCodigo",
            description: "Explica paso a paso un fragmento de código.",
            parameters: {
                type: "object",
                properties: {
                    codigo: { type: "string" }
                },
                required: ["codigo"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "generarDockerfile",
            description: "Genera un Dockerfile para una tecnología dada.",
            parameters: {
                type: "object",
                properties: {
                    stack: { type: "string", description: "Ej: Node.js, Django, etc." }
                },
                required: ["stack"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "crearPipelineCI",
            description: "Genera un workflow de GitHub Actions para CI/CD.",
            parameters: {
                type: "object",
                properties: {
                    lenguaje: { type: "string" },
                    pruebas: { type: "boolean" }
                },
                required: ["lenguaje"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "crearModeloML",
            description: "Sugiere una arquitectura de IA para una tarea.",
            parameters: {
                type: "object",
                properties: {
                    tipoDeTarea: {
                        type: "string",
                        enum: ["clasificación", "regresión", "segmentación"]
                    },
                    dataset: { type: "string" }
                },
                required: ["tipoDeTarea"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "analizarCSV",
            description: "Devuelve análisis estadístico básico de un CSV.",
            parameters: {
                type: "object",
                properties: {
                    urlArchivo: { type: "string", description: "Ruta pública del CSV" }
                },
                required: ["urlArchivo"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "crearReadme",
            description: "Genera un README.md para un proyecto de desarrollo.",
            parameters: {
                type: "object",
                properties: {
                    nombreProyecto: { type: "string" },
                    tecnologias: {
                        type: "array",
                        items: { type: "string" }
                    }
                },
                required: ["nombreProyecto", "tecnologias"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "crearTareaAutomatica",
            description: "Programa una tarea con cron.",
            parameters: {
                type: "object",
                properties: {
                    comando: { type: "string" },
                    cron: { type: "string", description: "Ej: * * * * *" }
                },
                required: ["comando", "cron"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "enviarSaludoPersonalizado",
            description: "Crea un saludo amigable y divertido para un usuario.",
            parameters: {
                type: "object",
                properties: {
                    nombre: { type: "string", description: "Nombre del usuario" },
                    contexto: { type: "string", description: "Dónde lo estás saludando (ej: chat, directo, canal)" }
                },
                required: ["nombre"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "responderConMeme",
            description: "Responde a una situación con una frase tipo meme.",
            parameters: {
                type: "object",
                properties: {
                    situacion: { type: "string", description: "Descripción breve de lo que ocurrió" }
                },
                required: ["situacion"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "crearMensajeRomantico",
            description: "Genera un mensaje bonito o coquetón para alguien especial.",
            parameters: {
                type: "object",
                properties: {
                    nombre: { type: "string" },
                    tono: {
                        type: "string",
                        enum: ["tierno", "picante", "divertido"]
                    }
                },
                required: ["nombre", "tono"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "adivinarPersonalidad",
            description: "Hace una suposición de la personalidad del usuario basado en una frase.",
            parameters: {
                type: "object",
                properties: {
                    frase: { type: "string", description: "Algo que dijo el usuario" }
                },
                required: ["frase"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "hacerRetoAleatorio",
            description: "Propone un reto social o divertido para el usuario.",
            parameters: {
                type: "object",
                properties: {
                    dificultad: {
                        type: "string",
                        enum: ["fácil", "normal", "extremo"]
                    }
                },
                required: ["dificultad"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "preguntaRandomPersonal",
            description: "Hace una pregunta personal aleatoria para generar conversación.",
            parameters: {
                type: "object",
                properties: {
                    categoria: {
                        type: "string",
                        enum: ["amistad", "amor", "familia", "meta", "diversión"]
                    }
                },
                required: ["categoria"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "simularConversacionFalsa",
            description: "Genera una conversación graciosa entre dos personajes inventados.",
            parameters: {
                type: "object",
                properties: {
                    personaje1: { type: "string" },
                    personaje2: { type: "string" },
                    tema: { type: "string" }
                },
                required: ["personaje1", "personaje2", "tema"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "tirarFraseEpica",
            description: "Devuelve una frase épica, inspiradora o motivacional.",
            parameters: {
                type: "object",
                properties: {
                    estilo: {
                        type: "string",
                        enum: ["anime", "película", "filosófica", "absurda", "psicologica"]
                    }
                },
                required: ["estilo"]
            }
        }
    }
]