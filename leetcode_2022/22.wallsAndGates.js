const m1 = [
  [Infinity,  -1,       0,        Infinity],
  [Infinity,  Infinity, Infinity,       -1],
  [Infinity,  -1,       Infinity,       -1],
  [0,         -1,       Infinity, Infinity]
]

const m2 = [

]


//-1 is wall, 0 is gate, Infinity is empty room.
//Fill each empty room with the number of steps to the nearest gate.
//if not possible to reach a gate, leave Infinity as is
const wallsAndGates = (matrix) => {

}



console.log(wallsAndGates(m1))
console.log(wallsAndGates(m2))