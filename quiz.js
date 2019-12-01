function show()
{
	console.log("hello");

	document.getElementById("SH").style.display="block";
	document.getElementById("bs").style.display="none";
	document.getElementById("b").style.display="block";
	}
	function submit()
	{ 
		if(document.getElementById("7").checked==true)
        document.getElementById('result').innerHTML="correct"
    else
    	document.getElementById('result').innerHTML="incorrect"
	}