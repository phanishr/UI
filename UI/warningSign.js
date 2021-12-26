var types =[
    {
        "sign" : "Failure to thrive – not gaining weight and height as per the age norms",
        "img":"/Pictures/1.png"
      },
      {
        "sign" : "Infections warranting multiple hospitalizations",
        "img":"/Pictures/2.png"
      },
      {
        "sign" : "Requirement of intravenous antibiotics to clear infections",
        "img":"/Pictures/3.png"
      },
      {
        "sign" : "2 or more episodes of pneumonia",
        "img":"/Pictures/4.png"
      },
      {
        "sign" : "Family history of death of children at young age due to immune deficiency ",
        "img":"/Pictures/5.png"
      },
      {
        "sign" : "Repeated episodes of diarrhea",
        "img":"/Pictures/6.png"
      },
      {
        "sign" : "2 or more episodes of sinus infections within a year",
        "img":"/Pictures/7.png"
      },
      {
        "sign" : "2 or more episodes of ear discharge",
        "img":"/Pictures/8.png"
      },
      {
        "sign" : "Repeated skin infections",
        "img":"/Pictures/9.png"
      },
      {
        "sign" : "Repeated abscess formation (liver abscess, brain abscess)",
        "img":"/Pictures/10.png"
      }
    
    
]
var pedBM;
var aduBM;
console.log(JSON.stringify(types))
var len = types.length;
for(var i=0;i<=len;i++){
    document.getElementById("warningSign").innerHTML=document.getElementById("warningSign").innerHTML+"<div class='warningSign "+i+"'>"+
    "<img src='"+types[i].img+"'>"+
    "<br>"+
    "<p class='warningCont'>"+types[i].sign+"</p>"+
   "</div>";    
}