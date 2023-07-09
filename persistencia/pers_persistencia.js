const {Client} = require("pg")

const crendenciais = {
    host: 'localhost',
    port: 5432,
    database: 'StarWars',
    user: 'postgres',
    password: '1234'
}

async function inserir(pers) {
    const persCrendenciais = new Client(crendenciais)
    const sql = "INSERT INTO personagens(id, name, gender) VALUES($1,$2,$3) RETURNING *"
    const values = [pers.id, pers.name, pers.gender]
    persCrendenciais.connect()
    try {
        const resultado = await persCrendenciais.query(sql, values)
        persCrendenciais.end()
        return resultado.rows[0]
    } catch(error) {
        throw error
    }
}

async function listar() {
    
    try {
        const pers = new Client(crendenciais)
        const sql = "SELECT * FROM personagens order by id"
        pers.connect()
        const resultado = await pers.query(sql)
        pers.end()
        return resultado.rows
    } catch(error) {
        throw error
    }
}

async function buscarPorId(id) {
    const pers = new Client(crendenciais)
    const sql = "SELECT * FROM personagens WHERE id=$1"
    const values = [id]
    pers.connect()
    try {
        const resultado = await pers.query(sql, values)
        pers.end()
        return resultado.rows[0]
    }
    catch(error){
        throw error
    }
}

async function atualizar(id, pers) {
    const persCrendenciais = new Client(crendenciais)
    const sql = "UPDATE personagens SET name=$1, gender=$2 WHERE id=$3 RETURNING *"
    const values = [pers.name, pers.gender, id]
    persCrendenciais.connect()
    try {
        const resultado = await persCrendenciais.query(sql,values)
        persCrendenciais.end()
        return resultado.rows[0]
    } catch(error) {
        throw error
    }
}

async function deletar(id) {
    const pers = new Client(crendenciais)
    const sql = "DELETE FROM personagens WHERE id=$1 RETURNING *"
    const values = [id]
    pers.connect()
    try {
        const resultado = await pers.query(sql, values)
        pers.end()
        return resultado.rows[0]
    } catch(error) {
        throw error
    }
}

module.exports = { 
    listar, 
    buscarPorId, 
    inserir, 
    atualizar, 
    deletar
}