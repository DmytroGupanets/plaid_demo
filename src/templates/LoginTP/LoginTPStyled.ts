import styled from 'styled-components'

export const LoginTPStyled = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 40px;
  width: 400px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);

  border-radius: 5px;

  .title {
    font-family: 'Nunito', sans-serif;
    font-size: 30px;
    font-weight: 700;
  }

  .formWrapper {
    font-family: 'Mingzat', sans-serif;
    color: #414244;
    font-size: 18px;
    line-height: 1;
    padding-top: 50px;
  }

  .box {
    position: relative;
    width: 100%;
    margin-bottom: 30px;
  }

  .input {
    display: block;
    height: 40px;
    width: 100%;
    outline-style: none;
    padding-left: 30px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;

    cursor: pointer;
  }

  .label {
    position: absolute;
    left: 40px;
    bottom: 11px;

    transition: transform 750ms cubic-bezier(0.4, 0, 0.2, 1),
      color 750ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .input:focus + label,
  .input:not(:placeholder-shown) + .label {
    transform: translate(-30px, -33px);
    color: var(--accent-text-color);
  }

  .input:focus,
  .input:not(:placeholder-shown) {
    border-color: #2196f3;
  }

  .buttonWrapper {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
`
