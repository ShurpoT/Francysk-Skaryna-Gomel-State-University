// Поиск в глубину в графе

const graph = {};
graph.a = ["b", "d"]; //1
graph.b = ["f", "g"]; //2
graph.c = []; //3
graph.d = ["e"]; //4
graph.e = ["h"]; //5
graph.f = ["g"]; //6
graph.g = ["c"]; //7
graph.h = []; //8

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

console.log("поиск в глубину от a до e2 ==> " + (depthSearchRecursive(graph, "a", "e2") ? "нашел" : "не нашел :(")); // true
console.log("поиск в глубину от a до g ==> " + (depthSearchRecursive(graph, "a", "g") ? "нашел" : "не нашел :(")); // false
