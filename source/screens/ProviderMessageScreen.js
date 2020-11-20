import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native';
import SecondaryButton from '../components/SecondaryButton';
import Context from '../context/context';
import {WHITE, TEXT} from '../lib/colors';
import fonts from '../lib/fonts';
import mockApi from '../mockApi';

const ProviderMessageScreen = ({navigation, route}) => {
  const [inputText, setInputText] = useState('');
  const [active, setActive] = useState(true);
  const [res, setRes] = useState('');
  const context = useContext(Context);

  const checkText = (text) => {
    if (!text.trim() || text === '' || typeof text === typeof undefined) {
      setActive(true);
    } else {
      setInputText(text);
      setActive(false);
    }
  };

  const sendMessage = async () => {
    try {
      const res = await mockApi.post('/Provider/Message', {
        body: {message: inputText},
      });
      if (res.ok && res.body.error) {
        debugger;
        setRes(res.body.error);
        console.log('apiCall', res.body.error);
        // use this data in overview and service list
      } else {
        throw new Error('Unable to retrieve profile');
      }
    } catch (error) {
      console.log(error);
    }
    alert(res);
  };

  return (
    <ScrollView
      style={{backgroundColor: WHITE, flex: 1}}
      contentContainerStyle={{padding: 20}}>
      <TextInput
        style={{
          marginBottom: 16,
          backgroundColor: '#F4F4F4',
          borderRadius: 14,
          padding: 15,
          fontSize: 15,
          lineHeight: 20,
          ...fonts.regular,
          color: TEXT,
          minHeight: 180,
        }}
        placeholder="Message"
        multiline
        onChangeText={(text) => {
          checkText(text);
        }}
      />
      <SecondaryButton
        disabled={active}
        onPress={() => {
          sendMessage();
        }}>
        Send
      </SecondaryButton>
    </ScrollView>
  );
};

export default ProviderMessageScreen;
