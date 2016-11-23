$( document ).ready(function() {
	setTimeout(function()
	{
        $("#Excecoes_DT").on("change", function(){
		var dataInicial = $("#Excecoes_DT").val();
		if(!ValidaDate(dataInicial))
		{
			
				  $("#Excecoes_DT").addClass("validation-error shake");
		 		  $("#erro-dinamico").css('display', 'block');
				  $("#erroDatas").css('display', 'block');
				  $("#mtd-save").prop('disabled',true);
				  $("#mtd-save").attr("title", "Verifique formato das datas");
                  $("#Excecoes_DTF").prop('disabled',true);
                  $("#Excecoes_HI").prop('disabled',true);
                  $("#Excecoes_HF").prop('disabled',true);
							
		}else
			{
			 $("#mtd-save").prop('disabled',false);
		     $("#mtd-save").attr("title", "Salvar");
			 $("#Excecoes_DT").removeClass("validation-error shake");
             $("#Excecoes_DTF").prop('disabled',false);
             $("#Excecoes_HI").prop('disabled',false);
             $("#Excecoes_HF").prop('disabled',false);
             $("#erro-dinamico").css('display', 'none');
			 $("#erroDatas").css('display', 'none');
			}
			validaDataMaior();
					
});

$("#Excecoes_DTF").on("change", function(){
		var dataFinal = $("#Excecoes_DTF").val();
	
			if(!ValidaDate(dataFinal))
		{
				  $("#Excecoes_DTF").addClass("validation-error shake");
		 		  $("#erro-dinamico").css('display', 'block');
				  $("#erroDatas").css('display', 'block');
				  $("#mtd-save").prop('disabled',true);
				  $("#mtd-save").attr("title", "Verifique formato das datas");
                  $("#Excecoes_DT").prop('disabled',true);
                  $("#Excecoes_HI").prop('disabled',true);
                  $("#Excecoes_HF").prop('disabled',true);
		}
		else
			{
			 $("#mtd-save").prop('disabled',false);
		     $("#mtd-save").attr("title", "Salvar");
			 $("#Excecoes_DTF").removeClass("validation-error shake");
             $("#Excecoes_DT").prop('disabled',false);
             $("#Excecoes_HI").prop('disabled',false);
             $("#Excecoes_HF").prop('disabled',false);
             $("#erro-dinamico").css('display', 'none');
			 $("#erroDatas").css('display', 'none');
			}
			validaDataMaior();

});

$("#Excecoes_HI").on("change", function(){
		var horaInicial = $("#Excecoes_HI").val();
	
		if(!ValidaHora(horaInicial)){
			$("#Excecoes_HI").addClass("validation-error shake");
		    $("#erro-dinamico").css('display', 'block');
			$("#mtd-save").prop('disabled',true);
			$("#mtd-save").attr("title", "Verifique formato da hora");
	        $("#erroHoras").css('display', 'block');
            $("#Excecoes_DT").prop('disabled',true);
            $("#Excecoes_DTF").prop('disabled',true);
            $("#Excecoes_HF").prop('disabled',true);
		}
		else{
			 $("#mtd-save").prop('disabled',false);
		     $("#mtd-save").attr("title", "Salvar");
			 $("#Excecoes_HI").removeClass("validation-error shake");
             $("#Excecoes_DT").prop('disabled',false);
             $("#Excecoes_DTF").prop('disabled',false);
             $("#Excecoes_HF").prop('disabled',false);
             $("#erro-dinamico").css('display', 'none');
			 $("#erroDatas").css('display', 'none');
		}
			validaHoraMaior();
});
$("#Excecoes_HF").on("change", function(){
		var horaFinal = $("#Excecoes_HF").val();
		
		if(!ValidaHora(horaFinal)){
			$("#Excecoes_HF").addClass("validation-error shake");
		    $("#erro-dinamico").css('display', 'block');
			$("#mtd-save").prop('disabled',true);
			$("#mtd-save").attr("title", "Verifique formato da hora");
	        $("#erroHoras").css('display', 'block');
            $("#Excecoes_DT").prop('disabled',true);
            $("#Excecoes_DTF").prop('disabled',true);
            $("#Excecoes_HI").prop('disabled',true);
		}
		else{
			 $("#mtd-save").prop('disabled',false);
		     $("#mtd-save").attr("title", "Salvar");
			 $("#Excecoes_HF").removeClass("validation-error shake");
             $("#Excecoes_DT").prop('disabled',false);
             $("#Excecoes_DTF").prop('disabled',false);
             $("#Excecoes_HI").prop('disabled',false);
             $("#erro-dinamico").css('display', 'none');
			 $("#erroDatas").css('display', 'none');
		}
 		validaHoraMaior();

		 
});

}, 500);
	function ValidaHora(txtHora)
	{
		var currVal = txtHora;
		if(currVal == '')
		return false;

		var rxHour  =  /([01]\d|2[0-3]):([0-5]\d)/;
		var hrArray = currVal.match(rxHour);
		if (hrArray == null)
			return false;
		hr = hrArray[1];
		min = hrArray[2]; 

		if(hr > 24)
		return false;
		else if (min > 59){
		return false;
		}
		return true;
	}



	function ValidaDate(txtDate)
    {
    var currVal = txtDate;
    if(currVal == '')
        return false;
    
    var rxDatePattern =  /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/ ; 
    var dtArray = currVal.match(rxDatePattern); 
    if (dtArray == null) 
        return false;
	dtDay   = dtArray[1];	
    dtMonth = dtArray[2];
    dtYear  = dtArray[3];       

    
    if (dtMonth < 1 || dtMonth > 12) 
        return false;
    else if (dtDay < 1 || dtDay> 31) 
        return false;
    else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) 
        return false;
    else if (dtMonth == 2) 
    {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay> 29 || (dtDay ==29 && !isleap)) 
                return false;
    }
    return true;
}


