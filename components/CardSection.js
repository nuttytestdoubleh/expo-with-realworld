import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

const styles = StyleSheet.create( {
  containerStyle: {
    backgroundColor: Colors.baseWhite,
    borderColor: Colors.baseBorder,
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
  },
} )

const CardSection = ( { children } ) => (
  <View style={styles.containerStyle}>{children}</View>
)

CardSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardSection
