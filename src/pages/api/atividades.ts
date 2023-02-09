import type {NextApiRequest, NextApiResponse} from 'next'
import {getAtividade, getClient, isStarted} from "../../../mongo/MongoDB";

// type Atividade = {
//     id: string,
//     nome: string,
//     description: string,
// }
//
// type Error = {
//     error: string
// }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {id} = req.query
    if (id == undefined) {
        res.status(500).send({code: "500", error: "Você deve enviar um id usando `?id={id}`"})
    } else {
        // let atividade = await getAtividade({ id: "12312312"});
        // if(atividade == undefined) {
        //     res.status(500).send({code: "500", error: "Atividade não encontrada!"})
        // } else {
        //     res.status(200).json({data: atividade})
        // }
    }
}