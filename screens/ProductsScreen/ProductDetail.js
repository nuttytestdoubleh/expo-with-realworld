import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

import { Card, CardSection } from '@components'

const { width } = Dimensions.get( 'window' )
const styles = StyleSheet.create( {
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerText: {
    width: width * 0.85 - 40,
    alignContent: 'center',
    fontSize: 14,
  },
  thumbnailContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    height: 60,
    width: 60,
  },
} )

const ProductsDetail = ( { productHeading, productImage } ) => (
  <Card margin={0}>
    <CardSection>
      <View style={styles.thumbnailContainer}>
        <Image style={styles.image} source={{ uri: productImage }} />
      </View>
      <View style={styles.headerContent}>
        <Text style={styles.headerText} numberOfLines={2}>
          {productHeading}
        </Text>
      </View>
    </CardSection>
  </Card>
)

ProductsDetail.propTypes = {
  productHeading: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
}

export default ProductsDetail
