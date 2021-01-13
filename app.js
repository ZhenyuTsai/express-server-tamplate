const createError = require('http-errors')
const express = require('express')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
// const session = require('express-session');
const logger = require('morgan')
const jwt = require('./utils/jwt')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const fileRouter = require('./routes/file')

const app = express()

// 查看引擎设置 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// 配置cors跨域
app.use(cors())
// 配置静态资源服务
app.use(express.static(path.join(__dirname, 'public')))

// 配置cookie服务
/* app.use(session({
  secret: 'keyboard cat', // 为了安全考虑需要配置secret属性
  cookie: { maxAge: 60 * 1000 * 30 }, // 设置过期时间
  resave: true, // 即使 session 没有被修改，也保存 session 值，默认为 true
  saveUninitialized: false // 无论有没有session cookie, 每次请求都设置session cookie ， 默认格式 connect.sid
})) */

app.use('/', (req, res, next)=>{next()}, indexRouter)

// 用户模块
app.use('/users', (req, res, next)=>{
  const { headers } = req
  const whiteList = ['/login','/register']
  if(whiteList.indexOf(req.url) === -1){
    jwt.checkToken(headers.token).then(() => {
      next()
    }).catch((err) => {
      res.send(err)
    })
  } else{
    next()
  }
}, usersRouter)

// 文件模块
app.use('/file', fileRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
