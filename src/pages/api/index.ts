import {NextApiHandler, NextApiRequest, NextApiResponse} from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";
import {createMateria, getAllActivitiesByMateria, getAtividade} from "../../../mongo/MongoDB";
import {convertFiles} from "../../../lib/convertFiles";

const { existsSync } = require('fs')
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
    if(req.method == "POST") {
        try {
            const {name} = req.query;
            const {description} = req.query;
            const {materia} = req.query;
            let id = await createMateria(name, description, materia);
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
                    await convertFiles(path.join(process.cwd() + "/activities/" + id + "/"), files[i]);
                }
            }


            res.status(200).json({done: "ok"});
        } catch (e) {
            res.status(500).json({error: e});
        }
    } else {
        const {method} = req.query;
        if(method === "getAllActivities") {
            const {materia} = req.query;
            if(materia === "matematica"){
                let result = await getAllActivitiesByMateria("matematica")
                if((await result.count()) === 0) {
                    res.status(200).json({ atividades: null });
                } else {
                    res.status(200).json({ atividades: await result.toArray() });
                }
            }
        }
    }
};

export default handler;