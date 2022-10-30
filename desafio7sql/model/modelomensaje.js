const knex = require("knex");


class Mensajes{
    constructor(tableName,config) {
        this.table = tableName,
        this.knex = knex(config);

        this.knex.schema
            .hasTable(this.table)
            .then(exists => {
            if (!exists) {
                return this.knex.schema.createTable(this.table, table => {
                    table.increments('id').notNullable().primary();
                    table.string('email', 70).notNullable();
                    table.string('message').notNullable();
                    table.string('date', 50).notNullable();
                });
            }
        }).catch(error => console.log("error en constructor", error))
    }

    async listarTodo() {
        try {
            const data = await this.knex.from(this.table).select('*');
            return data; 
        } catch (error) {
            console.log("error al obtener mensajes", error);
        }
    }
    async guardarMensajes(msj) {

        try {
            await this.knex(this.table).insert(msj)
        } catch (error) {
            throw new Error(`Error al guardar: ${error}`)
        }
    }

}
module.exports = Mensajes;

