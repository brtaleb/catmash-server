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
        return db.execute('SELECT * FROM cats ORDER BY votes DESC');
    }

    static vote(catId: String){
        return db.execute('SELECT * FROM cats WHERE id=?', [catId])
            .then(([rows, fieldData]) => {
                const winnerCat = JSON.parse(JSON.stringify(rows))[0];

                return db.execute('UPDATE cats SET votes=? WHERE id=?', [++winnerCat.votes, catId])
            })
    }
}
