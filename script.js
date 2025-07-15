


const tl = gsap.timeline()

tl.to(".yellow1",{
    y:"-100%",
    delay:.3
})

tl.to("video",{
    y:"-120%",
    delay:.9,
},"same").to(".header",{
    color:"black",
    display:"none",
    delay:.9
},"same",-1).to(".video",{
    display:"none",
    delay:.58,
    ease:"easeout" 
},"same").from("nav",{
    opacity:0
})


let elems = document.querySelectorAll('.elem')
let page2 = document.getElementById("page2")

elems.forEach((elem)=>{
    let back_img = elem.getAttribute("data-img")
    elem.addEventListener("mouseenter",()=>{
        page2.style.backgroundImage = `url(${back_img})`
    })
    elem.addEventListener("mouseleave",()=>{
        page2.style.backgroundColor = `black`
    })
})

console.log(elems);
const scroll = new LocomotiveScroll({
    el:document.querySelector('#main'),
    smooth:true,
    lerp:.05
})