#Comandos DESAFIOS MONGO

use desafiomongo
#-CREAR UNA BASE DE DATOS LLAMADA ECOMMERCE

use ecommerce

## QUE TENGA 2 COLLECCIONES

db.createCollection('mensajes')
db.createCollection('productos')

show collections #muestra las 2 collecciones creadas
# PUNTO 1 Y 2
#AGREGAMOS 10 DOCUMENTOS

### mensajes
db.mensajes.insertOne({email:"sofia@mail.com",mensaje:"buenos dias",fechayhora:ISODate()})
db.mensajes.insertOne({email:"juan@mail.com",mensaje:"buenos dias, Sofia",fechayhora:ISODate()})
db.mensajes.insertOne({email:"sofia@mail.com",mensaje:"quisiera consultar por los SMART TV",fechayhora:ISODate()})
db.mensajes.insertOne({email:"juan@mail.com",mensaje:"que marca de SMART TV, le interesa",fechayhora:ISODate()})
db.mensajes.insertOne({email:"sofia@mail.com",mensaje:"marca SAMSUNG",fechayhora:ISODate()})
db.mensajes.insertOne({email:"juan@mail.com",mensaje:"tenemos 43, 50 y 60 pulgadas",fechayhora:ISODate()})
db.mensajes.insertOne({email:"sofia@mail.com",mensaje:"el de 50 pulgadas que precio tiene",fechayhora:ISODate()})
db.mensajes.insertOne({email:"juan@mail.com",mensaje:" lo tenemos en un precio de oferta por 500usd",fechayhora:ISODate()})
db.mensajes.insertOne({email:"sofia@mail.com",mensaje:"bueno muchas gracias, lo pensare",fechayhora:ISODate()})
db.mensajes.insertOne({email:"juan@mail.com",mensaje:"por nada, cualquier otra consulta sin problemas, Saludos",fechayhora:ISODate()})

### productos (PRECIOS DE 100 A 5000)
db.productos.insertMany([{title:"SMART TV SAMSUNG 40", precio:430, thumbnail:"url"},{title:"SMART TV SAMSUNG 50", precio:500, thumbnail:"url"},{title:"SMART TV SAMSUNG 60", precio:600, thumbnail:"url"},{title:"SMART TV LG 40", precio:420, thumbnail:"url"},{title:"SMART TV LG 50", precio:490, thumbnail:"url"},{title:"SMARTPHONE SAMSUNG A54", precio:300, thumbnail:"url"},{title:"SMARTPHONE SAMSUNG A21", precio:200, thumbnail:"url"},{title:"SMARTPHONE MOTOROLA G22", precio:250, thumbnail:"url"},{title:"NOTEBOOK APPLE MAC PRO ", precio:2000, thumbnail:"url"},{title:"NOTEBOOK ASUS", precio:1200, thumbnail:"url"},{title:"NOTEBOOK DELL", precio:1500, thumbnail:"url"},{title:"SMART QLED", precio:3500, thumbnail:"url"},{title:"NOTEBOOK MAC PRO-K", precio:5000, thumbnail:"url"}])

#PUNTO 3
db.mensajes.find()
[
  {
    _id: ObjectId("635f091227621da878ca5d5b"),
    email: 'sofia@mail.com',
    mensaje: 'buenos dias',
    fechayhora: ISODate("2022-10-30T23:30:26.514Z")
  },
  {
    _id: ObjectId("635f096227621da878ca5d5c"),
    email: 'juan@mail.com',
    mensaje: 'buenos dias, Sofia',
    fechayhora: ISODate("2022-10-30T23:31:46.322Z")
  },
  {
    _id: ObjectId("635f0bd927621da878ca5d5d"),
    email: 'sofia@mail.com',
    mensaje: 'quisiera consultar por los SMART TV',
    fechayhora: ISODate("2022-10-30T23:42:17.738Z")
  },
  {
    _id: ObjectId("635f0c0927621da878ca5d5e"),
    email: 'juan@mail.com',
    mensaje: 'que marca de SMART TV, le interesa',
    fechayhora: ISODate("2022-10-30T23:43:05.422Z")
  },
  {
    _id: ObjectId("635f0c1827621da878ca5d5f"),
    email: 'sofia@mail.com',
    mensaje: 'marca SAMSUNG',
    fechayhora: ISODate("2022-10-30T23:43:20.923Z")
  },
  {
    _id: ObjectId("635f0c3527621da878ca5d60"),
    email: 'juan@mail.com',
    mensaje: 'tenemos 43, 50 y 60 pulgadas',
    fechayhora: ISODate("2022-10-30T23:43:49.533Z")
  },
  {
    _id: ObjectId("635f0c4727621da878ca5d61"),
    email: 'sofia@mail.com',
    mensaje: 'el de 50 pulgadas que precio tiene',
    fechayhora: ISODate("2022-10-30T23:44:07.878Z")
  },
  {
    _id: ObjectId("635f0c5727621da878ca5d62"),
    email: 'juan@mail.com',
    mensaje: ' lo tenemos en un precio de oferta por 500usd',
    fechayhora: ISODate("2022-10-30T23:44:23.530Z")
  },
  {
    _id: ObjectId("635f0c6227621da878ca5d63"),
    email: 'sofia@mail.com',
    mensaje: 'bueno muchas gracias, lo pensare',
    fechayhora: ISODate("2022-10-30T23:44:34.191Z")
  },
  {
    _id: ObjectId("635f0c6b27621da878ca5d64"),
    email: 'juan@mail.com',
    mensaje: 'por nada, cualquier otra consulta sin problemas, Saludos',
    fechayhora: ISODate("2022-10-30T23:44:43.914Z")
  }
]
db.productos.find()

