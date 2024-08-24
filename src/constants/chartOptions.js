export const lineChartOptions = {
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

export const barChartOptions = {
  chart: {
    type: "bar",
    stacked: true,
    toolbar: {
      offsetX: -15,
      tools: {
        download: true,
        selection: false,
        zoom: false,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: false,
      },
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
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
  },
  legend: {
    position: "bottom",
    offsetY: 10,
    markers: {
      size: 10,
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
  fill: {
    opacity: 1,
  },
};

export const areaCharOptions = {
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
  tooltip: {
    fillSeriesColor: false,
    theme: "light",
    style: {},
    marker: {
      show: false,
    },
    x: { show: false },
    y: {
      title: {
        formatter: (seriesName) => `Ticket`,
      },
    },
  },

}