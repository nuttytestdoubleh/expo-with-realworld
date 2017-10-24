import React from 'react'
import {
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Card } from 'react-native-elements'
import PropTypes from 'prop-types'
import { object } from 'utilities'

const styles = StyleSheet.create( {
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingLeft: 16,
    paddingRight: 20,
    paddingTop: 20,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 14,
    fontWeight: '500',
  },
  rowProducts: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rowProduct: {
    width: Dimensions.get( 'window' ).width / 2 - 23,
    marginTop: 10,
    marginBottom: 10,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  textDescription: {
    fontSize: 11,
  },
  textTitle: {
    fontSize: 12.5,
    fontWeight: '500',
    marginBottom: 5,
  },
  image: {
    backgroundColor: 'rgba(0, 0, 0, 0.075)',
    height: 200,
    marginBottom: 5,
  },
} )

const Touches = ( { onPressSelectTouches, touches } ) => {
  const renderProducts = () =>
    Object.keys( touches ).map( ( e, k ) => {
      return (
        <TouchableOpacity
          key={`ricoh-touch-${ touches[ e ].title }-${ k }`}
          onPress={() =>
            onPressSelectTouches(
              touches[ e ].title,
              object.getFirstByKey( {
                item: touches[ e ].urls,
                key: 'docs',
              } )
            )}
        >
          <Card
            containerStyle={[
              {
                marginLeft: ( k + 1 ) % 2 === 0 ? 7.5 : 15,
                marginRight: ( k + 1 ) % 2 !== 0 ? 7.5 : 15,
              },
              styles.rowProduct,
            ]}
          >
            <Image
              style={styles.image}
              source={{
                uri: object.getFirstByKey( {
                  item: touches[ e ].urls,
                  key: 'imgs',
                } ),
              }}
            />
            <Text style={styles.textTitle}>{touches[ e ].title}</Text>
            <Text style={styles.textDescription}>{touches[ e ].description}</Text>
          </Card>
        </TouchableOpacity>
      )
    } )

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>{'Documents'}</Text>
      </View>
      <View style={styles.rowProducts}>{renderProducts()}</View>
    </ScrollView>
  )
}

Touches.propTypes = {
  navigation: PropTypes.object.isRequired,
  onPressSelectTouches: PropTypes.func.isRequired,
  touches: PropTypes.object.isRequired,
}

export default Touches
