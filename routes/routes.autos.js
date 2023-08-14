import { coneccion } from "../db/atlas.js";
import { queryAuto } from "../limit/config.js";
import { appMiddlewareAutoVerify, appDTOAuto } from "../middleware/middle.autos.js";
import { Router } from "express";
let appAuto = Router();

let db = await coneccion();
let auto = db.collection("automovil");

appAuto.get('/', queryAuto(), appMiddlewareAutoVerify, async(req, res) => {
    if(!req.rateLimit) return;

    // let {id} = req.body
    // { "_id": new ObjectId(id)} !PARA BUSCQUEDA ESPECIFICA POR '_id'.

    let result = await auto.find().toArray();
    res.send(result)
});


appAuto.post('/', queryAuto(), appMiddlewareAutoVerify, appDTOAuto, async(req, res) => {
    let result;
    try {
        let result = await cliente.insertOne(req.body);
        res.status(201).send(result);
    } catch (error) {
        if (error)
        // result = error.errInfo.details.schemaRulesNotSatisfied[0].additionalProperties;
        // res.status(406).send(JSON.stringify({invalidProperties: result, message: "Estos campos no son validos, eliminelos"}))

        result = JSON.parse(error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied[0].description);
        res.status(402).send(result);
    }
})



export default appAuto;