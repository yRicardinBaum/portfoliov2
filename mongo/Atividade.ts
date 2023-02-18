import mongoose, {Model} from "mongoose";

import path from "path";
import {promises} from "fs";


export interface Archives {
    id: string;
    files: string[]
}


export interface IAtividade extends mongoose.Document {
    nome: string;
    descricao: string[];
    materia: string;
    unidade: string;
    data: string;
}
const AtividadeSchema = new mongoose.Schema({
    nome: {type:String, required: true},
    descricao: {type: (Array<String>), required: true},
    materia: {type:String, required: true},
    unidade:  {type:String, required: true},
    data: {type:String, required: true}
});

async function getSchema() {
    await verifyIfStarted()
    if (!mongoose.models["portfolio"]) {
        return mongoose.model<IAtividade>('portfolio', AtividadeSchema, "atividades");
    } else {
        let cursor: Model<IAtividade> = await mongoose.models["portfolio"];
        return cursor;
    }
}


async function verifyIfStarted() {
    if (mongoose.connection.readyState < 1 || mongoose.connection.readyState >= 3) {
        if (!process.env.MONGODB_URI) {
            throw new Error('Não foi encontrado a table "MONGODB_URI" no arquivo .env')
        }
        const options = {
            dbName: "portfolio",
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
        const uri = process.env.MONGODB_URI;
        mongoose.set('strictQuery', false);
        await mongoose.connect(uri, options).then(e => {
            if(e.connection?.readyState === 1) console.log("MongoDD conectado!!")
        })
    }
}


export async function getAtividadeFiles(atividade: Array<IAtividade>) {
    let array: Archives[] = []

    if(atividade.length > 0) {
        for (const e of atividade) {
            try {
                let files: string[] = await promises.readdir(path.join(process.cwd() + "/public/activities/" + e._id));
                if (files.length > 0) {
                    let activity: Archives = {id: e._id, files: files}
                    array.push(activity);
                }
            } catch (e) {
            }
        }
    }
    return array;



}




export async function getAtividades(materia: string) {
    await verifyIfStarted();
    if (!mongoose.models["portfolio"]) {
        let cursor = mongoose.model<IAtividade>('portfolio', AtividadeSchema, "atividades");
        return cursor.find({materia: materia}).lean();
    } else {
        let cursor: Model<IAtividade> = mongoose.models["portfolio"];
        return cursor.find({ materia: materia}).lean();
    }
}


export const Atividade = getSchema();

// @ts-ignore
