import React from "react";
import styles from "./styles/cssModule.module.css";

// CSS Module
// - 클래스명 중복 방지
// - css 파일 확장자: .module.css (단, CRA로 만든 프그젝트에서)
// - 리엑트 컴포넌트에서 해당 CSS 파일을 불러올 때 CSS 파일에 선언한 클래스 이름들이 모두 고유해짐
// - 고유 CSS 클래스 이름이 만들어지는 과정에서는 파일 경로, 파일 이름, 클래스 이름, 해쉬값 등이 사용될 수 있음

export default function CssModuleComponent() {
    console.log(styles);
    return(
        <div className={styles.container}>
            <div className={[styles.box, styles.red].join(" ")}></div>
            <div className={[styles.box, styles.orange].join(" ")}></div>
            <div className={`${styles.yellow} ${styles.box}`}></div>
        </div>
    );
}