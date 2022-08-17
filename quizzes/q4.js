let x=[10,14,5,16,8,2,20]
var smallest=x[0]
for(let i=0;i<x.length;i++){
    if(x[i]<=smallest){
            smallest=x[i]
            var index=i}

}
console.log('the smallest element is '+smallest)
console.log('the index of smallest element = '+index)