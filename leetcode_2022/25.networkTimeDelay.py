from collections import defaultdict
import heapq


class Solution:
    def networkDelayTime(self, times, n, k):
        """
        :type times: List[List[int]]
        :type n: int
        :type k: int
        :rtype: int
        """
        delay_list = {}
        done_list = set()
        graph = defaultdict(list)
        for src, dst, time in times:
            graph[src].append((dst, time))
        for i in range(1, n + 1):
            delay_list[i] = float('inf')
        heap = []
        # Use a min-heap to take min timed value among the next set of nodes
        heapq.heappush(heap, (0, k))
        # Once we are done with exploring all the nodes, add it to done_list.
        done_list.add(k)
        while heap:
            time, next_node = heapq.heappop(heap)
            # Check if we have visited this node with lower time already, then do not
            # Overwrite, else update the value
            if delay_list[next_node] > time:
                delay_list[next_node] = time
            if next_node not in graph:
                continue
            adj_list = graph[next_node]
            for adj_node, adj_node_time in adj_list:
                # If the node is already in done_list,
                # then do not add it again.
                if adj_node not in done_list:
                    heapq.heappush(heap, (time + adj_node_time, adj_node))
            done_list.add(next_node)
        max_value = max(delay_list.values())
        if max_value == float('inf'):
            return -1
        return max_value
 


sol = Solution()
n = 5
k = 1
nodes = [1, 2, 3, 4, 5]
times = [[1, 2, 9], [1, 4, 2], [2, 5, 1], [4, 2, 4], [4, 5, 6], [3, 2, 3], [5, 3, 7], [3, 1, 5]]
print(sol.networkDelayTime(times, n, k))