import { MongoClient } from 'mongodb'


let client: MongoClient | undefined;
export default async function startClient() {
    if (!process.env.MONGODB_URI) {
        throw new Error('Não foi encontrado a table "MONGODB_URI" no arquivo .env')
    }
    const options = {}
    const uri = process.env.MONGODB_URI
        client = new MongoClient(uri, options)
        let clientPromise = client.connect()
    return client;
}

export async function getClient(){
    if(client == undefined){
        if (!process.env.MONGODB_URI) {
            throw new Error('Não foi encontrado a table "MONGODB_URI" no arquivo .env')
        }
        const options = {}
        const uri = process.env.MONGODB_URI
        client = new MongoClient(uri, options)
        let clientPromise = client.connect()
        return client;
    }
    return client;
}

export async function createMateria(nome: any, description: any, materia: any) {
    let client = await getClient();
    let col = client.db("portfolio").collection("atividades");
    let db = await col.insertOne({nome, description, materia});
    return db.insertedId;
}

export async function getAllActivitiesByMateria(materia: string) {
    let client = await getClient();
    let col = client.db("portfolio").collection("atividades");
    return col.find({materia: materia});
}

export async function getAtividade(id: string){
    let client = await getClient();
    let col = client.db("portfolio").collection("atividades");
    return col.find( { id: id });
}

export function isStarted() {
    return client != undefined;
}

