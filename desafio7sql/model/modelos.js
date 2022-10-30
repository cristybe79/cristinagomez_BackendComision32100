const knex = require('knex');
    
class Productos {


    constructor(tableName,config) {
        this.table = tableName,
        this.knex = knex(config);

        this.knex.schema
            .hasTable(this.table)
            .then(exists => {
            if (!exists) {
                return this.knex.schema.createTable(this.table, table => {
                    table.increments('id').notNullable().primary();
                    table.string('title', 100).notNullable();
                    table.string('thumbnail').notNullable();
                    table.float('price').notNullable();
                });
            }
        }).catch(err => console.log("error en constructor", err))


    }

    async traeTodo() {
        try {
            const products = await this.knex.from(this.table).select('id',"title","price","thumbnail");
            console.table(products)
            return products;
        } catch (error) {
            console.log("error al obtener productos", error);
        } 
    }
    async traePorId(id) {
        try {
            const product = await this.knex.from(this.table).where('id', id).select('id','title','price','thumbnail');
            return product;
        } catch (error) {
            console.log("error al obtener producto", error);
        } 
    }
    async agregaProd(product) {
        const { title, price, thumbnail } = product;
        if (!title || !price || !thumbnail) {
            return null;
        }
        const nuevoProducto = {
            title,
            price,
            thumbnail,
        }

        try {
            await this.knex(this.table).insert(nuevoProducto);
        } catch (error) {
            console.log("error al crear producto", error);
        } 

    }
    async actualizaProd(id, nuevoDato) {

        try {
            await this.knex.from(this.table).where('id', id).update(nuevoDato);
            return { message: `producto id: ${id} actualizado` };
        } catch (error) {
            console.log("error al actualizar producto", error);
        } 
    
    }
    async eliminaId(id) {
        try {
            await this.knex.from(this.table).where('id', id).del();
            return { message: `producto id: ${id} eliminado` };
        } catch (error) {
            console.log("error al borrar producto", error);
        } 
    }

}

module.exports = Productos;