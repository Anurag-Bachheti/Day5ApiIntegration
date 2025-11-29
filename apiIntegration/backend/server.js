// const express = require('express');
// const dotenv = require("dotenv");
// const cors = require("cors")

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post("/users", (req,res)=> {
//     console.log(req.body);
//     res.json({msg: "User received", data: req.body});
// })

// app.listen(process.env.PORT, ()=> {
//     console.log("Listening to PORT:", process.env.PORT)
// })


const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors")

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const users = [
    {id:1, name:"Anurag", age:26, email:"xyz@gmail.com"},
    {id:2, name:"Aman", age:21, email:"abc@gmail.com"}
]

app.get("/users", (req,res)=> {
    res.json(users);
});

app.post("/users", (req,res)=> {
    console.log(req.body);
    res.json({msg: "User received", data: req.body});
})

app.listen(process.env.PORT || 5000, ()=> {
    console.log("Listening to PORT:", process.env.PORT || 5000)
})