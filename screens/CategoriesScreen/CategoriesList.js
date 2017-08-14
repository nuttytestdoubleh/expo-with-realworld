import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as CategoriesAction, selectors } from 'modules/Categories'

import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import CategoriesDetail from './CategoriesDetail'

class CategoriesList extends Component {
  constructor( props ) {
    super( props )
  }

  async componentWillMount() {
    await this.props.initCategoriesScreen()
  }

  onPressSelectChildCategory = childCategory => {
    this.props.setCurrentCategories( childCategory, 0 )
    this.props.navigation.navigate( 'childCategories', childCategory )
  }

  renderCategories() {
    return this.props.categories.map( e =>
      <TouchableOpacity
        key={e.name}
        onPress={() => this.onPressSelectChildCategory( e.name )}
      >
        <CategoriesDetail
          key={e.name}
          categoryImage={e.image}
          categoryHeading={e.name}
        />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.renderCategories()}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create( {
  container: {
    marginTop: 10,
  },
} )

const mapStateToProps = state => ( {
  categories: selectors.categoriesNameSelector( state ),
} )

export default connect( mapStateToProps, CategoriesAction )( CategoriesList )
