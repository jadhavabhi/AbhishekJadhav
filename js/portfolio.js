function validatePortfolio()
{
	var name=document.makeitown.name.value;
	var email=document.makeitown.email.value;
	var phone=document.makeitown.phone.value;
	var address=document.makeitown.address.value;
	var website=document.makeitown.website.value;
	var dob=document.makeitown.date.value;
	var atpos=email.indexOf('@');
	var dotpos=email.indexOf('.');
	if(name=="" || name==null)
	{
		alert("Name can't be blank");
		return false;
	}
	else if(email=="" || email==null || atpos<1 || atpos+2>dotpos || atpos+2>=email.length)
	{
		alert("Email is not valid");
		return false;
	}
	else{
		if(confirm("Click on OK to submit the form"))
		{
			
			var str=document.getElementById("name1").innerHTML;
			var txt=str.replace(str,name);
			document.getElementById("name1").innerHTML=txt;
			var str=document.getElementById("email1").innerHTML;
			var txt=str.replace(str,email);
			document.getElementById("email1").innerHTML=txt;
			var	str=document.getElementById("address1").innerHTML;
			var txt=str.replace(str,address);
			 document.getElementById("address1").innerHTML=txt;
			var str=document.getElementById("phno1").innerHTML;
			var txt=str.replace(str,phone);
			document.getElementById("phno1").innerHTML=txt;
			var str=document.getElementById("dob1").innerHTML;
			var txt=str.replace(str,dob);
			document.getElementById("dob1").innerHTML=txt;
			var str=document.getElementById("website1").innerHTML;
			var txt=str.replace(str,website);
			document.getElementById("website1").innerHTML=txt;
			document.getElementById("ownsite").style.display="none";
	return true;
		}
		else return false;
		
	}
}