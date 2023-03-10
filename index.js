// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let piece = 0;
let count = document.getElementById("nike");
let errorpara = document.getElementsByClassName("error")[0];
let para = document.getElementById("ctitle");
let price = 149;

setInterval(msg=()=>{
    errorpara.textContent = "";
},4000);
msg();

setInterval(text=()=>{
    para.textContent = "";
},7000);
text();

purchase =()=>{
    if(piece == 0)
    errorpara.textContent = "Something went wrong, Add product";
    if(piece >=1){
        para.textContent = "Great! Your Order confirmed."
        alert("Do Payment");
        errorpara.textContent = "";
    }
    count.textContent = 0;
    piece = 0;
}
increment=()=>{
    piece++;
    let final = piece*price;
    count.textContent = "buy "+piece+" @ "+"$"+final;
    if(piece > 10){
        count.textContent = "buy "+ 10 +" @ "+"$"+10*149;
        piece = 10;
        errorpara.textContent = "There is only "+piece+" items"
    }
}
decrement=()=>{
    if(piece>=1){
        piece --;
        final = piece*price;
        count.textContent = "buy "+piece+" @ "+"$"+final;
    }
    if(piece <= 0){
        errorpara.textContent = "Add at least one"
    }
}