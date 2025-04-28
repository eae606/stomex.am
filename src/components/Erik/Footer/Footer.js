import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="media_icons_flex">
                    <div className="viber_icon">
                        <img src="./../img/Viber.png" alt="Viber" className="viber_icon_img" />
                    </div>
                    <div className="facebook_icon">
                        <img src="./../img/fb.png" alt="Facebook" className="facebook_icon_img" />
                    </div>
                    <div className="instagram_icon">
                        <img src="./../img/inst.png" alt="Instagram" className="instagram_icon_img" />
                    </div>
                    <div className="whatsapp_icon">
                        <img src="./../img/whats.png" alt="WhatsApp" className="whatsapp_icon_img" />
                    </div>
                </div>

                <div className="footer-sections">
                    <div className="footer-section">
                        <h3>{t('Տեղեկատվություն')}</h3>
                        <ul>
                            <li>{t('Գովազդ')}</li>
                            <li>{t('Ստոմատոլոգիական թեստ ;)')}</li>
                            <li>{t('Մեր մասին')}</li>
                            <li>{t('Պայմաններ')}</li>
                            <li>{t('Առաքում')}</li>
                            <li>{t('Ծառայություններ')}</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>{t('Հաճախորդների սպասարկում')}</h3>
                        <ul>
                            <li>{t('Հետադարձ կապ')}</li>
                            <li>{t('Ապրանքի վերադարձներ')}</li>
                            <li>{t('Կայքի քարտեզ')}</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>{t('Լրացուցիչ')}</h3>
                        <ul>
                            <li>{t('Ապրանքանիշեր')}</li>
                            <li>{t('Նվեր քարտեր')}</li>
                            <li>{t('Գործընկերներ')}</li>
                            <li>{t('Զեղչեր')}</li>
                        </ul>
                    </div>
                    <div className="footer-section contact-info">
                        <h3>{t('Իմ պահոցը')}</h3>
                        <ul>
                            <li>{t('Իմ պահոցը')}</li>
                            <li>{t('Պատվերների պատմություն')}</li>
                            <li>{t('Էջանշաններ')}</li>
                            <li>{t('Նորություններ')}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="last_div">
                {t('StomEx © 2021 Ստոմատոլոգիական առաքման համակարգ')}
            </div>
        </footer>
    );
}

export default Footer;