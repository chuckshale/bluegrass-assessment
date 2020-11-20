import React, {useEffect, useState, useContext} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  LayoutAnimation,
  Animated,
  UIManager,
  Platform,
} from 'react-native';
import RegularText from '../../components/RegularText';
import fonts from '../../lib/fonts';
import RED, {PRIMARY, TEXT, WHITE} from '../../lib/colors';
import Stats from './Stats';
// PageOverview imports
import Contact from './Contact';
import Service from './Service';
import Content from './Content';
import Skills from './Skills';
import Context from '../../context/context';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const ProviderOverview = ({navigation, route}) => {
  const initialState = {
    averageRating: 0,
    backgroundImage: '',
    bookings: 0,
    description: '',
    displayName: '',
    favourites: 0,
    friends: 0,
    location: {
      name: '',
      placeUrl: '',
    },
  };
  const initialServices = [];
  const context = useContext(Context);
  const [state, setState] = useState(initialState);
  const [services, setServices] = useState(initialServices);

  useEffect(() => {
    setState(route.params.profile);
    setServices(route.params.services);
  }, [route]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <Service
          averageRating={state.averageRating}
          displayName={state.displayName}
        />
        <Contact
          location={state.location}
          navigate={() => navigation.push('PROVIDER_MESSAGE')}
        />
      </View>
      <Stats
        bookings={state.bookings}
        favourites={state.favourites}
        friends={state.friends}
      />
      <Content description={state.description} />
      <Skills services={services} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    backgroundColor: WHITE,
    borderBottomWidth: 1,
    borderBottomColor: '#BBBBBB',
  },
  label: {
    textAlign: 'center',
    fontSize: 12,
    ...fonts.regular,
  },
});
export default ProviderOverview;
