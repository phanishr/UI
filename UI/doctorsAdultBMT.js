var doctors =[
    {
        "role" : "Adult BMT",
        "name":"Dr. Vijay Agarwal",
        "edu":"MD, MRCP, PhD,CCT, Lead & Sr. Consultant - Medical Oncology & Haematology",
        "exp":"Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004. "
    },
    {
        "role" : "Adult BMT",
        "name":"Dr. Vijay Agarwal",
        "edu":"MD, MRCP, PhD,CCT, Lead & Sr. Consultant - Medical Oncology & Haematology",
        "exp":"Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004. "
    }
    
]
var pedBM;
var aduBM;
console.log(JSON.stringify(doctors))
var len = doctors.length;
for(var i=0;i<=len;i++){
    document.getElementById("doctorsAdult").innerHTML=document.getElementById("doctorsAdult").innerHTML+"<div class='doctor "+i+"'>"+
    "<img src='/Pictures/Bitmap Copy 8.png'/>"+
    "<p class='doctorName'>"+doctors[i].name+"</p>"+
    "<p class='doctorEdu'>"+doctors[i].edu+"</p>"+
    "<p class='doctorExp'>"+doctors[i].exp+"</p>"+
    "<input type='button' value='Know More'/>"+
   "<hr>"+
   "</div>";    
}