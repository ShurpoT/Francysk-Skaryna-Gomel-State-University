// Поиск в ширину в графе

const graph = {};
graph.a = ["b", "c"]; // 1
graph.b = ["d"]; // 2
graph.c = ["e"]; // 3
graph.d = ["e"]; // 4
graph.e = ["f"]; // 5
graph.f = ["g"]; // 6
graph.g = ["a"]; // 7

function breadthSearch(graph, start, end) {
    let queue = [];
    queue.push(start);
    while (queue.length > 0) {
        const current = queue.shift();
        if (!graph[current]) {
            graph[current] = [];
        }
        if (graph[current].includes(end)) {
            return true;
        } else {
            queue = [...queue, ...graph[current]];
        }
    }
    return false;
}

console.log("поиск в ширину от a до e ==> " + (breadthSearch(graph, "a", "e") ? "нашел" : "не нашел :(")); // true
console.log("поиск в ширину от a до b ==> " + (breadthSearch(graph, "a", "b") ? "нашел" : "не нашел :(")); // false
