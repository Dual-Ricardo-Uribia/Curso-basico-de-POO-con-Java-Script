//Extra calses polimorfismo

class Comment {
    constructor({
        content,
        studentName,
        studentRoll = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRoll = studentRoll;
        this.like = 0;
    }

    publicar() {
        console.log(this.studentName + " (" + this.studentRoll + ")");
        console.log(this.like + " likes");
        console.log(this.content);
    }
}

//Functions
function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se esta reproducciedno desde la url " + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
}

class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }

    pausar() {
        videoStop(this.videoID);
    }
}

//Abstraccion Classes
class Classes {
    constructor({
        name,
        fecha,
        comentarios = []
    }) {
        this.name = name;
        this.fecha = fecha;
        this.comentarios = comentarios;
    }
}

//Abstraccion Cursos
class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }) {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() {
        return this._name;
    }

    set name(nuenoName) {
        if (nuenoName === "Curso Malito de Programacion") {
            console.error("Web... no");
        } else {
            this._name = nuenoName;
        }
    }
}

const cursoProgramacionBasica = new Course({
    name: "Curso gratis De Programacion Basica",
    isFree: true,
});
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
    lang: "english",
});
const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    isFree: true,
});

//Reto crear la Clase LearningPath
class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgramacionBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgramacionBasica,
    ],
});

const escuelaVgs = new LearningPath({
    name: "Escuela de Vidweojuegos",
    courses: [
        cursoProgramacionBasica,
    ],
})

//Clases 

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
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
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        })
        comment.publicar();
    }
}

class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approveCourses.push(newCourse);
        } else {
            console.warn("Lo siento, " + this.name + " solo puedes tomar cursos free");
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approveCourses.push(newCourse);
        } else {
            console.warn("Lo siento, " + this.name + " no puedes tomar cursos en Ingles");
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approveCourses.push(newCourse);
    }
}
class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approveCourses.push(newCourse);
    }
    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRoll: "Profesor",
        })
        comment.publicar();
    }
}

const juan = new FreeStudent({
    name: "JuanDC",
    username: "juanDC",
    email: "juandc@platzi.com",
    twitter: "FJuanitoDC",
});

const miguelito = new BasicStudent({
    name: "miguelitoAC",
    username: "miguelitoAC",
    email: "miguelitoAC@platzi.com",
    twitter: "PMiguelitoAC",
    learningPaths : [
        escuelaData,
        escuelaWeb,
    ]
});

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "freddier@platzi.com",
    twitter: "freddier",
});