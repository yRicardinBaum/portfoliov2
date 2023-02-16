import {NextApiHandler, NextApiRequest} from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";
import {createMateria} from "../../../mongo/MongoDB";
import {convertFiles} from "../../../lib/convertFiles";
import {Atividade, getAtividades} from "../../../mongo/Atividade";
import { existsSync } from 'fs';

export const config = {
    api: {
        bodyParser: false,
    },
};
type Atividade = {
    id: string,
    nome: string,
    description: string,
}

const readFile = (req: NextApiRequest, id: any, saveLocally?: boolean): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
        const options: formidable.Options = {};
    if (saveLocally) {
        options.uploadDir = path.join(process.cwd(), "/activities/" + id);
        options.filename = (name, ext, path) => {
            return Date.now().toString() + "_" + path.originalFilename;
        };
    }
    options.maxFileSize = 4000 * 1024 * 1024;
    const form = formidable(options);
    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({ fields, files });
        });
    });
};

const handler: NextApiHandler = async (req, res) => {
    if (req.method == "POST") {
        const name = req.query.name;
        const description = JSON.stringify(req.query.description);
        const materia = req.query.materia;
        const semestre = req.query.semestre;
        const data = req.query.data;
        let atividade = await new (await Atividade)({
            nome: name,
            descricao: description.replaceAll('"', '').split('?n'),
            materia: materia,
            unidade: semestre,
            data: data
        })
        let id = atividade._id;
        try {
            if (!existsSync(path.join(process.cwd() + "/activities/" + id))) {
                if (!existsSync(path.join(process.cwd() + "/activities/"))) {
                    await fs.mkdir(path.join(process.cwd() + "/activities/"));
                }
                await fs.mkdir(path.join(process.cwd() + "/activities/" + id));
            }
            await readFile(req, id, true);
            let files = await fs.readdir(path.join(process.cwd() + "/activities/" + id));
            for (let i = 0; i < files.length; i++) {
                if (files[i].endsWith(".pptx")) {
                    console.log("Convertendo...")
                    await convertFiles(path.join(process.cwd() + "/activities/" + id + "/"), files[i]);
                }
            }

            atividade.save();
            res.status(200).json({done: "ok"});
        } catch (e) {
            res.status(500).json({error: e});
        }
    }
};

export default handler;