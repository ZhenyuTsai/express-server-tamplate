const jwt = require('jsonwebtoken')

const scrict = 'jklajlk;feoiegggs'

const creatToken = (palyload) => {
  palyload.ctime = Date.now() // 创建时间
  palyload.exp = Math.floor(Date.now() / 1000) + (60 * 60) // 失效时间
  return jwt.sign(palyload, scrict)
}

const checkToken = (token) => {
  return new Promise (( resolve, reject )=>{
    jwt.verify(token, scrict, (err, data)=>{
      if(err){
        reject({code: -999, msg:'token 验证失败'})
      } else {
        resolve(data)
      }
    })
  })
}

module.exports = { creatToken, checkToken }