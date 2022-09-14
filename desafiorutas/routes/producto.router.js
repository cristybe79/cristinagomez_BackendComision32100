const express = require('express')
const router = express.Router()
const controladores = require('../componentes/controladores')


router.get('/', controladores.traeTodo);
router.get('./:id', controladores.traePorId)
router.post('/', controladores.agrega)
router.put('/:id', controladores.actualizaProd)
router.delete('/:id', controladores.eliminaId)

module.exports = router