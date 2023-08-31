import React, {useState,useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import heroImg from '../assets/images/hero-img.png';
import '../Styles/home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import products from '../assets/data/products'

const Home = () => {



const [trendingProducts, setTrendingProducts] = useState([]);
const [bestSalesProducts, setBestSalesProducts] = useState([]);
useEffect(()=>{
  const filteredTrendingProducts = products.filter
  (item =>item.category === 'chair');
  const filteredbestSalesProducts = products.filter
  (item =>item.category === 'sofa');

  setTrendingProducts(filteredTrendingProducts);
  setBestSalesProducts(filteredbestSalesProducts);
}, []);




  const year = new Date().getFullYear();
  return <Helmet title={'Home'}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">Trending Products in {year}</p>
              <h2>Make Your Interiors More Aesthetic & Modern</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ipsa quaerat neque ut assumenda dolore molestiae odit cupiditate dolores fugit?</p>
              <motion.button whileTap={{scale: 1.2}} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Services/>

    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Trending Products</h2>
            <ProductsList data={trendingProducts}/>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="best__sales">
      <Container>
      <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Best Sales</h2>
          <ProductsList data={bestSalesProducts}/>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home