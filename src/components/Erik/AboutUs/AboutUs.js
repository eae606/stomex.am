import React from 'react';
import './AboutUs.css';
import Footer from '../Footer/Footer';
import { useTranslation } from 'react-i18next'; 

const AboutUs = () => {
    const { t } = useTranslation();
    return (
        <section className="about-us-section">
            <div className="aboutus-background">
            </div>
            <div className="aboutUs-container">
                <div className="aboutUs_information_div">
                    <div className="information_div_flex">
                        <div className="banners__video__div">
                            <div className="firstBanner__div">
                                <img src='./img/left-banner.png' alt="left banner" className="leftBanner__img" />
                            </div>
                            <div className="video_youtube_div">
                                <iframe width="800" height="815" src="https://www.youtube.com/embed/bYgnUqITYcQ?si=5V7vw1qO5kAwCUa1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <div className="secondBanner__div">
                                <img src='./img/right-banner.png' alt="right banner" className="rightBanner__img" />
                            </div>
                        </div>
                    </div>
                    <div className="center_information_text">
                        <p className="aboutUs_text">
                            <span className="aboutUs_text_span">{t("Stomex - ը")}</span> {t("հարթակ է, որը հնարավորություն է տալիս բժշկին 1 զանգի շնորհիվ ստանալ տեղեկություն ու պատվիրել անհրաժեշտ ապրանքը 21 խանութների տեսականուց: Կայքում ներառված են Հայաստանի ստոմատոլոգիական պարագաներ մատակարարող կազմակերպությունները և իրենց տեսականին։ Stomex Delivery -ով պատվիրելու արդյունքում խնայում եք Ձեր ժամանակը, խուսափում տարբեր խանութներում գնումներ կատարելու քաշքշուկներից:")}
                            <br />
                            <span className='aboutUs_text_span_two'>{t("Երևանի տարածքում առաքումը արժե 400 դրամ՝ անկախ ապրանքի ծավալից ու չափերից")}</span>
                            <br />
                            <span className='aboutUs_text_span_three'>{t("Stomex.am Delivery-ն")}</span> {t("տրամադրում է կուտակային Բոնուս քարտ, որի շնորհիվ ՀՀ դրամ-ով կատարված գնումների 2%-ը կուտակվում է Բոնուս քարտին՝ հետագա գնումներ կատարելու համար: Քարտը տրամադրվում է միանվագ՝ 25000.00 ՀՀ դրամ-ի գնումներ կատարելու դեպքում և հասանելի է դառնում կուտակված 5001.00 ՀՀ դրամը գերազանցելու դեպքում:")}
                            <br />
                            <span className="aboutUs_text_span">{t("Stomex.am - ը")}</span> {t("ընդլայնել է նաև իր գործունեությունը՝ նոր համագործակցություն է սկսելով հասարակական ու սպասարկման օբյեկտների հետ՝ ապահովելով վերջիններիս այցելուների և աշխատակիցների հիգիենիկ պաշտպանությունը:")}
                        </p>
                    </div>

                </div>
            </div>
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
            <div className="footer_div">
                <Footer />

            </div>


        </section>
    );
};

export default AboutUs; 
