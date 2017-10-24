import React from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Card } from 'react-native-elements'
import PropTypes from 'prop-types'
import { object } from 'utilities'

const styles = StyleSheet.create( {
  card: {
    flexGrow: 1,
    justifyContent: 'space-between',
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
  },
  image: {
    backgroundColor: 'rgba(0, 0, 0, 0.075)',
    height: 200,
    marginBottom: 5,
  },
  textTitle: {
    fontSize: 12.5,
    fontWeight: '500',
    marginBottom: 5,
  },
  textDescription: {
    fontSize: 11,
  },
} )

const NewsLetter = ( { newsletters, onPressNewsletterSelect } ) => (
  <View>
    {Object.keys( newsletters ).map( ( e, k ) => {
      const { description, title, urls } = newsletters[ e ]

      return (
        <TouchableOpacity
          key={`newsletters-${ title }-${ k }`}
          onPress={() => onPressNewsletterSelect( e, title )}
        >
          <Card containerStyle={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: object.getFirstByKey( {
                  item: urls,
                  key: 'imgs',
                } ),
              }}
            />
            <Text style={styles.textTitle}>{title}</Text>
            <Text style={styles.textDescription} numberOfLines={2}>
              {description}
            </Text>
          </Card>
        </TouchableOpacity>
      )
    } )}
  </View>
)

NewsLetter.propTypes = {
  newsletters: PropTypes.object.isRequired,
  onPressNewsletterSelect: PropTypes.func.isRequired,
}

export default NewsLetter
