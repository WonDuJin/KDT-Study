let members = 29;
let price = 1000;
let resulut = members * price;
let ex = 2000;
let tax = 0.03;
function icecreamPrice(members,price,tax){
  return members * price * tax;
}

console.log(icecreamPrice(30,1500,0.03));