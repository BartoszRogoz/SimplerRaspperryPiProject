$(function(){				
    $('.h').on('click', function(e){        
        var data = {};
        data.action = "load";  
        $.ajax({
            type: 'GET',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: '/a',						
            success: function(data) {
				window.location="http://localhost:9000/a";
			}
          
        });
    });				
});
