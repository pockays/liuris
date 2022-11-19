let express = require('express')
let router =express.Router()
let user = require('./API/user')

router.get('/user',user.get)
router.get('/update',user.update)
router.get('/user',user.notesget)
router.get('/update',user.notesupdate)

module.exports = router