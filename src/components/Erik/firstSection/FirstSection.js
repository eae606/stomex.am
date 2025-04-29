import './FirstSection.css';
import 'antd/dist/reset.css';
import Star from './../Star/Star';
import { useTranslation } from 'react-i18next';

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
];

const FirstSection = ({ onAddToFavorites, onAddToCart }) => {
    const { t } = useTranslation();
    return (
        <section className="first-section">
            <div className="first-section__wrapper">
                <div className="first-section__banner first-section__banner--left">
                    <img src="/img/left-banner.png" alt="Left Banner" />
                </div>

                <div className="first-section__products">
                    <h2 className="first-section__title">{t('ՆՈՐՈՒԹՅՈՒՆՆԵՐ')}</h2>

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
                                            onClick={() => {
                                                onAddToCart(product.price);
                                                onAddToFavorites();
                                            }}
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
                        <div className="second_information_cards">
                            <div className="content_information_text">
                                <h2 className='content_information_text_title'>{t("Խանութներ")}</h2>
                            </div>

                            <div className="content_information_cards">
                                <div className="mycards">
                                    <div className="logo_one">
                                        <img src='/img/logo_first.png' alt="Logo One" title='Alfa Stom'/>
                                    </div>
                                    <div className="logo_second">
                                        <img src='/img/logo_second.png' alt="Logo Second" title='ArmDental' />
                                    </div>
                                    <div className="logo_third">
                                        <img src='/img/logo_third.png' alt="Logo Third" title='DentaxLogo' />
                                    </div>
                                </div>
                            </div>

                            <div className="content_information_cards_text">
                                <div className="mycards_text">
                                    <div className="logo_one_text">
                                        <h3>Alfa Stom</h3>
                                        <p className='logo_one_text_desc'>
                                            {t("Գործունեություն՝  Ստոմատոլոգիական, ատամնատեխնիկական նյութերի և սարքավորումների վաճառք Հասցե՝  Պռոշյան 28/2, Երևան, Հայաստան Հեռ.՝   (+374) 010 27 92 27 Աշխ. ժամեր՝  Երկուշաբթի - Շաբաթ՝ 10։00 - 22։00")}
                                        </p>
                                    </div>
                                    <div className="logo_second_text">
                                        <h3>ArmDental</h3>
                                        <p className='logo_second_text_desc'>
                                            {t("Գործունեություն՝  Ստոմատոլոգիական, ատամնատեխնիկական նյութերի և սարքավորումների վաճառք Հասցե՝  Մաշտոցի 5, Երևան, Հայաստան Հեռ.՝  (+374)10 53 44 55, (+374)98 11 16 11 Աշխ. ժամեր՝  Երկուշաբթի - ՈՒրբաթ` 10:00 -19:00 , Շաբաթ՝ 10։00 - 18։00")}
                                        </p>
                                    </div>
                                    <div className="logo_third_text">
                                        <h3>Dentax</h3>
                                        <p className='logo_third_text_desc'>
                                            {t("Գործունեություն։ Ստոմատոլոգիական, ատամնատեխնիկական նյութերի և սարքավորումների վաճառք Հասցե՝  Հ. Պարոնյան 9, Երևան, Հայաստան Հեռ.՝  (+374) 12 55 53 00 Աշխ. ժամեր՝  Երկուշաբթի - ՈՒրբաթ` 9:00 -17:00")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="first-section__banner first-section__banner--right">
                    <img src="/img/right-banner.png" alt="Right Banner" />
                </div>
            </div>
            <div className="information_three">
                <div className="information_three_lineDiv"></div>
                <div className="information_three_container">
                    <div className="brands_icons_div_flex">
                        <div className="brand_icons_div">
                            <img src="/img/log_brand1.png" alt="Brand 1" />
                        </div>
                        <div className="brand_icons_div">
                            <img src="/img/log_brand2.png" alt="Brand 2" />
                        </div>
                        <div className="brand_icons_div">
                            <img src="/img/log_brand3.png" alt="Brand 3" />
                        </div>
                        <div className="brand_icons_div">
                            <img src="/img/log_brand4.png" alt="Brand 4" />
                        </div>
                        <div className="brand_icons_div">
                            <img src="/img/log_brand1.png" alt="Brand 1" />
                        </div>
                        <div className="brand_icons_div">
                            <img src="/img/log_brand2.png" alt="Brand 2" />
                        </div>
                        <div className="brand_icons_div">
                            <img src="/img/log_brand4.png" alt="Brand 4" />
                        </div>
                        <div className="brand_icons_div">
                            <img src="/img/log_brand2.png" alt="Brand 2" />
                        </div>
                        <div className="brand_icons_div">
                            <img src="/img/log_brand1.png" alt="Brand 1" />
                        </div>
                    </div>
                </div>
                <div className="information_three_lineDiv"></div>
            </div>
        </section>
    );
};

export default FirstSection;
