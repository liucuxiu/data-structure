const firstRecurringCharacter = (array) => {
  const map = new Set()

  for(let i = 0; i < array.length; i++) {
    if (map.has(array[i])) {
      return array[i]
    }
    else {
      map.add(array[i])
    }
  }
}


const array = [1,2,4,2,3,3,4,2,2]
console.log(firstRecurringCharacter(array))