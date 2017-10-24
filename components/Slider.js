// TODO: must refractory
import React, { Component } from 'react'
import { Dimensions, Image, Platform, Text, View, WebView } from 'react-native'
import Swiper from 'react-native-swiper'
import { object, resolution, url } from 'utilities'
import { Colors } from 'constants'

import ImageFullScreen from './ImageFullScreen'

const { width } = Dimensions.get( 'window' )

const styles = {
  wrapper: {},
  pagination: {
    ...Platform.select( {
      ios: {
        bottom: -30,
      },
      android: {
        bottom: 30,
      },
    } ),
  },
  buttonWrappe: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nextButton: {
    color: Colors.tintColor,
    fontSize: 65,
  },
  prevButton: {
    color: Colors.tintColor,
    fontSize: 65,
  },
  slideImage: {
    alignItems: 'center',
    backgroundColor: '#FFF',
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
    height: resolution.aspectRatioWideScreen().height,
    alignSelf: 'stretch',
    marginVertical: 10,
  },
}

class Slider extends Component {
  videoLink = () =>
    url.youtubeVideoUrl(
      object.getFirstByKey( {
        item: this.props.urls,
        key: 'videos',
      } )
    )

  all = () => {
    const { imgs, videos } = this.props.urls
    const imgsComponent = imgs.map( ( e, k ) => (
      <Image
        key={`img-${ e }-${ k }`}
        resizeMode="cover"
        source={{
          uri: object.getFirstByKey( {
            item: this.props.urls,
            key: 'imgs',
          } ),
        }}
        style={{
          backgroundColor: 'transparent',
          height: resolution.aspectRatioWideScreen().height,
          width: width,
        }}
      />
    ) )

    const videosComponent =
      videos &&
      videos.map( ( e, k ) => (
        <View key={`video-${ e }-${ k }`} style={styles.slideVideo}>
          <WebView
            source={{
              uri: this.videoLink(),
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
      ) )

    return { ...imgsComponent, ...videosComponent }
  }

  render() {
    {
      if (
        object.isDeepEmpty( this.props.urls, 'imgs', 'imgsName' ) &&
        this.props.urls.imgs.length <= 1
      ) {
        return (
          <ImageFullScreen
            pictureStyle={{
              height: resolution.aspectRatioWideScreen().height,
              ...this.props.pictureStyle,
            }}
            url={object.getFirstByKey( {
              item: this.props.urls,
              key: 'imgs',
            } )}
          />
        )
      } else {
        return this.props.all ? (
          <Swiper
            containerStyle={{
              backgroundColor: 'black',
              width: Dimensions.get( 'window' ).width,
              height: resolution.aspectRatioWideScreen().height,
              ...this.props.pictureStyle,
            }}
            activeDotColor={Colors.tintColor}
            buttonWrapperStyle={styles.buttonWrappe}
            loop={false}
            nextButton={<Text style={styles.nextButton}>›</Text>}
            paginationStyle={styles.pagination}
            prevButton={<Text style={styles.prevButton}>‹</Text>}
            showsButtons={Platform.OS === 'android' ? true : false}
            loadMinimal={true}
            loadMinimalSize={1}
            removeClippedSubviews={false}
          >
            {this.props.urls.imgs.map( ( e, k ) => (
              <Image
                key={`img-${ e }-${ k }`}
                resizeMode="cover"
                source={{
                  uri: e,
                }}
                style={[
                  {
                    backgroundColor: 'transparent',
                    height: resolution.aspectRatioWideScreen().height,
                    width: width,
                  },
                  this.props.pictureStyle,
                ]}
              />
            ) )}
          </Swiper>
        ) : (
          <Swiper
            containerStyle={{
              backgroundColor: 'black',
              width: Dimensions.get( 'window' ).width,
            }}
            activeDotColor={Colors.tintColor}
            buttonWrapperStyle={styles.buttonWrappe}
            height={resolution.aspectRatioWideScreen().height}
            loop={false}
            nextButton={<Text style={styles.nextButton}>›</Text>}
            paginationStyle={styles.pagination}
            prevButton={<Text style={styles.prevButton}>‹</Text>}
            showsButtons={Platform.OS === 'android' ? true : false}
            loadMinimal={true}
            loadMinimalSize={1}
            removeClippedSubviews={false}
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
                style={[
                  {
                    backgroundColor: 'transparent',
                    height: resolution.aspectRatioWideScreen().height,
                    width: width,
                  },
                  this.props.pictureStyle,
                ]}
              />
            </View>
            {this.props.hasVideo ? (
              <View style={styles.slideVideo}>
                <WebView
                  source={{
                    uri: this.videoLink(),
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
            ) : (
              <View style={styles.slideImage}>
                <Image
                  resizeMode="cover"
                  source={{
                    uri: object.getLastByKey( {
                      item: this.props.urls,
                      key: 'imgs',
                    } ),
                  }}
                  style={{
                    height: resolution.aspectRatioWideScreen().height,
                    width: width,
                  }}
                />
              </View>
            )}
          </Swiper>
        )
      }
    }
  }
}

export default Slider
