let bank = 100
let moneyGained = 0.00
let moneyLost = 0.00
let highScore = parseInt(localStorage.getItem('highScore'))
console.log(localStorage.getItem('highScore'))

function HighScore() {
  let oldScore = parseInt(localStorage.getItem('highScore'))
  let CurrentScore = bank
  if (CurrentScore > oldScore) {
    localStorage.setItem('highScore', CurrentScore.toString())
    highScore = CurrentScore
  }
  console.log(localStorage.getItem('highScore'))

}
const players = [
  {
    name: "Danny",
    teamNumber: 0,
    emoji: '🏃‍♂️',
    skill: 10
  },
  {
    name: "Tyson",
    teamNumber: 0,
    emoji: '🤾‍♂️',
    skill: 30
  },
  {
    name: "Jacky",
    teamNumber: 0,
    emoji: '🏇',
    skill: 88
  },
  {
    name: "Jarvis",
    teamNumber: 0,
    emoji: '🏌️‍♀️',
    skill: 15
  },
  {
    name: "Donkey",
    teamNumber: 0,
    emoji: '🏋️‍♂️',
    skill: 77
  },
  {
    name: "Sam",
    teamNumber: 0,
    emoji: '🏌️‍♂️',
    skill: 21
  },
  {
    name: "Leon",
    teamNumber: 0,
    emoji: '🤾',
    skill: 5
  },
  {
    name: "Single",
    teamNumber: 0,
    emoji: '🏂',
    skill: 99
  },
  {
    name: "Larry",
    teamNumber: 0,
    emoji: '🧘‍♀️',
    skill: 50
  },
  {
    name: "Xander",
    teamNumber: 0,
    emoji: '🚶‍♀️',
    skill: 1
  },
  {
    name: "Saggy",
    teamNumber: 0,
    emoji: '🏋️‍♀️',
    skill: 61
  },
  {
    name: "Quinton",
    teamNumber: 0,
    emoji: '🤺',
    skill: 34
  },
  {
    name: "X-Wing",
    teamNumber: 0,
    emoji: '🏄',
    skill: 71
  },
  {
    name: "Trisket",
    teamNumber: 0,
    emoji: '🧜‍♂️',
    skill: 76
  },
  {
    name: "Velociraptor",
    teamNumber: 0,
    emoji: '🤸',
    skill: 47
  },
  {
    name: "Teeth",
    teamNumber: 0,
    emoji: '⛹️‍♀️',
    skill: 23
  },
  {
    name: "T.J.",
    teamNumber: 0,
    emoji: '🕴️',
    skill: 58
  },
  {
    name: "Sethy Baxter",
    teamNumber: 0,
    emoji: '💃',
    skill: 99
  },
  {
    name: "Dan Smith",
    teamNumber: 0,
    emoji: '🧍‍♂️',
    skill: 3
  },
  {
    name: "Tiger",
    teamNumber: 0,
    emoji: '🐅',
    skill: 100
  },
]



function getPlayers() {
  players.forEach((player) => player.teamNumber = Math.ceil(Math.random() * 2))
  console.log(players)

}
function startBets() {
  if (bank <= 0) {
    window.alert("Wow You suck at this buh bye")
    window.close()
  }
  getPlayers()
  getTeamOne()
  getTeamTwo()
  HighScore()
  drawBank()
}

function getTeamOne() {
  const teamOneElemID = document.getElementById('teamOne')

  let teamOnePlayers = " "

  const teamPlayers = players.filter((player) => player.teamNumber == 1)

  teamPlayers.forEach((player) => teamOnePlayers += player.emoji)
  console.log(teamPlayers)
  // @ts-ignore
  teamOneElemID.innerHTML = teamOnePlayers
}

function getTeamTwo() {
  const teamTwoElemID = document.getElementById('teamTwo')

  let teamTwoPlayers = ""

  const teamPlayers = players.filter((player) => player.teamNumber == 2)

  teamPlayers.forEach((player) => teamTwoPlayers += player.emoji)
  console.log(teamPlayers)
  // @ts-ignore
  teamTwoElemID.innerHTML = teamTwoPlayers
}

function betTeamOne(money) {
  if (money > bank) {
    window.alert('you are to broke for this')
  }
  else {
    const teamOnePlayers = players.filter((player) => player.teamNumber == 1)
    let teamOneSkill = 0
    teamOnePlayers.forEach((player) => teamOneSkill += player.skill)
    console.log(teamOneSkill)
    const teamTwoPlayers = players.filter((player) => player.teamNumber == 2)
    let teamTwoSkill = 0
    teamTwoPlayers.forEach((player) => teamTwoSkill += player.skill)
    console.log(teamTwoSkill)
    if (teamOneSkill > teamTwoSkill) {
      console.log("Team One Wins")
      bank += money
      moneyGained += money
      window.alert(`You Won $${money}! 💵`)
    }
    else {
      console.log('team Two Wins')
      bank -= money
      moneyLost -= money
      window.alert(`You Lost $${money}! 🧧`)
    }
    console.log(bank)
    startBets()
  }
}

function betTeamTwo(money) {
  if (money > bank) {
    window.alert('you are to broke for this')
  }
  else {
    const teamOnePlayers = players.filter((player) => player.teamNumber == 1)
    let teamOneSkill = 0
    teamOnePlayers.forEach((player) => teamOneSkill += player.skill)
    console.log(teamOneSkill)
    const teamTwoPlayers = players.filter((player) => player.teamNumber == 2)
    let teamTwoSkill = 0
    teamTwoPlayers.forEach((player) => teamTwoSkill += player.skill)
    console.log(teamTwoSkill)
    if (teamOneSkill < teamTwoSkill) {
      console.log("Team Two Wins")
      bank += money
      moneyGained += money
      window.alert(`You Won $${money}! 💵`)
    }
    else {
      console.log('team One Wins')
      bank -= money
      moneyLost -= money
      window.alert(`You Lost $${money}! 😭`)
    }
    startBets()
    console.log(bank)
  }
}

function drawBank() {
  const bankEleID = document.getElementById('bank')
  const moneyGainedEleID = document.getElementById('moneyGained')
  const moneyLostEleID = document.getElementById('moneyLost')
  const highScoreEleID = document.getElementById('highScore')
  const banks = bank
  const moneysGained = moneyGained
  const moneysLost = moneyLost
  const highsScore = highScore

  bankEleID.innerText = `$${bank.toFixed(2)}`
  moneyGainedEleID.innerText = `$${moneyGained.toFixed(2)}`
  moneyLostEleID.innerText = `$${moneyLost.toFixed(2)}`
  highScoreEleID.innerText = `High Score is $${highScore.toFixed(2)}`

}

startBets()