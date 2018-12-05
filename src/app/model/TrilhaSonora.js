var axios = require("axios");

class TrilhaSonora{

    constructor(){
    }

    buscaFilme(callback){

        axios.get("http://localhost:3000/").then(function (resultado) {
            console.log(resultado.data)

            let trilhaSonora = resultado.data

            setTimeout(() => {
                return callback({trilhaSonora});
            });
        })
    }
}

module.exports = TrilhaSonora;