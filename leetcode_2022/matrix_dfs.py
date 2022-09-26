def find_dfs(self, matrix):
        ROWS = len(matrix)
        COLS = len(matrix[0])
        visited = set()
        result = []

        def dfs(row, col, visited):
            visited.add((row, col))
            result.append(matrix[row][col])
            dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]
            for dir in dirs:
                r = row + dir[0]
                c = col + dir[1]
                if r < 0 or r >= ROWS or c < 0 or c >= COLS or (r, c) in visited:
                    continue
                dfs(r, c, visited)

        dfs(0, 0, visited)
        return result