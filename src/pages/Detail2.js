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
        margin: '0 5px'
    }


    return (
        <>
            <img src={match.image_link} onError={e => e.target.src = process.env.PUBLIC_URL + '/assets/images/main_m01.jpg'} alt="" />
            <div>{match.name}</div>
            <div>{match.description.substring(0, 30)} ...</div>
            <div>{match.price}</div>
            <ul>
                {
                    match.product_colors.map(color => <li style={{ ...liStyle, background: color.hex_value }}>color</li>)
                }
            </ul>
        </>
    )
}

export default Detail;