const {connect, mongoose} = require('mongoose');

/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: false,
  // webpack: (config, options) => {
  //   config.plugins.push(
  //       {
  //         apply: (compiler) => {
  //             activated = false;
  //           compiler.hooks.afterEmit.tap('AfterEmitPlugin', async (compilation) => {
  //               if (!activated) {
  //                   activated = true;
  //                   if (!process.env.MONGODB_URI) {
  //                       throw new Error('Não foi encontrado a table "MONGODB_URI" no arquivo .env')
  //                   }
  //                   const options = {}
  //                   const uri = process.env.MONGODB_URI;
  //                   mongoose.set('strictQuery', false);
  //                   mongoose.connection.models = {};
  //                   let conn = await connect(uri, {
  //                       dbName: "portfolio",
  //                       useUnifiedTopology: true,
  //                       useNewUrlParser: true
  //                   }).then(e => {
  //                       if (e.connection?.readyState === 1) console.log("MongoDD conectado!!")
  //                   });
  //               }
  //           });
  //         }
  //       }
  //   )
  //   return config
  // }
}


module.exports = nextConfig

