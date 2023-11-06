const mongo = require('mongoose');
const baseURL = 'URL';
mongo.connect(process.env.MONGODB_URI || baseURL,{useUnifiedTopology: true,  useCreateIndex: true, useNewUrlParser: true}).then((db)=>{
    console.log('Connected MONGODB');
}).catch((error)=> console.log('Not Connected'));
