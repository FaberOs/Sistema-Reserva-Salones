import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from 'chart.js/auto';

const StatisticsContainer = () => {
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  const chart3Ref = useRef(null);
  const chart4Ref = useRef(null);

  useEffect(() => {
    // Datos de ejemplo para la primera gráfica (cantidad de reservas por programa académico)
    const data1 = {
      labels: ['Programa A', 'Programa B', 'Programa C'],
      datasets: [
        {
          label: 'Cantidad de Reservas',
          data: [15, 25, 10],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };

    // Configuración de la primera gráfica
    const config1 = {
      type: 'bar',
      data: data1,
      options: {
        scales: {
          x: { type: 'category', labels: data1.labels },
          y: { beginAtZero: true },
        },
      },
    };

    // Crear la primera gráfica
    const chart1 = new Chart(chart1Ref.current, config1);

    // Datos de ejemplo para la segunda gráfica (número de solicitudes por salón)
    const data2 = {
      labels: ['Salón 101', 'Salón 102', 'Salón 103'],
      datasets: [
        {
          label: 'Número de Solicitudes',
          data: [8, 12, 5],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };

    // Configuración de la segunda gráfica
    const config2 = {
      type: 'bar',
      data: data2,
      options: {
        scales: {
          x: { type: 'category', labels: data2.labels },
          y: { beginAtZero: true },
        },
      },
    };

    // Crear la segunda gráfica
    const chart2 = new Chart(chart2Ref.current, config2);

    // Datos de ejemplo para la tercera gráfica (número de solicitudes por facultad)
    const data3 = {
      labels: ['Facultad X', 'Facultad Y', 'Facultad Z'],
      datasets: [
        {
          label: 'Número de Solicitudes',
          data: [30, 15, 20],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };

    // Configuración de la tercera gráfica
    const config3 = {
      type: 'bar',
      data: data3,
      options: {
        scales: {
          x: { type: 'category', labels: data3.labels },
          y: { beginAtZero: true },
        },
      },
    };

    // Crear la tercera gráfica
    const chart3 = new Chart(chart3Ref.current, config3);

    // Datos de ejemplo para la cuarta gráfica (cantidad de solicitudes aprobadas y rechazadas)
    const data4 = {
      labels: ['Aprobadas', 'Rechazadas'],
      datasets: [
        {
          label: 'Cantidad de Solicitudes',
          data: [25, 10],
          backgroundColor: ['#36A2EB', '#FF6384'],
        },
      ],
    };

    // Configuración de la cuarta gráfica
    const config4 = {
      type: 'doughnut',
      data: data4,
    };

    // Crear la cuarta gráfica
    const chart4 = new Chart(chart4Ref.current, config4);

    return () => {
      chart1.destroy();
      chart2.destroy();
      chart3.destroy();
      chart4.destroy();
    };
  }, []);

  const containerStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '10px',
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 chart-container" style={containerStyle}>
          <h5>Reservas por Programa Académico</h5>
          <canvas ref={chart1Ref} style={{ width: '100%', height: 'auto' }}></canvas>
        </div>
        <div className="col-md-4 chart-container" style={containerStyle}>
          <h5>Solicitudes por Salón</h5>
          <canvas ref={chart2Ref} style={{ width: '100%', height: 'auto' }}></canvas>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 chart-container" style={containerStyle}>
          <h5>Solicitudes por Facultad</h5>
          <canvas ref={chart3Ref} style={{ width: '100%', height: 'auto' }}></canvas>
        </div>
        <div className="col-md-3 chart-container" style={containerStyle}>
          <h5>Solicitudes Aprobadas/Rechazadas</h5>
          <canvas ref={chart4Ref} style={{ width: '100%', height: 'auto' }}></canvas>
        </div>
      </div>
    </div>
  );
};

export default StatisticsContainer;
