import styled from 'styled-components'

export const AdditionalInfoModalStyled = styled.div`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;
  color: white;
  background-color: #041754;


  .form_container {
      display: flex;
      flex-direction: column;
  }

  .form_label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    font-size: 16px;
    font-weight: 500;
  }

  .form_input {
      width: 300px;
    padding: 5px;
    border: 1px solid #04429ed8;
    border-radius: 5px;
  }

  .form_createBtn {
    margin-top: 50px;
    min-height: 45px;
    padding: 10px;
    width: 100%;
    outline: none !important;
    border: none;

    font-style: normal;
    font-weight: 500;
    font-size: 17px;

    background: $purple8;
    margin-bottom: 10px;
    color: black;

    border-radius: 12px;
    width: auto;
    cursor: pointer;

    color: white;
    background: linear-gradient(132.32deg, #5f7df1 4.26%, #3055ec 100%);
    border: none;

    &:hover,
    &:focus {
      background: #5b79f0;
    }
}
`