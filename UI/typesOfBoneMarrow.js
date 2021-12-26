var types =[
    {
        "question" : "Autologous Bone Marrow Transplant - Marrow cells are collected from the patient’s own body and transfused back after high dose chemotherapy. ",
      },
      {
        "question" : "Allogenic Bone Marrow Transplant (Matched Sibling Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched sibling donor. ",
      },
      {
        "question" : "Allogenic Bone Marrow Transplant (Matched Unrelated Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched donor obtained from bone marrow registries in India and abroad. ",
      },
      {
        "question" : " Haplo-Identical Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from the parent. ",
      },
      {
        "question" : "Umbilical cord Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched umbilical cord donor obtained from umbilical cord registries in India and abroad.",
      }
    
    
]
var pedBM;
var aduBM;
console.log(JSON.stringify(types))
var len = types.length;
for(var i=0;i<=len;i++){
    document.getElementById("boneMarrowTypes").innerHTML=document.getElementById("boneMarrowTypes").innerHTML+"<div class='boneMarrowType "+i+"'>"+
    "<i class='fa fa-plus-circle' aria-hidden='true'></i>"+
    "<p class='boneMarrowQns'>"+types[i].question+"</p>"+
   ""+
   "</div>";    
}