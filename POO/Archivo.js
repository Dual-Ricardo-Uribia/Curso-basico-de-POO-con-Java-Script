const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },
};

// Hace que natalia apruebe otro curso
//natalia.cursosAprobados.push("Curso de Responsive Desing");
//PPrototipos
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
    "Juanita Alejandra", 15,
    [
        "Curso de Introducción a la Producción de Videojuegos",
        "Curso de Creación de Personajes",
    ],
);

//Prototipos con la sintaxis de clases

class Student2 {
    constructor({
        name, 
        age, 
        email,
        facebook,
        cursosAprobados = [],
        
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2(
   {
    name : "Miguel",
    age : 28,
    email : "miguelito@platzi.com",
   }
);

///Index 2

const juan = {
    name: "JuanDC",
    username: "juandc",
    points: 100,
    socialMedia: {
        twitter: "FJuanDC",
        instagram: "FJuanDC",
        facebook: undefined,
    },
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso de C Sharp",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            cursos: [
                "Curso Definitivo de HTML y CSS",
                "Curso Practico de HTML y CSS",
                "Curso de Responsive Desing",
            ],
        },
        {
            name: "Escuela de VideoJuegos",
            cursos: [
                "Curso Introduccion a la Produccion de Vgs",
                "Curso Unreal Engine",
                "Curso de Unity 3D Desing",
            ],
        },
    ],
};

const miguelito1 = {
    name: "Miguelito",
    username: "miguelitoHappy",
    points: 1000,
    socialMedia: {
        twitter: "Miguelito_Happy",
        instagram: "Miguelito_Happy",
        facebook: undefined,
    },
    cursosAprobados: [
        "Curso Data Business",
        "Curso DataViz",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            cursos: [
                "Curso Definitivo de HTML y CSS",
                "Curso Practico de HTML y CSS",
                "Curso de Responsive Desing",
            ],
        },
        {
            name: "Escuela de Data Science",
            cursos: [
                "Curso Data Business",
                "Curso DataViz",
                "Curso de ",
            ],
        },
    ],
};