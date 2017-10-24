import React from 'react'
import { Dimensions, Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

const { width } = Dimensions.get( 'window' )
const styles = StyleSheet.create( {
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  prefix: {
    borderColor: '#d4d4d4',
    borderRadius: 20,
    borderWidth: 2,
    flexDirection: 'row',
    marginBottom: 8,
    marginLeft: 1,
    marginRight: 12,
    marginTop: 8,
  },
  text: {
    color: Colors.textDescription,
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 6,
    marginTop: 6,
  },
  title: {
    width: width * 0.8 + 20,
    justifyContent: 'center',
  },
} )

const Pro = ( { name } ) => {
  return (
    <View style={styles.container}>
      <View style={styles.prefix}>
        <Text
          style={{
            color: Colors.textDescription,
            fontSize: 16,
          }}
        >
          {''}
        </Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  )
}

Pro.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Pro
