const express = require('express')
const router = express.Router()
const controladores = require('../model/controladores')


router.get('/productos', controladores.traeTodo);
router.get('/productos', controladores.getformControl);
router.get('/chat',controladores.chat)
router.get('./:id', controladores.traePorId)
router.post('/', controladores.agrega)
router.put('/:id', controladores.actualizaProd)
router.delete('/:id', controladores.eliminaId)


module.exports = router