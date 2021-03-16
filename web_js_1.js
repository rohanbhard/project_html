var cred=[
{
	username : "Ritik",
	password  : "dubey"
},
{
    username : "mohan",
	password  : "rawat"	
},
{
	username : "rohan",
	password  : "bhardwaj"
}
]

function getinfo()
{   
    
	var user=document.getElementById("username").value;
	var pass=document.getElementById("password").value;
   	for(let i=0;i< cred.length ;i++)
	{
		if(user==cred[i].username && pass==cred[i].password)
		{
			localStorage.setItem(user,pass)
			location.replace("home.html");

		}
    }
}

