import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import RegularText from '../../components/RegularText';

const Contact = (props) => {
  const navigate = () => {
    props.navigate();
  };

  const openLink = (URL) => {
    console.log('URL', URL);
    Linking.openURL(URL).catch((err) =>
      console.error('An error occurred', err),
    );
  };

  return (
    <View style={styles.contactContainer}>
      <View style={styles.iconText}>
        <Icon style={styles.contactIcon} name="location-pin" size={30} />
        <RegularText onPress={() => openLink(props.location.placesUrl)}>
          {props.location.name}
        </RegularText>
      </View>
      <View style={styles.iconText}>
        <MaterialIcon
          style={styles.contactIcon}
          name="message-text-outline"
          size={30}
        />
        <RegularText
          onPress={() => {
            navigate();
          }}>
          Send a message
        </RegularText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    marginLeft: 17,
    marginBottom: 20,
  },
  contactIcon: {
    marginRight: 10,
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Contact;
