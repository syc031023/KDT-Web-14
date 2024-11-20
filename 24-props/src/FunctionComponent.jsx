import PropTypes from "prop-types";

// export default function FunctionComponent(props) {
//     return <div>{prop.name}</div>
// }

// export default function FunctionComponent({name = "홍길동"}) {
//     return <div>{name}</div>
// }

export default function FunctionComponent({name}) {
    return <div>{name}</div>
}

FunctionComponent.defaultProps = {
    name: "철수",
}

FunctionComponent.propTypes = {
    name: PropTypes.string,
}
