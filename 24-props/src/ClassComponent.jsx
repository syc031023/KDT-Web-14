import { Component } from "react";
import PropTypes from "prop-types";

export default class ClassComponent extends Component {
    // 클래스형 컴포넌트는 render함수 필수
    render() {
        const student = "길동";
        const { name } = this.props;
        return (
            <div>
                <div>{name}</div>
                <div>{this.props.name}</div>
            </div>
        )
    }

    // static defaultProps = {
    //     name: "철수",
    // }

    static propTypes = {
        name: PropTypes.number,
    }
}

ClassComponent.defaultProps = {
    name: "철수",
};

ClassComponent.propTypes = {
    name: PropTypes.string.isRequired,
}

