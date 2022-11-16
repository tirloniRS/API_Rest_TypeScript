import { Router } from "express";
import { SubjectController } from "../controller/subjectController";

const routes = Router()
const controller = new SubjectController()

routes.post('/subject', controller.create)
routes.post('/room', controller.create)
routes.post('/room/')



export default routes