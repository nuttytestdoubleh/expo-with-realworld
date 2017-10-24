import React from 'react'
import { PixelRatio, StyleSheet } from 'react-native'
import { Badge } from 'react-native-elements'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

const styles = StyleSheet.create( {
  icon: {
    marginRight: 8,
    marginTop: 8,
    minWidth: 50,
    backgroundColor: Colors.tintColor,
    borderRadius: 90 / PixelRatio.get(),
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'justify',
  },
} )

const Tag = ( { name, style } ) => (
  <Badge
    containerStyle={[ styles.icon, style ]}
    textStyle={styles.text}
    value={name.toUpperCase()}
  />
)

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
}

export default Tag
