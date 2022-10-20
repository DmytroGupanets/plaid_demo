import styled from 'styled-components'

export const InfoGraphicStyled = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 1px 30px 7px rgba(255, 255, 255, 0.75);
  -webkit-box-shadow: 0px 1px 30px 7px rgba(255, 255, 255, 0.75);
  -moz-box-shadow: 0px 1px 30px 7px rgba(255, 255, 255, 0.75);

  .headContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Nunito', sans-serif;

    & h2 {
      margin: 0;
      line-height: 1.11;
      color: ${({ isLoading }) => (isLoading ? '#56567c' : '#000018')};
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
  }

  .subtitle {
    font-family: 'Nunito', sans-serif;
    text-align: center;
  }

  .midContainer {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 20px;
  }

  .lowContainer {
    width: 500px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
  }

  .otherInfoBlock {
    margin-top: 50px;

    &_title {
      font-family: 'Nunito', sans-serif;
      margin: 0;
    }

    &_list {
      list-style: square;

      & li:nth-child(3n + 3) {
        margin-bottom: 10px;
      }
    }

    &_label {
      font-family: 'Mingzat', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.4;
      color: #303030;
      margin: 0;
    }

    &_value {
      font-weight: 600;
    }

    .green {
      color: #05550a;
    }

    .red {
      color: #a71717;
    }
  }
`
