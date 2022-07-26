const { v4: uuidv4 } = require("uuid");
const middleware = require('../utils/middleware');

const router = require("express").Router();
let dao = require("../dataccess/Users");

/* Obtener todo */
router.get("/", (req, res) => {
    res.status(200).json(dao.getTodos(req.query));
});

/* Obtener uno especifico */
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const data = dao.getUno(id);
    if (data) {
        res.status(200).json(data);
    } else {
        res.sendStatus(404);
    }
});


// POST funcionando sin usuario logueado
router.post("/", (req, res) => {

    const body = {...req.body, id: middleware.getRandomInt(1, 1000000) };
    dao.guardar(body);
    res.status(200).json(body);
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    if (dao.borrar(id)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});


/* Modificar un elemento */
router.put("/:id", (req, res) => {
    const id = req.params.id;

    if (dao.editar(id, req.body)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;