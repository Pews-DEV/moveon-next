import * as S from './styles'

const ExperienceBar = () => {
    return (
        <S.XPBarHeader>
            <S.XPBarSpan>0 xp</S.XPBarSpan>
            <S.XPBarDiv>
                <S.XPBarInternalDiv style={{ width: '50%' }} />
                <S.XPBarCurrentXP className="current-experience" style={{ left: '50%' }}>
                    300 xp
                </S.XPBarCurrentXP>
            </S.XPBarDiv>
            <S.XPBarSpan>600 xp</S.XPBarSpan>
        </S.XPBarHeader>
    )
}
export default ExperienceBar
