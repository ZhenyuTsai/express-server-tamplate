const mysql = require('../utils/mysql')

const queryInfo = (username) => {
  return new Promise ((resolve, reject)=>{
    mysql.query(`select * from user where username="${username}"`,(err,res)=>{
      if (err) return reject(err)
      resolve(res)
    })
  })
}

const addUser = ({
  username,
  password,
  phone,
  email,
  sex,
  birthday,
  address
}) => {
  return new Promise ((resolve, reject)=>{
    mysql.query('insert into user set ?',
    {
      username: username,
      password: password,
      phone: phone,
      email: email,
      sex: sex,
      birthday: birthday,
      address: address
    },
    (err,res)=>{
      if (err) return reject(err)
      resolve(res)
    })
  })
}

module.exports = { queryInfo, addUser }