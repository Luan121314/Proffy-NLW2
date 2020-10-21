import express from 'express';
import routes from './routes';
import cors from 'cors';
import dotenv from 'dotenv';


if(process.env.NODE_ENV != 'PRODUCTION'){
    dotenv.config();
    console.log('Executando em localhost')
}

const app = express();
app.use(cors())

app.use(express.json())

app.use(routes);

app.listen(3333, () => {

});