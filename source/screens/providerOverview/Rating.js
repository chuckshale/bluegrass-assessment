import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import {ACCENT} from '../../lib/colors';

const Rating = (props) => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.ratingInner}>
        <View style={styles.iconText}>
          <FontAwesomeIcon
            style={styles.ratingIcon}
            name="star"
            color="#fff"
            size={15}
          />
          <Text>{props.averageRating.toFixed(1)}</Text>
        </View>
      </View>
    </View>
  );
};
export default Rating;
const styles = StyleSheet.create({
  ratingContainer: {
    textAlign: 'right',
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
  ratingIcon: {
    marginRight: 2,
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 3,
  },
  ratingInner: {
    backgroundColor: ACCENT,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 50,
  },
});
