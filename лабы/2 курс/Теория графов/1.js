// Поиск в глубину в графе

const graph = {};
graph.a = ["b", "d"];
graph.b = ["f", "g"];
graph.c = [];
graph.d = ["e"];
graph.e = ["h"];
graph.f = ["g"];
graph.g = ["c"];
graph.h = [];

function depthSearchRecursive(graph, current, end, visited = new Set()) {
    if (current === end) return true;
    if (visited.has(current)) return false;

    visited.add(current);
    for (let neighbor of graph[current] || []) {
        if (depthSearchRecursive(graph, neighbor, end, visited)) {
            return true;
        }
    }
    return false;
}

console.log(depthSearchRecursive(graph, "a", "e2")); // true
console.log(depthSearchRecursive(graph, "a", "g")); // false
