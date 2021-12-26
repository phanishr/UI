var types =[
    {
        "question" : "What are the conditions that requireBone Marrow Transplant?",
        "answer":"BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain  genetic metabolic disorders."+ 
        "It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas"
      },
      {
        "question" : "Which are the hematological diseases that may benefit from bone marrow transplants?",
        "answer":""
      },
      {
        "question" : "Which are the Cancers that may benefit from bone marrow transplants?",
        "answer":""
      },
      {
        "question" : "Do bone marrow failure syndromes require BMT?",
        "answer":""
      },
      {
        "question" : "What are Primary Immune Deficiency diseases ?",
        "answer":""
      },
      {
        "question" : "Which are the immune deficiencies that warrant BMT?",
        "answer":""
      },
      {
        "question" : "What makes transplants at Aster CMI unique?",
        "answer":""
      }
      
    
    
];
function toggle(elementId) {
    var ele = document.getElementById(elementId);
    console.log("clicked"+elementId);
    if(ele.style.display == "block") {
            ele.style.display = "none";
    }
    else {
        ele.style.display = "block";
    }
} 
var pedBM;
var aduBM;
console.log(JSON.stringify(types))
var len = types.length;
for(var i=0;i<=len;i++){
    document.getElementById("questions").innerHTML=document.getElementById("questions").innerHTML+"<div class='question "+i+"' onClick=toggle('answer"+i+"')>"+
    "<p class='question'>"+types[i].question+"<i class='fa fa-chevron-circle-down' aria-hidden='true'></i></p>"+
   "<p style='display:none' id='answer"+i+"' class='answer"+i+"'>"+types[i].answer+"</p>"+
   "</div>"; 
      
}