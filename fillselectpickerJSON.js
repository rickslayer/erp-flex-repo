 $(function(){
                                setTimeout(function(){
                                var call = callJSON('/erp/cadastros/clientes/data');
                                call.done(function(ret){

                                    if(ret.data.length > 0){
                                        $('#testeLabel').empty();
                                        var title = $('<span>').addClass("nomeCampo").text("testessssssssssssss:");
                                        $('#testeLabel').append(title);

                                        var clientes = $('<select>').attr({name:"teste",id:"teste"}).addClass('selectpicker form-control mtd-in');
                                        var options = $("<option>").text("-- Selecione --").val("");
                                        $(clientes).append(options);

                                        $.each(ret.data, function(){
                                            var options = $("<option>").text(this.SA1_Desc).val(this.SA1_ID);
                                            $(clientes).append(options);
                                        });

                                        $('#testeLabel').append(clientes);
                                        $('#testeLabel').show();

                                        $('#teste').selectpicker({liveSearch:true});

                                    }
                               

                                });
                                },500);
                            });
