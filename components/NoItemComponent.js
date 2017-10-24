import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

import { Colors } from 'constants'

const { width, height } = Dimensions.get( 'window' )

const styles = StyleSheet.create( {
  alignContainers: {
    height: height - 150,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoHeadingStyle: {
    fontSize: 24,
    marginTop: 5,
    textAlign: 'center',
  },
  infoParagraphStyle: {
    width: width / 1.75,
    color: '#888',
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
  },
} )

const NoItemComponent = ( { iconName, infoHeading, infoParagraph } ) => {
  return (
    <View style={styles.alignContainers}>
      <View style={styles.containerStyle}>
        <Icon name={iconName} size={64} color={Colors.tabIconDefault} />
        <Text style={styles.infoHeadingStyle}>{infoHeading}</Text>
        <Text style={styles.infoParagraphStyle}>{infoParagraph}</Text>
      </View>
    </View>
  )
}

NoItemComponent.propTypes = {
  iconName: PropTypes.string.isRequired,
  infoHeading: PropTypes.string.isRequired,
  infoParagraph: PropTypes.string.isRequired,
}

export default NoItemComponent
