import {NextApiRequest, NextApiResponse} from "next";
import {getAtividades, IAtividade} from "../../../mongo/Atividade";

export default async function handler(req: NextApiRequest,res: NextApiResponse, atividade: NextApiResponse<IAtividade>) {
    const metodo = req.query.method;
    if(metodo === undefined) {
        res.status(500).json( { error: "Você deve especificar o method!"})
    } else {
        switch (metodo) {
            case "getAllActivities": {
                const {materia} = req.query;
                if(materia === undefined) {
                    res.status(500).json( { error: "Você deve especificar a materia!"})
                } else {
                    switch (materia) {
                        case "matematica": {
                            let atividades = await getAtividades("matematica");
                            res.status(200).json( atividades );
                            break;
                        }
                        case "linguagens":{
                            let atividades = await getAtividades("linguagens")
                            res.status(200).json({ atividades });

                            break;
                        }
                        case "natureza": {
                            let atividades = await getAtividades("natureza")
                            res.status(200).json({ atividades });

                            break;
                        }
                        case "humanas": {
                            let atividades = await getAtividades("humanas")
                            res.status(200).json({ atividades });

                            break;
                        }
                        default: {
                            res.status(500).json({error: "Materia não encontrada!"});
                            break;
                        }
                    }
                }

                break;
            }
            default: {

                res.status(500).json( { error: "Method não encontrado!"})
                break;
            }
        }
    }
}