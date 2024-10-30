/*
  Author: Pedro Flores
  Date: 30/10/2022
  Description: Projeto para Dio.me do bootcamp para mostrar em qual nível um herói está.
*/

class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  classify() {
    for (const [nivel, limite] of Object.entries(expTable)) {
      if (this.level <= limite) {
        return nivel;
      }
    }
    return 'Desconhecido';
  }

  displayLevel() {
    const nivelHeroi = this.classify();
    console.log(`O Herói de nome ${this.name} está no nível de ${nivelHeroi}`);
  }
}

const expTable = {
  Ferro: 999,
  Bronze: 2000,
  Prata: 5000,
  Ouro: 7000,
  Platina: 8000,
  Ascendente: 9000,
  Imortal: 10000,
  Radiante: Infinity,
};

const hero = new Hero('Kratos', 2540);
hero.displayLevel();
