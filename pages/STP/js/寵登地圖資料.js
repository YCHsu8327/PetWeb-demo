var place_data=[
{
tag: "臺北市",
store: "212,392", //登記數
condo: "118,933", //戶數
},
{
tag: "新北市",
store: "270,550",
condo: "153,718",
},
{
tag: "桃園市",
store: "185,156",
condo: "100,281",
},
{
tag: "台中市",
store: "260,393",
condo: "127,990",
},
{
tag: "高雄市",
store: "241,143",
condo: "108,263",
},
{
tag: "台南市",
store: "147,916",
condo: "65,355",
}

];
var vm = new Vue({
el: "#app",
data: {
    filter: "",
    place_data: place_data,
    link: link
    },
computed: {
    now_area: function(){
    var vobj=this;
    var result=this.place_data.filter(function(obj){
        return obj.tag==vobj.filter;
        });
    if (result.length==0){
        return null;
        }
    return result[0];
    }
    }

});
$("path").mouseenter(function(e){
var tagname=$(this).attr("data-name");
vm.filter=tagname;

});
