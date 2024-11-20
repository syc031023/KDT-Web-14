import { Component } from "react";
import PropTypes from "prop-types";

// export default class ShowConsole extends Component {
//     render() {
//         const { text, valid } = this.props;

//         return (
//             <div>
//                 <h2>{text}</h2>
//                 <button type="button" onClick={valid}>콘솔 메시지</button>
//             </div>
//         )
//     }
// }

export default function ShowConsole({ text = "이건 기본 text props입니다.", valid }) {
    return (
        <div>
            <h2>{text}</h2>
            <button type="button" onClick={valid}>콘솔 메시지</button>
        </div>
    )
}

ShowConsole.defaultProps = {
    text: "이건 기본 text props입니다.",
};

ShowConsole.propTypes = {
    name: PropTypes.string.isRequired,
}