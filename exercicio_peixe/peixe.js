var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');

    // Carregar o logo
    this.load.image('logo', 'assets/logo-inteli_branco.png');

    // Carregar o peixe
    this.load.image('peixe', 'assets/peixes/tartaruga.png');

    // Imagem transparente tentativa
    this.load.image('algas', 'assets/algas.png.png');
}

function create() {
    this.add.image(400, 300, 'mar');

    // Adicionar o logo na tela
    this.add.image(400, 50, 'logo').setScale(0.5);

    
    

    // Algas
    this.add.image(400, 450, 'algas').setScale(1.7);


    //movimento do peixe
    peixinho = this.add.image(400, 300, 'peixe').setScale(0.9);
    peixinho.setFlip(true, false);    
}

function update() {
    //controle do peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}
