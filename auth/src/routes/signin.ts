import express from 'express'

const router = express.Router()

router.post('/api/users/signin',(req,res)=>{
res.send("Hi There from sign in ! ")
})

export{router as signInRouter}