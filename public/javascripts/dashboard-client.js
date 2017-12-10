$(function(){
	$('.gpio-checkbox').on('change', function(e){        
        var data = {};
        data.action = "write";
        data.gpio = $(this).data("gpio");
        data.status = this.checked;
        console.log(data);
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: window.location.href+'/a',						
            error: function(data) {
            alert("Error");
            }
        });
    });		
	
     //DIVS LOGIC SWITCH
     
     $('#TwojDomsidemenu').click(function(){		
		RefreshTwojDom();	
		 $('#TwojeUrządzenia').hide();
		 $('#PortyRasPi').hide();
		 $('#TwojDom').show();
		 $('#Ustawienia').hide();
		 return false;
		 
		 
      }); 
     $('#TwojeUrzadzeniasidemenu').click(function(){
		 RefreshTwojUrzadzenia()
		 $('#TwojDom').hide();
		 $('#PortyRasPi').hide();
		 $('#TwojeUrządzenia').show();
		  $('#Ustawienia').hide();
		 return false;
      });
     
     $('#PortyRasPisidemenu').click(function(){
		
		 $('#TwojDom').hide();
		 $('#TwojeUrządzenia').hide();
		 $('#PortyRasPi').show();
		  $('#Ustawienia').hide();
		 return false;
      });
      $('#Ustawieniasidemenu').click(function(){
		 $('#Ustawienia').show();
		 $('#TwojDom').hide();
		 $('#TwojeUrządzenia').hide();
		 $('#PortyRasPi').hide();
		 return false;
      });
	
    
     //Dodaj Pietro
     $('#btnDodajPietrojquery').click(function(){
		 data={};
		 data.query=$('#inputDodajPietro').val();
		 console.log(data.query);
		 $.ajax({			 
				type: 'POST',
				data: JSON.stringify(data),
				contentType: 'application/json',
				url: window.location.href+ '/setDodajPietro',						
				success: function(e) {		
				if(e){
					$('#DodajPietromodalbody').append(
					'<div class="alert alert-success" style="text-align:center">'+
					'<strong>Success!  </strong>Dodałeś pietro o nazwie '+ data.query +' do bazy danych'+
					'</div>');
					RefreshTwojDom();
				}else
				{
					$('#DodajPietromodalbody').append(
					'<div class="alert alert-danger" style="text-align:center">'+
					'<strong>Success!  </strong>Pietro o nazwie '+ data.query +' już istnieje'+
					'</div>');
				}
				
			}	
		//$('#ADDONY').append(WidgetUrzadzenia);
     });
 });
     $('#DodajPokojjquery').click(function(){
		 data={};
		 data.query1=$('#inputDodajPokoj').val();
		 data.query2=$('#SETPietroo').text();
		 console.log(data.query2);
		  console.log(data.query1);
		 $.ajax({			 
				type: 'POST',
				data: JSON.stringify(data),
				contentType: 'application/json',
				url: window.location.href+ '/setDodajPokoj',						
				success: function(e) {
				if(e){
					$('#DodajPokojmodalbody').append(
					'<div class="alert alert-success" style="text-align:center">'+
					'<strong>Success!  </strong>Dodałeś pokój o nazwie '+ data.query1 +' do bazy danych'+
					'</div>');
				}else{
					$('#DodajPokojmodalbody').append(
					'<div class="alert alert-danger" style="text-align:center">'+
					'<strong>Success!  </strong>Pokój o podanej nazwie '+ data.query1 +' już istnieje'+
					'</div>');
				}
				}
			});		
		//$('#ADDONY').append(WidgetUrzadzenia);
     });
     
     
     
     
     
     //DODAJ URZĄDZENIE Wczytaj parametry
     $('#btnDodajurzadzenie').click(function(){     
		$.ajax({
				type: 'POST',
				contentType: 'application/json',
				url: window.location.href + '/getKategoriaUrzadzenia',						
				success: function(data) {
					console.log(data);
					ListaKategori(data);
				}
			});		
		$.ajax({
				type: 'POST',
				contentType: 'application/json',
				url: window.location.href + '/getListaPokoi',						
				success: function(data) {
					ListaPokoi(data);
					console.log(data);
				}
			});	
		//$('#ADDONY').append(WidgetUrzadzenia);
     });	
	 $('#GETListaKategori').on('click','li a',function(){
		var Kategoria=$(this).text();
		console.log(Kategoria);
		$('#SETKategoria').text(Kategoria);
		data={};
		data.a=	Kategoria;
		
		$.ajax({
				type: 'POST',
				data: JSON.stringify(data),
				contentType: 'application/json',
				url: window.location.href + '/getSpecDEV',						
				success: function(e) {
					
					ListaSPECYFIKACJI(e)
					
				}
			});	
			return false;
	 });
	//DODAJ POKOJ Wczytaj parametry
	 $('#btnDodajPokoj').click(function(){     
		$.ajax({
				type: 'POST',
				contentType: 'application/json',
				url: window.location.href + '/getListaPieter',						
				success: function(data) {
					ListaPieter(data);
					console.log(data);
				}
			});		
			
		//$('#ADDONY').append(WidgetUrzadzenia);
     });	
	 $('#GETListaPieter').on('click','li a',function(){
		var Kategoria=$(this).text();
		console.log(Kategoria);
		$('#SETPietroo').text(Kategoria);
		return false;
	 });
	 $('#GETListaPokoi').on('click','li a',function(){
		var Kategoria=$(this).text();
		console.log(Kategoria);
		$('#SETPokoj').text(Kategoria);
		return false;
	 });
   
    $('#GETListaPORT3').on('click','li a',function(){
		var Kategoria=$(this).text();
		console.log("XX");
		$('#SETListaPORT3').text(Kategoria);
		return false;
		
	 });
	 $('#GETListaPORT4').on('click','li a',function(){
		var Kategoria=$(this).text();
		console.log(Kategoria);
		$('#SETListaPORT4').text(Kategoria);
		return false;
	 });
	  $('#GETListaPORT5').on('click','li a',function(){
		var Kategoria=$(this).text();
		console.log(Kategoria);
		$('#SETListaPORT5').text(Kategoria);
		return false;
	 });
	  $('#GETListaPORT6').on('click','li a',function(){
		var Kategoria=$(this).text();
		console.log(Kategoria);
		$('#SETListaPORT6').text(Kategoria);
		return false;
	 });
});

