import React from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

const { width } = Dimensions.get( 'window' )

const styles = StyleSheet.create( {
  container: {
    backgroundColor: Colors.tintColor,
    height: Dimensions.get( 'window' ).height,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
  },
  image: {
    backgroundColor: 'rgba(0, 0, 0, 0.075)',
    borderRadius: 10,
    height: 70,
    marginBottom: 5,
    width: 70,
  },
  rowImage: {
    width: width / 3 - 10,
    alignItems: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    marginBottom: 35,
  },
  nameText: {
    alignItems: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
    textAlign: 'center',
  },
} )

const AppPortal = ( { apps, onPressAppSelect } ) => (
  <View style={styles.container}>
    {Object.keys( apps ).map( e => {
      const {
        appName,
        appStoreId,
        appStoreLocale,
        iconUrl,
        playStoreId,
      } = apps[ e ]

      return (
        <TouchableOpacity
          key={`app-portal-${ e }`}
          onPress={() =>
            onPressAppSelect( {
              appName,
              appStoreId,
              appStoreLocale,
              playStoreId,
            } )}
        >
          <View style={styles.rowImage}>
            <Image
              style={styles.image}
              source={{
                uri: iconUrl,
              }}
            />
            <Text style={styles.nameText}>{appName}</Text>
          </View>
        </TouchableOpacity>
      )
    } )}
  </View>
)

AppPortal.propTypes = {
  apps: PropTypes.object.isRequired,
  onPressAppSelect: PropTypes.func.isRequired,
}

export default AppPortal
