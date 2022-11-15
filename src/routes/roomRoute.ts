import { Router } from "express";
import { RoomController } from "../controller/RoomController";

const routes = Router()
const controller = new RoomController()

routes.post('/room', controller.create)


export default routes