import React from 'react'
import { LinearGradient } from 'expo'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

const LinearGradientComponent = ( { children } ) => (
  <LinearGradient
    colors={Colors.baseNavGradient}
    start={{ x: 0.0, y: 0.25 }}
    end={{ x: 1.0, y: 1.0 }}
  >
    {children}
  </LinearGradient>
)

LinearGradientComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LinearGradientComponent
