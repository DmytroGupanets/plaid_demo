import styled from 'styled-components';


export const ButtonStyled = styled.div`
.button {
  min-height: 45px;
  padding: 0px 20px;
  outline: none !important;
  border: none;

  font-style: normal;
  font-weight: 500;
  font-size: 17px;

  background: linear-gradient(132.32deg, #5f7df1 4.26%, #3055ec 100%);
  margin-bottom: 10px;
  color: #ffffff;

  border-radius: 12px;
  width: auto;

  cursor: pointer;

  &:hover {
      background: linear-gradient(132.32deg, #375ade 4.26%, #2246d6 100%);
    }

  img {
    height: 15px;
    margin-right: 15px;
  }

  


      /* background: #c5d0ff;
      background: #5bc3f0;
      background: #885bf0;
      background: #5b79f0;
      background: #c469ef; 
      background: #35d36b; */


  /* hover
      background-color: #eb4646;
      background-color: #35d36b;
      background-color: #e4c000;
      background-color: #ad39f3; */

  &__isDizActiveButton {
    pointer-events: none;
    background: linear-gradient(132.32deg, #5f7df1 4.26%, #3055ec 100%);
    opacity: 40%;
  }

  &__focus {
    background: linear-gradient(132.32deg, #5f7df1 4.26%, #3055ec 100%);
    border: 2px solid #43d2ff;
    box-sizing: border-box;
    filter: drop-shadow(0px 1px 4px #43d2ff);
  }

  &__isSelected {
    border: 2px solid #43d2ff;
    filter: drop-shadow(0px 1px 4px #43d2ff);
  }

  &__last {
    margin-bottom: 0;
  }

  &_loading {
    pointer-events: none;
  }
}
`