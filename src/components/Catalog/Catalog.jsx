import s from './Catalog.module.css'

const Catalog = () => {
  return (
    <main>
      <div className={s.main__wrapper}>
        <span className={s.path}>Главная / Каталог / Тату машинки</span>
        <h1 className={s.catalog_title}>Тату машинки</h1>
      </div>
    </main>
  )
}
export default Catalog
