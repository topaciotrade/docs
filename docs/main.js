/*
    10% Bloqueado a 12 meses. transcurrido el periodo de Bloqueo max 20% cada 3 meses ( equivalente 2% ).
    10% Plataforma del ecosistema Topacio, escalabilidad y Desarrollo.
    30% Modulo Staking Bloquedo - bobeda de Staking Dedicada APIS de rendimiento Anual y Flexible.
    10% Framing.
    5% Ronda Semilla Bloqueado (12 meses).
    5% Venta Privada Bloqueado (12 meses).
    1% AirDrop Financiado por Parners.
    5% parners inversion privada (Bloqueado a 12 meses) liberacion 25% cada 3 meses
    5% Marketing
    5% Recompensas plataformas y eventos distribuidos a 18 meses durante el primer a#o ( 0.416% maximo mensual en ecosistema Topacio ) ( recompensas por duracion de staking [bonus] / trades exitosos / Eventos / financiacion de NFT's otorgados en eventos )
    4% Tesoreria.
    10% Bloquedo negociacion exchanges max 3% por exchange.


*/
const data = {
  labels: [
    '10% Equipo - Bloqueado a 18 meses',
    '5% Escalabilidad Plataforma del ecosistema Topacio',
    '30% Modulo Staking Bloquedo',
    '12% Framing',
    '3% Ronda Semilla Bloqueado (12 meses)',
    '5% Venta Privada Bloqueado',
    '5% Venta Publica QuickSwap',
    '1% AirDrop Financiado por Parners',
    '5% parners inversion privada (Bloqueado a 12 meses)',
    '5% Marketing',
    '5% Recompensas plataformas y eventos distribuidos a 18 meses',
    '4% Tesoreria',
    '10% Bloquedo negociacion exchanges max 3% por exchange'
  ],
  datasets: [{
    label: 'Tokenomic Distribution',
    data: [10,5,30,12,3,5,5,1,5,5,5,4,10],
    backgroundColor: [
      '#264653',
      '#2a9d8f',
      '#e9c46a',
      '#f4a261',
      '#606c38',
      '#8338ec',
      '#3a86ff',
      '#22333b',
      '#00f5d4',
      '#007f5f',
      '#8ac926',
      '#c9184a',
      '#b7e4c7'
    ],
    hoverOffset: 4
  }]
};

const dataEn = {
  labels: [
    "10% Team - Locked for 18 months",
    "5% Topacio Ecosystem Scalability Platform",
    "30% Staking Module Locked",
    "12% Farming",
    "3% Seed Round Locked (12 months)",
    "5% Private Sale Locked",
    "5% Public Sale QuickSwap",
    "1% AirDrop Funded by Partners",
    "5% Private Investment Partners (Locked for 12 months)",
    "5% Marketing",
    "5% Rewards Platforms and Events Distributed over 18 months",
    "4% Treasury",
    "10% Locked Exchange Negotiation max 3% per exchange"
  ],
  datasets: [{
    label: "Tokenomic Distribution",
    data: [10, 5, 30, 12, 3, 5, 5, 1, 5, 5, 5, 4, 10],
    backgroundColor: [
      "#264653",
      "#2a9d8f",
      "#e9c46a",
      "#f4a261",
      "#606c38",
      "#8338ec",
      "#3a86ff",
      "#22333b",
      "#00f5d4",
      "#007f5f",
      "#8ac926",
      "#c9184a",
      "#b7e4c7"
    ],
    hoverOffset: 4
  }]
};


  const config = {
    type: 'doughnut',
    data: data,
    options: {}
  };
  
  const configEN = {
    type: 'doughnut',
    data: dataEn,
    options: {}
  };

   //var ctx = document.getElementById('tokenomic-chart').getContext('2d');

   function iniChartTokenomic(){     
      /* 
    if(document.getElementById('tokenomic-chart')){
      const tokenomicChart = new Chart(
          document.getElementById('tokenomic-chart').getContext('2d'),// document.getElementById('tokenomic-chart'),
          config
        );
    }

      if(document.getElementById('tokenomic-chart-en')){
        const tokenomicChartEn = new Chart(
          document.getElementById('tokenomic-chart-en').getContext('2d'),// document.getElementById('tokenomic-chart'),
          configEN
        );
      }
      */
   }