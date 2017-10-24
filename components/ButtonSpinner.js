import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  spinnerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const ButtonSpinner = ( { containerStyle, size } ) => (
  <View style={[ containerStyle, styles.spinnerStyle ]}>
    <ActivityIndicator size={size || 'large'} />
  </View>
)

ButtonSpinner.propTypes = {
  containerStyle: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
}

export default ButtonSpinner
