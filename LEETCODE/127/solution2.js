/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let start = new Date();
    const vertex = wordList.slice();
    vertex.unshift(beginWord);

    const graph = [], vertexLength = vertex.length, wordLength = wordList[0].length;

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
        graph.push([]);
        for(let j = 0; j < vertexLength; j++){
            let sameChar = 0;

            for(let w = 0; w < wordLength; w++){
                if(vertex[i].charAt(w) === vertex[j].charAt(w)){
                    sameChar++;
                }
            }

            if(sameChar + 1 === wordLength){
                graph[i].push(j);
            }
        }
    }

    console.log('그래프 그리기 ', new Date() - start);

    const queue = [], dist = new Array(vertexLength);

    for(let i = 0; i < vertexLength; i++){
        dist[i] = Infinity;
    }

    for(let i = 0; i < graph[0].length; i++){
        queue.push([graph[0][i], Infinity]);
    }

    queue.push([0,0]);
    dist[0] = 0;

    while(queue.length){
        queue.sort((a,b) => a[1] - b[1]);

        let v = queue.shift();

        if(dist[v[0]] >= v[1]){
            let l = graph[v[0]].length;

            for(let i = 0; i < l; i++){
                let index = graph[v[0]][i];
                
                if(dist[v[0]] + 1 < dist[index]){
                    dist[index] = dist[v[0]] + 1;
                    queue.push([index, dist[index]]);
                }
            }
        }
    }

    console.log('다익스트라 ', new Date() - start);
    
    return dist[endIndex] === Infinity ? 0 : dist[endIndex] + 1;
};