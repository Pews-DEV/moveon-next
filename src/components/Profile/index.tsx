import * as S from './styles'

const Profile = () => {
    return (
        <S.ProfileContainer>
            <S.ProfileIMG src="https://github.com/pews-dev.png" alt="Pedro Henrique" />
            <S.ProfileInfo>
                <S.ProfileTitle>Pedro Henrique</S.ProfileTitle>
                <S.ProfileLevel>
                    <S.ProfileLevelIMG src="icons/level.svg" alt="Level" />
                    Level 01
                </S.ProfileLevel>
            </S.ProfileInfo>
        </S.ProfileContainer>
    )
}
export default Profile
