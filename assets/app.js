

// for(i=0; i<10; i++){
//      console.log("hello world");
//  }


// let arr = ["one","two","three"];
// console.table(arr);


//  let arr = ["one","two","three"];
//     arr.forEach(key =>{
//      console.log(key);
//     })


//  let arr = ["one","two","three"];
//     arr.forEach(key =>{
//      console.log(arr);
//     })


// let arr = ["one","two","three"];
//     console.log(arr.length);


// let arr = ["one","two","three"];
// let i;
// for(i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

let dec = document.querySelector(".dec");
let result = document.querySelector(".result");
let inc = document.querySelector(".inc");

inc.addEventListener("click", function(){
    
    if(result.value < 5){
        result.value = Number(result.value) + 1;
        
    }else{
        // inc.style.cursor = `not-allowed`
         alert("You have reached maximum limit")
    }
})

dec.addEventListener("click",()=>{

   if(result.value>1){
    result.value = Number(result.value) - 1
   }else{
    dec.style.cursor = `not-allowed`
   }

})


let range = document.querySelector(".range");
let contain = document.querySelector(".contain");
range.addEventListener("input", function(){
    let result = Number(range.value);
    contain.innerHTML = result;
})



