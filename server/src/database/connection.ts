import knex from   'knex';
import path from 'path';
import dotenv from 'dotenv';


if(process.env.NODE_ENV != 'PRODUCTION'){
    dotenv.config();
    console.log('Executando em localhost')
}


const {HOST, USER, PASSWORD, DATABASE} = process.env;

const db = knex({
    client: 'mysql',
    connection: {
      host : HOST,
      user : USER,
      password : PASSWORD,
      database : DATABASE
    },
    useNullAsDefault:true
})


export default db;