function RefreshTwojDom()
{	
	$('#PietraPokoje').empty();
	var pokoje=[];
	var pietra=[];
	$.ajax({
				type: 'POST',
				contentType: 'application/json',
				url: window.location.href + '/getListaPieter',						
				success: function(data) {
					pietra=data;
					data={};
					for(i=0;i<pietra.length;i++)
					{
						data.a=String(pietra[i].NAZWAPIETRA);
						$.ajax({
							type: 'POST',	
							contentType: 'application/json',
							data: JSON.stringify(data),
							url: window.location.href + '/getListaPokoiWidget',						
							success: function(data) {
								
							$('#PietraPokoje').append(WidgetPietra(data));
							}
						});
					}
				}
			});	
			
			
				
			
}

function RefreshTwojUrzadzenia()
{	

	//$('#Urzadzeniawigety').empty();
	var pokoje=[];
	var pietra=[];
	$.ajax({
				type: 'POST',
				contentType: 'application/json',
				url: window.location.href + '/getKategoriaUrzadzenia',						
				success: function(e) {
					data={};
					for(i=2;i<4;i++)
					{
						data.a=String(e[i].Nazwa);
						$.ajax({
							type: 'POST',	
							contentType: 'application/json',
							data: JSON.stringify(data),
							url: window.location.href + '/getListaUrzadzen',						
							success: function(data) {
							console.log(data);
							//WidgetUrzadzenia(data);
							}
						});
					}
					 $
				}
			});	
}			


function ListaSPECYFIKACJI(a)
{

	$.ajax({
				type: 'POST',
				data: JSON.stringify(data),
				contentType: 'application/json',
				url: window.location.href + '/getPortList',						
				success: function(e) {		
					$('#DEVSEPC').empty();
					ListaPort(e,a);
					
					
					
				}
			});	
	
}
function ListaPort(x,a)
{	

	var t2='';
	for(var i=0;i<x.length;i++) { t2=t2 +'<li> <a href="javascrip:void(0)">'+x[i].NAZWA + '</a> </li> ';}
	for(var i=3;i < a.length;i++)
					{
						txt='<div class="form-inline">'+
							'<span  style="float:left" >'+'</span>	'+
							'<span  style="float:left" >'+ a[i].Field +'</span>	'+
							'<div class="btn-group ">'	+					 
							'<button class="btn btn-default "id="SETListaPORT'+i+'">'+
							'brak'+
							'</button> '+
							'<button data-toggle="dropdown" class="btn btn-default dropdown-toggle">'+
							'<span class="caret"></span>'+
							'</button>'+
							'<ul class="dropdown-menu" id="GETListaPORT'+i+'">'+				
							'</ul>'+
							'</div>	'	+						
							'</div>';
					$('#DEVSEPC').append(txt);
					$('#GETListaPORT'+i).append(t2);	
					}
					

}

