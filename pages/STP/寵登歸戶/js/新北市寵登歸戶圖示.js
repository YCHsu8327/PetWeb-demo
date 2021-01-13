am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.colors.step = 2;  


    // Data for both series
    var data = [ 
    {"country":"板橋區","reg":19537,"hur":34337},
{"country":"三重區","reg":13901,"hur":24247},
{"country":"中和區","reg":15501,"hur":26542},
{"country":"永和區","reg":7987,"hur":12880},
{"country":"新莊區","reg":15059,"hur":25186},
{"country":"新店區","reg":13104,"hur":23196},
{"country":"樹林區","reg":6638,"hur":11067},
{"country":"鶯歌區","reg":3063,"hur":5085},
{"country":"三峽區","reg":3989,"hur":6692},
{"country":"淡水區","reg":8352,"hur":14209},
{"country":"汐止區","reg":9722,"hur":18278},
{"country":"瑞芳區","reg":1356,"hur":2195},
{"country":"土城區","reg":9009,"hur":14580},
{"country":"蘆洲區","reg":7371,"hur":13093},
{"country":"五股區","reg":3721,"hur":6792},
{"country":"泰山區","reg":2717,"hur":4747},
{"country":"林口區","reg":5928,"hur":10174},
{"country":"深坑區","reg":1109,"hur":1885},
{"country":"石碇區","reg":328,"hur":1765},
{"country":"坪林區","reg":265,"hur":430},
{"country":"三芝區","reg":1112,"hur":2465},
{"country":"石門區","reg":426,"hur":2466},
{"country":"八里區","reg":1734,"hur":3513},
{"country":"平溪區","reg":207,"hur":1175},
{"country":"雙溪區","reg":367,"hur":658},
{"country":"貢寮區","reg":443,"hur":800},
{"country":"金山區","reg":752,"hur":1296},
{"country":"萬里區","reg":692,"hur":1200},
{"country":"烏來區","reg":422,"hur":906},
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