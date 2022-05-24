import PropTypes from 'prop-types';

const Item = (prop) => {
    return (<li>{prop.title}<span> - </span>{prop.cash}</li>)
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    cash: PropTypes.number.isRequired
}
export default Item;