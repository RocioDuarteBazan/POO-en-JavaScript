/* const natalia = {
    name: "Natalia",
    surname: "Lopez",
    age: 25,
    cursosAprobados: [
        "Curso HTML y CSS",
        "Curso JavaScript"
    ],

    aprobarCursos(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },

};

function Student(name, surname, age, cursosAprobados) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

}

Student.prototype.aprobarCursos = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

const Hugo = new Student(
    "Hugo",
    "Smahlij",
    25,
    [
        "Curso HTML y CSS",
        "Curso de JavaScript"
    ]
) */

//Hacer que natalia apruebe otro curso 

/* natalia.cursosAprobados.push("Curso de PHP");
natalia.name = "Natix" */

//Prototipo con sintaxis de clases

/* class Student2 {
    constructor({ name, age, cursosAprobados, email }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = [];
        this.email = email;
    }

    aprobarCursos(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito)
    }
}

const piyu = new Student2({
    email: "piyu@gmail.com",
    age: 24,
    name: "Christian",
}); */

/* const Enzo = {
    name : "Enzo",
    userName: "Farkas",
    socialMedia:{
        twitter:"enzof12",
        instagram: "enzofarkasss",
        facebook: undefined,
    },
    aprovedCourses:[
        "Curso de medicina natural",
        "Curso de plantas aromaticas"
    ],
    learningPaths:[
        {
            name: "Escuela de Plantas Naturales",
            courses: [
                "Curso de Poleo",
                "Curso de Burrito"
            ]
        },
        {
            name: "Escuela de Madera y Tallado",
            courses: [
                "Madera y su utilizacion",
                "Cuidado de la madera",
            ]
        }
    ]
}

const  Rochi = {
    name : "Rocío",
    userName: "Duarte",
    socialMedia:{
        twitter:"rochiduarte197",
        instagram: "rochiduarte1",
        facebook: undefined,
    },
    aprovedCourses:[
        "Curso de HTML y CSS",
        "Curso de React"
    ],
    learningPaths:[
        {
            name: "Escuela de programacion",
            courses: [
                "Curso de JavaScript",
                "Curso de React Native"
            ]
        },
        {
            name: "Escuela de UX UI",
            courses: [
                "Curso de experiencia de usuario",
                "Curso de diseño",
            ]
        }
    ]
}; */

class LearningPaths {
    constructor({
        name,
        courses = []
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaDeProgramacion = new LearningPaths({
    name: "Escuela de programacion",
    courses: ["Curso de JavaScript", "Curso de React Native"]
});

const escuelaDeUXUI = new LearningPaths({
    name: "Escuela de UX UI", 
    courses: ["Curso de experiencia de usuario", "Curso de diseño"]
});

const escuelaDePlantasNaturales = new LearningPaths({
    name: "Curso de medicina natural", 
    courses: ["Curso de Poleo", "Curso de Burrito"]
});

const escuelaDeMaderayTallado = new LearningPaths({
    name: "Curso de madera", 
    courses: ["Curso de Madera y su utilizacion", "Curso de Cuidado de la madera"]
});

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        aproverCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.aproverCourses = aproverCourses;
        this.learningPaths = learningPaths;
    }
}

const enzo = new Student({
    name: "Enzo",
    username: "Farkas",
    email: "enzo@gmail.com",
    facebook: "enzo farkas",
    learningPaths: [
        escuelaDeMaderayTallado,
        escuelaDePlantasNaturales,
    ]
})

const rochi = new Student({
    name: "Rocío",
    username: "Duarte",
    email: "rochiduarte@gmail.com",
    instagram: "Rochiduarte1",
    learningPaths: [
        escuelaDeProgramacion,
        escuelaDeUXUI,
    ]
})