import { Dimensions, PixelRatio, Platform } from 'react-native'

const isIos = Platform.OS === 'ios'
const isIphoneX = isIos && Dimensions.get( 'window' ).height === 812

const baseNavMarginTop = () => ( isIphoneX ? 22 + 14 : 22 )

const aspectRatio = ( horizontal, vertical ) => {
  return {
    height: PixelRatio.roundToNearestPixel(
      Dimensions.get( 'window' ).width / ( horizontal / vertical )
    ),
  }
}

const aspectRatioStandardScreen = () => aspectRatio( 4, 3 )
const aspectRatioWideScreen = () => aspectRatio( 16, 9 )

export {
  aspectRatio,
  aspectRatioStandardScreen,
  aspectRatioWideScreen,
  baseNavMarginTop,
  isIos,
  isIphoneX,
}
