import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface PopulationData {
  year: number;
  value: number;
}

interface PopulationChartProps {
  populationData: PopulationData[];
}

const PopulationChart = ({ populationData }: PopulationChartProps) => {
  const data = {
    labels: populationData.map((entry) => entry.year),
    datasets: [
      {
        label: 'Population',
        data: populationData.map((entry) => entry.value),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default PopulationChart;
