const natalia = {
    name: "Natalia",
    surname: "Lopez",
    age: 25,
    cursosAprobados:[
        "Curso HTML y CSS",
        "Curso JavaScript"
    ],

    aprobarCursos(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    },

};

function Student(name, surname, age, cursosAprobados) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

}

Student.prototype.aprobarCursos = function (nuevoCursito){
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
)

//Hacer que natalia apruebe otro curso 

/* natalia.cursosAprobados.push("Curso de PHP");
natalia.name = "Natix" */