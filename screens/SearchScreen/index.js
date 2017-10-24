import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import SearchList from './SearchListContainer'

const SearchScreen = () => <View />

SearchScreen.navigationOptions = ( { navigation } ) => ( {
  header: <SearchList navigation={navigation} />,
} )

SearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default SearchScreen
