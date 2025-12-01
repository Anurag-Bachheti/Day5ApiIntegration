const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const users = [
    {id:1, name:"Anurag", age:25, email: "xyz@gmail.com"},
    {id:2, name:"Aman", age:22, email: "abc@gmail.com"}
]

app.get('/users', (req, res)=> {
    res.json(users);
})

app.post('/users', (req,res)=> {
    console.log(req.body);
    res.json({
        "message": "User Received",
        "body":  req.body
    })
})

app.delete('/users/:id', (req,res)=> {
    const { id } = req.params;
    const userId = Number(id);

    const index = users.findIndex((u)=> u.id === userId);

    if(index === -1){
        return res.status(404).json({message: "User not found"})
    }
    const deletedUser = users.splice(index, 1) 
    res.json({
        message: "User deleted",
        deleted: deletedUser
    });
});

app.listen(process.env.PORT || 5000, ()=> {
    console.log("Listening to PORT: ", process.env.PORT || 5000)
})