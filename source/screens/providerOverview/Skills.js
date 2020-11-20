import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import RegularText from '../../components/RegularText';
import {BORDER, WHITE} from '../../lib/colors';
import fonts from '../../lib/fonts';

const Skills = (props) => {
  const initialState = [];
  const [skillList, setSkillList] = useState(initialState);
  useEffect(() => {
    renderServices();
  }, [props]);

  const renderServices = () => {
    var skills = [];
    for (let i = 0; i < props.services.length; i++) {
      for (let j = 0; j < props.services[i]['tags'].length; j++) {
        skills.push(props.services[i]['tags'][j]);
      }
    }
    const uniqueSet = new Set(skills);
    const fixedSet = [...uniqueSet];
    setSkillList(fixedSet);
  };

  return (
    <Animated.View style={styles.skillsContainer}>
      <View>
        <RegularText style={styles.header}>Skills</RegularText>
      </View>
      <View style={styles.skillList}>
        {skillList.length > 0 &&
          skillList.map((item, index) => {
            return (
              <Text key={index} style={styles.tag}>
                {item}
              </Text>
            );
          })}
      </View>
    </Animated.View>
  );
};

export default Skills;

const styles = StyleSheet.create({
  header: {
    marginTop: 16,
    ...fonts.regular,
    fontSize: 14,
    lineHeight: 16,
    marginLeft: 10,
  },
  skillsContainer: {
    paddingLeft: 18,
    backgroundColor: WHITE,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  skillList: {
    paddingTop: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    height: 31,
    borderWidth: 1,
    borderColor: '#C1C1C1',
    padding: 10,
    paddingBottom: 27,
    borderRadius: 20,
    marginBottom: 10,
    marginLeft: 10,
  },
});
