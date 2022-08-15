class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libro = [];
        this.mascota = [];
    }

    getFullName() {
        return console.log(`${this.nombre} ${this.apellido}`)
    }
    addMascota(nombre) {
        console.log(this.mascota.push(nombre))

    }
    countMascota() {
        return console.log(this.mascota.length)
    }
    addBook(libros) {

        this.libro.push(libros)

    }
    getBookNames(titulo) {
        return this.libro.map(titulo => titulo.titulo)
    }
}




const usuario1 = new Usuario('Juan', 'Perez')
usuario1.getFullName()
usuario1.addMascota('Mora')
usuario1.addMascota('Pupi')
usuario1.addMascota('Nemo')
usuario1.countMascota()
usuario1.addBook({ titulo: 'el señor de los anillos', autor: 'Tolkin' })
usuario1.addBook({ titulo: 'The Maze Runner', autor: 'James Dashner' })
usuario1.getBookNames()
console.log(usuario1)