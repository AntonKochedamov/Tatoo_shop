import s from './Button.module.css'


const Button = (props) => {
  return (
    <div className={s.prewie__button_container}>
      <button className={s.prewie__button} type="button">
        {props.text}
      </button>
    </div>
  )
}
export default Button
