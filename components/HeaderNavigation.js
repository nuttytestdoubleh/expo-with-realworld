import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import LinearGradient from './LinearGradient'
import PropTypes from 'prop-types'

import { Colors } from 'constants'
import { resolution } from 'utilities'

const styles = StyleSheet.create( {
  container: {
    marginTop: resolution.baseNavMarginTop(),
    flexDirection: 'row',
    height: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  leftSection: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  centerSection: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightSection: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
} )

const HeaderNavigation = ( { navigation, title } ) => (
  <View style={{ backgroundColor: Colors.tintColor }}>
    <LinearGradient>
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <Icon
            color={Colors.baseWhite}
            underlayColor={Colors.baseTransparent}
            underlineColorAndroid={Colors.baseTransparent}
            size={32}
            name={'ios-arrow-back'}
            type={'ionicon'}
            onPress={() => {
              navigation.goBack( null )
            }}
            iconStyle={{
              backgroundColor: Colors.baseTransparent,
              textAlign: 'left',
              width: 50,
            }}
          />
        </View>
        <View style={styles.centerSection}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>
        <View style={styles.rightSection}>
          <Icon
            size={34}
            color={Colors.baseWhite}
            underlayColor={Colors.baseTransparent}
            underlineColorAndroid={Colors.baseTransparent}
            name={'ios-search'}
            type={'ionicon'}
            onPress={() => {
              navigation.navigate( 'search', { module: 'search' } )
            }}
            iconStyle={{
              backgroundColor: Colors.baseTransparent,
              textAlign: 'right',
              width: 50,
            }}
          />
        </View>
      </View>
    </LinearGradient>
  </View>
)

HeaderNavigation.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default HeaderNavigation
