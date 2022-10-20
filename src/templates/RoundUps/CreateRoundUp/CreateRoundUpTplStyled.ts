import styled from 'styled-components'

export const RoundUpsTemplateStyled = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;

  .switch_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .switch_text {
    font-size: 12px;
    opacity: 0.7;
  }

  .buttonWrapper {
    display: flex;
    justify-content: space-between;
  }

  .mainWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .typeTitle {
    margin: 0px 0px 20px;
    font-weight: 500;
  }

  .cardWrapper {
    background-color: #25668057;
    padding: 10px;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  .explanation {
    margin: 10px 0px 0px;
    font-size: 14px;
  }

  .btnWrapper {
    display: flex;
    justify-content: space-between;
  }

  .button {
    margin-top: 10px;
    padding: 10px 10px;

    color: white;
    background: linear-gradient(132.32deg, #5f7df1 4.26%, #3055ec 100%);
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &:not(:first-child) {
      margin-left: 10px;
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
