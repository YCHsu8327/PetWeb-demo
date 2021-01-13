am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.colors.step = 2;  


    // Data for both series
    var data = [ 
    {"country":"鹽埕區","reg":1015,"hur":2174},
{"country":"鼓山區","reg":6054,"hur":17798},
{"country":"左營區","reg":8379,"hur":14905},
{"country":"楠梓區","reg":7703,"hur":14823},
{"country":"三民區","reg":13231,"hur":26149},
{"country":"新興區","reg":2069,"hur":4225},
{"country":"前金區","reg":1173,"hur":2723},
{"country":"苓雅區","reg":6440,"hur":19202},
{"country":"前鎮區","reg":6724,"hur":12529},
{"country":"旗津區","reg":973,"hur":1748},
{"country":"小港區","reg":5635,"hur":9854},
{"country":"鳳山區","reg":13309,"hur":27738},
{"country":"林園區","reg":2479,"hur":5937},
{"country":"大寮區","reg":4116,"hur":14598},
{"country":"大樹區","reg":1436,"hur":3657},
{"country":"大社區","reg":1404,"hur":2669},
{"country":"仁武區","reg":4054,"hur":8147},
{"country":"鳥松區","reg":1968,"hur":4233},
{"country":"岡山區","reg":3554,"hur":10708},
{"country":"橋頭區","reg":1819,"hur":3377},
{"country":"燕巢區","reg":1409,"hur":2850},
{"country":"田寮區","reg":371,"hur":1108},
{"country":"阿蓮區","reg":1164,"hur":2544},
{"country":"路竹區","reg":1471,"hur":2712},
{"country":"湖內區","reg":1028,"hur":2029},
{"country":"茄萣區","reg":867,"hur":1582},
{"country":"永安區","reg":556,"hur":1204},
{"country":"彌陀區","reg":655,"hur":1136},
{"country":"梓官區","reg":1301,"hur":2217},
{"country":"旗山區","reg":1511,"hur":3286},
{"country":"美濃區","reg":1766,"hur":4359},
{"country":"六龜區","reg":806,"hur":1834},
{"country":"甲仙區","reg":446,"hur":1117},
{"country":"杉林區","reg":689,"hur":1621},
{"country":"內門區","reg":697,"hur":2718},
{"country":"茂林區","reg":193,"hur":482},
{"country":"桃源區","reg":327,"hur":881},
{"country":"那瑪夏","reg":267,"hur":924}
     ];
        

     
    // Create axes
    var a = chart.xAxes.push(new am4charts.CategoryAxis());
    a.dataFields.category = "country";
    a.renderer.labels.template.rotation = 115;
    a.renderer.grid.template.location = 0;
    a.renderer.minGridDistance = 30;
    a.renderer.grid.template.disabled = true;
    a.renderer.fullWidthTooltip = true;

    
    var b = chart.yAxes.push(new am4charts.ValueAxis());
    b.title.text = "戶數";
    b.renderer.grid.template.disabled = true;
    


    var c = chart.yAxes.push(new am4charts.ValueAxis());
    c.title.text = "登記數";
    c.renderer.grid.template.disabled = true;
    c.renderer.opposite = true;  







// Create series
    var x = chart.series.push(new am4charts.ColumnSeries());
    x.id = "g1";
    x.dataFields.valueY = "reg";
    x.dataFields.categoryX = "country";
  
    x.yAxis = b;
    x.tooltipText = "{valueY}";
    x.name = "戶數";
    x.columns.template.fillOpacity = 0.7;

    var x1 = x.columns.template.states.create("hover");
    x1.properties.fillOpacity = 0.9;

    
    x.columns.template.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
    x.columns.template.propertyFields.fillOpacity = "fillOpacity";
    x.columns.template.propertyFields.stroke = "stroke";
    x.columns.template.propertyFields.strokeWidth = "strokeWidth";
    x.columns.template.propertyFields.strokeDasharray = "columnDash";
    x.tooltip.label.textAlign = "middle";











    
    var y = chart.series.push(new am4charts.LineSeries());
    y.id = "g3"
    y.dataFields.valueY = "hur";
    y.dataFields.categoryX = "country";
    y.yAxis = c;
    y.name = "登記數";
    y.strokeWidth = 3;
    y.tooltipText = "{valueY}";
    y.stroke = am4core.color("#fdd400");
    y.propertyFields.strokeDasharray = "lineDash";
    y.tooltip.label.textAlign = "middle";

    
    var y1 = y.bullets.push(new am4charts.Bullet());
    var y2 = y1.createChild(am4core.Circle);
    y1.horizontalCenter = "middle";
    y1.verticalCenter = "middle";
    y1.width = 7;
    y1.height = 7;
    y2.width = 7;
    y2.height = 7;

    y1.fill = am4core.color("#fdd400"); // tooltips grab fill from parent by default
    y1.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
    y2.radius = 4;
    y2.fill = am4core.color("#fff");
    y2.strokeWidth = 3;
    
    chart.data = data;

    var durationState = y1.states.create("hover");
    durationState.properties.scale = 1.2;



    // Add legend  
    chart.legend = new am4charts.Legend();


    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;  

    }); // end am4core.ready()