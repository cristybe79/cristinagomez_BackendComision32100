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
    inputMensaje.focus()
    
})


socket.on('mensajes', mensaje => {
    const html = renderizaMensaje(mensaje)
    console.log(mensaje)
    document.getElementById('mensajes').innerHTML = html
})

// const renderizaMensaje = (data) => {
//     const html = data.map((mensaje) => {
//         let textofragmento = `
//                     <div>
//                 <b style="color:blue;">${mensaje.autor}</b>
//                 [<span style="color:brown;">${mensaje.fyh}</span>] :
//                 <i style="color:green;">${mensaje.texto}</i>
//             </div>`;
//         return textofragmento;
//     }).join(`\n`)
//     document.getElementById('mensajes').innerHTML = html
// }
function renderizaMensaje(mensajes) {
    return mensajes.map(mensaje => {
        return (`
            <div>
                <b style="color:blue;">${mensaje.autor}</b>
                [<span style="color:brown;">${mensaje.fyh}</span>] :
                <i style="color:green;">${mensaje.texto}</i>
            </div>
        `)
    }).join(" ");
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

