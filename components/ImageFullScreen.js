import React from 'react'
import {
  PixelRatio,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import PropTypes from 'prop-types'

const { width, height } = Dimensions.get( 'window' )

const styles = StyleSheet.create( {
  containerStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    minWidth: 12,
  },
  rowImage: {
    width: width,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.075)',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: width * 1.4 / ( 16 / 9 ),
    width: width,
  },
} )

const ImageFullScreen = ( { pictureStyle, url } ) => (
  <View style={styles.rowImage}>
    <Image source={{ uri: url }} style={[ styles.image, pictureStyle ]} />
  </View>
)

ImageFullScreen.propTypes = {
  url: PropTypes.string.isRequired,
}

export default ImageFullScreen
