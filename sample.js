const arr = [0,1,4,1,5,78,78,8]
let newArr = []

for(let i =0; i<arr.length ; i++){
    if (arr[i]===78) {
        continue
    }
    newArr.push(arr[i])
}
console.log(newArr);
