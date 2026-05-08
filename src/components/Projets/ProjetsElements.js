import styled from "styled-components";

export const ProjetsContainer = styled.div`
  min-height: 860px;
  padding: 96px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    min-height: auto;
    padding: 80px 0;
  }
  @media screen and (max-width: 480px) {
    padding: 64px 0;
  }
`;

export const ProjetsHeader = styled.div`
  max-width: 720px;
  padding: 0 24px;
  margin: 0 auto 40px;
  text-align: center;
`;

export const ProjetsWrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  padding: 0 32px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjetsCard = styled.article`
  background: linear-gradient(180deg, #f0efef 0%, #cfcaca 100%);
  color: #010606;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  min-height: 390px;
  height: 100%;
  padding: 28px 24px 24px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.28);
  cursor: ${({ $interactive }) => ($interactive ? "pointer" : "default")};
  transition: transform 0.2s ease-in-out, border-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;

  &:hover {
    transform: ${({ $interactive }) =>
      $interactive ? "translateY(-5px)" : "none"};
    border-color: ${({ $interactive }) =>
      $interactive ? "#5f43b2" : "rgba(255, 255, 255, 0.16)"};
    box-shadow: ${({ $interactive }) =>
      $interactive
        ? "0 18px 36px rgba(95, 67, 178, 0.28)"
        : "0 10px 28px rgba(0, 0, 0, 0.28)"};
  }
`;

export const ProjetsLink = styled.a`
  height: 100%;
  color: inherit;
  display: block;
  text-decoration: none;
  border-radius: 8px;

  &:focus-visible {
    outline: 3px solid #8f71ff;
    outline-offset: 6px;
  }
`;

export const ProjetsIcon = styled.img`
  height: 136px;
  width: 136px;
  margin-bottom: 18px;
`;

export const ProjetsH1 = styled.h1`
  font-size: 2.25rem;
  color: #f5f3ff;
  line-height: 1.2;

  @media screen and (max-width: 480px) {
    font-size: 1.9rem;
  }
`;

export const ProjetsH2 = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 12px;
  text-align: center;
`;

export const ProjetsP = styled.p`
  font-size: 1rem;
  text-align: center;
  line-height: 1.55;
  margin-bottom: 22px;
`;

export const ProjetsIntro = styled.p`
  color: #c4c2c2;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 620px;
  margin: 12px auto 0;
`;

export const ProjetsCta = styled.span`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: #5f43b2;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 10px 14px;

  svg {
    font-size: 1rem;
  }
`;

export const ProjetsStatus = styled.span`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(1, 6, 6, 0.28);
  color: #252525;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 10px 14px;
`;

export const ProjetsTopline = styled.p`
  color: #5f43b2;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-align: center;
`;
