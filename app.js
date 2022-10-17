const express 		  = require('express');
const app             = express();
const bodyParser      = require('body-parser');
const cors            = require('cors');

app.use(express.json())
app.use(bodyParser.json());
app.use(cors())
const property      = require('./server/api/property');
const configUI      = require('./server/api/configUI');

app.use('/config-ui', configUI)
app.use('/property', property)

app.use((err, res)=> {
    if(err){
        res.status(404).send({status:404, message:"REQUEST_NOT_FOUND"})
    } 
});

app.listen(3100)