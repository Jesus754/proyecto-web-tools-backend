const jwt = require('jsonwebtoken');
// Verificar token 

let verificaToken = (req, res, next) => {

    //obtengo header
    let token = req.get('token');

    jwt.verify(token, 'secret', (err, decoded) => {
        if(err) { 
            return res.status(401).json({
                ok:false,
                err :{
                    mensaje: 'Token no valido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    })
};


module.exports = {
    verificaToken
}