[
  {
    _id: ObjectId("635f15a627621da878ca5d70"),
    title: 'SMART TV SAMSUNG 40',
    precio: 430,
    thumbnail: 'url'
  },
  {
    _id: ObjectId("635f15a627621da878ca5d71"),
    title: 'SMART TV SAMSUNG 50',
    precio: 500,
    thumbnail: 'url'
  },
  {
    _id: ObjectId("635f15a627621da878ca5d72"),
    title: 'SMART TV SAMSUNG 60',
    precio: 600,
    thumbnail: 'url'
  },
  {
    _id: ObjectId("635f15a627621da878ca5d73"),
    title: 'SMART TV LG 40',
    precio: 420,
    thumbnail: 'url'
  },
  {
    _id: ObjectId("635f15a627621da878ca5d74"),
    title: 'SMART TV LG 50',
    precio: 490,
    thumbnail: 'url'
  },
  {
    _id: ObjectId("635f15a627621da878ca5d75"),
    title: 'SMARTPHONE SAMSUNG A54',
    precio: 300,
    thumbnail: 'url'
  },
  {
    _id: ObjectId("635f15a627621da878ca5d76"),
    title: 'SMARTPHONE SAMSUNG A21',
    precio: 200,
    thumbnail: 'url'
  },
  {
    _id: ObjectId("635f15a627621da878ca5d77"),
    title: 'SMARTPHONE MOTOROLA G22',
    precio: 250,
    thumbnail: 'url'
  },
  {
    _id: ObjectId("635f15a627621da878ca5d78"),
    title: 'NOTEBOOK APPLE MAC PRO ',
    precio: 2000,
    thumbnail: 'url'
  },
  {
    _id: ObjectId("635f15a627621da878ca5d79"),
    title: 'NOTEBOOK ASUS',
    precio: 1200,
    thumbnail: 'url'
  },
  {
    _id: ObjectId("635f15a627621da878ca5d7a"),
    title: 'NOTEBOOK DELL',
    precio: 1500,
    thumbnail: 'url'
  },
  {
    _id: ObjectId("635f15a627621da878ca5d7b"),
    title: 'SMART QLED',
    precio: 3500,
    thumbnail: 'url'
  },
  {
    _id: ObjectId("635f15a627621da878ca5d7c"),
    title: 'NOTEBOOK MAC PRO-K',
    precio: 5000,
    thumbnail: 'url'
  }
]

#Punto 4 Cantidad de documentos
db.mensajes.countDocuments()
10
db.productos.countDocuments()
13

#punto 5 
##a agregar un producto a la collecion productos
db.productos.insertOne({title:"AIRE ACONDICIONADO SURREY",precio:4500,thumbnail:"url"})

##REALIZAR UNA CONSULTA POR ORDEN ESPECIFICO


# Listar productos menores a 1000

db.productos.find({precio:{$lt:1000}})

[
  {
    _id: ObjectId("635f15a627621da878ca5d70"),
    title: 'SMART TV SAMSUNG 40',
    precio: 430,
    thumbnail: 'url'
  },
  {
    _id: ObjectId("635f15a627621da878ca5d71"),
    title: 'SMART TV SAMSUNG 50',
    precio: 500,
    thumbnail: 'url'
  },
  {
    _id: ObjectId("635f15a627621da878ca5d72"),
    title: 'SMART TV SAMSUNG 60',
    precio: 600,
    thumbnail: 'url'
  },
  {
    _id: ObjectId("635f15a627621da878ca5d73"),
    title: 'SMART TV LG 40',
    precio: 420,
    thumbnail: 'url'
  },
  {
    _id: ObjectId("635f15a627621da878ca5d74"),
    title: 'SMART TV LG 50',
    precio: 490,
    thumbnail: 'url'
  },
  {
    _id: ObjectId("635f15a627621da878ca5d75"),
    title: 'SMARTPHONE SAMSUNG A54',
    precio: 300,
    thumbnail: 'url'
  },
  {
    _id: ObjectId("635f15a627621da878ca5d76"),
    title: 'SMARTPHONE SAMSUNG A21',
    precio: 200,
    thumbnail: 'url'
  },
  {
    _id: ObjectId("635f15a627621da878ca5d77"),
    title: 'SMARTPHONE MOTOROLA G22',
    precio: 250,
    thumbnail: 'url'
  }
]

## Listar productos entre 1000 a 3000

db.productos.find({$and:[{precio:{$gte:1000}},{precio:{$lte:3000}}]})


## Listar productos mayores a 3000

db.productos.find({precio:{$gt:3000}});

## Listar tercer producto mas barato

db.productos.find({},{_id:0,title:1}).sort({precio:1}).limit(1).skip(2)

## Agregar campo Stock a los productos

db.productos.updateMany({},{$set:{stock:100}})

## Cambia Stock a 0 de productos menores a 4000

db.productos.updateMany({precio:{$gt:4000}},{$set:{stock:0}})

## Borrar productos con precio menor a 1000

db.productos.deleteMany({precio:{$lt:1000}})

#6 Crea un usuario que solo pueda leer la base de datos

db.createUser({user:"pepe",pwd:"asd456",roles:[{role:"read",db:"eccommerce"}]})


