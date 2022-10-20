import styled from 'styled-components'

export const EntityCardStyled = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 1px 30px 7px rgba(255, 255, 255, 0.75);
  -webkit-box-shadow: 0px 1px 30px 7px rgba(255, 255, 255, 0.75);
  -moz-box-shadow: 0px 1px 30px 7px rgba(255, 255, 255, 0.75);

  .contentContainer {
    display: flex;
  }

  .content {
    margin-left: 30px;
  }

  .addressContainer {
    margin-left: 30px;
  }

  .labelInfo {
    font-weight: 500;
    color: #212121;
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

  .topContainer {
    display: flex;
    justify-content: space-between;
  }
`
