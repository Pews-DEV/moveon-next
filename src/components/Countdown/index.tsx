import { useEffect, useState } from "react";

import * as S from "./styles";

const Countdown = () => {
  const [time, setTime] = useState(22 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    setActive(!active);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  return (
    <div>
      <S.CountdownContainer>
        <S.CountdownCouter>
          <S.CountdownNubers>{minuteLeft}</S.CountdownNubers>
          <S.CountdownNubers>{minuteRight}</S.CountdownNubers>
        </S.CountdownCouter>
        <S.CountdownTwoDots>:</S.CountdownTwoDots>
        <S.CountdownCouter>
          <S.CountdownNubers>{secondLeft}</S.CountdownNubers>
          <S.CountdownNubers>{secondRight}</S.CountdownNubers>
        </S.CountdownCouter>
      </S.CountdownContainer>

      <S.CountdownButton
        type="button"
        onClick={() => {
          startCountdown();
        }}
      >
        Iniciar um ciclo
      </S.CountdownButton>
    </div>
  );
};
export default Countdown;
