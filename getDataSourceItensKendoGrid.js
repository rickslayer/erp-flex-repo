  dataBound : function(e){
           * var linha = this;
             linha.tbody.find('>tr').each(function(){
             var dataItem = linha.dataItem(this);
             console.log(dataItem);
             }) ;
