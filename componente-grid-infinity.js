(function(factory) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
}(function($) {

    $.fn.gridInfinita = function (options) {

        var element = $(this);
        var gridInfinita = new $.grid();
        var toolBar = new $.toolbar();
        var settings =  $.extend({
              mtd   : "",
            colunas : ""
        }, options);


        var opcoes = ({
            scrollable: {
                virtual: false
            },
            serverFiltering: true,
            serverSorting: true,
            serverPaging: false,
            pageableRefresh : {
                refresh : true,
                pageSizes : true,
                buttonCount : 20
            },
            pageable: false,
            pageSize : false,
            editable: false,
            sortable: true,
            selectable: "multiple",
            footer: false

        });

        if (settings.colunas)
        {
             var columns = settings.colunas;
        }

        if (settings.mtd)
        {
        var mtd = gridInfinita.getMtd({
            mtd : settings.mtd
        });

        mtd.done(function(resp) {

            gridInfinita.setColumns(resp.columns);

            gridInfinita.setMethods(
                 {
                    read: {
                        url: resp.url + "/data",
                        type: "get",
                        dataType: "json"

                    }
                }

            );
         gridInfinita.setOptions(opcoes);

         $(element).append(gridInfinita.show({
                   element: element

                })
            );

         gridInfinita.setToolbar(settings.toolBar);
            return gridInfinita;
        });
        }

        else{

        var methods = (
            {
                read: {
                    url: "/erp/cadastros/tabelaspreco/getDataProduto/leProduto",
                    type: "get",
                    dataType: "json"

                }
            }
        );


        toolBar.add([
                {
                    name : "Adicionar Selecionados",
                    text : "Adicionar Selecionados",
                    className : "btnInsereMassa",
                    tag : "button",
                    layout : "toolbar",
                    id: "btnInsereMassa",
                    icon : "fa fa-check spaceIcon",
                    click: function(e){
                        e.preventDefault();
                        insereMassa();
                    }

                }

            ]);
        gridInfinita.setColumns(columns);
        gridInfinita.setMethods(methods);
        gridInfinita.setOptions(opcoes);
        gridInfinita.setToolbar(toolBar);


        $(element).append(gridInfinita.show({
                element: element

            })

        );

        return gridInfinita;


        }
        function insereMassa(){

            var window = new $.window();
            window.setTitle("Tabela de Preço");

            var content =  $('<div/>',{
                width: 500
            });
            window.add(content);
            window.add('<h3 class="text-center">Produtos inseridos com sucesso!</h3>');
            var footer = $('<div/>', {
                id : 'footerButtons',
                class : 'modal-footer'
            });
            $('<button/>', {
                id : 'btnConfirm',
                text : 'Fechar',
                class : 'btn btn-default'
            }).appendTo(footer);

            oData = new Object();
            var linha = gridInfinita.getItem();
            oData.linha = linha;

            $.ajax({
                url : "/erp/cadastros/tabelaspreco/insereMassa",
                data: oData,
                method : "post",
                dataType : "html",
                beforeSend:function() {
                    $("#content").loading("show");
                }
            })
                .done(function(){
                    $("#content").loading("hide");
                    window.add(footer);
                    window.show();

                    $("#btnConfirm").on("click", function(){

                        window.close();
                        $("#content").loading("show");
                        gridInfinita.read();
                        gridInfinita.refresh();
                        setTimeout(function(){
                            $("#content").loading("hide");
                        },3000);
                    });

                }) ;

        }
    }

}));
