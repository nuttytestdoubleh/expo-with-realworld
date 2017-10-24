import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

const { width, height } = Dimensions.get( 'window' )

const styles = StyleSheet.create( {
  containerStyle: {
    backgroundColor: Colors.baseTransparent,
    flexDirection: 'column',
    minWidth: 12,
    paddingBottom: 30,
  },
  rowTitle: {
    flexDirection: 'row',
    marginBottom: 14,
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  rowDescription: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  descriptionText: {
    color: Colors.textDescription,
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'justify',
  },
  rowImage: {
    width: width,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.075)',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 24,
  },
  image: {
    height: height * 0.3,
    width: width,
  },
} )

const CardContentImage = ( { description, limitLine, title, url } ) => (
  <View style={styles.containerStyle}>
    <View style={styles.rowImage}>
      <Image resizeMode="cover" source={{ uri: url }} style={styles.image} />
    </View>
    <View style={styles.rowTitle}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
    <View style={styles.rowDescription}>
      {limitLine ? (
        <Text style={styles.descriptionText} numberOfLines={2}>
          {description}
        </Text>
      ) : (
        <Text style={styles.descriptionText}>{description}</Text>
      )}
    </View>
  </View>
)

CardContentImage.defaultProps = {
  limitLine: true,
}

CardContentImage.propTypes = {
  description: PropTypes.string.isRequired,
  limitLine: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default CardContentImage
