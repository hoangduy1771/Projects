console.log(`
Introduction: Generate 2 heroes with random HP and Attack then fight.
How to run: 
Gameplay Instruction : There are 2 modes available in the game, Last Man Standing and Boss Fight.

Click Run or "Ctrl + Enter" to see who would win between Iron Man and Thor

Boss Fight:
- Thanos have 10% that he would snap his finger and win immediately
- Iron Man have 20% that he would steal the Infinity Gauntlet and snap his finger to win
==========================================================================
`)

class Hero {
  constructor(name, hp, damage) {
    this.name = name;
    this.hp = hp;
    this.damage = damage;
  }

  applyDamage(damage) {
    this.hp -= damage;
  }

  attack(enemy) {
    enemy.applyDamage(this.damage);
  }
}

class Thanos extends Hero {
  constructor(name, hp, damage) {
    super(name, hp, damage);
    // this.snap = snap;
  }

  attack(enemy) {
    super.attack(enemy);
    // this.hp += damage * 0.5;
  }

  applyDamage(damage) {
    super.applyDamage(damage);
    // this.hp -= damage;
  }  
}


// Player
var randomHP1 = Math.round(Math.random() * 200);
var randomAttack1 = Math.round(Math.random() * 40);
const player1 = new Hero("Hulk", randomHP1, randomAttack1);

var randomHP2 = Math.round(Math.random() * 200);
var randomAttack2 = Math.round(Math.random() * 40);
const player2 = new Hero("Thor", randomHP2, randomAttack2);

var randomHP3 = Math.round(Math.random() * 500);
var randomAttack3 = Math.round(Math.random() * 80);
const player3 = new Hero("Iron Man", randomHP3, randomAttack3);

// Boss
var randomHPThanos = Math.round(Math.random() * 1000);
var randomAttackThanos = Math.round(Math.random() * 10);
const thanos = new Thanos("Thanos", randomHPThanos, randomAttackThanos);

// PVP:
// Deathmatch

// Last Man Standing
// Intro
function gameModeSelect() {
  console.log(`Last Man Standing Begin: 

${player1.name} [HP: ${player1.hp}, Attack: ${player1.damage}]
${player2.name} [HP: ${player2.hp}, Attack: ${player2.damage}]
`)
}

// Last Man Standing fight
function fightLMS() {
  player2.attack(player1);
  // setTimeout(() => {
    console.log("Thor spins the Mjolnir!! ==> Hulk HP is: " + player1.hp);
  // }, 2000)

  player1.attack(player2);
  // setTimeout(() => {  
    console.log("Hulk Smash!! ==> Thor HP is: " + player2.hp);
    console.log("---------------------------------------------------");
  // }, 2000)
}

function lastManStanding() {
  gameModeSelect();

  
  for(var i = 0; i < player1.hp; --i) {
    
    console.log(`[Turn: ${Math.abs(i) + 1}]`);
    fightLMS()

    if(player2.hp <= 0 && player1.hp <= 0) {
      console.log(">>> Draw, Upgrade your hero !!");
      break;
    } else if(player1.hp <= 0) {
      console.log(`>>> ${player2.name} Win!!!"`);
      break;
    } else if(player2.hp <= 0) {
      console.log(`>>> ${player1.name} Win!!!`);
      break;
    }
  }
  // console.log(i);
}
lastManStanding();
console.log("=============================================")
// Boss Fight

// Intro
function bossFightSelected() {
  console.log(`
Boss Fight Begin: 

${player3.name} [HP: ${player3.hp}, Attack: ${player3.damage}]
${thanos.name} [HP: ${thanos.hp}, Attack: ${thanos.damage}]
`)
}

// Hero fight the Boss
function fightB() {
  player3.attack(thanos);
  console.log("Iron Man blasting Laser Beam!! ==> Thanos hp is: " + thanos.hp);
  thanos.attack(player3);
  console.log("Thanos throws the MOON!! ==> Iron Man hp is: " + player3.hp);
  console.log("---------------------------------------------");
}

function bossFight() {
  bossFightSelected();

  for(var i = 0; i < player3.hp; --i) {
    var snapChance = Math.round(Math.random() * 99) + 1;
    console.log(`[Attack Turn: ${Math.abs(i) + 1}]`);
    fightB();
 
    if(snapChance <= 5) {
      console.log(`>>> Thanos Snapped.
      Thanos: "Perfectly balanced, as all things should be ☺"
      >>> Thanos Win!!!`);
      break;
    }

    if(snapChance >= 90) {
      console.log(`>>> Iron Man Steal The Gauntlet.
      Iron Man: "And I.. Am... Iron Man"
      Iron Man Snapped.
      >>> ${player3.name} Win!!!`);
      break;
    } 
    
    if(thanos.hp <= 0 && player3.hp <= 0) {
      console.log(">>> Draw, Upgrade your hero !!");
      break;
    } else if(player3.hp <= 0) {
      console.log(`>>> ${thanos.name} Win!!!"`);
      break;
    } else if(thanos.hp <= 0) {
      console.log(`>>> ${player3.name} Win!!!`);
      break;
    }
  }
  console.log(snapChance);

}

bossFight();



