let x =parseInt(prompt("Enter the number 1 "))
let y =parseInt(prompt("Enter the number 2 "))
let z =parseInt(prompt("Enter the number 3 "))
if(x>y&&x>z){
    document.write('number 1 is bigger'+" "+x)
}else if(y>x&&y>z)
{
    document.write('number 2 is bigger'+" "+y)
}else if(z>x&&z>y){
    document.write('number 3 is bigger'+" "+z)
}