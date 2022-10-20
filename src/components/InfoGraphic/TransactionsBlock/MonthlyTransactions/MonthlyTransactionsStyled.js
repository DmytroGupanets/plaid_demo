import styled from 'styled-components'

export const MonthlyTransactionsStyled = styled.div`
  .monthContainer {
    background: linear-gradient(132.32deg, #49b345bc 4.26%, #24a020b7 100%);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 15px;
  }

  .monthTop {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(132.32deg, #49b345bc 4.26%, #24a020b7 100%);
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    margin-bottom: 15px;

    -webkit-box-shadow: -8px 8px 8px -2px rgba(34, 60, 80, 0.46);
    -moz-box-shadow: -8px 8px 8px -2px rgba(34, 60, 80, 0.46);
    box-shadow: -8px 8px 8px -2px rgba(34, 60, 80, 0.46);
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

    cursor: pointer;

    &:hover {
      background-color: #6f90af;
    }
  }

  .dropdownBtn {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-90deg)' : 'rotate(0deg)')};
  }

  .monthLabel {
    font-family: 'Mingzat', sans-serif;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
  }
`
