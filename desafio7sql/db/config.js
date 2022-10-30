module.exports = {
    mariaDB: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            port: 3306,
            user: 'root',
            database: 'desafiosql'
        }
    },
    sqlite: {
        client: 'sqlite3',
        connection: {
            filename: './sqlite/chat.sqlite',
        },
    }
}