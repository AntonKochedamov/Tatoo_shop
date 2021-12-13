import Cards from './Cards.jsx'
import AddMessageActionCreator from '../../../redux/home-reducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    newProducts: state.homePages.newProducts,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
  }
}

const CardsContainer = connect(mapStateToProps, mapDispatchToProps)(Cards)

export default CardsContainer
