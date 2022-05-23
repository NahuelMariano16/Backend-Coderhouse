class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }
    

    getFullName(){
        let fullName = `${this.nombre} ${this.apellido}`
        console.log(fullName)
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
        console.log(this.mascotas)
    }
    countMascotas(){
        console.log(this.mascotas.length)
    }
    addBook(nombre, autor){
        this.libros.push({Nombre: nombre, Autor:autor})
        console.log(this.libros)
    }
    getBookNames(){
       let nombres = this.libros.map(function(nombre){
        return nombre.Nombre
       })
       console.log(nombres)
    }
}

let Nahuel = new Usuario("Nahuel", "de los Santos")
Nahuel.getFullName()
Nahuel.addMascota("Perro")
Nahuel.addMascota("Gato")
Nahuel.addMascota("Gata")
Nahuel.countMascotas()
Nahuel.addBook("Harry Potter", "J.K Rowling")
Nahuel.addBook("Los Juegos del Hambre", "Suzanne C")
Nahuel.getBookNames()

// //Ejercicio 1
// function mostrarLista (listaDeDatos){
//     if(listaDeDatos == '' || listaDeDatos == null){
//         console.log('Lista Vacia')
//     }else{
//         return listaDeDatos
//     }
// }
// console.log(mostrarLista([1,2,3]))

// //Ejercicio 3
// function crearMultiplicador(n){
//     return function(m){
//         return n*m
//     }
// }

// crearMultiplicador(3)(4)