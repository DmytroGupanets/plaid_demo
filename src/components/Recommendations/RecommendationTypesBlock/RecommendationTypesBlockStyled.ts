import styled from 'styled-components';

export const RecommendationTypesBlockStyled = styled.div`
  margin-top: 20px;
  padding: 20px;
  max-width: 860px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 1px 30px 7px rgba(255, 255, 255, 0.75);
  -webkit-box-shadow: 0px 1px 30px 7px rgba(255, 255, 255, 0.75);
  -moz-box-shadow: 0px 1px 30px 7px rgba(255, 255, 255, 0.75);

  .topContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    font-family: 'Nunito', sans-serif;
    font-size: 24px;
    font-weight: 700;
    text-align: start;
    color: ${({ isLoading }) => (isLoading ? '#56567c' : '#000018')};
    margin: 0;
  }

  .cardsWrapper{
    display: flex;
    flex-wrap: wrap;
  }
`