import styled from "styled-components";

const WrapperWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  /* overflow: hidden; */
  height: 100%;
`;

export default function Wrapper({ children }) {
  return <WrapperWrapper>{children}</WrapperWrapper>;
}
