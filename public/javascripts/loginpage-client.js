$(function(){		
    $('.h').on('click', function(e){        
        data={};
        data.render='renderafterlogin';
        //Login();    Nie działa to gówno z globalami   
			$.ajax({
				type: 'GET',
				data: JSON.stringify(data),
				contentType: 'application/json',
				url: '/dashboard',						
				success: function(data) {
				window.location="http://localhost:9000/dashboard";
				}
			});		
    });	
    var h=document.getElementById('1');
    h.textContent= "Hello";
    function Login()
	{
		var login=document.getElementById('login').value;
		var haslo=document.getElementById('haslo').value;
		var data ={};
		data.login=login;
		data.haslo=haslo;
		$.ajax({
				type: 'POST',
				data: JSON.stringify(data),
				contentType: 'application/json',
				url: '/log',						
				success: GlobalLogin	
        });     
	}	
	 function GlobalLogin(tmp)
	{
		//*window['id=2;
		 //idLog.id=tmp[0].id;
		// refidLog.id=2;
		 console.log('asdadas');
	}
	
	
   
});

