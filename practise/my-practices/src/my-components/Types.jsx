import PropTypes from "prop-types";

export function Types (props){

    return (
        <>
            <p>{props.name} {props.age} yaşındadır.</p>
        </>
    )
}

Types.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

Types.defaultProps = {
    name: "Can",
    age: 45
}