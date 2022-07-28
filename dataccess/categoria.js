let Categoria = [{
    id: 1,
    title: "Graficas"
},
{
    id: 2,
    title: "Procesadores"
},
{
    id: 3,
    title: "Mothers"
}
];

const getAll = (filter) => {
let filtrado = Categoria;

if (filter.title) {
    filtrado = filtrado.filter(e => e.title === filter.title)
}

if (filter.multitle) {
    filtrado = filtrado.filter(e => filter.multitle.split(',').includes(e.title))
}

return filtrado
};

const getOne = (id) => { return Categoria.find((registro) => registro.id == id); }

const save = (body) => { Categoria.push(body); }

const borrar = (id) => {
const index = Categoria.findIndex((registro) => registro.id == id);
if (index > 0) {
    Categoria.splice(index, 1);
    return true
}
return false
}

const update = (id, body) => {
const index = Categoria.findIndex((registro) => registro.id == id);
if (index >= 0) {
    Categoria[index] = body;
    return true
}
return false
}

module.exports = { getAll, getOne, save, borrar, update };