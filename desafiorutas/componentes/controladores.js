const Productos = require('./modelos')


const producto = new Productos()

const traeTodo = (req, res) => {
    const data = producto.traeTodo();
    res.json(data)
}

const traePorId = (req, res) => {
    const id = Number(req.params.id)
    const data = producto.traePorId(id)
    if (data.error) return res.status(404).json(data)
    res.json(data)
}

const agrega = (req, res) => {
    const productoAgr = req.body;
    productoAgr.price = Number(productoAgr.price);
    const data = producto.agregaProd(productoAgr);
    res.json(data);

}

const actualizaProd = (req, res) => {
    const id = Number(req.params.id);
    const productoAct = req.body;
    productoAct.price = Number(productoAct.price);
    const data = producto.actualizaProd(id, productoAct);
    if (data.error) return res.status(404).json(data);
    res.sendStatus(200);
}

const eliminaId = (req, res) => {
    const id = Number(req.params.id);
    const data = producto.eliminaId(id);
    if (data.error) return res.status(404).json(data);
    res.sendStatus(200);
}

module.exports = { traeTodo, traePorId, agrega, actualizaProd, eliminaId };