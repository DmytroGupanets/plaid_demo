import styled from 'styled-components'

export const NavBarStyled = styled.div`
  .button {
    margin-top: 10px;
    padding: 5px 10px;

    color: white;
    background: linear-gradient(132.32deg, #5f7df1 4.26%, #3055ec 100%);
    border: none;
    border-radius: 5px;

    cursor: pointer;

    &:not(:first-child) {
      margin-left: 10px;
    }

    &:first-child {
      background: #05940d;
    }

    &:last-child {
      background: #eb4646;
    }

    &:hover,
    &:focus {
      background: linear-gradient(132.32deg, #375ade 4.26%, #2246d6 100%);
    }
  }
`
