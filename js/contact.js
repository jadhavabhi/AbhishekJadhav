function validateform()
{
	var name=document.contact_form.name.value;
	var email=document.contact_form.email.value;
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
			console.log("Form submitted");
			return true;
		}
		else return false;
		
	}
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("showme");
}
function myFun()
{
document.getElementById("ownsite").style.display="block";
}