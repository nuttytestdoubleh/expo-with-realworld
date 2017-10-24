import { Platform, StyleSheet } from 'react-native'
import { Colors } from 'constants'

export default StyleSheet.create( {
  cardContainer: {
    flex: 1,
    marginBottom: 25,
  },
  contactBodyColon: {
    flex: 1,
    textAlign: 'center',
  },
  contactBodyContainer: {
    justifyContent: 'center',
    paddingTop: 10,
  },
  contactBodyItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  contactBodyText: {
    flex: 4,
    textAlign: 'left',
    width: 110,
  },
  contactBodyTitle: {
    color: Colors.tintColor,
    flex: 4,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  contactHeaderText: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingBottom: 25,
    paddingTop: 10,
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    borderColor: '#ddd',
    borderRadius: 112.5,
    borderWidth: 1,
    height: 225,
    marginBottom: 25,
    width: 225,
  },
  imageContainer: {
    ...Platform.select( {
      ios: {
        alignItems: 'center',
        borderColor: '#ddd',
        elevation: 1,
        marginTop: -1,
        shadowColor: '#000',
        shadowOffset: {
          height: 2,
          width: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
      android: {
        alignItems: 'center',
      },
    } ),
  },
} )
