const express = require('express');
const router = express.Router();

const users = [
    {id:1, name:"Anurag", age:25, email: "xyz@gmail.com"},
    {id:2, name:"Aman", age:22, email: "abc@gmail.com"}
]

router.get('/', (req,res) => {
    res.json(users);
})

router.post('/', (req,res) => {
    console.log(req.body);
    res.json({
        "message": "User Received",
        "body":  req.body
    })
})

router.delete('/:id', (req,res)=> {
    const { id } = req.params;
    const userId = Number(id);

    const index = users.findIndex((u)=> u.id === userId);

    if(index === -1){
        return res.status(404).json({message: "User not found"})
    }
    const deletedUser = users.splice(index, 1);

    res.json({
        message: "User deleted",
        deleted: deletedUser
    });
});

module.exports = router;