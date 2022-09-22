const neo4j = require('neo4j-driver');

const uri = 'neo4j+s://2fed88f9.databases.neo4j.io';
const user = 'neo4j';
const password = 'pw03RNrSSqzOkWj2r2MUK4_kVBjShabA_i8fCv_StCs';

const connectDB = async() => {

    
    // To learn more about the driver: https://neo4j.com/docs/javascript-manual/current/client-applications/#js-driver-driver-object
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = driver.session({ database: 'neo4j' });

   
}

module.exports = connectDB;
