import Countdown from 'react-countdown';
import './App.css';

function App() {
  const targetDate = new Date('2025-12-15T00:00:00');

  return (
    <>
    <img src="topo-formaturas-3625885383.png" alt="Foto de Felipe Fracalossi Leite" width="50%" height="50%" />
      <h1>Felipe Fracalossi Leite — Informática 6B</h1>
      <h2>Contagem regressiva para a formatura 🎓</h2>

      <Countdown
        date={targetDate}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return <h2>🎉 Parabéns, chegou o grande dia da nossa formatura! 🎉</h2>;
          } else {
            return (
              <h2>
                {days} dias, {hours}h {minutes}m {seconds}s
              </h2>
            );
          }
        }}
      />

        <h2>Após a formatura pretendo me mudar para Campo Grande e estuda no UFMS cursando ciência da computação</h2>
    </>
  );
}

export default App;
