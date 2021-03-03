import {db} from '../config/db'

export class Cat {
    //fields
    id: String;
    url: String;
    votes: Number;

    constructor(id: String, url: String, votes: Number) {
        this.id = id;
        this.url = url;
        this.votes = votes;
    }

    static fetchAll(){
        return db.execute('SELECT * FROM cats');
    }
}
