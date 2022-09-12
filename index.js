const name = [ "Guadalupe", "Ollie", "Aki"]

function writeCards(name){
    const array =[]
  for (let i = 0; i < name.length; i++) {
    
       array.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
}
return array
}

function countDown(){
    let num = 11;
    while (num --)
console.log (num)
}