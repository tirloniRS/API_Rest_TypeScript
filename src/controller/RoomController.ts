import { Request, Response } from "express";
import { roomRepository } from "../repository/roomRepository";

export class RoomController{
    async create(req: Request, res: Response ){
        const {name, description} = req.body
        //falta validar: podemos usar a lib ClassValidator

        try {
            const newRoom = roomRepository.create({name, description})
            await roomRepository.save(newRoom)

            return res.status(201).json(newRoom)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message:'Internal Server Error'})
        }
    }
}