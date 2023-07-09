const persNegocio = require("../negocio/pers_negocio")

async function inserir(req, res) {    
    const pers = req.body
    try { 
        const persInserido = await persNegocio.inserir(pers)
        res.status(201).json(persInserido);
    } catch (err) {
        if (err.status) {
            res.status(err.status).json(err)
        } else {
            res.status(500).json({message: "Erro não identificado"})
        }
    }
}

async function listar(req, res) {    
    try {
        const listaPers = await persNegocio.listar()
        res.status(200).json(listaPers)
    } catch(err) {
        res.status(500).json({erro: err})
    }
}

async function buscarPorId(req, res) {    
    const id = req.params.id;
    try{ 
        const pers = await persNegocio.buscarPorId(id)
        res.json(pers)
    } catch(err) {
        if (err.status) {
            res.status(err.status).json(err)
        } else {
            res.status(500).json({message: "Erro nao identificado"})
        }
    }
}

async function atualizar(req, res) {    
    const id = req.params.id
    const pers = req.body
    try{ 
        const persAtualizado = await persNegocio.atualizar(id, pers)
        res.json(persAtualizado)
    } catch (err) {
        if (err.status) {
            res.status(err.status).json(err)
        } else {
            res.status(500).json({message: "Erro nao identificado"})
        }
    }
}

async function deletar(req, res) {    
    const id = req.params.id
    try{ 
        const pers = await persNegocio.deletar(id)
        res.json(pers)
    } catch(err) {
        if(err.status) {
            res.status(err.status).json(err)
        } else {
            res.status(500).json({message: "Erro nao identificado"})
        }
    }
}

module.exports = {
    listar,
    buscarPorId,
    inserir,
    atualizar,
    deletar
}