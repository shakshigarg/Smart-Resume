// function japi(api,fn) {
// 	var ourRequest=new XMLHttpRequest();
// 	ourRequest.open('GET',api,true);
// 	ourRequest.onload=fn;

// 	ourRequest.send();
// 	}
	function fun(details)
	{
		console.log(details);
		details.forEach(project_names);
	}
	var pn= document.getElementById("data");
	function project_names(item,index)
	{
		var j='<div class="main"><div class="m-1">'+item.fieldName+'</div><div class="m-2"><hr></div><div class="m-3">'+item.description+'</div></div>';
		pn.innerHTML=pn.innerHTML+j;
	}

$(document).ready(function(){
 
        $.getJSON("http://us-central1-hackathon-692e4.cloudfunctions.net/api/getPersonalData", 
        {
        	rollNo: 11610171
        }
        	,function(result){
            fun(result);       
    });
});

// function fun(result){
	
//     alert(result.id);

// }