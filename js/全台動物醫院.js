$("document").ready(function(){
    $.ajax({
        url : 'https://raw.githubusercontent.com/b0909182697/YC/master/YC/Iccnet/Web/JSON/%E5%85%A8%E5%8F%B0%E5%8B%95%E7%89%A9%E9%86%AB%E9%99%A2.json',
        type : "get",
        dataType : "json",
        
        success : function(fd){
            for(i=0;i<fd.length;i++)
            {
                        $("#row").append(
                            '<tr>'+
                            '<td>'+(i+1)+'</td>'+
                            '<td>'+fd[i].機構名稱+'</td>'+
                            '<td>'+fd[i].負責獸醫+'</td>'+
                            '<td>'+fd[i].機構電話+'</td>'+
                            '<td>'+fd[i].機構地址+'</td>'+
                            '</tr>'
                        )
            }
        }
    });
});