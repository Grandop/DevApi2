const persPersistencia = require("../persistencia/pers_persistencia")

async function inserir(pers) {
    if (pers && pers.id && pers.name && pers.gender) {
        try {
            const persInserido = await persPersistencia.inserir(pers);
            return persInserido
        } catch(err) { 
            throw err 
        }
    } else {
        const erro = new Error()
        erro.message = "Falta parametros para o personagem"
        erro.status = 400
        throw erro
    }
}

async function listar() {
    try { 
        const listaPers = await persPersistencia.listar()
        return listaPers
    } catch(err) { 
        throw err
    }
}

async function buscarPorId(id) {
    try { 
        const pers = await persPersistencia.buscarPorId(id)
        if(!pers) {
            let erro = new Error()
            erro.message = "Personagem não encontrado"
            erro.status = 404
            throw erro
        }
        return pers
    } catch(err) {
        throw err
    }
}

async function atualizar(id, novoPers) {
    if(novoPers && novoPers.name && novoPers.gender) {
        try {
            const persAtualizado = await persPersistencia.atualizar(id, novoPers)
            if(!persAtualizado) {
                let erro = new Error()
                erro.message = "Personagem não encontrado"
                erro.status = 404
                throw erro
            }
            return persAtualizado
        } catch(err) { 
            throw err
        }
    } else {
        const erro = new Error()
        erro.message = "Falta parametros para o personagem"
        erro.status = 400
        throw erro
    }
}

async function deletar(id) {
    try { 
        const pers = await persPersistencia.deletar(id)
        if(!pers) {
            let erro = new Error()
            erro.message = "Personagem nao encontrado"
            erro.status = 404
            throw erro
        }
        return pers
    } catch(err) { 
        throw err 
    }
}

module.exports = { 
    listar, 
    inserir, 
    buscarPorId, 
    deletar, 
    atualizar
}