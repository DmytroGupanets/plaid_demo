import styled from 'styled-components'

export const ChooseCheckingAccountStyled = styled.div`
  margin-top: 20px;
  padding: 20px;
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

  .subtitle {
    font-family: 'Mingzat', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    color: #303030;
    margin: 0;
    margin-bottom: 10px;

    &-warning {
      color: #d41406;
      font-weight: 500;
      text-decoration: underline;
    }
  }

  .openCloseBtn {
    margin: 0;
    min-height: 0;

    color: white;
    background: linear-gradient(132.32deg, #5f7df1 4.26%, #3055ec 100%);
    border: none;
    border-radius: 5px;

    cursor: pointer;

    &:hover {
      background: linear-gradient(132.32deg, #7a85b1 4.26%, #4060df 100%);
    }
  }
`
