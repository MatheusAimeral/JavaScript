 let valores = [8, 1, 7, 9, 3, 5, 12, 25 ]
console.log(valores[0])
valores.sort()
/*
for(let pos=0; pos<valores.length; pos++) {
    console.log(`A posicão ${pos} tem o valor ${valores[pos]}`)
}
*/ 

for(let pos in valores) {
    console.log(`A posicão ${pos} tem o valor ${valores[pos]}`)
}

