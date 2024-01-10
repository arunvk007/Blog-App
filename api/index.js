const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const User = require('./models/User')

//app.get('/test', (req,res)=>{
//    res.json('test ok');
//})

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://arunvkkerala:HhZbxi88kOznqP1Y@cluster0.bfpsrl5.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req,res)=>{
    const {username, password} = req.body;
    const userDoc = await User.create({username,password});
    res.json(userDoc);
});

app.listen(4000);

//mongodb+srv://arunvkkerala:<password>@cluster0.bfpsrl5.mongodb.net/?retryWrites=true&w=majority
//HhZbxi88kOznqP1Y