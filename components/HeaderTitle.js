import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

import ButtonRadius from './ButtonRadius'

const styles = StyleSheet.create( {
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  rowTitle: {
    alignSelf: 'flex-start',
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  rowButton: {
    alignSelf: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
} )

const HeaderTitle = ( {
  containerStyle,
  textTitle,
  buttonOnPress,
  buttonTitle,
} ) => (
  <View style={containerStyle}>
    <View style={styles.rowTitle}>
      <Text style={[ styles.title ]}>{textTitle}</Text>
    </View>
    <View style={styles.rowButton}>
      <ButtonRadius onPress={buttonOnPress} title={buttonTitle} />
    </View>
  </View>
)

HeaderTitle.propTypes = {
  containerStyle: PropTypes.number,
  textTitle: PropTypes.string.isRequired,
  buttonOnPress: PropTypes.func.isRequired,
  buttonTitle: PropTypes.string.isRequired,
}

export default HeaderTitle
