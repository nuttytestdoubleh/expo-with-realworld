import React, { Component } from 'react'

import { connect } from 'react-redux'
import Colors from 'constants/Colors'

import {
  Dimensions,
  Keyboard,
  LayoutAnimation,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { actions as settingsActions } from 'modules/Settings'
import { actions as searchScreenActions } from 'modules/Search'
import { resolution } from 'utilities'

const styles = StyleSheet.create( {
  SearchContainer: {
    alignItems: 'center',
    backgroundColor: Colors.tintColor,
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 5,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
  },
  touchableSearch: {
    backgroundColor: Colors.darkTintColor,
    borderRadius: 4,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  insideTouchableView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: Dimensions.get( 'window' ).width - 40,
  },
  altTouchableView: {
    width: Dimensions.get( 'window' ).width * 0.8 - 20,
    justifyContent: 'flex-start',
  },
  customSearchTextInputStyle: {
    height: 24,
    alignSelf: 'center',
    width: 50,
    fontSize: 14,
    marginLeft: 7,
    color: Colors.searchText,
  },
  buttonCancel: {
    padding: 0,
  },
} )

class SearchContainer extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      isTouchableDisabled: false,
    }
  }

  onSearchActive = () => {
    Keyboard.dismiss()
    this.props.navigation.navigate( 'search' )
  }

  shouldComponentUpdate( nextProps ) {
    return false
  }

  renderSearchIcon = () => {
    return (
      <View style={{ backgroundColor: Colors.darkTintColor }}>
        <Icon name={'search'} size={16} color={Colors.placeHolderText} />
      </View>
    )
  }

  render() {
    return (
      <View
        style={{
          marginTop: resolution.baseNavMarginTop(),
          height: 40,
        }}
      >
        <View style={styles.SearchContainer}>
          <TouchableOpacity
            style={{ elevation: 4 }}
            // disabled={this.state.isTouchableDisabled}
            onPress={this.onSearchActive}
          >
            <View ref="touchable_search" style={styles.touchableSearch}>
              <View style={[ styles.insideTouchableView ]}>
                {this.renderSearchIcon()}

                <TextInput
                  ref="search_textinput_component"
                  autoCorrect={false}
                  placeholderTextColor={Colors.placeHolderText}
                  //value={this.props.search_text}
                  onChangeText={text => this.onSearchTextChange( text )}
                  //onSubmitEditing={this.onSubmitEditingSearch}
                  keyboardType={'web-search'}
                  onFocus={this.onSearchActive}
                  placeholder="Search"
                  underlineColorAndroid={Colors.darkTintColor}
                  style={[ styles.customSearchTextInputStyle ]}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const combineAction = () => ( {
  ...settingsActions,
  ...searchScreenActions,
} )

const mapStateToProps = state => {
  return {
    is_searching: state.search.is_searching,
    search_text: state.search.search_text,
  }
}

export default connect( mapStateToProps, combineAction() )( SearchContainer )
