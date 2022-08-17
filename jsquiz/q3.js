let num=Number(prompt('Enter the number = '))
function fac(n){
    if(n>1)
    return n*fac(n-1)
    else
    return 1
}
console.log('the factorial of '+num+' is = '+fac(num))