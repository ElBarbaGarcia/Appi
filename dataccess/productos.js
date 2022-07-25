let Producto = [
    {
      id: 1,
      nombre: "Procesador Intel Core i7-10700F BX8070110700F de 8 núcleos y 4.8GHz de frecuencia",
      precio: 60000,
      activo: true,
      descripcion: "Producto de alto rendimiento y línea exclusiva para profesionales que ejecutan muchos programas a la vez.",
      modelo: "Intel Core i7-10700F",
      foto: "https://www.mercadolibre.com.ar/procesador-intel-core-i7-10700f-bx8070110700f-de-8-nucleos-y-48ghz-de-frecuencia/p/MLA17323104?pdp_filters=category:MLA1648#searchVariation=MLA17323104&position=1&search_layout=stack&type=product&tracking_id=8b418894-f9dd-4064-8c94-2bf63414fe42"
    },
    {
      id: 2,
      nombre: "Procesador AMD Ryzen 7 5700G",
      precio: 55880,
      activo: true,
      descripcion: "El procesador AMD Ryzen™ 7 5700G incluye ocho núcleos de CPU, una velocidad de reloj base de 3,8 GHz y ocho núcleos de GPU.",
      modelo: "AMD Ryzen 7 5700G",
      foto: "https://mexx-img-2019.s3.amazonaws.com/procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928"
    },
    {
      id: 3,
      nombre: "VIDEO RADEON RX 550 AMD 2GB DDR5 LOW PROFILE OEM",
      precio: 25685,
      activo: true,
      descripcion: "tarjeta grafica para novatos",
      modelo: "VIDEO RADEON RX 550 AMD 2GB DDR5 LOW PROFILE OEM",
      foto: "https://www.fullh4rd.com.ar/prod/20604/video-radeon-rx-550-amd-2gb-ddr5-low-profile-oem"
    },
    {
      id: 4,
      nombre: "VIDEO GEFORCE GTX 1650 4GB EVGA SC ULTRA",
      precio: 15109,
      activo: true,
      descripcion: "exelente para un gamer promedio",
      modelo: "gtx 1650 4gb",
      foto: "https://www.fullh4rd.com.ar/prod/12484/video-geforce-gtx-1650-4gb-evga-sc-ultra"
    }
    {
        id: 5,
        nombre: "MOTHER ASUS A520M-K AM4",
        precio: 18500,
        activo: true,
        descripcion: "mother de gama baja",
        modelo: "MOTHER ASUS A520M-K AM4",
        foto: "https://www.fullh4rd.com.ar/prod/17083/mother-asus-a520m-k-am4"
      },
      {
        id: 6,
        nombre: "MOTHER MSI H310M PRO-VDH",
        precio: 13700,
        activo: true,
        descripcion: "mother de gama baja",
        modelo: "MOTHER MSI H310M PRO-VDH",
        foto: "https://www.fullh4rd.com.ar/prod/19881/mother-msi-h310m-pro-vdh"
      },
  ];
  
  const getAll = (filter) => { 
    let filtrado = Producto;
  
    if(filter.precio){
      filtrado = filtrado.filter(p => p.precio == filter.precio)
    }
  
    if(filter.nombre){
      filtrado = filtrado.filter(p => p.nombre.search(filter.nombre) > -1)
    }
  
    if(filter.modelo){
      filtrado = filtrado.filter(p => p.modelo.search(filter.modelo) > -1)
    }
  
    if(filter.descripcion){
      filtrado = filtrado.filter(p => p.descripcion.search(filter.descripcion) > -1)
    }
  
    if(filter.search){
      filtrado = filtrado.filter(p => (p.nombre.search(filter.search) > -1 || p.descripcion.search(filter.search) > -1))
    }
    
    return filtrado
  }
  
  const getOne = (id) => { return Producto.find((registro) => registro.id == id);}
  
  const save = (body) => { Producto.push(body);}
  
  const borrar = (id) => {
    const index = Producto.findIndex((registro) => registro.id == id);
    if (index > 0) {
      Producto.splice(index, 1);
      return true
    }
    return false
  }
  
  const update = (id, body) => { 
    const index = Producto.findIndex((registro) => registro.id == id);
    if (index >= 0) {
      Producto[index] = body;
      return true
    } 
    return false
  }
  
  module.exports = { getAll, getOne, save, borrar, update};