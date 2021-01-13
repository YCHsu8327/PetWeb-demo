$("document").ready(function(){
    $.ajax({
        url : 'https://raw.githubusercontent.com/b0909182697/YC/master/YC/Iccnet/Web/JSON/%E6%AF%9B%E5%B0%8F%E5%AD%A9%E8%AA%B2%E7%A8%8B%E5%8F%83%E5%8A%A0%E4%BA%BA%E6%95%B8%E6%B8%85%E5%96%AE.json',
        type : "get",
        dataType : "json",
        
        success : function(fd){
            for(i=0;i<fd.length;i++)
            {
                        $("#row").append(
                            '<tr>'+
                            '<td>'+(i+1)+'</td>'+
                            '<td>'+fd[i].date+'</td>'+
                            '<td>'+fd[i].subject+'</td>'+
                            '<td>'+fd[i].nums+'</td>'+
                            '</tr>'
                        )
            }
        }
    });
});