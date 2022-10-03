const {promises: fs} = require('fs')
const mensajes = []

class Mensajes{
    constructor() {
        this.mensaje = mensajes
    }

    async listarTodo() {
        try {
            const objs = await fs.readFile(this.mensaje, 'utf-8')
            return JSON.parse(objs)
        } catch (error) {
            return []
        }
    }
    async guardarMensajes(msj) {
        msj.id = this.mensaje[this.mensaje.length - 1]?.id + 1 || 1;
        this.mensaje.push(msj)
    }

}
module.exports = Mensajes

