let Marca = [{
    id: 1,
    title: "AMD"
},
{
    id: 2,
    title: "IntelCore"
},
{
    id: 3,
    title: "GTX"
},
{
    id: 4,
    title: "MSI"
},
{
    id: 4,
    title: "ASUS"
}
];

const getAll = (filter) => {
let filtrado = Marca;

if (filter.title) {
    filtrado = filtrado.filter(e => e.title === filter.title)
}

if (filter.content) {
    filtrado = filtrado.filter(e => e.content.includes(filter.content))
}

if (filter.multitle) {
    filtrado = filtrado.filter(e => filter.multitle.split(',').includes(e.title))
}

return filtrado
};

const getOne = (id) => { return Marca.find((registro) => registro.id == id); }

const save = (body) => { Marca.push(body); }

const borrar = (id) => {
const index = Marca.findIndex((registro) => registro.id == id);
if (index > 0) {
    Marca.splice(index, 1);
    return true
}
return false
}

const update = (id, body) => {
const index = Marca.findIndex((registro) => registro.id == id);
if (index >= 0) {
    Marca[index] = body;
    return true
}
return false
}

module.exports = { getAll, getOne, save, borrar, update };