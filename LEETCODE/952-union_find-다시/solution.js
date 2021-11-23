/**
 * @param {number[]} nums
 * @return {number}
 */
 var largestComponentSize = function(nums) {
  var root = new Array(nums.length).fill(0);
  var sz = new Array(nums.length).fill(1);
  
  function getRoot(r) {
      if (root[r] == r) return r;
      root[r] = getRoot(root[r]);
      return root[r];
  }
  
  function union(u, v) {
      u = getRoot(u);
      v = getRoot(v);
      if (u == v) return;
      if (sz[u] < sz[v]) 
          root[u] = v, sz[v] += sz[u];
      else root[v] = u, sz[u] += sz[v];
  }
  
  function eras(nums) {
      for(let i = 0; i < nums.length; i++) root[i] = i;
      const N = 100001;
      var i = 2;
      var prime = new Array(N).fill(true);
      while(i < N) {
          if (!prime[i]) {
              i++;
              continue;
          }
          let r = -1;
          for(let j = 0; j < nums.length; j++)
              if (nums[j] % i == 0) {
                  if (r < 0) r = getRoot(j);
                  else union(r, j);
              }
          for(let j = i+i; j < N; j+= i) 
              prime[j] = false;
          i++;
      }
     var ans = 0;
     for(let i = 0; i < nums.length; i++) 
         ans = Math.max(ans, sz[i]);
     return ans;
  }
  
  return eras(nums);
};