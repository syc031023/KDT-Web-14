import React from "react";
import logo from "./logo.svg"

export default function BookInformation(props) {
    return (
        <div className="bookInfo">
            <h2>이번주 베스트셀러</h2>
            {/* img가 src 폴터에 존재할 때 */}
            <img src={logo} alt="" />
            {/* img가 public 폴더에 존재할 때 */}
            <img src="/logo192.png" alt="" />
            <div className="bookDetail">
                <h3>{props.title}</h3>
                <p>저자: {props.author}</p>
                <p>판매가: {props.price}</p>
                <p>구분: {props.type}</p>
            </div>
        </div>
    )
}

BookInformation.defaultProps = {
    title: "나의 하루는 4시 40분에 시작된다.",
    author: "김유진",
    price: "13,500원",
    type: "자기계발서"
}