import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4lang_ru_RU from "@amcharts/amcharts4/lang/ru_RU";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { IAnalyticsData } from "@/model/IAnalyticsData";

export const setChart = (data: IAnalyticsData[]) => {
  am4core.useTheme(am4themes_animated);

  const chart = am4core.create("chartdiv", am4charts.XYChart);
  chart.language.locale = am4lang_ru_RU;

  chart.data = data;

  const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.dateFormats.setKey("day", "d MMMM");
  dateAxis.gridIntervals.setAll([
    { timeUnit: "day", count: 1 },
    { timeUnit: "day", count: 7 },
  ]);
  dateAxis.paddingLeft = 30;

  const visitsAxis = chart.yAxes.push(new am4charts.ValueAxis());
  if (visitsAxis.tooltip) {
    visitsAxis.tooltip.disabled = true;
    visitsAxis.renderer.minWidth = 35;
  }

  const series = chart.series.push(new am4charts.LineSeries());
  series.stroke = am4core.color("#9300FA");
  series.strokeWidth = 3;
  series.fill = am4core.color("#E6C8FA");
  series.fillOpacity = 1;
  series.dataFields.dateX = "date";
  series.dataFields.valueY = "visits";

  const circleBullet = series.bullets.push(new am4charts.CircleBullet());
  circleBullet.circle.fill = am4core.color("#9300FA");
  circleBullet.tooltipText = `Date: [bold]{date}[/] 
  Visits: [bold]{visits}[/]`;
  circleBullet.cursorOverStyle = am4core.MouseCursorStyle.pointer;
  const circleBulletHover = circleBullet.states.create("hover");
  circleBulletHover.properties.scale = 1.3;
};
