am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    am4core.options.autoSetClassName = true;
    
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    
    chart.colors.step = 2;
    chart.maskBullets = false;
    
    // Add data
    data = [{
        "date": "2011",
        "child": 350.18,
        "cat": 189.71
    }, {
        "date": "2012",
        "child": 345.18,
        "cat": 180.71
    }, {
        "date": "2013",
        "child": 334.66,
        "cat": 232.06
    }, {
        "date": "2014",
        "child": 320.66,
        "cat": 220.06
    }, {
        "date": "2015",
        "child": 318.78,
        "cat": 228.22
    }, {
        "date": "2016",
        "child": 318.78,
        "cat": 228.22
    }, {
        "date": "2017",
        "child": 309.19,
        "cat": 251.05
    }, {
        "date": "2018",
        "child": 309.19,
        "cat": 251.05
    
    }, {
        "date": "2019",
        "child": 296.08,
        "cat": 272.52
    }, {
        "date": "2020",
        "child": 296.08,
        "cat": 272.52
    }, {
        "date": "2021",
        "child": 283.52,
        "cat": 295.83
    }];
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dataFields.category = "category";
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.renderer.grid.template.disabled = true;
    
    var distanceAxis = chart.yAxes.push(new am4charts.ValueAxis());
    distanceAxis.title.text = "15歲以下人口數";
    
    
    var R = chart.yAxes.push(new am4charts.ValueAxis());
    R.title.text = "全國犬貓隻數";
    R.renderer.opposite = true;
    R.renderer.grid.template.disabled = true;
    
    var latitudeAxis = chart.yAxes.push(new am4charts.ValueAxis());
    latitudeAxis.renderer.grid.template.disabled = true;
    
    // Create series
    var distanceSeries = chart.series.push(new am4charts.LineSeries());
    distanceSeries.id = "g1";
    distanceSeries.dataFields.valueY = "distance";
    distanceSeries.dataFields.dateX = "date";
    distanceSeries.name = "";
    
    var BOT = chart.series.push(new am4charts.LineSeries());
    BOT.id = "g3";
    BOT.dataFields.valueY = "cat";
    BOT.dataFields.dateX = "date";
    BOT.yAxis = R;
    BOT.name = "全國犬貓數";
    BOT.strokeWidth = 2;
    
    
    var BOT1 = BOT.bullets.push(new am4charts.Bullet());
    var BOT2 = BOT1.createChild(am4core.Rectangle);
    BOT1.horizontalCenter = "middle";
    BOT1.verticalCenter = "middle";
    BOT1.width = 7;
    BOT1.height = 7;
    BOT2.width = 7;
    BOT2.height = 7;
    
    
    BOT1.fill = am4core.color("#fdd400"); // tooltips grab fill from parent by default
    BOT1.tooltipText = "[#fff font-size: 15px]{name} {categoryX}[/][#fff font-size: 20px]{valueY}萬隻[/] [#fff]{additional}[/] "
    BOT2.radius = 4;
    BOT2.fill = am4core.color("#fff");
    BOT2.strokeWidth = 3;
    
    chart.data = data;
    
    var durationState = BOT1.states.create("hover");
    durationState.properties.scale = 1.2;
    
    var BOT3 = chart.series.push(new am4charts.LineSeries());
    BOT3.id = "g2";
    BOT3.dataFields.valueY = "child";
    BOT3.dataFields.dateX = "date";
    BOT3.yAxis = latitudeAxis;
    BOT3.name = "15歲以下人口數";
    BOT3.strokeWidth = 2;
    BOT3.tooltipText = "{valueY} 萬人";
    
    
    var latitudeBullet = BOT3.bullets.push(new am4charts.CircleBullet());
    latitudeBullet.circle.fill = am4core.color("#fff");
    latitudeBullet.circle.strokeWidth = 2;
    
    var latitudeState = latitudeBullet.states.create("hover");
    latitudeState.properties.scale = 1.2;
    
    
    // Add legend
    chart.legend = new am4charts.Legend();
    
    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    
    }); // end am4core.ready()