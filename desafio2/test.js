
const Contenedor = require("./index.js");

const obj1 = {
    title: 'TV',
    id: 1,
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

const contenedor2 = new Contenedor('productos.txt')


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
    
    console.log("Muestro los objetos");
    await getAll();
    console.log("Eliminamos todos los objetos");
    await deleteAll();
    console.log("------------");
    console.log("Guardo Objetos");
    await save(obj1);
    await save(obj2);
    await save(obj3);
    console.log("------------");
    console.log("Muestro el objeto con ID nro: 2");
    await getById(2);
    console.log("------------");
    console.log("Eliminamos el Objeto con ID nro: 1");
    await deleteById(1);
    console.log("------------");
    await save(obj1);
    console.log("Terminamos ejecucion");
}
test();