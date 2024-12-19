document.addEventListener('DOMContentLoaded', () => {
    const semestreMateria = {
        1: [
            'Comunicación oral y escrita',
            'Tecnologías de la información y comunicación (TIC)',
            'Algoritmos y pseudocódigo',
            'Matemática básica',
            'Física y laboratorio',
            'Álgebra lineal'
        ],
        2: [
            'Fundamentos de la investigación',
            'Contextos e interculturalidad',
            'Programación estructurada y funcional',
            'Cálculo diferencial e integral',
            'Sistemas electrónicos digitales',
            'Estructuras discretas'
        ],
        3: [
            'Jesucristo y la persona de hoy',
            'Redes I',
            'Estructura de datos',
            'Lectura y escritura académica',
            'Arquitectura de computadores',
            'Estadística y probabilidades'
        ],
        4: [
            'Filosofía de las ciencias computacionales',
            'Redes II',
            'Programación orientada a objetos',
            'Base de datos 1',
            'Sistemas operativos',
            'Internet de las cosas'
        ]
    };

    const libros = {
        'Comunicación oral y escrita': [
            { nombre: 'Comunicación Oral y Escrita', autor: 'Emilio Alvarado', url: 'https://example.com/libro1' },
            { nombre: 'La escritura académica', autor: 'José Fernández', url: 'https://example.com/libro2' },
            { nombre: 'Escritura creativa', autor: 'Ana Pérez', url: 'https://example.com/libro3' },
            { nombre: 'Técnicas de redacción', autor: 'Luis López', url: 'https://example.com/libro4' },
            { nombre: 'Teoría de la comunicación', autor: 'Carlos Sánchez', url: 'https://example.com/libro5' }
        ],
        'Tecnologías de la información y comunicación (TIC)': [
            { nombre: 'Fundamentos de las TIC', autor: 'Carlos López', url: 'https://example.com/libro6' },
            { nombre: 'Introducción a las TIC', autor: 'Ana González', url: 'https://example.com/libro7' },
            { nombre: 'Redes de computadoras', autor: 'José Díaz', url: 'https://example.com/libro8' },
            { nombre: 'Desarrollo de software', autor: 'María Pérez', url: 'https://example.com/libro9' },
            { nombre: 'Seguridad en redes', autor: 'Pedro García', url: 'https://example.com/libro10' }
        ],
        'Algoritmos y pseudocódigo': [
            { nombre: 'Algoritmos y estructuras de datos', autor: 'José Díaz', url: 'https://example.com/libro11' },
            { nombre: 'Introducción a los algoritmos', autor: 'Thomas Cormen', url: 'https://example.com/libro12' },
            { nombre: 'Estructuras de datos y algoritmos', autor: 'Robert Lafore', url: 'https://example.com/libro13' },
            { nombre: 'Programación en C', autor: 'Brian Kernighan', url: 'https://example.com/libro14' },
            { nombre: 'Análisis de algoritmos', autor: 'John Smith', url: 'https://example.com/libro15' }
        ],
        'Matemática básica': [
            { nombre: 'Álgebra básica', autor: 'Carlos López', url: 'https://example.com/libro16' },
            { nombre: 'Geometría y trigonometría', autor: 'Ana Fernández', url: 'https://example.com/libro17' },
            { nombre: 'Cálculo diferencial', autor: 'Luis García', url: 'https://example.com/libro18' },
            { nombre: 'Teoría de números', autor: 'Sergio Hernández', url: 'https://example.com/libro19' },
            { nombre: 'Matemáticas discretas', autor: 'José Martínez', url: 'https://example.com/libro20' }
        ],
        'Física y laboratorio': [
            { nombre: 'Física general', autor: 'Juan Pérez', url: 'https://example.com/libro21' },
            { nombre: 'Física para ingeniería', autor: 'María Rodríguez', url: 'https://example.com/libro22' },
            { nombre: 'Laboratorio de física', autor: 'Carlos Méndez', url: 'https://example.com/libro23' },
            { nombre: 'Física moderna', autor: 'Luis Gómez', url: 'https://example.com/libro24' }
        ],
        'Álgebra lineal': [
            { nombre: 'Álgebra lineal y sus aplicaciones', autor: 'David Miller', url: 'https://example.com/libro25' },
            { nombre: 'Matriz y vectores', autor: 'Carlos Díaz', url: 'https://example.com/libro26' },
            { nombre: 'Cálculo matricial', autor: 'José Rodríguez', url: 'https://example.com/libro27' },
            { nombre: 'Álgebra avanzada', autor: 'Luis González', url: 'https://example.com/libro28' }
        ],
        'Fundamentos de la investigación': [
            { nombre: 'Métodos de investigación', autor: 'Ana Martínez', url: 'https://example.com/libro29' },
            { nombre: 'Investigación cualitativa', autor: 'Luis Sánchez', url: 'https://example.com/libro30' },
            { nombre: 'Investigación cuantitativa', autor: 'Pedro Gómez', url: 'https://example.com/libro31' },
            { nombre: 'Diseño de investigaciones', autor: 'Juan López', url: 'https://example.com/libro32' },
            { nombre: 'Técnicas de muestreo', autor: 'María Torres', url: 'https://example.com/libro33' }
        ],
        'Programación estructurada y funcional': [
            { nombre: 'Programación en C', autor: 'Dennis Ritchie', url: 'https://example.com/libro34' },
            { nombre: 'Lenguajes de programación', autor: 'John Kennedy', url: 'https://example.com/libro35' },
            { nombre: 'Introducción a Haskell', autor: 'Paul Hudak', url: 'https://example.com/libro36' }
        ],
        'Cálculo diferencial e integral': [
            { nombre: 'Cálculo de una variable', autor: 'Robert Adams', url: 'https://example.com/libro37' },
            { nombre: 'Cálculo avanzado', autor: 'Gerald B. Folland', url: 'https://example.com/libro38' },
            { nombre: 'Cálculo multivariable', autor: 'James Stewart', url: 'https://example.com/libro39' },
            { nombre: 'Cálculo integral', autor: 'Tom M. Apostol', url: 'https://example.com/libro40' }
        ],
        'Sistemas electrónicos digitales': [
            { nombre: 'Fundamentos de sistemas digitales', autor: 'Thomas L. Floyd', url: 'https://example.com/libro41' },
            { nombre: 'Electrónica digital', autor: 'Roger L. Tokheim', url: 'https://example.com/libro42' },
            { nombre: 'Microcontroladores y programación', autor: 'Mikrochip', url: 'https://example.com/libro43' }
        ],
        'Estructuras discretas': [
            { nombre: 'Estructuras discretas', autor: 'Ralph P. Grimaldi', url: 'https://example.com/libro44' },
            { nombre: 'Matemáticas discretas', autor: 'Kenneth H. Rosen', url: 'https://example.com/libro45' },
            { nombre: 'Teoría de grafos', autor: 'Douglas B. West', url: 'https://example.com/libro46' },
            { nombre: 'Lógica matemática', autor: 'Edward F. Maki', url: 'https://example.com/libro47' }
        ],
        'Redes I': [
            { nombre: 'Fundamentos de redes', autor: 'Andrew S. Tanenbaum', url: 'https://example.com/libro48' },
            { nombre: 'Redes de computadoras', autor: 'Larry L. Peterson', url: 'https://example.com/libro49' },
            { nombre: 'Sistemas de comunicación', autor: 'John G. Proakis', url: 'https://example.com/libro50' }
        ],
        'Jesucristo y la persona de hoy': [
            { nombre: 'La persona de Cristo', autor: 'John Doe', url: 'https://example.com/libro51' },
            { nombre: 'Cristianismo y sociedad', autor: 'Jane Doe', url: 'https://example.com/libro52' },
            { nombre: 'Religión y ética', autor: 'Carlos Hernández', url: 'https://example.com/libro53' },
            { nombre: 'El mensaje de Jesús', autor: 'Pedro López', url: 'https://example.com/libro54' }
        ],
        'Redes II': [
            { nombre: 'Redes de alta velocidad', autor: 'Andrew S. Tanenbaum', url: 'https://example.com/libro55' },
            { nombre: 'Redes avanzadas', autor: 'Albert Einstein', url: 'https://example.com/libro56' },
            { nombre: 'Conmutación de redes', autor: 'Sara Martínez', url: 'https://example.com/libro57' },
            { nombre: 'Protocolos de redes', autor: 'James Stewart', url: 'https://example.com/libro58' }
        ],
        'Estructura de datos': [
            { nombre: 'Estructuras de datos avanzadas', autor: 'Robert Lafore', url: 'https://example.com/libro59' },
            { nombre: 'Árboles y grafos', autor: 'Thomas H. Cormen', url: 'https://example.com/libro60' },
            { nombre: 'Algoritmos avanzados', autor: 'William Stallings', url: 'https://example.com/libro61' },
            { nombre: 'Data Science', autor: 'José Fernández', url: 'https://example.com/libro62' }
        ],
        'Programación orientada a objetos': [
            { nombre: 'Introducción a la POO', autor: 'James Gosling', url: 'https://example.com/libro63' },
            { nombre: 'Java y POO', autor: 'Herbert Schildt', url: 'https://example.com/libro64' },
            { nombre: 'Diseño de software orientado a objetos', autor: 'Ralph Johnson', url: 'https://example.com/libro65' }
        ],
        'Base de datos 1': [
            { nombre: 'Bases de datos', autor: 'C.J. Date', url: 'https://example.com/libro66' },
            { nombre: 'SQL avanzado', autor: 'Luis García', url: 'https://example.com/libro67' },
            { nombre: 'Modelado de datos', autor: 'E.F. Codd', url: 'https://example.com/libro68' }
        ],
        'Sistemas operativos': [
            { nombre: 'Sistemas operativos modernos', autor: 'Andrew S. Tanenbaum', url: 'https://example.com/libro69' },
            { nombre: 'Linux: un sistema operativo', autor: 'Richard Stallman', url: 'https://example.com/libro70' },
            { nombre: 'Programación en sistemas operativos', autor: 'Silberschatz', url: 'https://example.com/libro71' }
        ],
        'Internet de las cosas': [
            { nombre: 'Internet de las cosas', autor: 'José González', url: 'https://example.com/libro72' },
            { nombre: 'IoT y su programación', autor: 'Carlos Méndez', url: 'https://example.com/libro73' }
        ],
        'Lectura y escritura académica': [
            { nombre: 'Redacción académica', autor: 'Esteban Rodríguez', url: 'https://example.com/libro101' },
            { nombre: 'Escritura crítica', autor: 'Ana Martínez', url: 'https://example.com/libro102' },
            { nombre: 'Estilos de redacción', autor: 'Carlos López', url: 'https://example.com/libro103' },
            { nombre: 'Técnicas de escritura académica', autor: 'Luis Pérez', url: 'https://example.com/libro104' }
        ],
        'Arquitectura de computadores': [
            { nombre: 'Arquitectura de computadores', autor: 'William Stallings', url: 'https://example.com/libro105' },
            { nombre: 'Fundamentos de arquitectura de computadoras', autor: 'David Patterson', url: 'https://example.com/libro106' },
            { nombre: 'Estructuras de computadoras', autor: 'John L. Hennessy', url: 'https://example.com/libro107' },
            { nombre: 'Diseño de computadoras', autor: 'M. Morris Mano', url: 'https://example.com/libro108' }
        ],
        'Filosofía de las ciencias computacionales': [
            { nombre: 'Filosofía de la informática', autor: 'Lynn Andrea Stein', url: 'https://example.com/libro109' },
            { nombre: 'La ética de la computación', autor: 'Donald Gotterbarn', url: 'https://example.com/libro110' },
            { nombre: 'Filosofía y computación', autor: 'Timothy J. Smith', url: 'https://example.com/libro111' },
            { nombre: 'La lógica en las ciencias computacionales', autor: 'Ruth Marcus', url: 'https://example.com/libro112' }
        ]
    };

    // Cargar materias según semestre
    document.getElementById('semestre').addEventListener('change', (e) => {
        const semestre = e.target.value;
        const materias = semestreMateria[semestre];
        const materiaSelect = document.getElementById('materia');
        materiaSelect.innerHTML = '';

        materias.forEach((materia) => {
            const option = document.createElement('option');
            option.value = materia;
            option.textContent = materia;
            materiaSelect.appendChild(option);
        });
    });

    // Manejar consulta de libros
    document.getElementById('consultaForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const materia = document.getElementById('materia').value;
        const resultadoDiv = document.getElementById('resultadoLibros');

        if (materia) {
            const librosMateria = libros[materia];

            if (librosMateria && librosMateria.length > 0) {
                let contenido = `
                    <h4>Libros recomendados para <strong>${materia}</strong>:</h4>
                    <ul class="list-group fade-in">`;

                librosMateria.forEach((libro) => {
                    contenido += `
                        <li class="list-group-item">
                            <strong>${libro.nombre}</strong> por ${libro.autor} 
                            <a href="${libro.url}" class="btn btn-primary btn-sm float-end" target="_blank">Ver Libro</a>
                        </li>`;
                });

                contenido += '</ul>';
                resultadoDiv.innerHTML = contenido;
            } else {
                resultadoDiv.innerHTML = `<p>No hay libros disponibles para esta materia.</p>`;
            }
        }
    });
});