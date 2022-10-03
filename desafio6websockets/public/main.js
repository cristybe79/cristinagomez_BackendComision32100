const socket = io.connect();

const inputUsername = document.getElementById('inputUsername')
const inputMensaje = document.getElementById('inputMensaje')
const btnEnviar = document.getElementById('btnEnviar')
const agregaMensaje = document.getElementById('agregaMensaje')
const agregaProducto = document.getElementById('agregaProductos')

//MENSAJES
//formulario escucha mensaje
agregaMensaje.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const msg = {
        autor: inputUsername.value,
        texto: inputMensaje.value
    }
    socket.emit('nuevoMensaje', msg),
    console.log(msg)
    agregaMensaje.reset()
    
    
})


socket.on('mensaje', mensaje => {
    renderizaMensaje(mensaje)

})

const renderizaMensaje = (data) => {
    const html = data.map((data) => {
        let textofragmento = `
                    <div>
                <b style="color:blue;">${data.autor}</b>
                [<span style="color:brown;">${data.fyh}</span>] :
                <i style="color:green;">${data.texto}</i>
            </div>`;
        return textofragmento;
    }).join(`\n`)
    document.getElementById('mensaje').innerHTML = html
}

inputUsername.addEventListener('input', () => {
    const hayEmail = inputUsername.value.length
    const hayTexto = inputMensaje.value.length
    inputMensaje.disabled = !hayEmail
    btnEnviar.disabled = !hayEmail||!hayTexto
})

inputMensaje.addEventListener('input', () => {
    const hayTexto = inputMensaje.value.length
    btnEnviar.disabled = !hayTexto
})



//apiProductos
agregaProducto.addEventListener('submit', e => {
    e.preventDefault()
    const producto = {
        title: agregaProducto[0].value,
        price: agregaProducto[1].value,
        thumbnail: agregaProducto[2].value
    }
    socket.emit('update', producto)
    console.log(producto)
    agregaProducto.reset()
})

socket.on('productos', productos => {
    traeApiProductos(productos).then(html => {
        document.getElementById('productos').
            innerHTML = html
        
    })
})


function traeApiProductos(productos){
    return fetch('views/products.hbs')
        .then(res => res.text())
        .then(hbs => {
            const template = Handlebars.compile(hbs)
            const html = template({ productos })
            return html
        })
    
}

