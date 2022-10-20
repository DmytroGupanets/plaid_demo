import styled from 'styled-components'

export const TransactionsStyled = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;

  

  .create_button {
    margin-top: 10px;
    padding: 10px 10px;

    color: white;
    background: linear-gradient(132.32deg, #5f7df1 4.26%, #3055ec 100%);
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;


    &:hover,
    &:focus {
      background: linear-gradient(132.32deg, #375ade 4.26%, #2246d6 100%);
    }
  }

  .button + .button {
    margin-left: 10px;
  }
`