function ListaKategori(a){
         $('#GETListaKategori').empty();
         var txt='';
         for (var j = 0; j < a.length; j++){
						txt=txt+'<li> <a href="javascrip:void(0)">' +a[j].Nazwa+ '</a> </li> ';}
		$('#GETListaKategori').append(txt);
} ;  
function ListaPieter(a){
         $('#GETListaPieter').empty();
         var txt='';
         for (var j = 0; j < a.length; j++){
						txt=txt+'<li> <a href="javascrip:void(0)">' +a[j].NAZWAPIETRA+ '</a> </li> ';}
			$('#GETListaPieter').append(txt);	
} ;      
function ListaPokoi(a){
         $('#GETListaPokoi').empty();
         var txt='';
         for (var j = 0; j < a.length; j++){
						txt=txt+'<li> <a href="javascrip:void(0)">' +a[j].NAZWAPOKOJU+ '</a> </li> ';}
			$('#GETListaPokoi').append(txt);	
} ;                                            
function WidgetPietra(a){
	console.log(a);
	var pok='0';
	axn='';
	 //<div class="panel panel-primary" style="background-color:#'+ ((1<<24)*Math.random()|0).toString(16)+'">'
	for(var i=0;i<a.length;i++){ axn=axn+'<br>'+ a[i].NAZWAPOKOJU;}
	
	if(a[0].NAZWAPOKOJU==null){ pok='0' }else{ pok=String( a.length);}
	var x= '<div class="col-lg-3 col-md-6">'+
         '           <div class="panel panel-primary" >'+
         '               <div class="panel-heading" style="background-color:pink !important">'+
         '                   <div class="row">'+
         '                       <div class="col-xs-4">'+
         '                           <i class="fa fa-cog fa-5x fa-spin"></i>'+
         '                       </div>'+
         '                       <div class="col-xs-8 text-right" style="overflow:hidden">'+
         '                           <div class="huge" >' +a[0].NAZWAPIETRA+'</div>'+
         '                           <div>POKOJE:' + pok+'</div>'+
         '                       </div>'+
         '                   </div>'+
         '               </div>'+
         '               <a href="#'+(a[0].NAZWAPIETRA).replace('?','x')+'" data-toggle="modal" role="button">'+
         '                   <div class="panel-footer">'+
         '                       <span class="pull-left">View Details</span>'+
         '                       <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>'+
         '                       <div class="clearfix"></div>'+
         '                   </div>'+
         '                </a>'+
		 '					<div class="modal fade" id="'+(a[0].NAZWAPIETRA).replace('?','x')+'" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
		 '						<div class="modal-dialog">'+
		 '							<div class="modal-content">'+
		 '								<div class="modal-header">'+
		 '									<h4 class="modal-title" id="myModalLabel">'+
		                                  a[0].NAZWAPIETRA+
		 '									</h4>'+
		 '								</div>'+
		 '								<div class="modal-body">Pokoje:'+
		 								
										axn
		 '								</div>'+
		 '								<div class="modal-footer">'+
		 '									<button type="button" class="btn btn-default" data-dismiss="modal">'+
		 '										Close'+
		 '									</button> '+
		 '								</div>'+
		 '							</div>'+
		 '						</div>'+
		 '					</div>   '+   
         '            </div>'+
         '       </div>';
         return x;
}


function WidgetUrzadzenia(a){

for(var i=0;i<a.length;i++)
{
var WidgetUrzadzenia=[
		'<div class="col-lg-3 col-md-6">',
         '           <div class="panel panel-primary">',
         '               <div class="panel-heading" style="background-color:pink !important">',
         '                   <div class="row">',
         '                       <div class="col-xs-3">',
         '                           <i class="fa fa-cog fa-5x fa-spin"></i>',
         '                       </div>',
         '                       <div class="col-xs-9 text-right pull-right">',
                     '<input class="gpio-checkbox" data-toggle="toggle" data-onstyle="success" data-offstyle="danger" type="checkbox" data-gpio="14">',
         '                           <div>'+a[i].NAZWAURZADZENIA +'</div>',
         '                       </div>',
         '                   </div>',
         '               </div>',
         '               <a href="#modal-container-642461" data-toggle="modal" role="button">',
         '                   <div class="panel-footer">',
         '                       <span class="pull-left">View Details</span>',
         '                       <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>',
         '                       <div class="clearfix"></div>',
         '                   </div>',
         '                </a>',
		 '					<div class="modal fade" id="modal-container-642461" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">',
		 '						<div class="modal-dialog">',
		 '							<div class="modal-content">',
		 '								<div class="modal-header">',
		 '									<h4 class="modal-title" id="myModalLabel">',
		 '										Modal title',
		 '									</h4>',
		 '								</div>',
		 '								<div class="modal-body">',
		 '									...',
		 '								</div>',
		 '								<div class="modal-footer">',
		 '									<button type="button" class="btn btn-default" data-dismiss="modal">',
		 '										Close',
		 '									</button> ',
		 '								</div>',
		 '							</div>',
		 '						</div>',
		 '					</div>   ',  
         '            </div>',
         '       </div> '].join('\n');
         
        $('#Urzadzeniawigety').append(WidgetUrzadzenia);
      
 
	 }
      
}
