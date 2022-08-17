let oldcars=['fiat','kia','volvo'];
let newcars = oldcars.slice();
newcars.push("mercedes");
for(let car of newcars){
    console.log(car);
    console.assertlog(newcars[car]);
}