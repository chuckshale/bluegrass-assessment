import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PRIMARY} from '../../lib/colors';
import fonts from '../../lib/fonts';
import Rating from './Rating';

const Service = (props) => {
  return (
    <View style={styles.serviceContainer}>
      <View style={styles.headerContaier}>
        <Text style={styles.header}>{props.displayName}</Text>
      </View>
      <Rating averageRating={props.averageRating} />
    </View>
  );
};

export default Service;

const styles = StyleSheet.create({
  serviceContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 17,
    marginRight: 11,
    marginBottom: 11,
    // borderWidth: 1,
  },
  headerContaier: {
    width: 260,
    // borderWidth: 1,
  },
  header: {
    color: PRIMARY,
    fontSize: 20,
    ...fonts.medium,
  },
});
