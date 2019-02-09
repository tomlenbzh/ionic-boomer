export class User {
    defeat: number;
    id: number;
    pseudo: string;
    rank: number;
    score: number;

    constructor (
        defeat = null,
        id = null,
        pseudo = null,
        rank = null,
        score = null
    ) {
        defeat = defeat;
        id = id;
        pseudo = pseudo;
        rank = rank;
        score = score;
    }
}
