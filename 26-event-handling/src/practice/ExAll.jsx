import React from 'react';
import {useState} from 'react';
import Select from './Select';
import Result from './Result';

export default function ExAll() {
    const img = [
        'https://img.hankyung.com/photo/202403/AA.36104679.1.jpg',
        'https://i.namu.wiki/i/dqWKCUVwNsWjXOC4w93zgD8lmNaWesoOIlbnt8wAiymHoXYivK9HSOhY5dCVym_-gElG9OsPqJuLHxxgHNc4Ew.webp',
        'https://pimg.mk.co.kr/meet/neds/2018/07/image_readtop_2018_437247_15312913213383859.jpeg'
    ];
    const [data, setData] = useState({
        fruit: img[0],
        background: "black",
        color: "white",
        content: "text",
    });

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Select setData={setData} img={img}></Select>
        <Result data={data} img={img}></Result>
    </div>
  )
}
