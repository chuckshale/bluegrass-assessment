import React, {useState, useEffect} from 'react';
import {ScrollView, Text, FlatList, View} from 'react-native';
import ServiceListItem from '../components/ServiceListItem';

const ProviderServicesList = ({route}) => {
  const initialState = [];

  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(route.params.services);
  }, []);

  const renderList = ({item, index}) => {
    return (
      <ServiceListItem
        name={item.name}
        info="Yoga class"
        price={item.price}
        time={item.duration}
        icon={{uri: item.icon}}
        serviceType={item.type}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={state}
        renderItem={renderList}
        extraData={state}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

export default ProviderServicesList;
