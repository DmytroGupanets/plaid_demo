import styled from 'styled-components'

export const RecTypeCardStyled = styled.div`
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

  .otherInfoWrapper {
    padding: 10px 20px;
    background-color: #072586;
    border-radius: 12px;
  }

  .label {
    font-family: 'Mingzat', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
    color: #ffffff;
    margin: 0;
    margin-bottom: 10px;
  }

  .value {
    font-weight: 400;
  }

  .iconRaw {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .iconWrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 30px;
    background-color: #ffffff;
    margin-left: 15px;
    border-radius: 50%;
    transform: ${({ expandRecType }) =>
      expandRecType ? 'rotate(180deg)' : 'rotate(0deg)'};

    cursor: pointer;

    &:hover {
      background-color: #6f90af;
    }
  }
`
