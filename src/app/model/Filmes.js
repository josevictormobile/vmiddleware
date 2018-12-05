var axios = require("axios");

class Filmes{

    constructor(){
    }

    buscaFilme(callback){

        axios.get("http://srv-filmes.herokuapp.com/filme").then(function (resultado) {

            setTimeout(() => {
                return callback(resultado.data);
            });
        })
    }

    criarFilme(filme, callback){

        axios.post("http://srv-filmes.herokuapp.com/filme", filme).then(function (resultado) {
            setTimeout(() => {
                return callback(resultado.data);
            });
        })
    }
}

module.exports = Filmes;