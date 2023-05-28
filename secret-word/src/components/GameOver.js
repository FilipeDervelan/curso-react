import './GameOver.css';

export const GameOver = ({ restartGame, score }) => {
  return (
    <div>
      <h1>Fim de jogo!</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button onClick={restartGame}>Jogar novamente</button>
    </div>
  )
}