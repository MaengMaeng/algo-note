function solution(new_id) {
  let answer = new_id;

  const getLowerCase = (id) => id.toLowerCase();
  const removeInvalidChar = (id) => id.replace(/[^a-z0-9\-\_\.]/g, '');
  const changeTwoDotsToOneDot = (id) => id.replace(/\.+/g, '.');
  const removeDot = (id) => {
    let start = 0, end = id.length;

    if(id[0] == '.') start++;
    if(id[end - 1] == '.') end--;

    return id.slice(start, end);
  }
  const emptyId = (id) => id ? id : 'a';
  const longId = (id) => id.length > 15 ? id.slice(0, id[14] == '.' ? 14 : 15) : id;
  const shortId = (id) => id.length < 3 ? (id + id[id.length - 1].repeat(2)).slice(0, 3) : id;

  answer = getLowerCase(answer);
  answer = removeInvalidChar(answer);
  answer = changeTwoDotsToOneDot(answer);
  answer = removeDot(answer);
  answer = emptyId(answer);
  answer = longId(answer);
  answer = shortId(answer);

  return answer;
}

// solution("...!@BaT#*..y.abcdefghijklm");
// solution("z-+.^.");
// solution("=.="	);
// solution("123_.def");
solution("abcdefghijklmn.p");