import { useEffect, useState } from "react";

import * as S from "./styles";

let countdownTimeout: NodeJS.Timeout;

const Countdown = () => {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time == 0) {
        setHasFinished(true);
        setIsActive(false);
    }
  }, [isActive, time]);

  return (
    <div>
      <S.CdContainer>
        <S.CdCouter>
          <S.CdNubers>{minuteLeft}</S.CdNubers>
          <S.CdNubers>{minuteRight}</S.CdNubers>
        </S.CdCouter>
        <S.CdTwoDots>:</S.CdTwoDots>
        <S.CdCouter>
          <S.CdNubers>{secondLeft}</S.CdNubers>
          <S.CdNubers>{secondRight}</S.CdNubers>
        </S.CdCouter>
      </S.CdContainer>

      { hasFinished ? (
        <S.CdButton
        disabled
        >
          Ciclo encerrado
        </S.CdButton>
      ) : (
        <>
          { isActive ? (
          <S.CdBtnActive
          type="button"
          onClick={() => {
            resetCountdown();
          }}
          >
            Abandonar um ciclo
          </S.CdBtnActive>
          ) : (
            <S.CdButton
            type="button"
            onClick={() => {
              startCountdown();
            }}
            >
              Iniciar um ciclo
            </S.CdButton>
          )}
        </>
      )}

      
    </div>
  );
};
export default Countdown;
