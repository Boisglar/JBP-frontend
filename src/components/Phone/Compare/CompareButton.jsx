import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { compareState } from '../../../features/compare.slice';
import style from './compareButton.module.scss'

const CompareButton = () => {
    const dispatch = useDispatch()
    const active = useSelector((state) => state.compare.active)

    const handleActive = () => {
        dispatch(compareState(!active))
        console.log(active);
    }

    return (
        <div className={style.btn}>
            <button onClick={handleActive}>СРАВНИТЬ</button>
        </div>
    );
};

export default CompareButton;