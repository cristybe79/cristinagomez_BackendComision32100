const fs = require('fs')




class Contenedor{
    constructor(name) {
        this.name = name 
        
    }
    async save(objeto) {
        try {
            const dataJson = await fs.promises.readFile(`./${this.name}`, 'utf-8')
            const data = JSON.parse(dataJson);
            objeto.id = data[data.length - 1]?.id + 1 || 1;
            data.push(objeto)
            await fs.promises.writeFile(`./${this.name}`, JSON.stringify(data))
            return objeto.id
        }
        catch(error) {
            console.log(error)
        }
    }

    async getById(id) {
        try {
            const data = JSON.parse(await fs.promises.readFile(`./${this.name}`, 'utf-8'))
            let prodSelecionado = data.forEach(e => e.id === id)
            return prodSelecionado ? prodSelecionado : null
        }
        catch (error) {

            console.log(error)
        }
    }
    async getAll() {

        try {
            const data = JSON.parse(await fs.promises.readFile(`./${this.name}`, 'utf-8'))
            return data
        }
        catch (error) {
            console.log(error)
        }
    }
    async deleteById(id) {
        try {
            const data = JSON.parse(await fs.promises.readFile(`./${this.name}`, 'utf-8'))
            const filtrado = data.filter(e => e.id != id)
            console.log(filtrado)
            await fs.promises.writeFile(`./${this.name}`, JSON.stringify(filtrado))
            return filtrado
        }
        catch (error) {
            console.log(error)
        }
    }
    async deleteAll() {
        const contenidoEliminado = [{}]
        await fs.promises.writeFile(`${this.name}`, JSON.stringify(contenidoEliminado))
        return contenidoEliminado
    }
}

let contenedor = new Contenedor("contenedor2.json")
let objetoNuevo = {
    "id": 5,
    "title": "Celular",
    "price": 700
}

// contenedor.save(objetoNuevo).then(res => {
//     console.log(res)
// })
// contenedor.getById(7).then(res => {
    //     console.log(res)
    // })
    // contenedor.getAll().then(res => {
    //     console.log(res)
    // })
    // contenedor.deleteById(3).then(res => {
    //     console.log(res)
    // })
    // contenedor.deleteALL().then(res => {
    //     console.log(`borrado con exito`)
    //     console.log(res)
    // })
                
let contenedor2 = new Contenedor("productos2.json");
                
const obj1 = {
    title: 'TV',
    id:1,
    price: 1000,
    thumbnail: 'https://w7.pngwing.com/pngs/676/866/png-transparent-panasonic-led-backlit-lcd-high-definition-television-1080p-smart-tv-smart-tv-thumbnail.png',
                }
const obj2 = {
    title: 'Computadora',
    price: 2000,
    thumbnail: 'https://w7.pngwing.com/pngs/524/847/png-transparent-dell-vostro-laptop-desktop-computers-computer-desktop-pc-computer-network-electronics-computer-thumbnail.png',
}
const obj3 = {
    title: 'Heladera',
    price: 3000,
    thumbnail: 'https://w7.pngwing.com/pngs/641/464/png-transparent-refrigerator-silver-mini-fridge-angle-household-kitchen-appliance-thumbnail.png',
}
async function save(obj) {
    const res = await contenedor2.save(obj);
    console.log(res);
}
async function getById(id) {
    const res = await contenedor2.getById(id);
    console.log(res);
}

async function getAll() {
    const res = await contenedor2.getAll();
    console.log(res);
}
async function deleteById(id) {
    const res = await contenedor2.deleteById(id);
    console.log(res);
}
async function deleteAll() {
    const res = await contenedor2.deleteAll();
    console.log(res);
}

const test = async () => {
    console.log("Inicio de pruebas SAVE");
    await save(obj1);
    await save(obj2);
    await save(obj3);
    console.log("FIN de pruebas SAVE");
    console.log("Inicio de prueba GETBYID (2)");
    await getById(2);
    console.log("FIN de prueba GETBYID");
    console.log("Inicio de prueba DELETEBYID (1)");
    await deleteById(1);
    console.log("FIN de prueba DELETEBYID");
    console.log("Inicio de prueba GETALL");
    await getAll();
    console.log("FIN de prueba GETALL");
    console.log("Inicio de prueba DELETEALL");
    await deleteAll();
    console.log("FIN de prueba DELETEALL");
}
test();