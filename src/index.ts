import express, {Application, Request, Response} from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send("Catmash");
})

app.listen(4200, () => {
    console.log("Listening on port 4200");
})
