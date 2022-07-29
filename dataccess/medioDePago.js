let MedioDePago = [{
    id: 1,
    title: "Debito",
},
{
    id: 2,
    title: "Credito",
},
{
    id: 3,
    title: "Efectivo",
},
];

const getAll = (filter) => {
let filtrado = MedioDePago;

if (filter.title) {
    filtrado = filtrado.filter(e => e.title === filter.title)
}

if (filter.multitle) {
    filtrado = filtrado.filter(e => filter.multitle.split(',').includes(e.title))
}

return filtrado
};

const getOne = (id) => { return MedioDePago.find((registro) => registro.id == id); }

const save = (body) => { MedioDePago.push(body); }

const borrar = (id) => {
const index = MedioDePago.findIndex((registro) => registro.id == id);
if (index > 0) {
    MedioDePago.splice(index, 1);
    return true
}
return false
}

const update = (id, body) => {
const index = MedioDePago.findIndex((registro) => registro.id == id);
if (index >= 0) {
    MedioDePago[index] = body;
    return true
}
return false
}

module.exports = { getAll, getOne, save, borrar, update };