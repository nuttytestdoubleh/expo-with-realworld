import React from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { nav } from 'utilities'

import Newsletter from './NewsletterContainer'
import { HeaderNavigation } from '@components'

const NewsletterDetailScreen = ( { navigation } ) => (
  <ScrollView removeClippedSubviews={false}>
    <Newsletter navigation={navigation} />
  </ScrollView>
)

NewsletterDetailScreen.navigationOptions = ( { navigation } ) => ( {
  header: (
    <HeaderNavigation
      navigation={navigation}
      title={nav.getNavigationParam( navigation, 'title' )}
    />
  ),
} )

NewsletterDetailScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default NewsletterDetailScreen
