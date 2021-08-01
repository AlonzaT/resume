(() => {
  let gEl = (el) => document.querySelector(el)
  
  let holder = gEl(".holder");
  let zoom = gEl(".hov");
  let top = gEl(".topSection");
  let ina = gEl(".inner1");
  let v = gEl(".vhelp");
  let left = gEl(".section1");
  let right = gEl(".section2")//.getBoundingClientRect();
  let con = gEl(".section2");
  let inn = gEl(".inner3");
  let bottom = gEl(".bottomSection")//.getBoundingClientRect();
  
  //scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  console.log(top.getBoundingClientRect())
  console.log(bottom.getBoundingClientRect())
  
  window.addEventListener("scroll", () => {
    if(window.pageYOffset >  ina.getBoundingClientRect().top){
      //console.log("working")
      left.style.position = "fixed";
      left.style.top = "0";  
    } else if(window.pageYOffset < holder.getBoundingClientRect().top){
      left.style.position = "absolute";
    }
    if(window.pageYOffset > holder..getBoundingClientRect().bottom){
      left.style.position = "absolute";
    }
  })
  
  zoom.addEventListener("mouseover", function( event ) {   
    // highlight the mouseenter target
    event.target.style.transform = "scale(5)";

    // reset the color after a short delay
  //   setTimeout(function() {
  //     event.target.style.color = "";
  //   }, 500);
 });
})()
