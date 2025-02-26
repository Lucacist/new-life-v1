import React from 'react';
import { Typography, Box } from '@mui/material';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LabelList
} from 'recharts';
import '../styles/variables.css';
import '../styles/Stats.css';

const Stats = () => {
  // Données pour le graphique de prévalence du tabagisme
  const prevalenceData = [
    { year: '2014', value: 28.6 },
    { year: '2016', value: 29.4 },
    { year: '2019', value: 24.0 },
    { year: '2022', value: 24.5 },
    { year: '2023', value: 23.1 }
  ];

  // Données pour le graphique par sexe
  const genderData = [
    { name: 'Hommes', value: 25.4 },
    { name: 'Femmes', value: 20.9 }
  ];

  // Données pour la consommation moyenne
  const consumptionData = [
    { year: '2014', value: 13.5 },
    { year: '2022', value: 12.6 }
  ];

  // Données pour les jeunes de 17 ans
  const youthData = [
    { year: '2014', value: 32.4 },
    { year: '2022', value: 15.6 }
  ];

  const COLORS = ['#00ff94', '#007bff'];

  return (
    <div className="stats-container">
      <div className="stats-content">
        <div className="stats-title">
          <Typography variant="h1">Statistiques du Tabac en France</Typography>
        </div>

        <div className="chart-section">
          <Typography 
            variant="h2" 
            className="chart-title" 
            sx={{ my: 4 }}
          >
            Évolution du Tabagisme Quotidien (18-75 ans)
          </Typography>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={window.innerWidth < 480 ? 300 : 400}>
              <LineChart data={prevalenceData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="year" stroke="var(--text-secondary)" />
                <YAxis stroke="var(--text-secondary)" />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(0,0,0,0.8)',
                    border: '1px solid var(--primary-color)',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  itemStyle={{ color: '#fff' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Legend wrapperStyle={{ paddingTop: '10px' }} />
                <Line
                  type="monotone"
                  dataKey="value"
                  name="Pourcentage de fumeurs"
                  stroke="var(--primary-color)"
                  strokeWidth={2}
                  dot={{ fill: 'var(--primary-color)' }}
                />
              </LineChart>
            </ResponsiveContainer>
            <Typography className="source-text">Source : SANTÉ PUBLIQUE FRANCE</Typography>
          </div>
        </div>

        <div className="chart-section">
          <Typography 
            variant="h2" 
            className="chart-title" 
            sx={{ my: 4 }}
          >
            Répartition par Sexe en 2023
          </Typography>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={window.innerWidth < 480 ? 300 : 400}>
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={window.innerWidth < 480 ? 60 : 100}
                  outerRadius={window.innerWidth < 480 ? 90 : 140}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, value }) => (window.innerWidth < 480 ? `${value}%` : `${name}: ${value}%`)}
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: 'rgba(0,0,0,0.8)',
                    border: '1px solid var(--primary-color)',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  itemStyle={{ color: '#fff' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Legend wrapperStyle={{ paddingTop: '10px' }} />
              </PieChart>
            </ResponsiveContainer>
            <Typography className="source-text">Source : SANTÉ PUBLIQUE FRANCE</Typography>
          </div>
        </div>

        <div className="chart-section">
          <Typography 
            variant="h2" 
            className="chart-title" 
            sx={{ my: 4 }}
          >
            Évolution chez les Jeunes de 17 ans
          </Typography>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={window.innerWidth < 480 ? 300 : 400}>
              <BarChart data={youthData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="year" stroke="var(--text-secondary)" />
                <YAxis stroke="var(--text-secondary)" />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(0,0,0,0.8)',
                    border: '1px solid var(--primary-color)',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  itemStyle={{ color: '#fff' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Legend wrapperStyle={{ paddingTop: '10px' }} />
                <Bar
                  dataKey="value"
                  name="Pourcentage de fumeurs"
                  fill="var(--primary-color)"
                  radius={[10, 10, 0, 0]}
                  cursor="pointer"
                >
                  <LabelList dataKey="value" position="top" fill="#fff" formatter={(value) => `${value}%`} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <Typography className="source-text">Source : OFDT</Typography>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <Typography className="stat-value">75 000</Typography>
            <Typography className="stat-label">
              Décès liés au tabagisme en 2015
            </Typography>
          </div>
          <div className="stat-card">
            <Typography className="stat-value">-7%</Typography>
            <Typography className="stat-label">
              Baisse des ventes de tabac en 2023 vs 2022
            </Typography>
          </div>
          <div className="stat-card">
            <Typography className="stat-value">12.6</Typography>
            <Typography className="stat-label">
              Cigarettes par jour en moyenne en 2022
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
