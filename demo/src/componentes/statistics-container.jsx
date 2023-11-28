import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from 'chart.js/auto';
import ClienteReservas from '../services/ClienteReservas';

const StatisticsContainer = () => {
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  const chart3Ref = useRef(null);
  const chart4Ref = useRef(null);

  const [reservasPorPrograma, setReservasPorPrograma] = useState([]);
  const [solicitudesPorSalon, setSolicitudesPorSalon] = useState([]);
  const [reservasPorEstado, setReservasPorEstado] = useState([]);



  useEffect(() => {
    // Obtener la cantidad de reservas por programa académico
    ClienteReservas.ObtenerCantidadReservasPorPrograma()
      .then(response => {
        const data = response.data;
        setReservasPorPrograma(data);

        // Configuración de la primera gráfica
        const config1 = {
          type: 'bar',
          data: {
            labels: data.map(item => item.Programa),
            datasets: [
              {
                label: 'Cantidad de Reservas',
                data: data.map(item => item.CantidadReservas),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              },
            ],
          },
          options: {
            scales: {
              x: { type: 'category', labels: data.map(item => item.Programa) },
              y: { beginAtZero: true },
            },
          },
        };

        // Crear la primera gráfica
        const chart1 = new Chart(chart1Ref.current, config1);

        // Obtener el número de solicitudes por salón
    ClienteReservas.ObtenerNumeroSolicitudesPorSalon()
    .then(response => {
      const data = response.data;
      setSolicitudesPorSalon(data);

      console.log("Datos por saloens", data);

      // Configuración de la segunda gráfica
      const config2 = {
        type: 'bar',
        data: {
          labels: data.map(item => item.Salon),
          
          datasets: [
            {
              label: 'Número de Solicitudes',
              data: data.map(item => item.NumeroSolicitudes),
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        },
        options: {
          scales: {
            x: { type: 'category', labels: data.map(item => item.Salon) },
            y: { beginAtZero: true },
          },
        },
      };

      // Crear la segunda gráfica
      const chart2 = new Chart(chart2Ref.current, config2);
    })
    .catch(error => {
      console.error('Error al obtener el número de solicitudes por salón:', error);
    });

        // Datos de ejemplo para la tercera gráfica (número de solicitudes por facultad)
        const data3 = {
          labels: ['FIET', 'Humanas', 'Derecho'],
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

        // Obtener la cantidad de reservas por estado
    ClienteReservas.ObtenerCantidadReservasPorEstado()
    .then(response => {
      const data = response.data;
      setReservasPorEstado(data);

      // Configuración de la cuarta gráfica
      const config4 = {
        type: 'doughnut',
        data: {
          labels: data.map(item => item.Estado),
          datasets: [
            {
              label: 'Cantidad de Solicitudes',
              data: data.map(item => item.CantidadReservas),
              backgroundColor: ['#36A2EB', '#FF6384'],
            },
          ],
        },
      };

      // Crear la cuarta gráfica
      const chart4 = new Chart(chart4Ref.current, config4);
    })
    .catch(error => {
      console.error('Error al obtener la cantidad de reservas por estado:', error);
    });
      })
      .catch(error => {
        console.error('Error al obtener la cantidad de reservas por programa:', error);
      });

    // Limpiar los gráficos al desmontar el componente

  }, []); // La dependencia está vacía para que solo se ejecute al montar y desmontar el componente

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
        <div className="col-md-4 chart-container" style={containerStyle}>
          <h5>Solicitudes por Facultad</h5>
          <canvas ref={chart3Ref} style={{ width: '100%', height: 'auto' }}></canvas>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 chart-container" style={containerStyle}>
          <h5>Solicitudes Aprobadas/Rechazadas</h5>
          <canvas ref={chart4Ref} style={{ width: '100%', height: 'auto' }}></canvas>
        </div>
      </div>
    </div>
  );
};

export default StatisticsContainer;
