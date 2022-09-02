export default function nim(arr){
    /*arr.forEach(function(element){
      element = element + "님";*/
    let newArr = arr.map(function(value){
      value +"님";  
    });
    return newArr;
}
  

