const fs= require('fs');
const { json } = require('stream/consumers');

class Contenedor {
    constructor(archivo) {
        this.archivo = archivo;  
    }

    async save(obj){
        try{
            let ids = Array.from(JSON.parse(await fs.promises.readFile('./ids.txt', 'utf-8')));
            ids.push(ids[ids.length-1]+1);
            fs.promises.writeFile('ids.txt', JSON.stringify(ids));
            let objArr = JSON.parse(await fs.promises.readFile(this.archivo, 'utf-8'));
            objArr.push(obj);
            await fs.promises.writeFile(this.archivo, JSON.stringify(objArr));
            console.log(`Objeto guardado correctamente en ${this.archivo}`)
        }
        catch(err){
            if(err){
                obj.id = 1;
                await fs.promises.writeFile('./ids.txt', JSON.stringify([1]));
                await fs.promises.writeFile(this.archivo, JSON.stringify([obj]));
                console.log(`Objeto guardado correctamente en ${this.archivo}`)
            }else{
                console.log(`Hubo un error: ${err}`);
            }
        }
    }
    async getById(){
        try{
            const data = JSON.parse(await fs.promises.readFile(this.archivo, 'utf-8'));
            const object = data.find(object => object.id === id);
            return (object ? console.log(object) : console.log(`No se encontro el objeto con el id : ${id}`));
        }
        catch(err){
            console.log(`Hubo un error: ${err}`)
        }
    }
    async getAll(){
        try{
            const data = JSON.parse(await fs.promises.readFile(this.archivo, 'utf-8'));
            return (data ? console.log(data) : 'El archivo tiene un problema o se encuentra vacio')
        }
        catch(err){
            console.log(`Hubo un error: ${err}`)
        }
    }
    async deleteById(){
        try{
            const data = JSON.parse(await fs.promises.readFile(this.archivo, 'utf-8'));
            const arr = data.filter(obj => obj.id !== id);
            await fs.promises.writeFile(this.archivo, JSON.stringify(arr));
            console.log(`El objeto con el ID ${id} ha sido eliminado`)
        }
        catch(err){
            console.log(`Hubo un error : ${err}`)
        }
    }
    async deleteAll(){
        try{
            await fs.promises.writeFile(this.archivo, [])
            console.log('Objetos Eliminados')
        }
        catch(err){
            console.log(`Hubo un error: ${err}`)
        }
    }
}

const archivo = new Contenedor('./productos.txt')

// archivo.save(productos[0]);
// archivo.getById(2)
// archivo.getAll()
// archivo.deleteById(3)
// archivo.deleteAll();