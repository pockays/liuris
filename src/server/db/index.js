let mysql = require ('mysql')

let db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'134511130qq',
    database:'liuris'
})

module.exports =db