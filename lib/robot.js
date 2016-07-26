'use strict';

class Robot{

  constructor(x, y, direction){
    this.coordinates=[x,y]
    this.bearing=direction
  }

evaluate(command){
  let newArray = this.instructions(command)
  newArray.forEach((element, index, array)=>{this[element]()})
}


instructions(command){
let commandArray = command.split("")
var commands = {'R':'turnRight','L':'turnLeft','A':'advance'}
var newArray=[]
commandArray.forEach((element, index, array)=>{newArray.push(commands[element])})
return newArray
}

orient(direction){
  if (direction ==='north' ||direction ==='south'||direction ==='east'||direction==='west')
  {this.bearing = direction}
  else {throw new Error('Invalid Robot Bearing')}
}

place(directions){
  this.at(directions['x'],directions['y'])
  this.bearing = directions['direction']
}

at(x,y){
  this.coordinates[0] = x
  this.coordinates[1] = y
}

turnRight(){
  let rightHash={'north':'east','east':'south','south':'west','west':'north'}
  this.bearing = rightHash[this.bearing]
}

turnLeft(){
  let leftHash={'north':'west','east':'north','south':'east','west':'south'}
  this.bearing = leftHash[this.bearing]
}

advance(){

  if (this.bearing === 'north'){this.coordinates[1]++}
  else if (this.bearing === 'east'){this.coordinates[0]++}
  else if (this.bearing === 'south'){this.coordinates[1]--}
  else if (this.bearing === 'west'){this.coordinates[0]--}
}
}




// The letter-string "RAALAL" means:
//   - Turn right
//   - Advance twice
//   - Turn left
//   - Advance once
//   - Turn left yet again
