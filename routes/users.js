const express = require('express')
const router = express.Router()
const jwt = require('../utils/jwt')
const userDb = require('../db/user')


/**
 * @api {post} /users/register 用户注册
 * @apiName 用户注册
 * @apiGroup 用户
 *
 * @apiParam {String} username 用户名
 * @apiParam {String} password 密码
 * @apiParam {String} birthday 生日
 * @apiParam {String} sex 性别
 * @apiParam {String} email 地址
 * @apiParam {String} address 地址
 * @apiParam {String} phone 联系电话
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  状态信息
 */
router.post('/register', async(req, res)=>{
  const { username, password, birthday, sex, email, address,  phone } = req.body

  userDb.queryInfo(username).then(async(data) => {
    if(data&&data.length>0){
      res.send({
        code: -1,
        msg: '当前用户已经存在'
      })
    } else {
      if(username&&password&&birthday&&sex&&address&&phone){
        try {
          const data = await userDb.addUser({
            username,
            password,
            phone,
            email,
            sex,
            birthday,
            address
          })
          res.send({
            code: 0,
            msg: '注册成功',
            data: data
          })
        } catch (error) {
          res.send({
            code: -1,
            msg: '注册失败'
          })
        }
      } else {
        res.send({
          code: -1,
          msg: '参数错误'
        })
      }
    }
  }).catch((err) => {
    res.send({
      code: -1,
      msg: '查询失败',
      err: err
    })
  })  
}) 

/**
 * @api {get} /users/getInfo 获取用户信息
 * @apiName 获取用户信息
 * @apiGroup 用户
 *
 * @apiHeader {String} token 用户鉴权token
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  状态信息
 */
router.get('/getInfo', (req,res)=>{
  const { token } = req.headers
  jwt.checkToken(token).then((result) => {
      const { username } = result
      userDb.queryInfo(username).then((data) => {
        if(data&&data.length>0){
          res.send({
            code: 0,
            msg: '查询成功',
            data:data[0]
          })
        } else {
          res.send({
            code: -1,
            msg: '当前用户不存在'
          })
        }
      }).catch((err) => {
        res.send({
          code: -1,
          msg: '查询失败',
          err: err
        })
      })
  }).catch((err) => {
    res.send({
      code: -1,
      msg: '查询失败',
      err: err
    })
  })
})



/**
 * @api {post} /users/login 用户登录
 * @apiName 用户登录
 * @apiGroup 用户
 *
 * @apiParam {String} username 用户名
 * @apiParam {String} password 密码
 * @apiParam {String} code 验证码
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  状态信息
 * @apiSuccess {String} token 用户鉴权token
 */
router.post('/login', (req, res)=>{
  // 存储用户数据到session里 -如果接口存在跨域问题就会失效，可以使用jwt
  // req.session.status = true;
  // req.session.name = 'test';
  const { username, password } = req.body

  userDb.queryInfo(username).then((data) => {
    if(data&&data.length>0){
        if(data[0].username===username&&data[0].password===password){
          const token = jwt.creatToken({username})
          res.send({code:0, msg: '登录成功', token:token})
        } else {
          res.send({code:-1, msg: '密码错误'})
        }
      } else {
        res.send({
          code: -1,
          msg: '当前用户不存在'
        })
      }
  }).catch((err) => {
    res.send({
      code: -1,
      msg: '查询失败',
      err: err
    })
  })
})

/**
 * @api {post} /users/logout 用户退出
 * @apiName 用户退出
 * @apiGroup 用户
 *
 * @apiHeader {String} token 用户鉴权token
 * 
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  状态信息
 */
router.post('/logout',(req, res)=>{
  // 清除 session -如果接口存在跨域问题就会失效
  // req.session.destroy();
  // res.redirect('/');
  res.send({
    code: 0,
    msg: '退出成功'
  })
})
module.exports = router
