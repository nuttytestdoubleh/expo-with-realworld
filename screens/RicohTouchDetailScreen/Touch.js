import React from 'react'
import { WebView } from 'react-native'
import PropTypes from 'prop-types'

const Touch = ( { url } ) => (
  <WebView
    source={{
      uri: url,
    }}
    javaScriptEnabled={true}
    style={{ flex: 1 }}
  />
)

Touch.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Touch
