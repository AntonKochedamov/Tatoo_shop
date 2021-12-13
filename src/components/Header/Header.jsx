import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const visualContecstMenu = (e) => {
    const catalog = document.getElementById('catalog')
    catalog.classList.toggle(`${s.submenu_container_visible}`)
  }

  return (
    <header>
      <div className={s.header_wrapper}>
        <div className={s.header__up}>
          <div className={s.contacts}>
            <div className={s.contacts__call}>
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
              <span className={s.tel_number}>+7 911 111-11-11</span>
              <ul className={s.messengers}>
                <li>Viber</li>
                <li>WhatsApp</li>
                <li>Telegram</li>
              </ul>
            </div>
            <div className={s.contacts__mail}>
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
          <div className={s.header__logo}>
            <span className={s.brand_name}>
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive ? s.activeLink : s.item
                }
              >
                mr. driskell
              </NavLink>
            </span>
            <span className={s.brand_field}>Tattoo shop</span>
          </div>
          <div className={s.users__block}>
            <div className={s.header__bucket}>
              <span className={s.bucket_coast}>37 280 ₽</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 0H5.25V0.75V3.75H1.5H0V5.25V18.25V19.75H1.5H18.5H20V18.25V5.25V3.75H18.5H14.75V0.75V0H14H6ZM13.25 5.25V6.75H14.75V5.25H18.5V18.25H1.5V5.25H5.25V6.75H6.75V5.25H13.25ZM13.25 3.75V1.5H6.75V3.75H13.25Z"
                  fill="#FAF6F2"
                />
              </svg>
            </div>
            <div className={s.header__likes}>
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.74399 8.79058C2.31564 8.36212 1.98384 7.84703 1.77086 7.27984C1.55787 6.71266 1.46861 6.10649 1.50907 5.50198C1.54952 4.89748 1.71875 4.30861 2.00542 3.77486C2.29208 3.24111 2.68955 2.77482 3.17118 2.40726C3.6528 2.03969 4.20744 1.77935 4.79792 1.64369C5.38839 1.50802 6.00104 1.50017 6.5948 1.62066C7.18856 1.74115 7.74969 1.9872 8.24057 2.3423C8.73145 2.6974 9.14074 3.15336 9.44099 3.67958H10.559C10.8592 3.15336 11.2685 2.6974 11.7594 2.3423C12.2503 1.9872 12.8114 1.74115 13.4052 1.62066C13.9989 1.50017 14.6116 1.50802 15.2021 1.64369C15.7925 1.77935 16.3472 2.03969 16.8288 2.40726C17.3104 2.77482 17.7079 3.24111 17.9946 3.77486C18.2812 4.30861 18.4505 4.89748 18.4909 5.50198C18.5314 6.10649 18.4421 6.71266 18.2291 7.27984C18.0161 7.84703 17.6843 8.36212 17.256 8.79058L9.99999 16.0486L2.74399 8.79158V8.79058ZM17.962 9.50058C18.4741 8.98841 18.8747 8.3758 19.1386 7.70128C19.4025 7.02677 19.524 6.30495 19.4954 5.58121C19.4669 4.85747 19.2888 4.14748 18.9725 3.49589C18.6563 2.84429 18.2086 2.26519 17.6576 1.795C17.1067 1.32481 16.4644 0.973709 15.7712 0.763775C15.078 0.553842 14.3488 0.489618 13.6296 0.575144C12.9104 0.660669 12.2166 0.894093 11.592 1.26074C10.9673 1.62738 10.4253 2.11931 9.99999 2.70558C9.57467 2.11931 9.03265 1.62738 8.408 1.26074C7.78335 0.894093 7.08959 0.660669 6.37036 0.575144C5.65113 0.489618 4.92198 0.553842 4.22877 0.763775C3.53556 0.973709 2.89328 1.32481 2.34234 1.795C1.7914 2.26519 1.34371 2.84429 1.02743 3.49589C0.711149 4.14748 0.533117 4.85747 0.50453 5.58121C0.475944 6.30495 0.597422 7.02677 0.861326 7.70128C1.12523 8.3758 1.52585 8.98841 2.03799 9.50058L9.99999 17.4616L17.962 9.50158V9.50058Z"
                  fill="#FAF6F2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.04399 8.66733L9.99997 15.6243L17.0438 8.57848L17.256 8.79058L9.99999 16.0486L2.74399 8.79158V8.79058C2.31564 8.36212 1.98384 7.84703 1.77086 7.27984C1.55787 6.71266 1.46861 6.10649 1.50907 5.50198C1.54952 4.89748 1.71875 4.30861 2.00542 3.77486C2.29208 3.24111 2.68955 2.77482 3.17118 2.40726C3.6528 2.03969 4.20744 1.77935 4.79792 1.64369C5.38839 1.50802 6.00104 1.50017 6.5948 1.62066C7.18856 1.74115 7.74969 1.9872 8.24057 2.3423C8.73145 2.6974 9.14074 3.15336 9.44099 3.67958H10.559C10.8592 3.15336 11.2685 2.6974 11.7594 2.3423C12.2503 1.9872 12.8114 1.74115 13.4052 1.62066C13.9989 1.50017 14.6116 1.50802 15.2021 1.64369C15.7925 1.77935 16.3472 2.03969 16.8288 2.40726C17.3104 2.77482 17.7079 3.24111 17.9946 3.77486C18.2812 4.30861 18.4505 4.89748 18.4909 5.50198C18.5314 6.10649 18.4421 6.71266 18.2291 7.27984C18.0161 7.84703 17.6843 8.36212 17.256 8.79058L17.0438 8.57848C17.4419 8.18026 17.7503 7.70153 17.9483 7.17438C18.1462 6.64723 18.2292 6.08385 18.1916 5.52201C18.154 4.96018 17.9967 4.41288 17.7303 3.91681C17.4638 3.42073 17.0944 2.98736 16.6468 2.64574C16.1992 2.30412 15.6837 2.06216 15.1349 1.93607C14.5861 1.80998 14.0167 1.80269 13.4648 1.91467C12.913 2.02666 12.3915 2.25533 11.9352 2.58537C11.479 2.91541 11.0986 3.33917 10.8196 3.82825L10.7332 3.97958H9.26676L9.18042 3.82825C8.90136 3.33917 8.52097 2.91541 8.06473 2.58537C7.6085 2.25533 7.08698 2.02666 6.53514 1.91467C5.98329 1.80269 5.41389 1.80998 4.86509 1.93607C4.3163 2.06216 3.80081 2.30412 3.35318 2.64574C2.90556 2.98736 2.53614 3.42073 2.26971 3.91681C2.00328 4.41288 1.846 4.96018 1.8084 5.52201C1.7708 6.08385 1.85375 6.64723 2.05171 7.17438C2.24966 7.70153 2.55803 8.18026 2.95615 8.57848L3.04399 8.66733ZM2.03799 9.50058C1.52585 8.98841 1.12523 8.3758 0.861326 7.70128C0.597422 7.02677 0.475944 6.30495 0.50453 5.58121C0.533117 4.85747 0.711149 4.14748 1.02743 3.49589C1.34371 2.84429 1.7914 2.26519 2.34234 1.795C2.89328 1.32481 3.53556 0.973709 4.22877 0.763775C4.92198 0.553842 5.65113 0.489618 6.37036 0.575144C7.08959 0.660669 7.78335 0.894093 8.408 1.26074C8.94283 1.57466 9.41708 1.98043 9.80938 2.45862C9.87526 2.53893 9.93883 2.62128 9.99999 2.70558C10.0611 2.62128 10.1247 2.53893 10.1906 2.45862C10.5829 1.98043 11.0571 1.57466 11.592 1.26074C12.2166 0.894093 12.9104 0.660669 13.6296 0.575144C14.3488 0.489618 15.078 0.553842 15.7712 0.763775C16.4644 0.973709 17.1067 1.32481 17.6576 1.795C18.2086 2.26519 18.6563 2.84429 18.9725 3.49589C19.2888 4.14748 19.4669 4.85747 19.4954 5.58121C19.524 6.30495 19.4025 7.02677 19.1386 7.70128C18.8747 8.3758 18.4741 8.98841 17.962 9.50058V9.50158L9.99999 17.4616L2.03799 9.50058ZM18.262 9.62283V9.62587L9.99997 17.8858L1.82587 9.71273C1.28446 9.17128 0.860931 8.52365 0.581948 7.81059C0.302964 7.09753 0.174544 6.33446 0.204764 5.56937C0.234984 4.80428 0.42319 4.05371 0.757545 3.36488C1.0919 2.67605 1.56517 2.06386 2.14759 1.5668C2.73002 1.06975 3.40899 0.698583 4.14181 0.476653C4.87463 0.254723 5.64545 0.18683 6.40578 0.277242C7.16612 0.367655 7.89952 0.614417 8.55986 1.00201C9.1066 1.32292 9.59346 1.73463 9.99999 2.21856C10.4065 1.73463 10.8934 1.32292 11.4401 1.00201C12.1005 0.614417 12.8339 0.367655 13.5942 0.277242C14.3545 0.18683 15.1253 0.254723 15.8582 0.476653C16.591 0.698583 17.27 1.06975 17.8524 1.5668C18.4348 2.06386 18.9081 2.67605 19.2424 3.36488C19.5768 4.05371 19.765 4.80428 19.7952 5.56937C19.8254 6.33446 19.697 7.09753 19.418 7.81059C19.1543 8.48461 18.7615 9.10015 18.262 9.62283Z"
                  fill="#FAF6F2"
                />
              </svg>
            </div>
            <div className={s.header__user}>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 18.5V14H1V18.5"
                  stroke="#FAF6F2"
                  strokeWidth="1.4"
                />
                <circle
                  cx="9.5"
                  cy="5.5"
                  r="4.8"
                  stroke="#FAF6F2"
                  strokeWidth="1.4"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={s.header__down}>
          <div className={s.catalog}>
            <div className="" onClick={visualContecstMenu}>
              <span className={s.catalog_text}>Каталог</span>
              <svg
                width="24"
                height="14"
                viewBox="0 0 24 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6H24V8H0V6Z" fill="#BB8C5F" />
                <path d="M0 0H24V2H0V0Z" fill="#BB8C5F" />
                <path d="M0 12H24V14H0V12Z" fill="#BB8C5F" />
              </svg>
            </div>
            <div id="catalog" className={s.submenu_container}>
              <div className={s.submenu}>
                <ul className={s.submenu__categories}>
                  <li>По категории</li>
                  {/* <li>По брендам</li> /*TODO finish menu */}
                </ul>
                <ul className={s.submenu__text}>
                  <NavLink
                    to="/404"
                    className={(navData) =>
                      navData.isActive ? s.activeLink : s.item
                    }
                    onClick={visualContecstMenu}
                  >
                    Новинки
                  </NavLink>
                  <NavLink
                    to="/404"
                    className={(navData) =>
                      navData.isActive ? s.activeLink : s.item
                    }
                    onClick={visualContecstMenu}
                  >
                    Наборы для татуировок
                  </NavLink>
                  <NavLink
                    to="/catalog/tatoomachine"
                    className={(navData) =>
                      navData.isActive ? s.activeLink : s.item
                    }
                    onClick={visualContecstMenu}
                  >
                    Тату машинки
                  </NavLink>
                  <NavLink
                    to="/404"
                    className={(navData) =>
                      navData.isActive ? s.activeLink : s.item
                    }
                    onClick={visualContecstMenu}
                  >
                    Тату краски
                  </NavLink>
                  <NavLink
                    to="/404"
                    className={(navData) =>
                      navData.isActive ? s.activeLink : s.item
                    }
                    onClick={visualContecstMenu}
                  >
                    Тату иглы
                  </NavLink>
                  <NavLink
                    to="/404"
                    className={(navData) =>
                      navData.isActive ? s.activeLink : s.item
                    }
                    onClick={visualContecstMenu}
                  >
                    Тату держатели
                  </NavLink>
                  <NavLink
                    to="/404"
                    className={(navData) =>
                      navData.isActive ? s.activeLink : s.item
                    }
                    onClick={visualContecstMenu}
                  >
                    Тату наконечники
                  </NavLink>
                  <NavLink
                    to="/404"
                    className={(navData) =>
                      navData.isActive ? s.activeLink : s.item
                    }
                    onClick={visualContecstMenu}
                  >
                    Блоки питания
                  </NavLink>
                  <NavLink
                    to="/404"
                    className={(navData) =>
                      navData.isActive ? s.activeLink : s.item
                    }
                    onClick={visualContecstMenu}
                  >
                    Педали и провода
                  </NavLink>
                  <NavLink
                    to="/404"
                    className={(navData) =>
                      navData.isActive ? s.activeLink : s.item
                    }
                    onClick={visualContecstMenu}
                  >
                    Аксессуары
                  </NavLink>
                  <NavLink
                    to="/404"
                    className={(navData) =>
                      navData.isActive ? s.activeLink : s.item
                    }
                    onClick={visualContecstMenu}
                  >
                    Принтеры и планшеты
                  </NavLink>
                  <NavLink
                    to="/404"
                    className={(navData) =>
                      navData.isActive ? s.activeLink : s.item
                    }
                    onClick={visualContecstMenu}
                  >
                    Защита, ёмкости, расходные материалы
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
          <div className={s.search__wrapper}>
            <label htmlFor="search"></label>
            <i className="fas fa-search"></i>
            <input
              className={s.header_search}
              type="text"
              name="search"
              placeholder="Поиск"
            />
          </div>
          <ul className={s.inform}>
            <li className="">Промокоды</li>
            <li className="">Скидки</li>
            <li className="">Помощь</li>
            <li className="">О нас</li>
            <li className="">Контакты</li>
          </ul>
        </div>
      </div>
    </header>
  )
}
export default Header
