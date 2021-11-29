var accountsMerge = function(accounts) {
  const emailToID = new Map();
  const idToEmail = new Map();
  const graph = [...Array(accounts.length)].map((_, i) => i);
  const output = [];
  
  for(let i = 0; i < accounts.length; i++) {
      for(let j = 1; j < accounts[i].length; j++) {
          const currEmail = accounts[i][j]
          if(!emailToID.has(currEmail)) emailToID.set(currEmail, [])
          emailToID.get(currEmail).push(i);
      }
  }
  
  for(let ids of emailToID.values()) {
      for(let i = 1; i < ids.length; i++) {
          union(ids[0], ids[i]);
      }
  }
  
  for(let i = 0; i < accounts.length; i++) {
      const rootID = find(i);
      
      if(!idToEmail.has(rootID)) idToEmail.set(rootID, new Set());
      accounts[i].forEach(email => idToEmail.get(rootID).add(email));
  }
  
  for(let emails of idToEmail.values()) {
      emails = [...emails]
      output.push([emails[0], ...emails.slice(1).sort()])
  }
  
  function find(id) {
      if(graph[id] === id) return id;
      graph[id] = find(graph[id]);
      return graph[id];
  }  
  
  function union(i, j) {
      const rootI = find(i);
      const rootJ = find(j);
      graph[rootJ] = rootI;
  }
  return output;
};