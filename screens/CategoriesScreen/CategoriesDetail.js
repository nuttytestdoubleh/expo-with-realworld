import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Card from '@components/Card'
import CardSection from '@components/CardSection'

const styles = StyleSheet.create( {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 16,
    marginRight: 25,
    paddingRight: 25,
    alignContent: 'center',
  },
  thumbnailStyle: {
    height: 100,
    width: 100,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
} )

const CategoriesDetail = ( { categoryHeading, categoryImage } ) => {
  return (
    <Card margin={10}>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: categoryImage }}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle} numberOfLines={2}>
            {categoryHeading}
          </Text>
        </View>
      </CardSection>
    </Card>
  )
}

export default CategoriesDetail
