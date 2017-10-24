import { compose, mapProps, pure } from 'recompose'
import { nav } from 'utilities'

import Touch from './Touch'

export default compose(
  mapProps( props => {
    return {
      ...props,
      url: nav.getNavigationParam( props.navigation, 'url' ),
    }
  } ),
  pure
)( Touch )
