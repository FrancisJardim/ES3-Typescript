import Personagem from "./Personagem";
import prompt from "prompt-sync";

let char: Personagem = new Personagem('Ryu Hoshi', 10, 10, 100, 100);

let teclado = prompt();

let input: number = 0;

while (input != 9) {
    console.log('1 - Treinar ataque');
    console.log('2 - Treinar defesa');
    console.log('3 - Descansar');
    console.log('4 - Lutar');
    console.log('5 - Status');
    console.log('9 - Encerrar');

    input = +teclado("Escolha uma ação: ");

    switch (input) {
        case 1:
            char.treinarAtaque();
            break;
        case 2:
            char.treinarDefesa();
            break;
        case 3:
            char.descansar();
            break;
        case 4:
            char.lutar();
            break;
        case 5:
            char.showStatus()
            break;
        default:
            break;
    }
}



