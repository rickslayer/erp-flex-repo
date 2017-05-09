  /*   function geraOS()
	{
		var XXX_Tipo = $("#XXX_Tipo").val();
        var idSC2    = $("#idSC2").val();
      
		if (XXX_Tipo == "G")
    		{
	        	$("#mtd-save").remove();	
		        var btnGeraOS =	$('<button/>', {
	    		id : 'mtd-geraOS',
	    		class : 'btn btn-primary'				
			});
			    $('.topoVoltar fieldset').append(btnGeraOS);
                    if (idSC2 > 0)
                    {
                           btnGeraOS.append('<i class="fa fa-cogs" aria-hidden="true"></i> Estorna OS/OP');
                    }else
                    {
                           btnGeraOS.append('<i class="fa fa-cogs" aria-hidden="true"></i> Gera OS/OP');
                    }
			        btnGeraOS.click(function(){
                    	var window = new $.window();
                        window.setTitle("Atenção!");
                        var footer = $('<div/>',{
                            id : 'footerButtons',
	                        class : 'modal-footer'
                        });
                        $('<button/>',{
                            id: 'btnGeraOS',
                            class: 'btn btn-ok',
                            text: idSC2 > 0 ? "Sim" : "Gera Somente OP/OS"
                           
                        }).appendTo(footer).click(function(){
                                var dtEmissao = $("#SC5_Emissao").val(); 
                                var idSC5     = $("#SC5_ID").val();
                                
                                $.ajax({
                                    url: "/erp/lancamentos/orcamento/geraOrdens",
                                    data: {dtEmissao:dtEmissao,
                                           lGerarRequisicoes: false ,
                                           operacao: idSC2 > 0 ? "E" : "I",
                                           idSC5: idSC5    
                                    },                                    
                                    method: "post",
                                    dataType: "json",                        
                                    beforeSend:function(){

                                        $("#textGeracao").append('<div class="text-center"><img id="loading-img" src="http://kendo.cdn.telerik.com/2015.3.930/styles/Material/loading-image.gif"/></div>');
                                        $('#textGeracao').text('Processando...');
                                        $("#btnGeraOS").attr("disabled", true);
                                        $("#btnGeraRequisicao").attr("disabled", true);                                    
		                        	}
                                })
                                   .done(function (){
                                         $('#textGeracao').text('Gerado com sucesso');                                                                                                            
                                    })
                                   .complete(function(){

                                        $("#mtd-geraOS").attr("disabled", true);
                                        window.close();
                                        location.reload(true);
				                  
                                    })                                            
                             });
                             // Botão com Requisição

                          $('<button/>',{
                                id: 'btnGeraRequisicao',
                                class: idSC2 > 0 ? "hidden" : "btn btn-ok",
                                text: 'Gerar a OP/OS e Requisições',

                           }).appendTo(footer).click(function(){
                                
                                var dtEmissao = $("#SC5_Emissao").val(); 
                                var idSC5     = $("#SC5_ID").val();
                                
                                $.ajax({
                                    url: "/erp/lancamentos/orcamento/geraOrdens",
                                    data: {dtEmissao:dtEmissao,
                                           lGerarRequisicoes: true ,
                                           operacao: idSC2 > 0 ? "E" : "I",
                                           idSC5: idSC5    
                                    },
                                    method: "post",
                                    dataType: "json",
                                    beforeSend:function(){
                                        $("#textGeracao").append('<div class="text-center"><img id="loading-img" src="http://kendo.cdn.telerik.com/2015.3.930/styles/Material/loading-image.gif"/></div>');
                                        $('#textGeracao').text('Processando...');
			                        	$("#btnGeraOS").attr("disabled", true);
                                       	$("#btnGeraRequisicao").attr("disabled", true);
		                        	}
                                })
                                    .done(function (){
                                       $('#textGeracao').text('Gerado com sucesso');
                                     
                                    })
                                   .complete(function(){
                                    
                                      $("#mtd-geraOS").attr("disabled", true);
                                      window.close();
                                      location.reload(true);
				                    
                                    })                              
                        });

                            $('<button/>', {
                                id : 'btnCancelar',
                                text : 'Cancelar',
                                class : 'btn btn-ok'
                            }).appendTo(footer).click(function() {
                            
                                window.close();
       
                        	    });
                              if (idSC2 > 0)
                              {
                                window.add("<p id=\"textGeracao\">Deseja realmente excluir esta OP/OS?</p>");                              
                                }   
                            else
                                {
                              window.add("<p id=\"textGeracao\">Geração da Ordem de Produção/Ordem de Serviço e das Requisições para este Orçamento</p>");
                          }
                        window.add(footer);        
                        window.show();
			});
		}*/
