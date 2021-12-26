var types =[
    {
        "img":"/Pictures/testimonial.png",
        "name":"John Doe",
        "role":"Softwere Engineer",
        "content":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
    },
    {
        "img":"/Pictures/testimonial.png",
        "name":"John Doe",
        "role":"Softwere Engineer",
        "content":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
    },
    {
        "img":"/Pictures/testimonial.png",
        "name":"John Doe",
        "role":"Softwere Engineer",
        "content":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
    },
    {
        "img":"/Pictures/testimonial.png",
        "name":"John Doe",
        "role":"Softwere Engineer",
        "content":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
    }
    
    
]
var pedBM;
var aduBM;
console.log(JSON.stringify(types))
var len = types.length;
for(var i=0;i<=len;i++){
    document.getElementById("testimonials").innerHTML=document.getElementById("testimonials").innerHTML+"<div class='testimonial "+i+"'>"+
    "<div class='testimonialFirstPart'>"+
    "<img src='"+types[i].img+"'>"+
    "<div class='testimonialinfo'>"+
    "<p class='testimonialName "+i+"'>"+types[i].name+"</p>"+
    "<p class='testimonialRole "+i+"'>"+types[i].role+"</p>"+
    "</div>"+
    "<img src='/Pictures/doublequotes.png'>"+
    "</div>"+
    "<p class='testimonialContent "+i+"'>"+types[i].content+"</p>"+
   "</div>";    
}