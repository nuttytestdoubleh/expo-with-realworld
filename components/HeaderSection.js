import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

const styles = StyleSheet.create( {
  title: {
    color: Colors.tintColor,
    fontSize: 16,
    fontWeight: '400',
  },
  icon: {
    textAlign: 'left',
    width: 20,
  },
} )

const HeaderSection = ( { containerstyle, textTitle } ) => (
  <View style={containerstyle}>
    <Text style={styles.title}>{textTitle}</Text>
    <Icon
      color={Colors.iconGrey}
      iconStyle={styles.icon}
      name={'documents'}
      size={20}
      type={'entypo'}
    />
  </View>
)

HeaderSection.propTypes = {
  containerstyle: PropTypes.number,
  textTitle: PropTypes.string.isRequired,
}

export default HeaderSection
