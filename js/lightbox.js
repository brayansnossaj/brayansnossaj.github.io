const images = document.querySelectorAll('.img-of-gallery')
const image_light = document.querySelector('.image-light')
const add_image= document.querySelector(".add-image")
const close= document.querySelector(".close")

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        appear_image(image.getAttribute('src'));
    })
})

image_light.addEventListener('click', (e)=>{
    if( e.target == close){
        image_light.classList.toggle("show");
        add_image.classList.toggle("show-image")  
    }
})

const  appear_image= (image)=>{ 
    add_image.src= image;  
    image_light.classList.toggle("show");
    add_image.classList.toggle("show-image")    
}
