import React, { useEffect } from 'react';
import PhoneCard from './PhoneCard';
import { getPhone } from '../../../features/phone.slice'
import { useDispatch, useSelector } from 'react-redux'
import style from './Card.module.scss'
import CompareButton from '../Compare/CompareButton';
import ComparePhone from '../Compare/ComparePhone';

const PhoneCards = () => {
    const active = useSelector((state) => state.compare.active)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPhone())
    }, [dispatch])
    const phones = useSelector((state) => state.phones.phones)
    return (
        <div className={active ? style.Cards_active : style.Cards}>
            {phones.map((element, index) => <PhoneCard item={element} key={index}/>)}
            {!active && <CompareButton/>}
            {active && <ComparePhone/>}
        </div>
    );
};

export default PhoneCards;