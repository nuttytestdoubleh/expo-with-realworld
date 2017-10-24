import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

const styles = StyleSheet.create( {
  containerStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    minWidth: 12,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
  },
  rowTitle: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  rowDescription: {
    flexDirection: 'row',
  },
  descriptionText: {
    color: Colors.textDescription,
    fontSize: 13,
    lineHeight: 20,
  },
} )

const CardContent = ( { description, title } ) => (
  <View style={styles.containerStyle}>
    <View style={styles.rowTitle}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
    <View style={styles.rowDescription}>
      <Text style={styles.descriptionText} numberOfLines={2}>
        {description}
      </Text>
    </View>
  </View>
)

CardContent.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default CardContent