function gerarData(str) {
    var partes = str.split("/");
    return new Date(partes[2], partes[1] - 1, partes[0]);
}
 function validaDataMaior(){
	 	var ldata ;
		var dataFinal = $("#Excecoes_DTF").val();
		var dataInicial = $("#Excecoes_DT").val();
		if (dataInicial.length != 10 || dataFinal.length != 10) return;

		if(gerarData(dataFinal) < gerarData(dataInicial)){

			ldata = false;
			      $("#Excecoes_DT").addClass("validation-error shake");
		 		  $("#erro-dinamico").css('display', 'block');
				  $("#erroDataMaior").css('display', 'block');
				  $("#mtd-save").prop('disabled',true);
				  $("#mtd-save").attr("title", "Data Inicial maior que a Data Final");
                  $("#Excecoes_DTF").prop('disabled',true);
                  $("#Excecoes_HI").prop('disabled',true);
                  $("#Excecoes_HF").prop('disabled',true);
		} else
		{
			ldata = true;
				$("#Excecoes_DT").removeClass("validation-error shake");
				$("#mtd-save").prop('disabled',false);
				$("#mtd-save").attr("title", "Salvar");
				$("#Excecoes_DTF").prop('disabled',false);
				$("#Excecoes_HI").prop('disabled',false);
				$("#Excecoes_HF").prop('disabled',false);
				$("#erro-dinamico").css('display', 'none');
				$("#erroDataMaior").css('display', 'none');
		
		}
 }
 function gerarHora(str) {
    var partes = str.split(":");
	return (partes[0] + partes[1]);
	
}
 	function validaHoraMaior(){
		var horaInicial = $("#Excecoes_HI").val();
		var horaFinal   = $("#Excecoes_HF").val();
		var dataFinal = $("#Excecoes_DTF").val();
		var dataInicial = $("#Excecoes_DT").val();
		var lHora;

	if(	gerarData(dataFinal) <= gerarData(dataInicial)){

		if (gerarHora(horaInicial) >= gerarHora(horaFinal)){

			lHora = true;
			$("#Excecoes_HI").addClass("validation-error shake");
		    $("#erro-dinamico").css('display', 'block');
			$("#mtd-save").prop('disabled',true);
			$("#mtd-save").attr("title", "Verifique hora inicial");
	        $("#erroHoraMaior").css('display', 'block');
            $("#Excecoes_DT").prop('disabled',true);
            $("#Excecoes_DTF").prop('disabled',true);
            $("#Excecoes_HF").prop('disabled',true);
		}
		else{
			
			lHora = false;
			 $("#Excecoes_HI").removeClass("validation-error shake");
			 $("#erro-dinamico").css('display', 'none');
			 $("#mtd-save").prop('disabled',false);
		     $("#mtd-save").attr("title", "Salvar");
			 $("#erroHoraMaior").css('display', 'none');
             $("#Excecoes_DT").prop('disabled',false);
             $("#Excecoes_DTF").prop('disabled',false);
             $("#Excecoes_HF").prop('disabled',false);
		}
			 return lHora;
	 }

}
});

