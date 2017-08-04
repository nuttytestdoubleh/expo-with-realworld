import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as productsAction, selectors } from 'modules/Products'

import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import ProductsDetail from './ProductsDetail'
import { Colors } from 'constants'
import { FontAwesome } from '@expo/vector-icons'
import { objects } from 'utilities'

class ProductsList extends Component {
  constructor( props ) {
    super( props )
  }

  async componentWillMount() {
    await this.props.initProductsScreen()
  }

  onPressSelectProduct = id => {
    console.log( id )
    this.props.setCurrentProduct( id )
    this.props.navigation.navigate( 'productDetail', id )
  }

  renderStories() {
    return this.props.products.map( e =>
      <TouchableOpacity
        key={e.name}
        onPress={() => this.onPressSelectProduct( e.id )}
      >
        <ProductsDetail
          key={e.name}
          StoryImage={objects.getFirstByKey( { item: e.urls, key: 'imgs' } )}
          StoryHeading={e.name}
        />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.renderStories()}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create( {
  container: {
    marginTop: 10,
  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    elevation: 2,
    height: 60,
    justifyContent: 'center',
    marginTop: 10,
    paddingTop: 15,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  textStyle: {
    fontSize: 20,
  },
} )

const mapStateToProps = state => ( {
  products: selectors.productsNameSelector( state ),
} )

export default connect( mapStateToProps, productsAction )( ProductsList )
