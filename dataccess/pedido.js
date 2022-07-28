let Pedido = [{
        id: 1,
        usuario: {
            id: 1,
            usuario: "Mati",
            apellido: "Giusti",
            mail: "ElJustoPa@gmail.com",
            contrasenia: ""
        },
        producto: {
            id: 1,
            usuario: "Procesador Intel Core i7-10700F BX8070110700F de 8 núcleos y 4.8GHz de frecuencia",
            Pedido: 60000,
            activo: true,
            descripcion: "Producto de alto rendimiento y línea exclusiva para profesionales que ejecutan muchos programas a la vez.",
            modelo: "Intel Core i7 10700F",
            foto: "https://www.mercadolibre.com.ar/procesador-intel-core-i7-10700f-bx8070110700f-de-8-nucleos-y-48ghz-de-frecuencia/p/MLA17323104?pdp_filters=category:MLA1648#searchVariation=MLA17323104&position=1&search_layout=stack&type=product&tracking_id=8b418894-f9dd-4064-8c94-2bf63414fe42"
        },

        descripcion: "Pedido realizado",
        total: "60000",
        mediopago: {
            id: 1,
            title: "Debito"
        }
    },

    {
        id: 2,
        usuario: {
            id: 2,
            nombre: "Agus",
            apellido: "Basualdo",
            mail: "ElAgus@gmail.com",
            contrasenia: ""
        },
        producto: {
            id: 2,
            nombre: "Procesador AMD Ryzen 7 5700G",
            precio: 55880,
            activo: true,
            descripcion: "El procesador AMD Ryzen™ 7 5700G incluye ocho núcleos de CPU, una velocidad de reloj base de 3,8 GHz y ocho núcleos de GPU.",
            modelo: "AMD Ryzen 7 5700G",
            foto: "https://mexx-img-2019.s3.amazonaws.com/procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928"
        },

        descripcion: "Pedido realizado",
        total: "55880",
        mediopago: {
            id: 3,
            title: "Efectivo",
        }
    },

    {
        id: 3,
        usuario: {
            id: 3,
            nombre: "Alan",
            apellido: "Gimelstein",
            mail: "elAlanPa@gmail.com",
            contrasenia: ""
        },
        producto: {
            id: 3,
            nombre: "VIDEO RADEON RX 550 AMD 2GB DDR5 LOW PROFILE OEM",
            precio: 25685,
            activo: true,
            descripcion: "placa de video para novatos",
            modelo: "RADEON RX550 2Gb",
            foto: "https://www.fullh4rd.com.ar/prod/20604/video-radeon-rx-550-amd-2gb-ddr5-low-profile-oem"
        },

        descripcion: "Pedido realizado",
        total: "25685",
        mediopago: {
            id: 3,
            title: "Credito",
        }
    },

];


const getAll = (filter) => {
    let filtrado = Pedido;

    if (filter.Pedido) {
        filtrado = filtrado.filter(p => p.Pedido.search(filter.Pedido) > -1)
    }

    if (filter.usuario) {
        filtrado = filtrado.filter(p => p.usuario.search(filter.usuario) > -1)
    }

    if (filter.descripcion) {
        filtrado = filtrado.filter(p => p.descripcion.search(filter.descripcion) > -1)
    }

    if (filter.mediopago) {
        filtrado = filtrado.filter(p => p.mediopago.search(filter.mediopago) > -1)
    }

    if (filter.total) {
        filtrado = filtrado.filter(p => p.total == filter.total)
    }
    if (filter.search) {
        filtrado = filtrado.filter(p => p.usuario.search(filter.search) > -1 || p.descripcion.search(filter.search) > -1)
    }

    if (filter.multisearch) {
        const palabrasABuscar = filter.multisearch.split(',');
        filtrado = filtrado.filter(entry => {
            const filtro = palabrasABuscar.filter(palabra => p.usuario.includes(palabra) || p.modelo.includes(palabra) || p.descripcion.includes(palabra) || p.Pedido.includes(Number(palabra)))
            return filtro.length > 0
        })
    }

    return filtrado
}

const getOne = (id) => { return Pedido.find((registro) => registro.id == id); }

const save = (body) => { Pedido.push(body); }

const borrar = (id) => {
    const index = Pedido.findIndex((registro) => registro.id == id);
    if (index > 0) {
        Pedido.splice(index, 1);
        return true
    }
    return false
}

const update = (id, body) => {
    const index = Pedido.findIndex((registro) => registro.id == id);
    if (index >= 0) {
        Pedido[index] = body;
        return true
    }
    return false
}

module.exports = { getAll, getOne, save, borrar, update };