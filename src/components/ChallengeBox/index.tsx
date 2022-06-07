import * as S from "./styles";

const ChallengeBox = () => {
  const hasChallege = true;

  return (
    <S.ClgContainer>
      { hasChallege ? (
        <S.ClgActive>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada durante 3 minutos</p>
          </main>

          <footer>
            <button>Falhei</button>
            <button>Completei</button>
          </footer>
        </S.ClgActive>
      ) : (
        <S.ClgNotActive>
          <S.ClgNotActiveStrong>Finalize um ciclo para receber um desafio</S.ClgNotActiveStrong>
          <S.ClgNotActiveP>
            <S.ClgNotActiveImg src="../icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </S.ClgNotActiveP>
        </S.ClgNotActive>
      )}
    </S.ClgContainer>
  );
};
export default ChallengeBox;
