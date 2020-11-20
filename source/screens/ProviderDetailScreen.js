import React from 'react';
import {ActivityIndicator, StatusBar, Text, View} from 'react-native';
import ProviderOverview from './providerOverview';
import ProviderServicesList from './ProviderServicesList';
import NavigationbarHeaderWithExpandedImage from '../components/NavigationbarHeaderWithExpandedImage';
import TopTabbarComponent from '../components/TopTabbarComponent';
import mockApi from '../mockApi';

const ProviderDetailScreen = ({navigation, route}) => {
  const [providerData, setProviderData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  //navigation setup
  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: ({scene, previous}) => {
        return (
          <NavigationbarHeaderWithExpandedImage
            scene={scene}
            previous={previous}
            navigation={navigation}
            backgroundImage={providerData?.profile?.backgroundImage}
          />
        );
      },
    });
  }, [navigation, providerData]);

  //get results from API
  const getServices = React.useCallback(async () => {
    try {
      setLoading(true);
      const res = await mockApi.get('/Provider/Profile');
      if (res.ok && res.body.data) {
        console.log('apiCall', res.body.data);
        // use this data in overview and service list
        setProviderData(res.body.data);
        setLoading(false);
      } else {
        throw new Error('Unable to retrieve profile');
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  React.useEffect(() => {
    // console.warn('here');
    getServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <TopTabbarComponent
        items={[
          {
            title: 'Overview',
            component: ProviderOverview,
            props: {
              profile: providerData.profile,
              services: providerData.services,
            },
          },
          {
            title: 'Services',
            component: ProviderServicesList,
            props: {services: providerData.services},
          },
          {
            title: 'Reviews',
            component: View,
          },
        ]}
      />
    </>
  );
};

export default ProviderDetailScreen;
