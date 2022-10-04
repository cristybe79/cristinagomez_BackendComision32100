const products = [
    {
        id: 1,
        title: "Escuadra",
        price: 123.45,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
    },
    {
        id: 2,
        title: "Calculadora",
        price: 234.56,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
    },
    {
        id: 3,
        title: "Globo Terráqueo",
        price: 345.67,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    }
]
    
class Productos {

    constructor() {
        this.producto = []
        this.id=0
    }
    traeTodo() {
        return [... this.producto]
    }
    traePorId(id) {
        const prodId = this.producto.find(prod => prod.id == id)
        if (prodId) return prodId
        return { error: 'producto no encontrado' }
    }
    agregaProd(prod) {
        prod.id = this.producto[this.producto.length - 1]?.id + 1 || 1;
        this.producto.push(prod)
    }
    actualizaProd(id, nuevoDato) {
        const prodIdActualizar = this.producto.filter(prod => prod.id === id).length ? true : false;
        if (!prodIdActualizar) return { error: 'producto no econtrado' }
        nuevoDato.id = id
        this.producto = this.producto.map(prod => {
            if (prod.id == id) return nuevoDato;
            return prod
        })
        return { message: `producto id: ${id} actualizado` }
    
    }
    eliminaId(id) {
        const prodIdEliminar = this.producto.filter(prod => prod.id === id).length ? true : false;
        if (!prodIdEliminar) return { error: 'producto no econtrado' }
        this.producto = this.producto.filter(prod => prod.id != id)
        return { message: `producto id: ${id} eliminado` }
    }

}

module.exports = Productos;