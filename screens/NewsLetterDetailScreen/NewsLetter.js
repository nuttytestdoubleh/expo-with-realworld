import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

import { Slider, TextDescriptionCard } from '@components'

const styles = StyleSheet.create( {
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 0,
  },
  thumbnailView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    marginTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
  detailsView: {
    marginBottom: 15,
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  rowTitle: {
    flexDirection: 'row',
    marginTop: 28,
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
} )

const NewsLetter = ( { newsletter: { description, title, urls } } ) => (
  <View key={`newsletter-${ title }`} style={styles.container}>
    <View style={styles.thumbnailView}>
      <Slider urls={urls} all />
    </View>
    <View style={styles.rowTitle}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
    <TextDescriptionCard
      containerstyle={styles.detailsView}
      textStyle={{ fontWeight: '400' }}
      title={description}
    />
  </View>
)

NewsLetter.propTypes = {
  newsletter: PropTypes.shape( {
    description: PropTypes.string,
    title: PropTypes.string.isRequired,
    urls: PropTypes.object.isRequired,
  } ),
}

export default NewsLetter
