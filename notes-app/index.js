function memoizeAddByOne() {
    let cache = {
    }

    return function(num) {
        if(num in cache) {
            console.log('Printed From Cache')
            return cache[num]
        }else {
            cache[num] = num + 1
            return cache[num]
        }
    }
}

const memoizeAddByOneInstance = memoizeAddByOne();
console.log(memoizeAddByOneInstance(4)) // 5
console.log(memoizeAddByOneInstance(5)) // 6
console.log(memoizeAddByOneInstance(4)) // 5

// function factorial(num) {
//     return num == 0 ? 1 : num * factorial(num-1)
// } 

// factorial(5) // 120
// factorial(6) // 720
// factorial(5) // 120