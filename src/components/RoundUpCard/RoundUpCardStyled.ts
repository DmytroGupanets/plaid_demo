import styled from 'styled-components'

export const RoundUpCardStyled = styled.div`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;
  background-color: #041754;

  border-radius: 12px;
  margin-bottom: 15px;

  box-shadow: 10px 9px 16px -3px rgba(1, 50, 150, 0.58);
  -webkit-box-shadow: 10px 9px 16px -3px rgba(1, 50, 150, 0.58);
  -moz-box-shadow: 10px 9px 16px -3px rgba(1, 50, 150, 0.58);

  color: white;

  p {
    margin: 0px;
  }

  .topContainer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .iconNameWrapper {
    display: flex;
    align-items: center;
  }

  .name {
   margin-left: 10px;
  }

  .total {
    margin-top: 10px;
  }

  .midContainer {
    margin-bottom: 10px;
  }

  .historyDropDown {
    margin-top: 10px;
    border-radius: 12px;
    background-color: #376cde;
  }

  .historyColumn {
    display: flex;
    justify-content: space-around;
  }

  .historyOption {
    margin-right: 10px;
    font-size: 12px;
  }
`
