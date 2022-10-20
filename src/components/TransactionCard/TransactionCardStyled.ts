import styled from 'styled-components'

export const TransactionCardStyled = styled.div`
  width: 540px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;
  background-color: ${({ isIncome }) => isIncome ? '#a62e19' : '#041754'};

  border-radius: 12px;
  margin-bottom: 15px;

  box-shadow: 10px 9px 16px -3px rgba(1, 50, 150, 0.58);
  -webkit-box-shadow: 10px 9px 16px -3px rgba(1, 50, 150, 0.58);
  -moz-box-shadow: 10px 9px 16px -3px rgba(1, 50, 150, 0.58);

  color: white;

  p {
    margin: 0px;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .cardHeader {
  }

  .line{
    padding-left: 10px;
    display: flex;
    color: #eaf516;
  }

  .value{
    padding-left: 10px;
    font-weight: 600;
    color: #242423;
    overflow-wrap: break-word;
    width: 370px;
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
