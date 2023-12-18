const { findAllMenu, createNewMenu, updateMenu, deleteMenu } = require('../controller/menuController')
const router = require('express').Router()

router.get('/menus', findAllMenu)
router.post('/createmenu', createNewMenu)
router.put('/updatemenu/:id', updateMenu)
router.delete('/deletemenu/:id', deleteMenu)
module.exports = router