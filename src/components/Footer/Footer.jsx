import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={s.footer__wrapper}>
        <div className={s.footer__info}>
          <div className={s.logo}>
            <img src="images/logo.png" alt="logo" />
            <span>Политика конфенедциальности</span>
          </div>
          <ul className={s.bonus}>
            <li>Промокоды</li>
            <li>Скидки</li>
            <li>Помощь</li>
          </ul>
          <ul className={s.org_info}>
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div className={s.contacts}>
          <div className={s.phone}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 3.37753L4.30288 1.00627C4.30288 1.00627 4.39654 0.906274 5.00967 1.50499C5.6228 2.10371 7.73825 4.86252 7.73825 4.86252L7.01421 7.88282L12.633 13.4993L15.6524 12.7763L18.9923 15.2441L19.5089 16.2115L17.1375 19.5142L13.5132 19.4803L1.03389 7.00169L1 3.37753Z"
                stroke="#FAF6F2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={s.phone_number}>8 800 600-61-91</span>
            <div className={s.messengers}>
              <img src="images/telegram.png" alt="telegram" />
              <img src="images/Viber.png" alt="Viber" />
              <img src="images/WatsApp.png" alt="WatsApp" />
            </div>
          </div>
          <span className={s.info_work}>
            Время работы: с 9:00 до 20:00 по мск
          </span>
          <div className={s.mail}>
            <svg
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.5 3.23408L10.7346 8.49822L10.3137 8.7835L9.89289 8.49822L1.5 2.80873V14.5H18.5V3.23408ZM2.24266 1.5L10.3137 6.97133L18.3848 1.5H2.24266ZM0 0H1.5H18.5H20V1.5V2.11329L20.0483 2.18451L20 2.21724V14.5V16H18.5H1.5H0V14.5V1.5V0Z"
                fill="#FAF6F2"
              />
            </svg>
            <span className={s.mail_text}>Mr.Driskell@mail.ru</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
