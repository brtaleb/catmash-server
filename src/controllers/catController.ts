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

export const postVote = (req: Request, res: Response, next: NextFunction) => {
    const catId: String = req.body.cat_id;

    Cat.vote(catId)
        .then(([rows, fieldData]) => {
            res.status(200).json({
                message: "OK: Updated successfully."
            })
        })
        .catch(e => {
            return res.status(400).send(e.message);
        })
}
