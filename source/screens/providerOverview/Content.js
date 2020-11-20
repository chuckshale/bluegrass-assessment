import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Animated,
  UIManager,
  Image,
  Platform,
} from 'react-native';
import RegularText from '../../components/RegularText';
import {BORDER, PRIMARY, TEXT, WHITE} from '../../lib/colors';
import fonts from '../../lib/fonts';

const Content = (props) => {
  const [toggle, toggleHeight] = useState(false);

  const onHeightChange = () => {
    toggleHeight(!toggle);
  };

  return (
    <View style={styles.bodyContainer}>
      <View style={!toggle ? {height: 60} : undefined}>
        <RegularText style={styles.paragraph}>{props.description}</RegularText>
      </View>
      <View>
        <Image
          style={{
            height: 60,
            marginTop: -50,
            width: 365,
            display: toggle === false ? 'flex' : 'none',
          }}
          source={require('../../img/gradient.png')}
        />
      </View>
      <View style={styles.readMore}>
        <TouchableOpacity
          onPress={() => {
            onHeightChange();
          }}>
          <RegularText style={styles.readMoreBtn}>
            {toggle === false ? 'Read More' : 'Show Less'}
          </RegularText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  bodyContainer: {
    paddingLeft: 26,
    padding: 23,
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    backgroundColor: WHITE,
  },
  paragraph: {
    lineHeight: 18,
    ...fonts.light,
    fontSize: 13,
    color: TEXT,
  },
  readMoreBtn: {
    textAlign: 'center',
    ...fonts.medium,
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 30,
    marginTop: 10,
    color: PRIMARY,
  },
});
