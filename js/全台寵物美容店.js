$("document").ready(function(){
    $.ajax({
        url : 'https://raw.githubusercontent.com/b0909182697/YC/master/YC/Iccnet/Web/JSON/%E5%85%A8%E5%8F%B0%E5%AF%B5%E7%89%A9%E7%BE%8E%E5%AE%B9%E5%BA%97.json',
        type : "get",
        dataType : "json",
        
        success : function(fd){
            for(i=0;i<fd.length;i++)
            {
                        $("#row").append(
                            '<tr>'+
                            '<td>'+(i+1)+'</td>'+
                            '<td>'+fd[i].legalname+'</td>'+
                            '<td>'+fd[i].animaltype+'</td>'+
                            '<td>'+fd[i].bos_name+'</td>'+
                            '<td>'+fd[i].legaladdress+'</td>'+
                            '</tr>'
                        )
            }
        }
    });
});