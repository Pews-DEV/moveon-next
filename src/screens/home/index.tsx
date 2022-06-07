import ChallengeBox from "../../components/ChallengeBox";
import CompletedChallenges from "../../components/CompletedChallenges";
import Countdown from "../../components/Countdown";
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
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </LeftContainer>
    </Container>
  )

  export default HomeScreen
