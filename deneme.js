// function evenNumber(num){
//     let a= 3%2 
//     let b= 2%2
//      return num =a + b 



// }
// console.log(num);



function evenNumber(num){
    let result=num %2===0 ? `${num} Sayısı çifttir`: `${num} Sayısı tektir`
     return result  

}
console.log(evenNumber(3));
console.log(evenNumber(2));


function square(num){
    let sonuc=num **2 
    return sonuc
}
console.log(square(4));
console.log(square(5));

let numbers=[1,2,3,4,5]
numbers.reverse()
console.log(numbers);