import { useEffect, useMemo, useState } from 'react';
import { Gender, PieChartConfig, SalesByGender, SalesSummaryData, StoreFilterData } from '../../types';
import PieChartCard from './pie-chart-card';
import './styles.css';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { formatPrice } from '../../utils/formatters';
import { buildSalesByGenderChart } from './helpers';

type Props = {
  filterData?: StoreFilterData;
};

const initialSummary = {
  sum: 0,
  min: 0,
  max: 0,
  avg: 0,
  count: 0,
};

const PieChart = ({ filterData }: Props) => {
  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales sumary');
      });
  }, [params]);

  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSalesByGender = buildSalesByGenderChart(response.data);
        setSalesByGender(newSalesByGender);
      })
      .catch(() => {
        console.error('Error to fetch sales by gender');
      });
  }, [params]);

  const formatGender = (gender: Gender) => {
    const textByGender = {
      MALE: 'Masculino',
      FEMALE: 'Feminino',
      OTHER: 'Outro',
    };
    return textByGender[gender];
  };
  
  return (
    <div className="pie-chart-container base-card">
      <div className="value-card">
        <h3>{formatPrice(summary?.sum)}</h3>
        <span className="value-card-label">Total de vendas</span>
      </div>
      <div className="pie-chart-card">
        <PieChartCard
          name=""
          labels={salesByGender?.labels.map((gender) => formatGender(gender as Gender))}
          series={salesByGender?.series}
        />
      </div>
    </div>
  );
};

export default PieChart;
