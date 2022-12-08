import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { compareState } from '../../../features/compare.slice';
import style from './compareButton.module.scss'

const CompareButton = () => {
    const dispatch = useDispatch()
    const compare = useSelector((state) => state.compare.products)
    const active = useSelector((state) => state.compare.active)
    console.log(compare);

    const handleActive = () => {
        dispatch(compareState(!active))
    }

    return (
        <div>
            <button className={active ? style.btn_active : style.btn} onClick={handleActive}>{active ? '✕' : "СРАВНИТЬ"}</button>
            {!active && compare.length && <span className={style.count}>{compare.length}</span>}
        </div>
    );
};

export default CompareButton;