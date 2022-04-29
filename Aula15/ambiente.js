let num = [7,15 ,2 ,5 ,9 ,3 , 4]
num.push(1)

console.log(num)
console.log(`O vetor tem ${num.length} posicões`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(12)

if(pos==-1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posicão ${pos}`)
}