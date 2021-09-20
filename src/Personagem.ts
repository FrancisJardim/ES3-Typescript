class Personagem {

    constructor(
        public nome: string,
        public energia: number,
        public ataque: number,
        public defesa: number,
        public vida: number,
    ) { }
}

let ryu: Personagem = new Personagem('Ryu Hoshi', 10, 10, 10, 10);

console.log(ryu)
