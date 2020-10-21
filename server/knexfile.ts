import path from 'path';
import dotenv from 'dotenv';


if(process.env.NODE_ENV != 'PRODUCTION'){
    dotenv.config();
    console.log('Executando em localhost')
}


module.exports = {
    client: 'mysql',
    version: '5.7',
    connection: {
        host : process.env.HOST,
        user : process.env.USER,
        password : process.env.PASSWORD,
        database : process.env.DATABASE
      },
      migrations:{
        directory:path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true,
};
