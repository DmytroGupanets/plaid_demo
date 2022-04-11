import React from 'react';
import styles from './Button.module.scss';
import { IButton } from './I_Button';
import preloader from '../../assets/images/icons/loading.svg';
import cx from 'classnames';


const Button: React.FC<IButton> = ({ className, style, isSelected, focus, last, theme, onClick, isPreloader, isDizActiveButton, ...props }) => {

    const dynamicStyle = {
        [styles.Button__fill]: theme === 'fill',
        [styles.Button__notFill]: theme === 'notFill',
        [styles.Button__notFill_coral]: theme === 'notFill_coral',
        [styles.Button__notFill_purple]: theme === 'notFill_purple',
        [styles.Button__notFill_white]: theme === 'notFill_white',
        [styles.Button__notFill_blue]: theme === 'notFill_blue',
        [styles.Button__notFill_lightPurple]: theme === 'notFill_lightPurple',
        [styles.Button__hover_red]: theme === 'hover_red',
        [styles.Button__hover_green]: theme === 'hover_green',
        [styles.Button__hover_yellow]: theme === 'hover_yellow',
        [styles.Button__hover_violet]: theme === 'hover_violet',
        [styles.Button__bg_green]: theme === 'bg_green',
        [styles.Button__focus]: focus,
        [styles.Button__isSelected]: isSelected,
        [styles.Button__last]: last,
        [styles.Button_loading]: isPreloader,
        [styles.Button__isDizActiveButton]: isDizActiveButton,
    }

    return (
        <button
            style={style}
            onClick={() => onClick()}
            className={cx(styles.Button, dynamicStyle, className)}

        >
            {isPreloader && <img src={preloader} alt="preloader" />}
            {props.children}
        </button>
    );
};

export default Button;