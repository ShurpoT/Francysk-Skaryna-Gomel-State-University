// Поиск в ширину в графе

const graph = {};
1;
graph.a = ["b", "c"];
2;
graph.b = ["d"];
3;
graph.c = ["e"];
4;
graph.d = ["e"];
5;
graph.e = ["f"];
6;
graph.f = ["g"];
7;
graph.g = ["a"];

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

console.log(breadthSearch(graph, "a", "e"));
