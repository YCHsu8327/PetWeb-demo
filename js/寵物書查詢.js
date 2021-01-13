$(document).ready(function() {
    $('#keyword').val('狗'); // 指定預設值
    $('#search').on('click', function () {
      // 取得輸入的關鍵字
      var keyword = $('#keyword').val();
      var googleAPI = "https://www.googleapis.com/books/v1/volumes?q=" +
                       keyword + "&maxResults=6&projection=lite";
      // 送出Ajax請求, 取得JSON 
      $.getJSON(googleAPI, function (response) {
          $("#result").empty();
          for (var i = 0; i < response.items.length; i++) {
              var item = response.items[i];
              var str = "<td>";
              str += "<img src='" + item.volumeInfo.imageLinks.thumbnail + "' width='60' height='80'>";
              str += "<p><b>書名: " + item.volumeInfo.title + "</b></p>";
              str += "<p>出版商: " + item.volumeInfo.publisher + "</p>";
              str += "<p>出版日: " + item.volumeInfo.publishedDate + "</p>";
              str += "</td>";
              $("#result").append(str);
          }
      });
   });    
}); 