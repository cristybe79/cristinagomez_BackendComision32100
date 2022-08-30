const fs = require('fs')




class Contenedor{
    constructor(name) {
        this.name = name 
        
    }
    async save(objeto) {
        try {
            const dataJson = await fs.promises.readFile(`./${this.name}`, 'utf-8')
            const data = JSON.parse(dataJson);
            console.log(data)
            objeto.id = data[data.length - 1].id + 1
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
    async deleteALL() {
        const contenidoEliminado = []
        await fs.promises.writeFile(`${this.name}`, JSON.stringify(contenidoEliminado))
        return contenidoEliminado
    }
}

let contenedor = new Contenedor("pdto.json")
let objetoNuevo = {
    "id": 5,
    "title": "Celular",
    "price": 700
}

let obj1 = {
    "id":1,
    "title": 'TV',
    "price": 1000,
    "thumbnail": 'https://w7.pngwing.com/pngs/676/866/png-transparent-panasonic-led-backlit-lcd-high-definition-television-1080p-smart-tv-smart-tv-thumbnail.png',
}
contenedor.save(obj1).then(res => {
    console.log(res)
})
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

const contenedor2 = new Contenedor("productos2.json");

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


// contenedor2.save(obj1).then(res => {
//         console.log(res)
// })
// contenedor2.save(obj2).then(res => {
//     console.log(res)
// })
// contenedor2.save(obj3).then(res => {
//     console.log(res)
// })
// contenedor2.getById(7).then(res => {
//     console.log(res)
// })
// contenedor2.getAll().then(res => {
//     console.log(res)
// })
// contenedor.deleteById(3).then(res => {
//     console.log(res)
// })
                
// contenedor.deleteALL().then(res => {
//     console.log(`borrado con exito`)
//     console.log(res)
// })

