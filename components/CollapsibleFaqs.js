import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import { Icon } from 'react-native-elements'
import values from 'lodash/values'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

const styles = StyleSheet.create( {
  descriptionText: {
    color: Colors.textDescription,
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'justify',
  },
  rowDescription: {
    backgroundColor: Colors.baseTransparent,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    padding: 20,
  },
  rowTitle: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    minWidth: 12,
    padding: 20,
  },
  sectionQuestion: {
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  sectionIcon: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    color: Colors.iconGrey,
    textAlign: 'left',
    width: 25,
  },
  titleText: {
    fontSize: 14,
  },
} )

const AccordionView = ( { faqs, onChange } ) => {
  const renderTitle = ( section, index, isActive ) => (
    <View style={styles.rowTitle}>
      <View style={styles.sectionQuestion}>
        <Text style={styles.titleText}>{section.question}</Text>
      </View>
      <View style={styles.sectionIcon}>
        <Icon
          color={'white'}
          iconStyle={styles.icon}
          name={isActive ? 'ios-arrow-up' : 'ios-arrow-down'}
          size={32}
          type={'ionicon'}
        />
      </View>
    </View>
  )

  const renderDescription = section => (
    <View style={styles.rowDescription}>
      <View>
        <Text style={styles.descriptionText}>{section.answer}</Text>
      </View>
    </View>
  )

  const computedFaqs = values( faqs )

  // TODO: Move this function to utilities
  const onCollapsibleChang = index =>
    !isNaN( parseInt( index ) ) && onChange( computedFaqs[ index ].question )

  return (
    <Accordion
      onChange={index => onCollapsibleChang( index )}
      renderContent={renderDescription}
      renderHeader={renderTitle}
      sections={computedFaqs}
      underlayColor={Colors.baseUnderlayColor}
    />
  )
}

AccordionView.propTypes = {
  faqs: PropTypes.object,
  onChange: PropTypes.func.isRequired,
}

export default AccordionView
