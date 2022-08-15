let x =parseInt(prompt('Enter the number 1'))
let y =parseInt(prompt('Enter the number 2'))
if(x >0 && y >0){
    document.write('Both is posstive')
}else if( x>0 && y<0){
    document.write('first posstive,second negative')
}else if(x<0 && y>0){
    document.write('first negative ,second postive')
}else if(x<0 && y<0){
    document.write('both is negative')
}
