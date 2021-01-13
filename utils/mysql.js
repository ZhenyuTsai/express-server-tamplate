const mysql = require('mysql')

// 创建连接
const connection = mysql.createConnection({
  // 本地
  host: 'localhost',
  // 用户名
  user: 'root',
  // 密码
  password: 'root',
  // 数据库名称
  database: 'mydb',
  // 端口号
  port: 3306
})
connection.connect()
handleDisconnect(connection)
const query = (sql, params, callback) => {
  connection.query(sql, params, (err, data) => {
    callback && callback(err, data)
  })
}

function handleDisconnect(connection) {
  // 监听错误事件
  connection.on('error', function (err) {
    if (!err.fatal) {
      return
    }

    if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
      throw err
    }

    console.log('Re-connecting lost connection: ' + err.stack)

    connection = mysql.createConnection(connection.config)
    handleDisconnect(connection)
    connection.connect()
  })
}

module.exports = { query }