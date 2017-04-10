function isEmpty(param) {
  let result = param.reduce((acc, value) => {
    return acc+value
  }, 0)
  if (result == 0) {
    return true
  } else {
    return false
  }
}
console.log(isEmpty([]))
console.log(isEmpty([1, 2, 3]))

function count(param) {
  return param.reduce((acc, value, index) => {
    return index + 1
  }, 0)
}
console.log(count([]));
console.log(count([1, 2, 3]));


function head(param) {
  return param.filter((el, index) => {
    if (index == 0) {
      return true
    }else {
      return false
    }
  })
}

console.log(head([1, 2, 3]));
console.log(head([4, 5, 7]));

function tail(param) {
  return param.filter((el, index) => {
    if (index !== 0) {
      return true
    }else {
      return false
    }
  })
}

console.log(tail([1,2,3]));
console.log(tail([2,3]));


function flatten(param) {
  return param.reduce((acc, value) => {
    console.log(acc);
    console.log(value);
    return acc.concat(value)
  }, [])

}

console.log(flatten([1, [2,3], 4, [5, [6, 7]]]));
