const share_button = document.querySelector('.share_button');
 const small_btn = document.querySelector('.small-btn');
 const sharebtn = document.querySelector('.share_button-1');

 var bool = 0;

share_button.addEventListener('click', () =>{
     bool = !bool;
     if(bool == 1){
        small_btn.style.display = "flex";
        sharebtn.style.display = "block";
        console.log("done");
     }else{
        small_btn.style.display = "none";
         console.log("Not done");
     }
});
 
function visualViewport(){
      small_btn.style.display = "none";
}