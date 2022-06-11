import styled from "styled-components";

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Center>MEYER F.E. TECHNICAL</Center>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 60px;
  background-color: #016fb9;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #e9f1f7;
`;
