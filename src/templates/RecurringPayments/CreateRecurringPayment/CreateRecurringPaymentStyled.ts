import styled from 'styled-components'

export const CreateRecurringPaymentStyled = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;

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
    color: #040922d8;
  }

  .form_input {
    padding: 5px;
    border: 1px solid #04429ed8;
    border-radius: 5px;
  }

  .form_select {
    padding: 5px;
    border: 1px solid #04429ed8;
    border-radius: 5px;
  }

  .form_option {
    font-size: 16px;
  }

  span.form_label {
    margin: 0;
  }

  .form_time {
    margin-top: 10px;
  }

  .form_hours {
    padding: 5px;
    border: 1px solid #04429ed8;
    border-radius: 5px;
  }

  .form_minutes {
    margin-left: 10px;
    padding: 5px;
    border: 1px solid #04429ed8;
    border-radius: 5px;
  }

  .form_offset {
    padding: 5px;
    border: 1px solid #04429ed8;
    border-radius: 5px;
  }

  .form_inputsWrapper {
    margin-bottom: 15px;
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
