import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { compareState } from '../../../features/compare.slice';
import style from './compareButton.module.scss'

const CompareButton = () => {
    const dispatch = useDispatch()
    const active = useSelector((state) => state.compare.active)

    const handleActive = () => {
        dispatch(compareState(!active))
    }

    return (
        <div>
            <button className={active ? style.btn_active : style.btn} onClick={handleActive}>{active ? 'ЗАКРЫТЬ' : "СРАВНИТЬ"}</button>
        </div>
    );
};

export default CompareButton;