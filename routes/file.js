const express = require('express')
const router = express.Router()
const multer = require('multer')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 指定文件路径
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    const fileFormat = (file.originalname).split('.')
    // 指定文件名
    cb(null, file.fieldname + '-' + Date.now() + '.' + fileFormat[fileFormat.length - 1])
  }
})

const upload = multer({ storage: storage })

// file 数据流的key值
router.post('/upload', upload.single('file'), (req, res)=>{
  // const {} = req.body
  const {size, mimetype, filename} = req.file
  const types = ['jpg','jpeg','png','gif']
  const tempType = mimetype.split('/')[1]
  if(size>=500*1024){
    return res.send({err:-1,msg:'尺寸过大'})
  } else if (types.indexOf(tempType)===-1){
    return res.send({err:-2,msg:'上传类型错误'})
  } else {
    const url = 'http://localhost:3000' + '/uploads/' + filename
    res.send({err:0,msg:'上传ok',url})
  }
})

module.exports = router
