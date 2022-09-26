import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Detail = ({ list }) => {
    const { num } = useParams(); //문자열도 들어오고 숫자도 들어오고..여기에 들어오는 숫자는 따옴표에 싸진 숫자=문자열이어서 === num으로 하면 타입이 달라서 오류가 뜬다. 그래서 === Number(num) 숫자형으로 바꿔줘야함 또는 String(it.id) === num 문자형으로 바꿔서도 가능
    const match = list.find(it => String(it.id) == num);

    const liStyle = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        background: '#ddd',
        margin: '0 5px',
    }


    return (
        <>
            <img src={process.env.PUBLIC_URL + match.img} alt="" />
            <div>{match.name}</div>
            <div>{match.des.substring(0, 2)} ...</div>
            <div>{match.price} 원</div>
            <ul>
                {
                    match.color.map(color => <li style={{ ...liStyle, background: color }}>color</li>)
                }
            </ul>
        </>
    )
}

export default Detail;