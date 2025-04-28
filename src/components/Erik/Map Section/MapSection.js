import { useTranslation } from "react-i18next";
import "./MapSection.css";
import "antd/dist/reset.css";

const MapSection = () => {
    const { t } = useTranslation();
    return (
        <section className="map-section">
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
            <div className="contact-cards-flex">
                <div className="my-container">
                    <div className="contact-card">
                        <img src="./../img/contact_icon1.png" alt={t('Ատամնաբույժ')} className="contact-icon" />
                        <div className="card-text">{t('Ատամնաբույժ')}</div>
                    </div>
                    <div className="contact-card">
                        <img src="./../img/contact_icon2.png" alt={t('Ատամնատեխնիկ')} className="contact-icon" />
                        <div className="card-text">{t('Ատամնատեխնիկ')}</div>
                    </div>
                    <div className="contact-card">
                        <img src="./../img/contact_icon3.png" alt={t('Օրտոդոնտ')} className="contact-icon" />
                        <div className="card-text">{t('Օրտոդոնտ')}</div>
                    </div>
                    <div className="contact-card">
                        <img src="./../img/contact_icon4.png" alt={t('Ատամնաբույժ')} className="contact-icon" />
                        <div className="card-text">{t('Ատամնաբույժ')}</div>
                    </div>
                </div>
            </div>
                <div className="car_animation_div">
                    <img src="./../img/gif.gif" alt="car animation" className="car_animation" />
                </div>
        </section>
    );
}

export default MapSection;
