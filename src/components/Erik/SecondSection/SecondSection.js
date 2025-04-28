import './SecondSection.css';
import 'antd/dist/reset.css';
import Star from './../Star/Star';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Աղեղ Co-Cr Edgewise-Multiphase Blue ',
        desc: 'քսանմեկնորդական համաձուլվածք AO',
        price: 1450,
        image: '/img/product1.png',
        rating: 5,
    },
    {
        id: 2,
        title: 'Աղեղ Co-Cr Edgewise-Multiphase Blue ',
        desc: 'քսանմեկնորդական համաձուլվածք AO',
        price: 1200,
        image: '/img/product2.png',
        rating: 4,
    },
    {
        id: 3,
        title: 'Աղեղ Co-Cr Edgewise-Multiphase Blue ',
        desc: 'քսանմեկնորդական համաձուլվածք AO',
        price: 950,
        image: '/img/product3.png',
        rating: 3,
    },
    {
        id: 4,
        title: 'Աղեղ Co-Cr Edgewise-Multiphase Blue ',
        desc: 'քսանմեկնորդական համաձուլվածք AO.',
        price: 2500,
        image: '/img/product4.png',
        rating: 5,
    },
    {
        id: 5,
        title: 'Աղեղ Co-Cr Edgewise-Multiphase Red ',
        desc: 'քսանմեկնորդական համաձուլվածք AO',
        price: 1550,
        image: '/img/product4.png',
        rating: 5,
    },
    {
        id: 6,
        title: 'Աղեղ Co-Cr Edgewise-Multiphase Green ',
        desc: 'քսանմեկնորդական համաձուլվածք AO',
        price: 1300,
        image: '/img/product1.png',
        rating: 4,
    },
    {
        id: 7,
        title: 'Աղեղ Co-Cr Edgewise-Multiphase Yellow ',
        desc: 'քսանմեկնորդական համաձուլվածք AO',
        price: 1150,
        image: '/img/product2.png',
        rating: 3,
    },
    {
        id: 8,
        title: 'Աղեղ Co-Cr Edgewise-Multiphase Purple ',
        desc: 'քսանմեկնորդական համաձուլվածք AO',
        price: 1600,
        image: '/img/product3.png',
        rating: 4,
    },
];

const SecondSection = ({ setFavoritesCountHeader }) => {
    const { t } = useTranslation();
    const [cartCount, setCartCount] = useState(0);
    const [favoritesCount, setFavoritesCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [successMessage, setSuccessMessage] = useState('');
    const [cartMessage, setCartMessage] = useState('');
    const [heartMessage, setHeartMessage] = useState('');

    const onAddToCart = (price) => {
        setCartCount(cartCount + 1);
        setCartTotal(cartTotal + price);
        setCartMessage('Դուք հաջողությամբ ավելացրել եք ապրանքը զամբյուղի մեջ');
        setTimeout(() => setCartMessage(''), 3000);
    };

    const onAddToFavorites = () => {
        setFavoritesCount(favoritesCount + 1);
        setFavoritesCountHeader(favoritesCount + 1);
        setHeartMessage('Դուք հաջողությամբ ավելացրել եք ապրանքը սիրվածների մեջ');
        setTimeout(() => setHeartMessage(''), 3000);
    };

    return (
        <section className="second-section">
            <div className="second-section__wrapper">
                <h2 className='x__Div'>{t("Խորհուրդ է տրվում")}</h2>
                <div className="first-section__cards">
                    {products.map((product) => (
                        <div className="product-card" key={product.id}>
                            <div className="product-card__new">{t('նոր')}</div>
                            <div className="product-card__rating">
                                <Star rating={product.rating} />
                            </div>
                            <div className="product-card__image">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="product_info_flex">
                                <div className="product-card__info">
                                    <h3 className="product-card__title">{t(product.title)}</h3>
                                    <p className="product-card__desc">{t(product.title)}</p>
                                </div>
                                <div className="product-card__price">{product.price} ֏</div>
                                <div className="product-card__actions">
                                    <div className="buy_info_two" onClick={() => onAddToCart(product.price)}>
                                        <img src="/img/buyIcon_two.png" alt="Buy Icon" title="buyIcon" />
                                    </div>
                                    <button
                                        className="buy-button"
                                        onClick={() => onAddToCart(product.price)}
                                    >
                                        {t('ԱՎԵԼԱՑՆԵԼ')}
                                    </button>
                                    <div className="heart_info_two" onClick={onAddToFavorites}>
                                        <img src="/img/heartIcon_two.png" alt="Heart Icon" title="heartIcon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {cartMessage && <div className="success-message">{cartMessage}</div>}
            {heartMessage && <div className="success-message">{heartMessage}</div>}


            {/* <div className="cart-info">
                <div className="cart-count">{cartCount}</div>
                <div className="cart-total">{cartTotal} ֏</div>
            </div> */}


            {/* <div className="heart-info">
                <div className="heart-count">{favoritesCount}</div>
            </div> */}
        </section>
    );
};

export default SecondSection;
