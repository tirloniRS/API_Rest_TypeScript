import { Router } from "express";
import { RoomController } from "../controller/RoomController";

const routes = Router()
const controller = new RoomController()

routes.post('/room', controller.create)
routes.get('/room', controller.list)
routes.post('/room/:idRoom/create', controller.createVideo)
routes.post('/room/:idRoom/subject', controller.roomSubject)


export default routes