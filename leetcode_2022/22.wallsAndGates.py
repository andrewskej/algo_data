from numpy import Infinity


directions = [
    [-1,0],
    [1,0],
    [0,1],
    [0,-1]
]

EMPTY = Infinity
WALL = -1
GATE = 0

m1 = [
  [Infinity,  -1,       0,        Infinity],
  [Infinity,  Infinity, Infinity,       -1],
  [Infinity,  -1,       Infinity,       -1],
  [0,         -1,       Infinity, Infinity]
]

m2 = [
  [EMPTY,  WALL,  GATE,  EMPTY],
  [EMPTY,  EMPTY, EMPTY,  WALL],
  [EMPTY,  WALL,  EMPTY,  WALL],
  [GATE,   WALL,  EMPTY, EMPTY]
]



def wallsAndGates(matrix):
    for row in range(len(matrix)):
        for col in range(len(matrix[0])):
            if matrix[row][col] == GATE:
                dfs(matrix, row, col, 0)
    return matrix


def dfs(matrix, row, col, currentStep):
    if row < 0 or col < 0 or row >= len(matrix) or col >= len(matrix) or currentStep > matrix[row][col]:
        return
    matrix[row][col] = currentStep
    
    for i in range(len(directions)):
        currentDir = directions[i]
        dfs(matrix, row + currentDir[0], col + currentDir[1], currentStep + 1)
    
    

    
print(wallsAndGates(m1))
