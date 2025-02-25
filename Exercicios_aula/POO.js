class Carro {
  constructor(marca, ano, velocidade) {
    this.marca = marca;
    this.ano = ano;
    this.velocidade = velocidade;
  }

  ligar() {
    console.log(`${this.marca} está ligado!`);
  }

  velocidadeAtual() {
    console.log(`A velocidade atual é de ${this.velocidade} km/h`);
  }
}

// Herança: CarroEletrico herda de Carro
class CarroEletrico extends Carro {
  constructor(marca, ano, velocidade, bateria, cor, saudeBateria) {
    super(marca, ano, velocidade); // Chama o construtor da classe pai
    this.bateria = bateria; // Novo atributo exclusivo do carro elétrico
    this.cor = cor; // Novo atributo exclusivo do carro
    this.saudeBateria = saudeBateria; // Novo atributo exclusivo do carro
  }

  carregarBateria() {
    console.log(`A bateria de ${this.marca} está em 100%! 🔋`);
  }

  corcarro() {
    console.log(`A cor do carro é ${this.cor}!`);
  }

  saudecarro() {
    console.log(`A saúde da bateria do carro é de ${this.saudeBateria}!`);
  }
}

// Criando um carro elétrico
let meuTesla = new CarroEletrico("Tesla", 2023, 85, "100%", "preto", "70%");
meuTesla.ligar(); // Saída: Tesla está ligado!
meuTesla.velocidadeAtual(); // Saída: A velocidade atual é de 85 km/h
meuTesla.carregarBateria(); // Saída: A bateria de Tesla está carregando! 🔋
meuTesla.corcarro(); // Saída: A cor do carro é preto!
meuTesla.saudecarro(); // Saída: A saúde da bateria do carro é de 70%!
