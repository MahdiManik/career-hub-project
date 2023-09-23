
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div>
            
        </div>
    );
};

Products.propTypes = {
    
};

export default Products;