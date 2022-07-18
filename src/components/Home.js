import React from 'react';
import './Home.css';
import Product from './Product';
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
                    image="https://getketchadmin.getketch.com/product/8905404323248/660/KHSH000336_1.jpg"
                />
                <Product
                    id={12312}
                    title="Women's Clothing"
                    price={4051.00}
                    rating={3}
                    image="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/g/g/gg-1001-1.jpg?rnd=20200526195200"
                />
            </div>
            <div className="home__row">
                <Product
                    id={12312}
                    title="Electronics"
                    price={883.00}
                    rating={5}
                    image="https://image.shutterstock.com/image-photo/top-view-designer-desk-600w-226428235.jpg"
                />
                <Product
                    id={12312}
                    title="Jewellery"
                    price={950.99}
                    rating={5}
                    image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQarXeC82I7bEMI29RIcamZqbjzxPkO6nW-VlVNI23HLaxHHev9e3glla93e8CrtjISfoGNPf3x2_ae&usqp=CAc"
                />
                <Product
                    id={12312}
                    title="Kitchen Appliances"
                    price={140.99}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNa1PEdXMVH_12Sghl2b0YF0-3vu-EtCPJHITpntmWiUVywjXO8a8wwH8hK9CnYaSydRM&usqp=CAU"
                />
            </div>
            <div className="home__row">
                <Product
                    id={12312}
                    title="Laptops"
                    price={710.99}
                    rating={5}
                    image="https://image.shutterstock.com/image-photo/top-view-designer-desk-600w-226428235.jpg"
                />
            </div>
        </div>
        </div>
    );
}

export default Home