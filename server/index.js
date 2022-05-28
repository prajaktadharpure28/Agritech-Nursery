const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');
const app = express();
app.use(cors());
app.use(express.json());

 //mongodb Connection
//  mongoose.connect('mongodb+srv://suraj:suraj@cluster0.gfb4i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
//      useNewUrlParser: true,
//      useUnifiedTopology: true
//  },()=>{
//          console.log('Connected to mongodb');
//  });
 mongoose.connect('process.env.MONGO_DB_URL',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
        console.log('Connected to mongodb');
});


// mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
//     console.log('Connected to DB 📦');
// });
// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
//     });
// }


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });