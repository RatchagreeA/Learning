import PropTypes from 'prop-types';

const Item = (prop) => {
    return (<li>{prop.title}<span></span>{prop.amount}</li>)
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}
export default Item;