 const filterContainer = document.querySelector(".profolio-filter"),
       filterBtns = filterContainer.children,
       totalFilterBtn = filterBtns.length;
       profolioItems = document.querySelectorAll(".profolio-item");
       totalProfolioItems = profolioItems.length
 
for(let i=0;i<totalFilterBtn;i++){
    filterBtns[i].addEventListener("click",function(){
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterVAlue = this.getAttribute("data-filter")
        for(let k=0;k<totalProfolioItems;k++ ){
            if(filterVAlue === profolioItems[k].getAttribute("data-categoty")){
                profolioItems[k].classList.add("show");
                profolioItems[k].classList.remove("hide");

            }
            else{
                profolioItems[k].classList.add("hide");
                profolioItems[k].classList.remove("show");

            }
            if(filterVAlue ==='all'){
                profolioItems[k].classList.add("show");
                profolioItems[k].classList.remove("hide");
            }
        }
    })
}

//Profolio ligntbox

const lightbox = document.querySelector(".lightbox"),
      lightboxImg = lightbox.querySelector(".lightbox-img"),
      lightboxClose = lightbox.querySelector(".lightbox-close")
      lightboxText = lightbox.querySelector(".caption-text"),
      lightboxCounter =lightbox.querySelector(".caption-counter");
      let itemIndex = 0;

for(let i=0; i<totalProfolioItems;i++){
    profolioItems[i].addEventListener("click",function(){
        itemIndex = i;  
        changeItem();
        toggleLightbox()
  })
  function  nextItem(){
      if(itemIndex == totalProfolioItems-1){
          itemIndex = 0;
      }
      else{
        itemIndex++;
      }
      changeItem();
  }
  function  prevItem(){
    if(itemIndex === 0){
        itemIndex = totalProfolioItems-1;
    }
    else{
      itemIndex--;
    }
    changeItem();
}
  function toggleLightbox(){
    lightbox.classList.toggle("open") 
  }
   function changeItem(){
    imgSrc = profolioItems[itemIndex].querySelector(".profolio-img img").getAttribute('src')
    lightboxImg.src = imgSrc
    lightboxText.innerHTML = profolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalProfolioItems
 } 
}

//close lightbox

lightbox.addEventListener('click',function(event){
    if(event.target === lightbox || event.target === lightboxClose){
    toggleLightbox()
    }
})

/* //Aside Nav
const nav =document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection =allSection.length;
for(let i=0;i<totalNavList;i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click",function(){
        for(let j=0;j<totalNavList;j++){
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
    })
}
function showSection(element){
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active")
}
 */