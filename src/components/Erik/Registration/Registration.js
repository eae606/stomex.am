import React from 'react';
import styles from './Registration.module.css'; 
import { useTranslation } from 'react-i18next';

const Registration = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.registrationContainer}>
            <div className={styles.registrationForm}>
                <h2>{t("Գրանցվել")}</h2>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">{t("Էլ. հասցե")}</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">{t("Գաղտնաբառ")}</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label>
                            <input type="checkbox" name="remember" /> {t("Հիշել ինձ")}
                        </label>
                        <a href="/forgot-password">{t("Մոռացե՞լ եք գաղտնաբառը")}</a>
                    </div>
                    <button className='button_btn' type="submit">{t("ՄՈՒՏՔ ԳՈՐԾԵԼ")}</button>
                </form>

                <div className={styles.separator}>{t("ԿԱՄ")}</div>

                <a href="/facebook-login" className={`${styles.socialLoginButton} ${styles.facebookButton}`}>
                    {t("Շարունակել Facebook-ով")}
                </a>
                <a href="/twitter-login" className={`${styles.socialLoginButton} ${styles.twitterButton}`}>
                    {t("Շարունակել Twitter-ով")}
                </a>
            </div>
        </div>
    );
};

export default Registration;