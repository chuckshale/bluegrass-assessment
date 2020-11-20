import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RegularText from '../../components/RegularText';
import {ACCENT, PRIMARY} from '../../lib/colors';
import fonts from '../../lib/fonts';

const Stats = (props) => {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.statsInner}>
        <Text style={styles.statsHeader}>{props.bookings}</Text>
        <RegularText>Bookings</RegularText>
      </View>
      <View style={styles.statsInner}>
        <Text style={styles.statsHeader}>{props.favourites}</Text>
        <RegularText>Favourites</RegularText>
      </View>
      <View style={styles.statsInner}>
        <Text style={styles.statsHeader}>{props.friends}</Text>
        <RegularText>Friends</RegularText>
      </View>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  statsInner: {
    marginTop: 18,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: ACCENT,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  statsHeader: {
    fontSize: 45,
    textAlign: 'center',
    ...fonts.light,
    fontWeight: '300',
    color: PRIMARY,
  },
});
