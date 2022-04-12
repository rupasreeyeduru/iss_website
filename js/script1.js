
    
    
 function changeImage() {

        if (document.getElementById("imgClickAndChange").src == "https://www.iiit.ac.in/img/campus3.png") 
        {
            document.getElementById("imgClickAndChange").src="https://www.iiit.ac.in/img/campus1.png";
            document.getElementById("imgClickAndChange").alt="pic2";
        }
        else if(document.getElementById("imgClickAndChange").src =="https://www.iiit.ac.in/img/campus1.png")
        {
            document.getElementById("imgClickAndChange").src="https://www.iiit.ac.in/img/campus2.png";
            document.getElementById("imgClickAndChange").alt="pic3";
        }
        else if(document.getElementById("imgClickAndChange").src =="https://www.iiit.ac.in/img/campus2.png")
        {
           document.getElementById("imgClickAndChange").src="https://www.iiit.ac.in/img/hostel1.png";
           document.getElementById("imgClickAndChange").alt="pic4";
        }
        else if(document.getElementById("imgClickAndChange").src=="https://www.iiit.ac.in/img/hostel1.png")
        { 
         document.getElementById("imgClickAndChange").src="https://www.iiit.ac.in/img/hostel2.png";
         document.getElementById("imgClickAndChange").alt="pic5";
        }
        else
        {
        document.getElementById("imgClickAndChange").src = "https://www.iiit.ac.in/img/campus3.png"; 
        document.getElementById("imgClickAndChange").alt="pic1";
        }
        }
    
    
    
    function Onmouseover(x){
 
 document.getElementById(x).style.color="blue";
 
 }
 function Onmouseout(x){
 
 document.getElementById(x).style.color="white";

 }
 
 var r=1;
var i=0;
var Names=[];
var Skills=[];
var Levels=[];

function AddResponse(){
   Names[i]=document.getElementById("name").value;
   Skills[i]=document.getElementById("skill").value;
   Levels[i]=document.getElementById("level").value;
   
   if(!Names[i]|!Skills[i])
   { alert("Please fill all required fields!!");
     return;}
   
   var Rtable=document.getElementById("response");
   var newrow=Rtable.insertRow(r);
   
   var Name=newrow.insertCell(0);
   var Skill=newrow.insertCell(1);
   var Level=newrow.insertCell(2);
   
   Name.innerHTML=Names[i]
   Skill.innerHTML=Skills[i];
   Level.innerHTML=Levels[i];
   r++;
   i++;
   
   
   
   }


 
 
 
 
   
