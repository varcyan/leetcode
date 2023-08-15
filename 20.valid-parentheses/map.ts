function isValid(s: string):boolean {
  const map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ])

  const leftArr = []
  for (let i=0; i<s.length; i++) {

    const cur = s[i]
    const isRight = !map.get(cur)   // 拿不到，是右边。

    if (isRight) {
      if (!leftArr.length) return false
      if (cur === map.get(leftArr[leftArr.length - 1])) {
        leftArr.pop()
        continue
      }
      return false
    } else {
      leftArr.push(cur)
    }


  }

  return !leftArr.length

}
