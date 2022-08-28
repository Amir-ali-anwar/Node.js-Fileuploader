import path from 'path'
import express from 'express'
import cors from 'cors'
import multer from 'multer';
const app = express();
app.use(cors());

const fileStorageEngine=multer.diskStorage({
    destination:(req,file,cb)=>{
    cb(null,'./images')
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now()+'----'+file.originalname)
    }
})

const upload=multer({storage:fileStorageEngine})

app.post('/single',upload.single('image'),(req,res)=>{
    console.log(req);
    res.send('single file uploaded')
})

app.post("/multiple", upload.array("image",5), (req, res) => {
  console.log(req);
  res.send("single file uploaded");
});

app.listen(5000,()=>{
    console.log('app listening on the port 5000')
})


