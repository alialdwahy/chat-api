const mongo = require('mongoose');
const baseURL = 'mongodb+srv://gowi:paris055866@cluster0.x4jpf.mongodb.net/ChatTest?retryWrites=true&w=majority';
mongo.connect(process.env.MONGODB_URI || baseURL,{useUnifiedTopology: true,  useCreateIndex: true, useNewUrlParser: true}).then((db)=>{
    console.log('Connected MONGODB');
}).catch((error)=> console.log('Not Connected'));