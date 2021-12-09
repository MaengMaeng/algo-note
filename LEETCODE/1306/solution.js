/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  const length = arr.length;
  const visit = Array(arr.length).fill(false);
  let reach = false;

  const dfs = (index) => {
    if (reach) return;
    if (index < 0 || index >= length) return;
    if (visit[index]) return;
    if (arr[index] === 0) return (reach = true);

    visit[index] = true;
    dfs(index + arr[index]);
    dfs(index - arr[index]);
  };

  dfs(start);

  return reach;
};
