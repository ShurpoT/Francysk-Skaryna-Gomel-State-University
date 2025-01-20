// алгоритм Дейкстры

const graph = {
    a: { b: 10, f: 5 },
    b: { c: 1 },
    c: { d: 5, g: 10 },
    d: { e: 1 },
    e: { g: 2 },
    f: { c: 7, g: 100, h: 3 },
    g: { h: 8, i: 100 },
    h: { j: 1 },
    i: { j: 1 },
    j: {},
};

function shortPath(graph, start, end) {
    const costs = {};
    const processed = [];
    let neighbors = {};
    Object.keys(graph).forEach((node) => {
        if (node !== start) {
            let value = graph[start][node];
            costs[node] = value || 100000000;
        }
    });
    let node = findNodeLowestCost(costs, processed);
    while (node) {
        const cost = costs[node];
        neighbors = graph[node];
        Object.keys(neighbors).forEach((neighbor) => {
            let newCost = cost + neighbors[neighbor];
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost;
            }
        });
        processed.push(node);
        node = findNodeLowestCost(costs, processed);
    }
    return costs;
}

function findNodeLowestCost(costs, processed) {
    let lowestCost = 100000000;
    let lowestNode;
    Object.keys(costs).forEach((node) => {
        let cost = costs[node];
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestNode = node;
        }
    });
    return lowestNode;
}

console.log(shortPath(graph, "a", "g"));
