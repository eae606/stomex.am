import React, { useState } from 'react';
import './ShopSection.css';
import { useTranslation } from 'react-i18next';
import 'antd/dist/reset.css';
import Star from './../Star/Star';
import NextPage from './../NextPage/NextPage';
import Footer from '../Footer/Footer';


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
    {
        id: 9,
        title: 'Աղեղ Co-Cr Edgewise-Multiphase Blue ',
        desc: 'քսանմեկնորդական համաձուլվածք AO',
        price: 1450,
        image: '/img/product1.png',
        rating: 5,
    },
    {
        id: 10,
        title: 'Աղեղ Co-Cr Edgewise-Multiphase Blue ',
        desc: 'քսանմեկնորդական համաձուլվածք AO',
        price: 1200,
        image: '/img/product2.png',
        rating: 4,
    },
    {
        id: 11,
        title: 'Աղեղ Co-Cr Edgewise-Multiphase Blue ',
        desc: 'քսանմեկնորդական համաձուլվածք AO',
        price: 950,
        image: '/img/product3.png',
        rating: 3,
    },
    {
        id: 12,
        title: 'Աղեղ Co-Cr Edgewise-Multiphase Blue ',
        desc: 'քսանմեկնորդական համաձուլվածք AO.',
        price: 2500,
        image: '/img/product4.png',
        rating: 5,
    },
    {
        id: 13,
        title: 'Աղեղ Co-Cr Edgewise-Multiphase Blue ',
        desc: 'քսանմեկնորդական համաձուլվածք AO',
        price: 1450,
        image: '/img/product1.png',
        rating: 5,
    },
    {
        id: 14,
        title: 'Աղեղ Co-Cr Edgewise-Multiphase Blue ',
        desc: 'քսանմեկնորդական համաձուլվածք AO',
        price: 1200,
        image: '/img/product2.png',
        rating: 4,
    },
    {
        id: 15,
        title: 'Աղեղ Co-Cr Edgewise-Multiphase Blue ',
        desc: 'քսանմեկնորդական համաձուլվածք AO',
        price: 950,
        image: '/img/product3.png',
        rating: 3,
    },
    {
        id: 16,
        title: 'Աղեղ Co-Cr Edgewise-Multiphase Blue ',
        desc: 'քսանմեկնորդական համաձուլվածք AO.',
        price: 2500,
        image: '/img/product4.png',
        rating: 5,
    },
];

const ShopSection = ({ onAddToCart, onAddToFavorites }) => {
    const { t } = useTranslation();
    const [sortedProducts, setSortedProducts] = useState(products);
    const [selectedOption, setSelectedOption] = useState(t('Ըստ նախնականի'));

    const sortByPriceAsc = () => {
        const sorted = [...products].sort((a, b) => a.price - b.price);
        setSortedProducts(sorted);
    };

    const sortByPriceDesc = () => {
        const sorted = [...products].sort((a, b) => b.price - a.price);
        setSortedProducts(sorted);
    };

    const handleSortChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);

        if (value === t('Գնի ըստ աճման')) {
            sortByPriceAsc();
        } else if (value === t('Գնի ըստ նվազման')) {
            sortByPriceDesc();
        } else if (value === t('Ըստ նախնականի')) {
            setSortedProducts(products);
        }
    };

    return (
        <section className="shopSection_section">
            <div className="section_information_style">
                <div className="first-section__wrapper">
                    <div className="first-section__banner first-section__banner--left">
                        <img src="/img/left-banner.png" alt="Left Banner" />
                    </div>

                    <div className="first-section__products">

                        <div className="alfaStom__information_div">
                            <img src="/img/AlfaIcon.png" alt="Alfa Stom Logo" className="logo" />
                            <div className="text-content">
                                <h2>{t('Alfa Stom')}</h2>
                                <p>{t('Գործունեություն՝ Ստոմատոլոգիական, առօրյաօգտագործման, ատամնատեխնիկական նյութերի և սարքավորումների վաճառք')}</p>
                                <p>{t('Հասցե՝ Փարպեցի 28/2, Երևան, Հայաստան')}</p>
                                <p>{t('Հեռ․՝ (+374) 010 27 92 27')}</p>
                                <p>{t('Աշխ․ ժամեր՝ Երկուշաբթի - Շաբաթ՝ 10:00 - 22:00')}</p>
                            </div>
                        </div>

                        <div className="myShop__list">
                            <div className="shop-header">
                                <select className="sort-select" value={selectedOption} onChange={handleSortChange}>
                                    <option>{t('Ըստ նախնականի')}</option>
                                    <option>{t('Անվանումը Ա-Ֆ')}</option>
                                    <option>{t('Անվանումը Ֆ-Ա')}</option>
                                    <option>{t('Գնի ըստ աճման')}</option>
                                    <option>{t('Գնի ըստ նվազման')}</option>
                                    <option>{t('Գնահատականի ըստ աճման')}</option>
                                    <option>{t('Գնահատականի ըստ նվազման')}</option>
                                    <option>{t('Վաճառողը Ա-Ֆ')}</option>
                                    <option>{t('Վաճառողը Ֆ-Ա')}</option>
                                </select>
                                <div className="view-buttons">
                                    <button className="view-button active">
                                        <div className="icon-grid">
                                            <div></div><div></div><div></div>
                                            <div></div><div></div><div></div>
                                            <div></div><div></div><div></div>
                                        </div>
                                    </button>
                                    <button className="view-button">
                                        <div className="icon-list">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="first-section__cards">
                            {sortedProducts.map((product) => (
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
                                                onClick={() => {
                                                    onAddToCart(product.price);
                                                    onAddToFavorites(product);
                                                }}
                                            >
                                                {t('ԱՎԵԼԱՑՆԵԼ')}
                                            </button>
                                            <div className="heart_info_two" onClick={() => onAddToFavorites(product)}>
                                                <img src="/img/heartIcon_two.png" alt="Heart Icon" title="heartIcon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="first-section__banner first-section__banner--right">
                        <img src="/img/right-banner.png" alt="Right Banner" />
                    </div>

                </div>
                <div className="nextPage__div">
                    <NextPage />
                </div>

            </div>
            <div className="myMap_container_two">
                <div className="myMap_container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48778.035401575886!2d44.46117003081869!3d40.172853059923945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2z0JXRgNC10LLQsNC9!5e0!3m2!1sru!2sam!4v1745833055358!5m2!1sru!2sam"
                        width="100%"
                        height="200"
                        style={{ border: "0" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className="footer_shop_section">
                <Footer />
            </div>
        </section>
    );
};

export default ShopSection;
