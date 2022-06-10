const express = require('express');
const app = express();
// const cors = require('cors');
const fs = require('fs')
const PORT = 3000;
var a = []
// app.get('/',(req,res)=>{
// 		res.send('Your response is already recorded')
// 		res.end()
// })


const path = require('path')
const publicDirectoryPath = path.join(__dirname, './build')
app.use(express.static(publicDirectoryPath))


// app.use(
// 	cors({
// 		origin:'*'
// 	})
// )
// app.use(express.urlencoded({
//   extended: true
// }))
// app.post('/ITS', (req, res) => {
//   if(req.headers.cookie==undefined){
//     const username = req.body.username
//     console.log(username)
//     a.push(username)
//     if(username==8686751120){
//     	fs.writeFileSync('res.txt',a)
//     }
//     res.set('Set-Cookie', 'done=true; Max-Age=900');
//     res.end()
//   }else{
//   res.send('Your response is already recorded')
//   res.end()
//   }

// })

app.listen(PORT)