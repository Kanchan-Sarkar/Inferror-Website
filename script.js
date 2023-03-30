var typingEffect = new Typed(".multiText",{
  strings : ["Android developer", "web developer", " Ui/Ux Designer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 200,
  backDelay: 2000,
})
/*
const myJsmedia = (widthSize) => {
  if(widthSize.matches){
    //var swiper = 
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      // autoplay:{
      //     delay: 3000,
      //     disableOnInteraction: false,
      // },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
    });
  
  }else{
    new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      // autoplay:{
      //     delay: 3000,
      //     disableOnInteraction: false,
      // },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
    });
  }
};
const widthSize = window.matchMedia("(max-width: 780px)");
widthSize(widthSize);
widthSize.addEventListener("change", myJsmedia);
*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay:{
      delay: 4000,
      disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// -------------------------------------- PROJECTS SECTION -------------------------------------- //

const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = () =>{ //once window loaded
    filterItem.onclick = (selectedItem) =>{
      if(selectedItem.target.classList.contains("item")){
        filterItem.querySelector(".activated").classList.remove("activated"); // removes the active class (in the 1st element)
        selectedItem.target.classList.add("activated");
        let filterName = selectedItem.target.getAttribute("data-name"); // gets data-name value of the user selected options
        //console.log(filterName);
        filterImg.forEach((image)=>{
          let filterImages = image.getAttribute("data-name"); // gets image data-name value
          //console.log(filterImages);
          if((filterImages == filterName) || filterName == "all"){
            image.classList.remove("hide");
            image.classList.add("show");
          }else{
            image.classList.add("hide");
            image.classList.remove("show");
          }
        });
      }
      for (let index = 0; index < filterImg.length; index++){
        filterImg[index].setAttribute("onclick", "preview(this)");
      }
      
    }
}

// const previewBox = document.querySelector(".preview-box"),
// previewImg = previewBox.querySelector("img"),
// categoryName = previewBox.querySelector(".title p"),
// closeIcon = previewBox.querySelector(".bx-x"),
// shadow = document.querySelector(".shadow");

function preview(element){
  //document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src;
  let selectedImgCategory = element.getAttribute("data-name"); // gets user clicked data-name value
  categoryName.textContent = selectedImgCategory; // passes the data-name value to category name var
  previewImg.src = selectedPrevImg;
  previewBox.classList.add("show"); // shows the preview box
  shadow.classList.add("show"); // shows the light gray background
  closeIcon.onclick = ()=>{
    previewBox.classList.remove("show"); // hides the preview box
    shadow.classList.remove("show"); // hides the light gray bg
    //document.querySelector("body").style.overflow = "scroll";
  }
}


//--------------------- active navigation link------------------------------//
let section= document.querySelectorAll(".target")
let navlink=document.querySelectorAll("ul a")
console.log(section);
console.log(navlink);
console.log("hii")
window.addEventListener('scroll',()=>{
  section.forEach(sec=>{
      let top=window.scrollY;
      let offset=sec.offsetTop-250;
      let height=sec.offsetHeight;
      let id=sec.getAttribute('id');
      if(top>= offset && top<offset + height){
          navlink.forEach(links=>{
              links.classList.remove('active')
              document.querySelector('ul a[href*=' +id +']').classList.add('active')
          })
      }

  })
})
//--------------------- active navigation link ends------------------------------//

//--------------------- scroll to top with progress------------------------------//
window.addEventListener('scroll',()=>{
  const scrollprogress=document.getElementById("progress");
  let pos=document.documentElement.scrollTop;
  let calcheight=document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollvalue=Math.round((pos*100)/calcheight)
  console.log(scrollprogress)

  if(pos>100){
      scrollprogress.style.display= "grid"
      
  }else{
      scrollprogress.style.display= "none"
  }
  scrollprogress.addEventListener('click',()=>{
      document.documentElement.scrollTop=0;
  })
  scrollprogress.style.background=`conic-gradient(#997aff ${scrollvalue}%,#d7d7d7 ${scrollvalue}%)`
})
//--------------------- scroll to top with progress ------------------------------//

//----------------------navbar onclick javascript code----------------------//
let menu = document.querySelector(".menu");
let leftportion=document.querySelector(".left-section")
let leftchild=document.querySelectorAll(".left-section a")
menu.addEventListener("click",()=>{
  if(leftportion.classList.contains('activeleft')){
    leftportion.style.transition='.7s';
    leftportion.classList.remove("activeleft")
  }
  else{
  leftportion.classList.add("activeleft")
  }
})
//----------------------navbar onclick javascript code ends----------------------//
