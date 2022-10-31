matrix1 = [
  [1,1,1,1,0],
  [1,1,0,1,0],
  [1,1,0,0,1],
  [0,0,0,1,1]
]

matrix2 = [
  [0,1,0,1,0],
  [1,0,1,0,1],
  [0,1,1,1,0],
  [1,0,1,0,1]
]

def numberOfIsland(matrix):

    directions = [ [-1,0], [0,1], [1,0], [0,-1] ]
    
    count = 0
    if len(matrix) == 0: 
        return 0
    
    for row in range(len(matrix)):
        for col in range(len(matrix[0])):
            
            if matrix[row][col] == 1:
                count += 1
                matrix[row][col] = 0
                queue = []
                queue.append([row, col])
                
                while len(queue):
                    currentPos = queue.pop()
                    currentRow = currentPos[0]
                    currentCol = currentPos[1]
                    
                    for i in range(len(directions)):
                        currentDir = directions[i]
                        nextRow = currentRow + currentDir[0]
                        nextCol = currentCol + currentDir[1]
                        
                        if nextRow < 0 or nextRow >= len(matrix) or nextCol < 0 or nextCol >= len(matrix[0]):
                            continue
                        
                        if matrix[nextRow][nextCol] == 1:
                            queue.append([nextRow, nextCol])
                            matrix[nextRow][nextCol] = 0 
                        

    return count

print(numberOfIsland(matrix1))
print(numberOfIsland(matrix2))