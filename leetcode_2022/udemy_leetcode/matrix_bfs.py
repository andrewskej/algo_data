def find_bfs(self, matrix):
    ROWS = len(matrix)
    COLS = len(matrix[0])
    queue = [(0, 0)]
    dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    result = []
    visited = set()
    
    while queue:
        r, c = queue.pop(0)
        for dir in dirs:
            row = r + dir[0]
            col = c + dir[1]
            if row < 0 or row >= ROWS or col < 0 or col >= COLS or (row, col) in visited:
                continue
            queue.append((row, col))
            result.append(matrix[row][col])
            visited.add((row, col))
    return result