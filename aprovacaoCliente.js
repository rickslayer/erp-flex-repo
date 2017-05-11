$(function(){
    aprovaOrcamento();
});

function aprovaOrcamento(){

    var status_aprovacao = $("#XXX_StatusAprov").val();
    var altera_pos_fat   = $("#cORCALTERAAPOSFAT").val();
    var XXX_SC5Faturado  = $("#XXX_SC5Faturado").val();
    var XXX_SC6Faturado  = $("#XXX_SC6Faturado").val();
    var APR_STATUS       = $("#APR_STATUS").val();
    var utiliza_engine   = $("#utiliza_engine").val();

    console.log(APR_STATUS);

    if((XXX_SC5Faturado == "S" || XXX_SC6Faturado == "S") && altera_pos_fat == "N" ) {

           alerta("Orçamento já faturado!");
       }
    if (utiliza_engine && APR_STATUS != 0){

            alerta("Orçamento aguardando liberação pelo processo de aprovação!");
    }

        else{


        if(status_aprovacao == '2'){

            botoes = [
                {
                    "title" : "Aprovado pelo Cliente",
                    "click" : function(event){
                        acao_aprova("1");
                    }
                },
                {
                    "title" : "Rejeitado pelo Cliente",
                    "click" : function(event){
                        acao_aprova("3");
                    }
                }
                ,
                {
                    "title" : "Cancelar",
                    "class" : "k-grid-cancel",
                    "click" : function(event){
                        $("#content").loading("show");
                        backToBrowse();
                    }
                }
            ];

            confirma_alerta("Aprovação do Cliente" , "Deseja mudar o Status do Orçamento?", botoes);
        }else
        {
            botoes = [
                {
                    "title" : "Sim",
                    "click" : function(event){
                        acao_aprova("2");
                    }
                },
                {
                    "title" : "Não",
                    "class" : "k-grid-cancel",
                    "click" : function(event){
                        $("#content").loading("show");
                        backToBrowse();
                    }
                }
            ];
            confirma_alerta("Aprovação do Cliente" , "Deseja realmente mudar o Status do orçamento para Aguardando Aprovação?", botoes);
        }

    }



}


function alerta (msg)
{
    var alert = new $.alert({
        width: 800,
        height : 300,
        title:"Alerta",
        message : msg,
        actions : [ "Close" ],
        buttons : [
            {
                "title" : "OK",
                "class" : "k-grid-cancel",
                "click" : function(e){
                    $("#content").loading("show");
                    backToBrowse();
                }
            }
        ]
    });
}

function confirma_alerta(titulo, msg , botoes){
    var alert = new $.alert({
        width: 800,
        height : 300,
        title:titulo,
        message : msg,
        actions : [ "Close" ],
        buttons : botoes
    });
}

function acao_aprova(status){
    var idSC5 = $("#idSC5").val();
    oData = new Object();
    oData.status = status;
    oData.idSC5  = idSC5;
    var transport = new $.transport({
        url: "/erp/lancamentos/orcamento/aprova_cliente",
        data: oData,
        method : "post",

        beforeSend: function(){
            $("#content").loading("show");
        }
    });

    var xhr = transport.ajax();
    xhr.done(function(resp) {

        $('.alert').text(resp.message);
        $("#content").loading("show");

        setTimeout(function(){
            backToBrowse();
        },700);

    });

}
