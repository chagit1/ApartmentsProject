const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const ApartmentRouter = require('./api/Routes/apartment')
const CategoryRouter = require('./api/Routes/category')
const CityRouter = require('./api/Routes/city')
const ClientRouter = require('./api/Routes/client')
const PublisherRouter = require('./api/Routes/publisher')
const cors = require('cors')
const app = express()

// rnd_sQfBMOvceIQItEkX10Cxjgy0RY29
dotenv.config()

// app.use(function(req,res,next){
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Headers","Origin, X-Requested-Wit, Content-Type, Accept")
//     next()
//     });

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.options('*', cors());
app.use(bodyParser.json());
app.use(cors());

app.use('/uploads',express.static('uploads'))

mongoose.connect(process.env.URI, {})
    .then(() => {
        console.log(`connection to mongoDb succeed!`);
    })
    .catch(error => {
        console.log({ error });
    })

app.get('/', (req, res) => {
    
    res.status(200).send('✌️✌️✌️')
})



const sdk = require('api')('@render-api/v1.0#34i64rhilu8ilhkj');

sdk.auth('rnd_sQfBMOvceIQItEkX10Cxjgy0RY29');
sdk.getServices({limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));



  
app.use('/apartment', ApartmentRouter)
app.use('/category', CategoryRouter)
app.use('/city', CityRouter)
app.use('/client', ClientRouter)
app.use('/publisher', PublisherRouter)

app.listen(3000, () => {
    console.log(`app in http//:localhost:3000`);
})

