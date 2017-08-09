import React, { Component } from 'react'
import { Colors } from 'constants'
import { object } from 'utilities'

import PropTypes from 'prop-types'
import Swiper from 'react-native-swiper'
import { Dimensions, Image, PixelRatio, View, WebView } from 'react-native'
import { Button } from 'react-native-elements'

import Spinner from 'react-native-loading-spinner-overlay'

const { width } = Dimensions.get( 'window' )
const calHeight = {
  height: PixelRatio.roundToNearestPixel(
    Dimensions.get( 'window' ).width / ( 16 / 9 )
  ),
}

const styles = {
  wrapper: {},
  pagination: {
    bottom: -30,
  },
  slideImage: {
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    flex: 1,
    justifyContent: 'center',
  },
  slideVideo: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
    height: PixelRatio.roundToNearestPixel(
      Dimensions.get( 'window' ).width / ( 16 / 9 )
    ),
  },
}

class Slider extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      SwipLoaded: false,
    }
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState( {
        SwipLoaded: true,
      } )
    }, 100 )
  }

  tranformImage = url => {
    const videoId = url.split( 'v=' )[ 1 ]
    return `http://img.youtube.com/vi/${ videoId }/hqdefault.jpg`
  }

  render() {
    {
      return this.state.SwipLoaded
        ? <Swiper
          activeDotColor={Colors.tintColor}
          height={calHeight.height}
          // loadMinimal={true}
          // loadMinimalLoader={
          //   <View style={{ flex: 1 }}>
          //     <Spinner visible={true} />
          //   </View>
          // }
          paginationStyle={styles.pagination}
        >
          <View style={styles.slideImage}>
            <Image
              resizeMode="cover"
              source={{
                uri: object.getFirstByKey( {
                  item: this.props.urls,
                  key: 'imgs',
                } ),
              }}
              style={{
                height: calHeight.height,
                width: width,
              }}
            />
          </View>
          <View style={styles.slideVideo}>
            <WebView
              source={{
                uri:
                    'https://www.youtube.com/embed/g0BFA01A56I?version=3&enablejsapi=1&rel=0&autoplay=1&showinfo=0&controls=1&modestbranding=0',
              }}
              style={{
                alignItems: 'center',
                backgroundColor: 'black',
                height: 240,
                justifyContent: 'center',
                width: width,
              }}
            />
          </View>
        </Swiper>
        : <View />
    }
  }
}

export default Slider