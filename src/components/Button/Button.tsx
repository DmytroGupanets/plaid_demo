/* eslint-disable @next/next/no-img-element */
import React from 'react';
import preloader from '../../assets/images/icons/loading.svg';
import { ButtonStyled } from './ButtonStyled';

interface IButton {
    onClick: () => void,
    isPreloader?: any,
    theme?: string,
    isDizActiveButton?: any,
    wideButton?: boolean,
    focus?: boolean,
    style?: any,
    type?: string,
    children?: any
}

const Button = ({ style, onClick, isPreloader, isDizActiveButton, wideButton, ...props }: IButton) => {



    return (
        <ButtonStyled wideButton={wideButton}>
            <button
                onClick={() => onClick()}
                className='button'
                style={style}
            >
                {isPreloader && <img src={preloader} alt="preloader" />}
                {props.children}
            </button>
        </ButtonStyled>)
}

export default Button