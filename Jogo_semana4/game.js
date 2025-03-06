const larguraJogo = 1920;
const alturaJogo = 1080;

const config = {
  type: Phaser.AUTO,
  width: larguraJogo,
  height: alturaJogo,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }, // Sem gravidade para permitir movimentação livre
      debug: false, // Ativar para ver os hitboxes dos objetos
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);

var player,
  cursor,
  keys,
  fantasma,
  placar,
  pontuacao = 0,
  gameOverText,
  venceuText,
  chaoInvisivel,
  coroaImage,
  gameOverState = false;

function preload() {
  this.load.image("background", "assets/fundoo.png");
  this.load.spritesheet("player", "assets/playerAnim.png", {
    frameWidth: 64,
    frameHeight: 64,
  });
  this.load.image("fantasma", "assets/player.png");
  this.load.image("coroa", "assets/coroa.png");
}

function create() {
  // Adicionando fundo ao jogo
  this.add.image(larguraJogo / 2, alturaJogo / 2, "background").setScale(2);

  // Criando o jogador corretamente
  player = this.physics.add.sprite(400, 400, "player").setScale(3.8);
  player.setCollideWorldBounds(true);
  player.body.setSize(player.width * 0.3, player.height * 0.3); // Diminuindo o tamanho do hitbox

  // Criando animações
  this.anims.create({
    key: "andar-baixo",
    frames: this.anims.generateFrameNumbers("player", { start: 0, end: 5 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "andar-esquerda",
    frames: this.anims.generateFrameNumbers("player", { start: 6, end: 11 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "andar-direita",
    frames: this.anims.generateFrameNumbers("player", { start: 12, end: 17 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "andar-cima",
    frames: this.anims.generateFrameNumbers("player", { start: 18, end: 23 }),
    frameRate: 10,
    repeat: -1,
  });

  // Criando os controles corretamente
  cursor = this.input.keyboard.createCursorKeys();
  keys = this.input.keyboard.addKeys({
    W: Phaser.Input.Keyboard.KeyCodes.W,
    A: Phaser.Input.Keyboard.KeyCodes.A,
    S: Phaser.Input.Keyboard.KeyCodes.S,
    D: Phaser.Input.Keyboard.KeyCodes.D,
  });

  // Criando o fantasma
  fantasma = this.physics.add.sprite(
    Phaser.Math.Between(50, larguraJogo - 50),
    50,
    "fantasma"
  );

  fantasma.setVelocityY(200);
  fantasma.body.setSize(fantasma.width * 0.5, fantasma.height * 0.5);
  placar = this.add.text(20, 20, "Fantasmas: 0", {
    fontSize: "32px",
    fill: "#FFF",
  });

  gameOverText = this.add
    .text(
      larguraJogo / 2,
      alturaJogo / 2,
      "VOCÊ PERDEU!\nPressione ENTER para reiniciar!",
      {
        fontSize: "40px",
        fill: "#FFF",
        align: "center",
      }
    )
    .setOrigin(0.5)
    .setVisible(false);

  venceuText = this.add
    .text(
      larguraJogo / 2,
      alturaJogo / 2 + 50,
      "PARABÉNS! VOCÊ GANHOU!\nPressione ENTER para jogar novamente!",
      {
        fontSize: "60px",
        fill: "#FFF",
        align: "center",
        backgroundColor: "#000",
        fontFamily: "Arial",
        fontWeight: "bold",
      }
    )
    .setOrigin(0.5)
    .setVisible(false);

  coroaImage = this.add.image(larguraJogo / 2, alturaJogo / 2 - 100, "coroa");
  coroaImage.setScale(0.5);
  coroaImage.setVisible(false);

  // Criar um "chão invisível" para detectar colisão com o fantasma
  chaoInvisivel = this.physics.add.staticGroup();
  let chao = chaoInvisivel.create(larguraJogo / 2, alturaJogo - 10, null);
  chao.setSize(larguraJogo, 20);
  chao.setVisible(false);

  // Adiciona colisão do fantasma com o chão
  this.physics.add.collider(fantasma, chao, gameOver, null, this);

  this.physics.add.overlap(player, fantasma, pegarFantasma, null, this);
}

function update() {
  player.setVelocity(0);

  if (cursor.left.isDown || keys.A.isDown) {
    player.setVelocityX(-660);
    player.anims.play("andar-esquerda", true);
  } else if (cursor.right.isDown || keys.D.isDown) {
    player.setVelocityX(660);
    player.anims.play("andar-direita", true);
  } else if (cursor.up.isDown || keys.W.isDown) {
    player.setVelocityY(-660);
    player.anims.play("andar-cima", true);
  } else if (cursor.down.isDown || keys.S.isDown) {
    player.setVelocityY(660);
    player.anims.play("andar-baixo", true);
  } else {
    player.anims.stop();
  }
}

function pegarFantasma(player, fantasma) {
  if (gameOverState) return;

  pontuacao += 1;
  placar.setText("Fantasmas: " + pontuacao);

  if (pontuacao >= 10) {
    venceu();
  } else {
    fantasma.setPosition(Phaser.Math.Between(50, larguraJogo - 50), 50);
    fantasma.setVelocityY(400);
  }
}

function gameOver() {
  if (gameOverState) return;

  gameOverState = true;
  fantasma.setVelocityY(0);
  fantasma.setVisible(false);
  gameOverText.setVisible(true);
  game.scene.scenes[0].input.keyboard.once("keydown-ENTER", reiniciarJogo);
}

function venceu() {
  if (gameOverState) return;

  gameOverState = true;
  fantasma.setVelocityY(0);
  fantasma.setVisible(false);
  venceuText.setVisible(true);
  coroaImage.setVisible(true);
  game.scene.scenes[0].input.keyboard.once("keydown-ENTER", reiniciarJogo);
}

function reiniciarJogo() {
  gameOverState = false;
  pontuacao = 0;
  placar.setText("Fantasmas: 0");
  gameOverText.setVisible(false);
  venceuText.setVisible(false);
  coroaImage.setVisible(false);
  fantasma.setVisible(true);
  fantasma.setPosition(Phaser.Math.Between(50, larguraJogo - 50), 50);
  fantasma.setVelocityY(200);
}
