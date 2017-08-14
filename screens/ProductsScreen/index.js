import React, { Component } from 'react'
import ProductsList from './ProductsList'
import { HeaderNavigation } from '@components'

class ProductsScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: <HeaderNavigation navigation={navigation} title={'Products'} />,
    }
  }

  render() {
    return <ProductsList navigation={this.props.navigation} />
  }
}

export default ProductsScreen
