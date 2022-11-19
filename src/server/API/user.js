let db = require('../db/index')

// 首页的点赞
exports.get = (req,res) => {
    var sql = 'select * from mana'
    db.query(sql,[req.query.good],(err,data)=>{
        if(err){
            return res.send('错误:'+err.message)
        }
        res.send(data)
    })
}

exports.update = (req, res) => {        
    var sql = 'update mana set good = ? where id = 0'
    db.query(sql, [req.query.good], (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
