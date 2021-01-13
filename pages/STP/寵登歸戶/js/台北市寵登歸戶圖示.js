
am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.colors.step = 2;  


    // Data for both series
    var data = [ 
    {"country":"松山區","reg":8542,"hur":15474},
{"country":"信義區","reg":9966,"hur":19007},
{"country":"大安區","reg":12369,"hur":23488},
{"country":"中山區","reg":10723,"hur":18872},
{"country":"中正區","reg":6123,"hur":10281},
{"country":"大同區","reg":5236,"hur":9267},
{"country":"萬華區","reg":8554,"hur":14893},
{"country":"文山區","reg":12466,"hur":21542},
{"country":"南港區","reg":5587,"hur":9266},
{"country":"內湖區","reg":13223,"hur":22737},
{"country":"士林區","reg":12260,"hur":22740},
{"country":"北投區","reg":11321,"hur":19493},
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

   //↓ working 20201207


    // Add legend  
    chart.legend = new am4charts.Legend();


    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;  

    }); // end am4core.ready()