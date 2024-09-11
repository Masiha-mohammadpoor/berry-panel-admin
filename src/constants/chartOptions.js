export const lineChartOptionsInDefault = {
  stroke: {
    curve: "smooth",
    width: 3,
    colors: ["#fff"],
  },
  colors: ["#fff"],
  chart: {
    toolbar: { show: false },
    height: "100",
  },
  xaxis: {
    tooltip: {
      enabled: false,
    },
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  grid: { show: false },
  tooltip: {
    fillSeriesColor: false,
    theme: "dark",
    style: {},
    marker: {
      show: false,
    },
    x: { show: false },
    y: {
      title: {
        formatter: (seriesName) => `Total Order`,
      },
    },
  },
};

export const barChartOptionsInDefault = {
  chart: {
    type: "bar",
    stacked: true,
    toolbar: {
      offsetX: -15,
      tools: {
        download: false,
        show: false,
      },
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 640,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
        plotOptions: {
          bar: {
            columnWidth: 10, // 'all', 'last'
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      borderRadiusApplication: "end", // 'around', 'end'
      borderRadiusWhenStacked: "last",
      columnWidth: 20, // 'all', 'last'
      dataLabels: {
        total: {
          enabled: false,
        },
      },
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      style: {
        colors: "#6b7280",
      },
    },
  },
  legend: {
    position: "bottom",
    offsetY: 10,
    markers: {
      size: 7,
      shape: "circle",
      offsetX: -5,
      strokeWidth: 0,
    },
    itemMargin: {
      horizontal: 15,
    },
    labels: {
      colors: "#9ca3af",
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    theme: "dark",
  },
};

export const areaCharOptionsInDefault = {
  chart: {
    toolbar: {
      show: false,
    },
    height: 100,
    type: "area",
    sparkline: {
      enabled: true,
    },
  },
  colors: ["#5b21b6"],
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 1.5,
  },
  xaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0,
      opacityFrom: 0.7,
      opacityTo: 0.2,
    },
  },
};

export const areaChartOptionsInAnalytics = {
  chart: {
    toolbar: {
      show: false,
    },
    height: 100,
    type: "area",
    sparkline: {
      enabled: true,
    },
  },
  colors: ["#5b21b6", "#3b82f6", "#f43f5e"],
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0,
      opacityFrom: 0.4,
      opacityTo: 0,
    },
  },
};

export const areaCharOptionsInChartsPage = {
  chart: {
    toolbar: {
      show: false,
    },
    type: "area",
    sparkline: {
      enabled: true,
    },
  },
  colors: ["#fff"],
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    colors: ["#fff"],
    curve: "smooth",
    width: 3,
  },
  xaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  fill: {
    colors: ["#fff"],
    type: "solid",
    opacity: 0.3,
  },
  tooltip: {
    fillSeriesColor: false,
    theme: "dark",
    style: {},
    marker: {
      show: false,
    },
    x: { show: false },
    y: {
      title: {
        formatter: (seriesName) => `total`,
      },
    },
  },
};

export const circleChartInChartPage = {
  chart: {
    type: "donut",
  },
  stroke: {
    show: false,
  },
  colors: ["#e11d48", "#0ea5e9", "#8b5cf6"],
  labels: ["youtube", "Facebook", "Twitter"],
  legend: {
    position: "bottom",
    offsetY: 10,
    markers: {
      size: 8,
      shape: "circle",
      offsetX: -5,
    },
    itemMargin: {
      horizontal: 15,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "bottom",
    offsetY: 10,
    markers: {
      size: 7,
      shape: "circle",
      offsetX: -5,
      strokeWidth: 0,
    },
    itemMargin: {
      horizontal: 15,
    },
    labels: {
      colors: "#9ca3af",
    },
  },
};
