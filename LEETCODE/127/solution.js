/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const vertex = wordList.slice();
    vertex.unshift(beginWord);

    const graph = new Array(vertex.length), vertexLength = vertex.length, wordLength = wordList[0].length;

    let endIndex = -1;
    for(let i = 0; i < vertexLength; i++){
        if(vertex[i] === endWord){
            endIndex = i;
            break;
        }
    }
    
    if(endIndex === -1){
        return 0;
    }

    for(let i = 0; i < vertexLength; i++){
        graph[i] = new Array(vertex.length);
    }

    for(let i = 0; i < vertexLength; i++){
        for(let j = 0; j < vertexLength; j++){
            let sameChar = 0;

            for(let w = 0; w < wordLength; w++){
                if(vertex[i].charAt(w) === vertex[j].charAt(w)){
                    sameChar++;
                }
            }

            if(sameChar + 1 === wordLength){
                graph[i][j] = 1;
                graph[j][i] = 1;
            }
            else{
                graph[i][j] = 0;
                graph[j][i] = 0;
            }
        }
    }

    const queue = [], dist = new Array(vertexLength);

    for(let i = 0; i < vertexLength; i++){
        dist[i] = Infinity;

        if(graph[0][i]){
            queue.push([i, Infinity]);
        }
    }

    queue.push([0,0]);
    dist[0] = 0;

    while(queue.length){
        queue.sort((a,b) => a[1] - b[1]);

        let v = queue.shift();

        if(dist[v[0]] >= v[1]){
            for(let i = 0; i < vertexLength; i++){
                if(graph[v[0]][i] > 0 && dist[v[0]] + graph[v[0]][i] < dist[i]){
                    dist[i] = dist[v[0]] + graph[v[0]][i];
                    queue.push([i, dist[i]]);
                }
            }
        }
    }

    return dist[endIndex] === Infinity ? 0 : dist[endIndex] + 1;
};