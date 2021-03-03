import {Request, Response, NextFunction} from 'express';
import {Cat} from "../models/Cat";

export const getCats = (req: Request, res: Response, next: NextFunction) => {
    Cat.fetchAll()
        .then(([rows, fieldData]) => {
            res.status(200).json({
                message: "OK",
                data: rows,
            });
        })
        .catch(e => next(e))
}
