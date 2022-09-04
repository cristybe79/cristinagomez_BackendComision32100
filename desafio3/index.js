const fs = require('fs')




class Contenedor {
    constructor(ruta) {
        this.ruta = ruta

    }

    async save(objeto) {
        const data = await this.getAll()
        let nvoId
        if (data.length == 0) {
            nvoId = 1

        } else {
            nvoId = data[data.length - 1].id + 1
        }
        const nvoObjeto = { ...objeto, id: nvoId }
        data.push(nvoObjeto)
        try {
            await fs.promises.writeFile(`./${this.ruta}`, JSON.stringify(data,null,2))
            return nvoId
        }
        catch (error) {
            console.log(error)
        }
    }

    async getById(id) {
        try {
            const data = await this.getAll()
            const prodSelecionado = data.find(e => e.id == id)
            return prodSelecionado 
        }
        catch (error) {
            console.log(error)
        }
    }
    async getAll() {
        try {
            const objs = await fs.promises.readFile(`./${this.ruta}`, 'utf-8')
            return JSON.parse(objs)
        } catch (error) {
            return []
        }

    }
    async deleteById(id) {
        try {
            const data = await this.getAll()
            const filtrado = data.filter(e => e.id != id)
            await fs.promises.writeFile(`./${this.ruta}`, JSON.stringify(filtrado, null, 2))
            return filtrado
        }
        catch (error) {
            console.log(error)
        }
    }
    async deleteAll() {
        const contenidoEliminado = []
        await fs.promises.writeFile(`./${this.ruta}`, JSON.stringify(contenidoEliminado, null, 2))
        return contenidoEliminado
    }
}

module.exports = Contenedor         
