$("document").ready(function(){
    $.ajax({
        url : 'https://raw.githubusercontent.com/b0909182697/YC/master/YC/Iccnet/Web/JSON/%E5%85%A8%E5%8F%B0%E5%AF%B5%E7%89%A9%E9%81%BA%E5%A4%B1%E6%B8%85%E5%96%AE.json',
        type : "get",
        dataType : "json",
        
        success : function(fd){
            for(i=0;i<fd.length;i++)
            {
                        $("#row").append(
                            '<tr>'+
                            '<td>'+(i+1)+'</td>'+
                            '<td>'+fd[i].晶片號碼+'</td>'+
                            '<td>'+fd[i].寵物別+'</td>'+
                            '<td>'+fd[i].遺失時間+'</td>'+
                            '<td>'+fd[i].連絡電話+'</td>'+
                            '</tr>'
                        )
            }
        }
    });
});