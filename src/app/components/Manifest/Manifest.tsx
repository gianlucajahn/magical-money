import * as React from "react";
import css from "./Manifest.module.scss";
import Subheading from "../Heading/Subheading";
import Heading from "../Heading/Heading";
import ReactEcharts from "echarts-for-react";
import { motion } from "framer-motion";

export interface ManifestProps {}

export default function Manifest(props: ManifestProps) {
  const compoundOption = {
    color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
    title: {
      text: "Compounding Plans (500$/m)",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["DAX 40", "MSCI World", "NASDAQ", "Wirecard"],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "1%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "1994",
          "1995",
          "1996",
          "1997",
          "1998",
          "1999",
          "2000",
          "2001",
          "2002",
          "2003",
          "2004",
          "2005",
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          formatter: "{value}$",
          align: "right",
        },
      },
    ],
    series: [
      {
        name: "NASDAQ",
        type: "line",
        smooth: true,
        color: "#1eb0ff",
        data: [
          0, 8732, 20920, 32473, 71295, 156098, 102381, 75531, 50891, 84836,
          100320, 107904, 121638, 151468, 91504, 149709, 185636, 196810, 236923,
          327922, 393827, 433533, 465421, 620014, 619503, 862944, 1282388,
        ],
      },
      {
        name: "DAX 40",
        type: "line",
        smooth: true,
        color: "#07c921",
        data: [
          0, 6419, 15917, 32243, 45016, 70963, 71191, 63374, 38891, 61539,
          72494, 99742, 128984, 165072, 102010, 133771, 162218, 143507, 192953,
          248234, 260972, 292494, 319001, 365658, 304760, 389941, 409997,
        ],
      },
      {
        name: "MSCI World",
        type: "line",
        smooth: true,
        color: "#ff5789",
        data: [
          0, 7122, 14659, 23587, 36327, 52299, 50108, 46104, 41131, 61652,
          76338, 88563, 111538, 125871, 76379, 104606, 121168, 117491, 139767,
          180897, 192373, 190954, 207432, 256353, 236118, 303107, 352568,
        ],
      },
      {
        name: "Wirecard",
        type: "line",
        smooth: true,
        color: "#9e1eff",
        data: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          0,
          9500,
          17577,
          32017,
          66568,
          84847,
          111160,
          102515,
          251691,
          364401,
          4437,
        ],
      },
    ],
  };

  const withdrawOption = {
    color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
    title: {
      text: "Withdrawal Plan built from MSCI World to minimize volatility",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "1%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Year 0", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6", "Year 7", "Year 8", "Year 9", "Year 10", "Year 11", "Year 12", "Year 13", "Year 14", "Year 15", "Year 16", "Year 17", "Year 18", "Year 19", "Year 20", "Year 21", "Year 22", "Year 23", "Year 24", "Year 25", "Year 26", "Year 27", "Year 28", "Year 29", "Year 30"],
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          formatter: "{value}$",
          align: "right",
        },
      },
    ],
    series: [
      {
        name: "Withdrawal Plan",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {
          opacity: 0.8,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'red' // color at 0%
            }, {
                offset: 1, color: 'orange' // color at 100%
            }],
            global: false // default is false
          }
        },
        emphasis: {
          focus: "series",
        },
        data: [2000000, 2060000, 2121800, 2185454, 2251018, 2318548, 2388105, 2459478, 2533540, 2609546, 2687833, 2768468, 2851522, 2937067, 3025179, 3115935, 3209413, 3305695, 3404866, 3507012, 3612222, 3720589, 3832207, 3947173, 4065588, 4187556, 4313183, 4442578, 4575855, 4713131, 4854525],
      },
    ],
  };

  const barsOption = {
    title: {
      text: "% of minimum income for survival covered by average pension",
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '1%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Greece', 'Finland', 'Sweden', 'UK', 'Ireland', 'Germany', 'Netherlands', 'Norway'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
        {
          type: "value",
          axisLabel: {
            formatter: "{value}%",
            align: "right",
          },
        },
    ],
    series: [
      {
        name: 'Percentage',
        type: 'bar',
        barWidth: '60%',
        color: '#aa62ec',
        data: [55, 83, 99, 116, 125, 133, 138, 164]
      }
    ]
  };

  return (
    <div className={css.manifest}>
      <Subheading color="#32abec">Take retirement into your own hands</Subheading>
      <Heading delay={0.15}>
        Create custom compounding plans based off the fonds of your choice for
        free.
      </Heading>
      <script src="echarts.js"></script>
      <ReactEcharts option={compoundOption} className={css.chart} />


      <Subheading color="#ff5789">Don't worry about old-age poverty anymore</Subheading>
      <Heading delay={0.15}>
        Build an inflation-adjusted withdrawal plan with us and compound even in
        retirement
      </Heading>
      <script src="echarts.js"></script>
      <ReactEcharts option={withdrawOption} className={css.chart} />

      <Subheading color="#aa62ec">Stop worrying about living on a subsistence level</Subheading>
      <Heading delay={0.15}>
         Eliminate your dependence on meagre state pension funds
      </Heading>
      <script src="echarts.js"></script>
      <ReactEcharts option={barsOption} className={css.chart} />
    </div>
  );
}
