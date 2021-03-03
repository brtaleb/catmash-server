import express, {Application, Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/routes';
import * as dotenv from 'dotenv';
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3100;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())

app.use(router);

app.use((req, res) => {
    res.status(404).json({
        message: "Not Found."
    })
});

app.listen(port, () => {
    console.log("Listening on port "+port);
})
