class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
        }
        
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}


let heroi1 = new Heroi('Nancy', 35, 'guerreiro');
let heroi2 = new Heroi('Felipe', 1000, 'mago');

heroi1.atacar(); 
heroi2.atacar();
