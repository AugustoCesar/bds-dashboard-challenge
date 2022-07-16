import PieChartCard from './pie-chart-card';
import './styles.css';

const PieChart = () => {
  return (
    <div className="pie-chart-container base-card">
      <div className="value-card">
        <h3>R$ 746.484,00</h3>
        <span className="value-card-label">Total de vendas</span>
      </div>
      <div className="pie-chart-card">
        <PieChartCard
          name=""
          labels={['Feminino', 'Masculino', 'Outro']}
          series={[45, 35, 20]}
        />
      </div>
    </div>
  );
};

export default PieChart;
