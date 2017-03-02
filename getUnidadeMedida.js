function getDadosUM(idSB1){	
	
			var call = callJSON("/erp/lancamentos/orcamento/getUnidadeMedida", {idSB1:idSB1});
			call.done(function(data)
				{
					Object.keys(data).forEach(function(key)
					  {
						  
						var value        = data[key];
						var codigoUM     = value.SB1_UM_ID;
						var descricaoUM  = value.SB1_UM_Codigo;							
						var attrHas      = $("#SC6_IDSB1_UMComercial").attr('data-id');
				
						if(!typeof attrHas !== typeof undefined && attrHas !== false)
							{
								$("#SC6_IDSB1_UMComercial").attr("data-id", codigoUM);
								$("#SC6_IDSB1_UMComercial").attr("value", descricaoUM);
							}
						});	
					});		
