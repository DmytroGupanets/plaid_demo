import styled from 'styled-components'

export const AccountCardStyled = styled.div`
  position: relative;
  width: 400px;
  padding: 10px;
  background-color: rgb(4, 7, 8);
  border-radius: 12px;
  margin-bottom: 15px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transform: scaleX(1);

  &:hover {
    -webkit-box-shadow: 0px 0px 15px 4px rgba(0, 7, 56, 0.4);
    -moz-box-shadow: 0px 0px 15px 4px rgba(0, 7, 56, 0.4);
    box-shadow: 0px 0px 15px 4px rgba(0, 7, 56, 0.4);
  }

  .contentContainer {
    display: flex;
  }

  .accountLogo {
    width: 70px;
    height: 70px;
  }

  .topContainer {
    display: flex;
    justify-content: space-between;
  }

  .content {
    margin-left: 10px;
  }

  .preffered {
    background-color: rgba(11, 37, 182, 0.781);
  }

  .logo {
    text-align: end;
    color: white;
    font-size: large;
    font-weight: 700;
    margin: 0;
  }

  .servicer {
    color: white;
    font-size: large;
    font-weight: 700;
    margin: 0;
  }

  .description {
    color: white;
    margin: 0;
    margin-bottom: 10px;
  }

  .interest {
    color: white;
    margin: 0;
  }

  .principal {
    color: white;
    margin: 0;
  }

  .id {
    color: white;
    font-size: 10px;
    margin: 0;
    text-align: end;
  }
`
