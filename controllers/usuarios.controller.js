// CONTIENE EL CONTROLADOR DE CADA METODO DE UNA RUTA

const usuariosGet = (req,resp)=>{
    const {nombre="no name",id} = req.query;

    resp.json({
        msg: 'Traido por Get',
        ok: true,
        nombre,
        id
    });
}

const usuariosPost = (req,resp)=>{
    const {nombre, edad} = req.body;

    resp.status(201).json({
        values: {nombre,edad},
        msg: 'Traido por POst',
        ok: true
    });
};

const usuariosPut = (req,resp)=>{
    const idUser = req.params.id;

    resp.json({
        msg: 'Traido por put, id: '+idUser,
        ok: true,
        id: idUser
    });
};

const usuariosDelete = (req,resp)=>{
    resp.json({
        msg: 'Traido por delete',
        ok: true
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}