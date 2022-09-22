const neo4j = require('neo4j-driver');
var uuid = require('uuid');
const uri = 'neo4j+s://2fed88f9.databases.neo4j.io';
const user = 'neo4j';
const password = 'pw03RNrSSqzOkWj2r2MUK4_kVBjShabA_i8fCv_StCs';
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = driver.session({ database: 'neo4j' });

const findAll = async () =>{
    const result = await session.run(`Match (u:User) return u`)
    return result.records.map(i=>i.get('u').properties)
}

const findById = async (id) =>{
    const result = await session.run(`MATCH (u:User {_id : '${id}'} ) return u limit 1`)
    return result.records[0].get('u').properties
}
const create = async (user) =>{
    console.log(uuid.v1);
    const unique_id = uuid.v1();
    await session.run(`CREATE (u:User {_id : '${unique_id}', title: '${user.title}', description: '${user.description}'} ) return u`)
    return await findById(unique_id)
}
const findByIdAndUpdate = async (id, user) =>{
    const result = await session.run(`MATCH (u:User {_id : '${id}'}) SET u.title= '${user.title}', u.description= '${user.description}' return u`)
    return result.records[0].get('u').properties
}
const findByIdAndDelete = async (id) =>{
    await session.run(`MATCH (u:User {_id : '${id}'}) DELETE u`)
    return await findAll()
}

module.exports ={
    findAll,
    findById,
    create,
    findByIdAndUpdate,
    findByIdAndDelete
}