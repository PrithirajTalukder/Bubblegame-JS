 var rect = document.querySelector("#center");
 rect.addEventListener("mousemove", function(details){

    var rectanglelocation = rect.getBoundingClientRect();
    var insideval = details.clientX - rectanglelocation.left;

    if (insideval < rectanglelocation.width/2){
        
        var redcolor = gsap.utils.mapRange(
            0, rectanglelocation.width/2, 255, 0, insideval
        );

        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: Power4,
        } )

    }else{
         var bluecolor = gsap.utils.mapRange(
            rectanglelocation.width/2, rectanglelocation.width, 0, 255, insideval
        );

        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${bluecolor})`,
            ease: Power4,
        } )


    }

    
 })

 rect.addEventListener("mouseleave", function(){
    gsap.to(rect,{
        backgroundColor: "white",
    })
 })
   
 
 
 
 
