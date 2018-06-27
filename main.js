function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  fun_career(data.career);
  fun_education(data.education);
  fun_achievements(data.achievements);
  fun_technicalskills(data.technicalskills);
});
var div2=document.getElementById("child2");

// career Info
function fun_career(careerObj){
  var careerHeading=document.createElement("h2");
  div2.appendChild(careerHeading);
  careerHeading.textContent="CAREER OBJECTIVE";
  var careerHr=document.createElement("hr");
  div2.appendChild(careerHr);
  var careerInfo=document.createElement("p");
  careerInfo.textContent=careerObj.info;
  div2.appendChild(careerInfo);
}



// Educational Info
function fun_education(edu){
  var h1=document.createElement("h2");
  h1.textContent="EDUCATIONAL QUALIFICATION";
  div2.appendChild(h1);
  var hr=document.createElement("hr");
  div2.appendChild(hr);
  var list=document.createElement("ul");
  div2.appendChild(list);
  for(var i=0;i<edu.length;i++){
  var listItem=document.createElement("li");
    listItem.textContent=edu[i].degree;
    list.appendChild(listItem);
    var listItem1=document.createElement("P");
    listItem1.textContent=edu[i].institute;
    list.appendChild(listItem1);
    var listItem2=document.createElement("P");
    listItem2.textContent=edu[i].Data;
    list.appendChild(listItem2);

  }
}
  function fun_achievements(achieve){
    var headingAchieve=document.createElement("h2");
    headingAchieve.textContent="Achievements";
    div2.appendChild(headingAchieve);
    var hr=document.createElement("hr");
   div2.appendChild(hr);
   var list=document.createElement("ul");
   div2.appendChild(list);
   for(var i=0; i<achieve.length; i++)
   {
     var listitem=document.createElement("li");
     listitem.innerHTML=achieve[i].name;
     list.appendChild(listitem);

   }


}
function fun_technicalskills(tech){
  var heading=document.createElement("h4");
  heading.textContent="Technical Skills";
  div2.appendChild(heading);
  var hr=document.createElement("hr");
  div2.appendChild(hr);
  var list=document.createElement("ul");
  div2.appendChild(list);
  var tr="";
  var table=document.createElement("table");
  table.border="1";
  div2.appendChild(table);
  for(var i=0;i<tech.length;i++){
    tr+="<tr><td>"+tech[i].name+"</td><td>"+tech[i].data+"</td></tr>"
  }
  table.innerHTML=tr;
  table.border="1";
}
