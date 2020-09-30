import express from "express";
import ClassesController from "./controllers/ClassesControllers";
import ConnectionsControllers from "./controllers/ConnectionsControllers";

const routes = express.Router()

const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsControllers()


routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);

export default routes