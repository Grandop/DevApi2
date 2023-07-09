const express = require("express")
const persController = require("../controller/pers_controller")

const router = express.Router()

router.post('/', persController.inserir)
router.get('/', persController.listar)
router.get('/:id', persController.buscarPorId)
router.put('/:id', persController.atualizar)
router.delete('/:id', persController.deletar)

module.exports = router