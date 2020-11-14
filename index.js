let bars = document.getElementById('bars');
let slider = document.querySelector(".navbar");
let sliderTexts = document.querySelectorAll('.nav-links');
let profileImage = document.querySelector(".profile-image");
let socialIcons = document.querySelector(".social-icons");
bars.addEventListener("click", (s)=>{
   s.preventDefault();
  slider.classList.toggle('is-active');
  profileImage.classList.toggle("rmv");
  for (let i = 0; i < sliderTexts.length; i++) {
    if(sliderTexts[i].style.display == "none"){
        sliderTexts[i].style.display = "";
    }else{
        sliderTexts[i].style.display = "none";
    }
  }
  for (let x = 0; x < document.querySelectorAll("#social-icons").length; x++) {
    if(socialIcons.style.display == "flex"){
        socialIcons.style.display = "flex";
    }
    if(socialIcons.style.flexDirection == "column"){
        socialIcons.style.flexDirection = "row";
        socialIcons.style.paddingBottom = "30px";
    }
    else{
        socialIcons.style.flexDirection = "column"
        socialIcons.style.paddingBottom = "30px";
    }
    document.querySelectorAll("#social-icons")[x].style.marginTop = "15px";
    document.querySelectorAll("#social-icons")[x].style.marginLeft = "25px";
  }
});