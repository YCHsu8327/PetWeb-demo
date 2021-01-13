am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.colors.step = 2;  


    // Data for both series
    var data = [ 
    {"country":"中區","reg":822,"hur":2439},
{"country":"東區","reg":4107,"hur":8770},
{"country":"南區","reg":6528,"hur":12624},
{"country":"西區","reg":5677,"hur":14195},
{"country":"北區","reg":8032,"hur":19770},
{"country":"西屯區","reg":11440,"hur":21909},
{"country":"南屯區","reg":9313,"hur":17383},
{"country":"北屯區","reg":15354,"hur":31091},
{"country":"豐原區","reg":6481,"hur":11778},
{"country":"東勢區","reg":2455,"hur":5080},
{"country":"大甲區","reg":2319,"hur":4830},
{"country":"清水區","reg":2815,"hur":6633},
{"country":"沙鹿區","reg":3422,"hur":6830},
{"country":"梧棲區","reg":2111,"hur":3657},
{"country":"后里區","reg":2342,"hur":4601},
{"country":"神岡區","reg":2444,"hur":4563},
{"country":"潭子區","reg":4776,"hur":8604},
{"country":"大雅區","reg":3930,"hur":7553},
{"country":"新社區","reg":1406,"hur":2974},
{"country":"石岡區","reg":854,"hur":1726},
{"country":"外埔區","reg":1186,"hur":2013},
{"country":"大安區","reg":629,"hur":1239},
{"country":"烏日區","reg":2835,"hur":5823},
{"country":"大肚區","reg":2145,"hur":3956},
{"country":"龍井區","reg":2964,"hur":5557},
{"country":"霧峰區","reg":2673,"hur":5627},
{"country":"太平區","reg":9505,"hur":20242},
{"country":"大里區","reg":9179,"hur":16716},
{"country":"和平區","reg":1004,"hur":2741},
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