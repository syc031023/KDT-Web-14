import PropTypes from "prop-types";

export default function FavoriteFood({name}) {
    const foodStyle = {
        color: "red",
    }

    return <div>내가 제일 좋아하는 음식은 <span style={foodStyle}>{name}</span></div>
}

FavoriteFood.defaultProps = {
    name: "김치볶음밥",
}

FavoriteFood.propTypes = {
    name: PropTypes.string,
}