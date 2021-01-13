$(document).ready(function(){
    $('#keyword').val('波斯貓');
    $('#search').on('click',function(){
        var keyword = $('#keyword').val();
        var flickrAPI = 
        "http://api.flickr.com/services/feeds/photos_public.gne?tags=" +
        keyword + "&tagmode=any&format=json&jsoncallback=?";
    $.ajax({
        type:"GET",
        url:flickrAPI,
        dataType:"jsonp",
        jsonp:"callback",
        success:function(response) {
            var gallery = $('#gallery');
            gallery.html("");
            gallery.append('<table>');
            for (var i = 0; i<response.items.length;i++){
                var item = response.items[i];
                if (i % 2 == 0) {
                    gallery.append('<tr>');
                    gallery.append('<td>' +'<img src="' + item.media.m +'" title="' + item.title + '"height="100" width = "130"></td>');
                    }
                    else {
                        gallery.append('<td>' + '<img src="' + item.media.m + '"title="' + item.title + '"height="100" width="130"></td>');
                        gallery.append('</tr>');
                    }
                }
                gallery.append('</table>');
            },
            timeout:6000,
            error: function() {
                alert("錯誤: 無法完成 Ajax 請求..");
            }
    });
});
});