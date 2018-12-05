const Jwt_model = require('../model/Jwt');
const Filmes = require('../model/Filmes');
const jwtorigin = require('jsonwebtoken');

module.exports = (app) =>{

    const jwt = new Jwt_model();
    const filmes = new Filmes;

    // Acesso Middleware.
    app.get('/', function (req, resp) {

        class Usuario {
            retornarDadosUsuario(callback) {
                setTimeout(() => {
                    return callback({
                        id: 1,
                        username: 'admin',
                        email: 'admin@gmail.com'
                    });
                });
            }
        }

        let usuario = new Usuario();
        usuario.retornarDadosUsuario((resultado) => {
            resp.json(resultado);
        });

    });

    // Login do Cliente .
    app.post('/login', (req, resp ) => {

        jwt.login((resultado) => {
            resp.json(resultado);
        });
    });


    // buscar todos os filmes por get.
    app.get('/filmes', jwt.verifyToken, (req, res) => {  
        jwtorigin.verify(req.token, 'secretkey', (err, authData) => {
          if(err) {
            res.sendStatus(403);
          } else {
            filmes.buscaFilme((resultado) => {
                res.json(resultado);
            });
          }
        });
    })

    // criar filme
    app.post('/filmes/criar', jwt.verifyToken, (req, res) => {  
        console.log(req.body);
        jwtorigin.verify(req.token, 'secretkey', (err, authData) => {
          if(err) {
            res.sendStatus(403);
          } else {
            filmes.criarFilme(req.body,( resultado) => {
                
                res.json(resultado);
            });
          }
        });
    })
    


}
