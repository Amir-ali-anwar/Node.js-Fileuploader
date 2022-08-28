import path from 'path'
import express from 'express'
import cors from 'cors'
import multer from 'multer';
app.use(cors());
const app = express();

const fileStorageEngine=multer.diskStorage({
    destination:(req,res,cb)=>{
    cb(null,'./images')
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now()+'----'+file.originalname)
    }
})

const upload=multer({storage:fileStorageEngine})

app.post('/single',upload.single(),(req,res)=>{
    res.send('single file uploaded')
})


app.listen(5000)


