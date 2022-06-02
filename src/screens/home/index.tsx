import CompletedChallenges from "../../components/CompletedChallenges";
import ExperienceBar from "../../components/ExperienceBar";
import Profile from "../../components/Profile";
import { Container, LeftContainer } from "../../styles/containers";

const HomeScreen = () => (
    <Container>
      <ExperienceBar />

      <LeftContainer>
        <div>
          <Profile />
          <CompletedChallenges />
        </div>
        <div></div>
      </LeftContainer>
    </Container>
  )

  export default HomeScreen
