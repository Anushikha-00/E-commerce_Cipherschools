import React from 'react';
import './Home.css';
import Product from './Category';
function Home() {
    return (
        <div className="home">
         <div className="home__container">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/GW/Unrec/Heros/under_1999_Tallhero_3000x1200._CB634376407_.jpg"
                alt=""
                className="home__image" />

            <div className="home__row">
                <Product
                    id={12312}
                    title="Men's Clothing"
                    price={199.00}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"
                />
                <Product
                    id={12312}
                    title="Women's Clothing"
                    price={4051.00}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/417wp10uSeL.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id={12312}
                    title="Electronics"
                    price={883.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81ghNg%2BDC9L._SL1500_.jpg"
                />
                <Product
                    id={12312}
                    title="Jewellery"
                    price={950.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51imLrht6lL._SX389_BO1,204,203,200_.jpg"
                />
                <Product
                    id={12312}
                    title="Kitchen Appliances"
                    price={140.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41EsI0Fsf1L.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id={12312}
                    title="Laptops"
                    price={710.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61jj-MeJbvL._SL1200_.jpg"
                />
            </div>
        </div>
        </div>
    );
}

export default Home