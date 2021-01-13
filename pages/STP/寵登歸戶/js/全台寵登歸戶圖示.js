

    // <!-- Chart code -->
    am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.colors.step = 2;  


    // Data for both series
    var data = [ 
    {"country":"新北市","reg":271650,"hur":154825},
    {"country":"臺北市","reg":206957,"hur":116376},
    {"country":"臺中市","reg":260806,"hur":128771},
    {"country":"臺南市","reg":148496,"hur":65795},
    {"country":"高雄市","reg":241702,"hur":109070},
    {"country":"桃園市","reg":186028,"hur":101089},
    {"country":"宜蘭縣","reg":33060,"hur":18655},
    {"country":"新竹縣","reg":31353,"hur":18244},
    {"country":"苗栗縣","reg":45680,"hur":21970},
    {"country":"彰化縣","reg":76373,"hur":38646},
    {"country":"南投縣","reg":43659,"hur":19621},
    {"country":"雲林縣","reg":49036,"hur":24911},
    {"country":"嘉義縣","reg":36507,"hur":16302},
    {"country":"屏東縣","reg":55201,"hur":24547},
    {"country":"臺東縣","reg":36893,"hur":16728},
    {"country":"花蓮縣","reg":50037,"hur":23148},
    {"country":"澎湖縣","reg":9690,"hur":5195},
    {"country":"基隆市","reg":27153,"hur":13875},
    {"country":"新竹市","reg":25240,"hur":14688},
    {"country":"嘉義市","reg":21468,"hur":10195},
    {"country":"金門縣","reg":12183,"hur":6148},
    {"country":"連江縣","reg":1200,"hur":653},
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