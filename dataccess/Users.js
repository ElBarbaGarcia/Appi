let Users = [{
        id: 1,
        nombre: "Alan",
        apellido: "Gimelstein",
        mail: "alan@gmail.com",
        pass: ""
    },
    {
        id: 2,
        nombre: "Agustin",
        apellido: "Basualdo",
        mail: "agustin@gmail.com",
        pass: ""
    },
    {
        id: 3,
        nombre: "Matias",
        apellido: "Giusti",
        mail: "matias@gmail.com",
        pass: ""
    },
    {
        id: 4,
        nombre: "Gonzalo",
        apellido: "Garcia",
        mail: "gonzalo@gmail.com",
        pass: ""
    },

];

const getTodos = (filter) => {
    let filtrar = Users;
    if (filter.nombre) {
        filtrar = filtrar.filter(e => e.nombre === filter.nombre);
    }
    if (filter.apellido) {
        filtrar = filtrar.filter(e => e.apellido.includes(filter.apellido));
    }

    if (filter.mail) {
        filtrar = filtrar.filter(e => email.includes(filter.mail));
    }
    if (filter.pass) {
        filtrar = pass.filter(e => e.pass.includes(filter.pass));
    }
    if (filter.multinombres) {
        filtrar = filtrar.filter(e => filter.multinombres.split(',').includes(e.nombre));
    }
    if (filter.buscar) {
        filtrar = filtrar.filter(e => e.nombre.includes(filter.buscar) || e.apellido.includes(filter.buscar) || e.mail.includes(filter.buscar) || e.pass.includes(filter.buscar));
    }

    return filtrar
}

const getUno = (id) => { return Users.find((registro) => registro.id == id); }
const guardar = (body) => { Users.push(body); }

const borrar = (id) => {
    const index = Users.findIndex((registro) => registro.id == id);
    if (index > 0) {
        Users.splice(index, 1);
        return true;
    }
    return false;
}
const editar = (id, body) => {
    const index = Users.findIndex((registro) => registro.id == id);
    if (index >= 0) {
        Users[index] = body;
        return true
    }
    return false
}



module.exports = { getTodos, getUno, guardar, borrar, editar };