import Image from "next/image";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import { RichText } from "prismic-reactjs";

const TeamInfo = styled.div`
  h2 {
    text-align: center;
  }
  p {
    max-width: 780px;
    margin: 50px auto;
  }
`;

const TeamGrid = styled.div`
  max-width: 900px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  row-gap: 50px;
  column-gap: 50px;
  @media screen and (max-width: 768px) {
    row-gap: 30px;
    column-gap: 30px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  .team-thumb {
    h3,
    p {
      margin: 10px;
    }
  }
`;

export default function Team({ team }) {
  return (
    <Wrapper>
      <TeamInfo>
        <h2>{team.data.team[0].text}</h2>
        {RichText.render(team.data.about_the_team)}
      </TeamInfo>
      <TeamGrid>
        {team.data.body.map((t, i) => (
          <div key={i} className="team-thumb">
            <Image
              src={t.primary.headshot.url}
              alt={t.primary.name[0].text}
              layout="responsive"
              width="200"
              height="200"
            />
            <h3>{t.primary.name[0].text}</h3>
            <p>{t.primary.job_title[0].text}</p>
          </div>
        ))}
      </TeamGrid>
    </Wrapper>
  );
}
