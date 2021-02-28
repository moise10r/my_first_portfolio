const links = document.querySelectorAll(".alternate-style"),
      totalLinks = links.length;
function setAtiveStyle(color){
    for(let i=0;i<totalLinks;i++){
        if(color === links[i].getAttribute("title")){
            links[i].removeAttribute("disabled")
        }
        else{
            links[i].setAttribute("disabled","true");
        }
    }
}
const bodySkin = document.querySelectorAll(".body-skin"),
      totalBodySkin =bodySkin.length;
      for(let i=0;i<totalBodySkin;i++){
          bodySkin[i].addEventListener("change",function(){
            if(this.value === "dark"){
                document.body.className="dark";
            }
            else{
                document.body.className="";

            }
          })
      }
document.querySelector(".toggle-style-switcher").addEventListener("click",function(){
    document.querySelector(".style-switcher").classList.toggle("open");
})