import type {NextApiRequest, NextApiResponse, NextApiHandler} from 'next';
import mongoose from 'mongoose';
import {respostaPadraoMsg} from '../types/respostaPadraoMsg'


export const conexaoMongoDB = (handler: NextApiHandler) =>
    async (req: NextApiRequest, res: NextApiResponse<respostaPadraoMsg>) => {
        if (mongoose.connections[0].readyState){
        return handler(req, res);
    }

   const {DB_CONEXAO} = process.env;

    if (!DB_CONEXAO){        
        return res.status(500).json({ erro: `ENV de config do banco não informada`})
    }

    mongoose.connection.on('connected', () => console.log('Banco de dados conectado!'));
    mongoose.connection.on('error', error => console.log(`Erro ao conectar com o banco: ${error}`));

    await mongoose.connect(DB_CONEXAO);

    return handler(req, res);
}

