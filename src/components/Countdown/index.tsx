import * as S from './styles'

const Countdown = () => {
    return (
        <S.CountdownContainer>
            <S.CountdownCouter>
                <S.CountdownNubers>2</S.CountdownNubers>
                <S.CountdownNubers>5</S.CountdownNubers>
            </S.CountdownCouter>
            <S.CountdownTwoDots>:</S.CountdownTwoDots>
            <S.CountdownCouter>
                <S.CountdownNubers>0</S.CountdownNubers>
                <S.CountdownNubers>0</S.CountdownNubers>
            </S.CountdownCouter>
        </S.CountdownContainer>
    )
}
export default Countdown
