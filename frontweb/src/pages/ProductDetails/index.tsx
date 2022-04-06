import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';
import './styles.css';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  return (
    <div className="product-details-container">
      <div className="base-card product-details-card">
        <Link to="/products">
        <div className="goback-container">
            <ArrowIcon /> 
            <h2>VOLTAR</h2>
        </div>
        </Link>
      </div>
     
      <div className="row">
        <div className="col-xl-6"></div>
        <div className="img-container">
            <img src="https://raw.githubusercontent.com/jhessicaklier/dscatalog-resource/master/backend/img/2-big.jpg" alt="Nome do Produto" />
        </div>
        <div className="name-price-container">
            <h1>Nome do Produto</h1>
            <ProductPrice price={2345.67} />
        </div>
        <div className="col-xl-6">
          <div className="description-container">
              <h2>Descriçao do produto</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, esse.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
