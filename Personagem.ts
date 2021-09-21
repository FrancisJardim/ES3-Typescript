export default class Personagem {

    constructor(
        public nome: string,
        public ataque: number,
        public defesa: number,
        public energia: number,
        public dinheiro: number,
    ) { }

    treinarAtaque(): void {
        this.ataque += (Math.random() * 3) + 1;
        this.energia -= 5;
        this.dinheiro -= 5;
    }

    treinarDefesa(): void {
        this.defesa += (Math.random() * 3) + 1;
        this.energia -= 5;
        this.dinheiro -= 5;
    }

    descansar(): void {
        this.energia += (Math.random() * 10) + 20;
        this.ataque -= Math.random() * 1;
        this.defesa -= Math.random() * 1;
        this.dinheiro -= 5;
    }

    lutar(): void {
        let poder = 20 + (this.energia + this.ataque + this.defesa) / 4;
        let chance = (Math.random() * 100) + 1;

        if (poder >= chance) {
            this.dinheiro += (Math.random() * 100) + 100;
            this.energia -= (Math.random() * 25) + 25;
        }
        else {
            this.dinheiro += (Math.random() * 50) + 50;
            this.energia = 0;
        }
    }

    showStatus(): void {
        console.log('Nome: ', this.nome)
        console.log('Energia: ', this.energia)
        console.log('Ataque: ', this.ataque)
        console.log('Defesa: ', this.defesa)
        console.log('Dinheiro: ', this.dinheiro)
    }
}
