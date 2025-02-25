// gerenciar informaçoes do carro
class carro {
  constructor(marca, modelo, ano, cor, preco) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.preco = preco;
  }
  doido() {
    console.log(
      `Este é um ${this.marca} ${modelo} ${ano} de cor ${cor} e custa ${preco}`
    );
  }
}

class carronovo extends carro {
  constructor(marca, modelo, anoo, cor, preco) {
    super(marca, modelo, cor);
    this.anoo = anoo;
    this.preco = preco;
  }
  doidinho() {
    console.log(
      `Este é um ${this.marca} ${modelo} ${anoo} de cor ${cor} e custa ${preco}`
    );
  }
}

let meuTesla = new carronovo("Honda", "city", 2025, "preto", "R$ 100.000,00");
meuTesla.doido();
meuTesla.doidinho();
