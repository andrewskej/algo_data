matrix1 = [
  [2, 1, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1]
]

matrix2 = [
  [2, 0, 1, 0, 0],
  [2, 2, 0, 0, 2],
  [0, 1, 1, 2, 2],
  [0, 1, 0, 0, 2]
]

directions = [
    [-1,0], 
    [0,1],
    [1,0],
    [0,-1]
]

ISFRESH = 1
ISROTTEN = 2

def rottingOranges(matrix):
    if len(matrix) == 0:
        return 0

    queue = []
    freshOrange = 0
    
    for row in range(len(matrix)):
        for col in range(len(matrix[0])):
            if(matrix[row][col] == ISROTTEN):
                queue.append([row, col])
            
            if(matrix[row][col] == ISFRESH):
                freshOrange += 1
    
    minutes = 0
    currentQSize = len(queue)

    while len(queue) > 0:
        if currentQSize == 0:
            currentQSize = len(queue)
            minutes += 1
            
        currentOrange = queue.pop(0)
        currentQSize -= 1
        row = currentOrange[0]
        col = currentOrange[1]

        for i in range(len(directions)):
            currentDirection = directions[i]
            nextRow = currentDirection[0] + row
            nextCol = currentDirection[1] + col

            if nextRow < 0 or nextRow >= len(matrix) or nextCol < 0 or nextCol >= len(matrix[0]):
                continue
            
            if matrix[nextRow][nextCol] == ISFRESH:
                matrix[nextRow][nextCol] = 2
                freshOrange -= 1
                queue.append([nextRow, nextCol])
            
    if freshOrange != 0:
        return -1
    
   
    return minutes   
    
    
    
    
print(rottingOranges(matrix1))
print(rottingOranges(matrix2))