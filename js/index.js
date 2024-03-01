function data(){
    let charCodeArr = '';
   var a = document.getElementById("name").value
   for(let i = 0; i < a.length; i++){
    let code = a.charCodeAt(i);
    charCodeArr+=code
    

}
console.log(charCodeArr)
var b = parseInt(charCodeArr)+22092022
console.log(b);


var x = document.getElementById("birth").value
console.log(x);

var dateChanged= x.split("-").join("");
console.log(dateChanged)


var z = parseInt(dateChanged)+ 25092022
console.log(z)


document.getElementById("code").innerHTML= b+z








}


