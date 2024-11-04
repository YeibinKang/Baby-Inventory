import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, IconButton, Text, Appbar, Card, Avatar, SegmentedButtons, Menu } from 'react-native-paper';


import stageImage1 from '@assets/images/baby-stages/baby-stage-1.png';
import stageImage2 from '@assets/images/baby-stages/baby-stage-2.png';
import stageImage3 from '@assets/images/baby-stages/baby-stage-3.png';
import stageImage4 from '@assets/images/baby-stages/baby-stage-4.png';
import stageImage5 from '@assets/images/baby-stages/baby-stage-5.png';
import stageImage6 from '@assets/images/baby-stages/baby-stage-6.png';
import stageImage7 from '@assets/images/baby-stages/baby-stage-7.png';
import stageImage8 from '@assets/images/baby-stages/baby-stage-8.png';
import stageImage9 from '@assets/images/baby-stages/baby-stage-9.png';


const stageImages = {
  1: stageImage1,
  2: stageImage2,
  3: stageImage3,
  4: stageImage4,
  5: stageImage5,
  6: stageImage6,
  7: stageImage7,
  8: stageImage8,
  9: stageImage9,
};

const UserSettingsTab = () => {
  const [formData, setFormData] = useState({
    parents: [{ id: '', name: '', role: 'Mom', emailAddress: '' }],
    babies: [{ id: '', name: '', stage: 1, dob: '', age: '1', weight: '', height: '', gender: 'male' }]
  });
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [roleVisible, setRoleVisible] = useState(false);
  const roleInputRef = useRef<PaperTextInput | null>(null);

  const handleParentChange = (index, key, text) => {
    const newParents = formData.parents.map((parent, i) =>
      i === index ? { ...parent, [key]: text } : parent
    );
    setFormData({ ...formData, parents: newParents });
  };

  const handleBabyChange = (index, key, text) => {
    const newBabies = formData.babies.map((baby, i) =>
      i === index ? { ...baby, [key]: text } : baby
    );
    setFormData({ ...formData, babies: newBabies });
  };
  const handleRoleSelect = (role, index) => {
    const newParents = formData.parents.map((parent, i) =>
      i === index ? { ...parent, role: role } : parent
    );
    setFormData({ ...formData, parents: newParents });
    setRoleVisible(false);
    roleInputRef.current?.blur();
  };

  const addParent = () => {
    setFormData(prevState => ({
      ...prevState,
      parents: [...prevState.parents, { name: '', role: '', emailAddress: '' }]
    }));
  };

  const addBaby = () => {
    setFormData(prevState => ({
      ...prevState,
      babies: [...prevState.babies, { name: '', stage: '', dob: '', age: '', weight: '', height: '', gender: 'male' }]
    }));
  };

  const getStageImage = (stage) => {
    return stageImages[stage] || stageImages[1];
  };

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="User Center" />
      </Appbar.Header>

      <Card style={styles.section}>
        <Card.Title 
          title="Parents & Caregivers"
          left={(props) => <Avatar.Icon {...props} icon="human-male-female-child" />}
          right={(props) => <IconButton icon="plus-box" onPress={addParent} />}
        />
       {formData.parents.map((parent, index) => (
          <Card.Content key={index} style={styles.inputGroup}>
            <TextInput
              label="Name"
              value={parent.name}
              onChangeText={text => handleParentChange(index, 'name', text)}
              style={styles.input}
              left={<TextInput.Icon icon="account" />}
            />
            <View>
              <Menu
                style={{ width: '80%' }}
                visible={roleVisible}
                onDismiss={() => {
                  setRoleVisible(false);
                  roleInputRef.current?.blur();
                }}
                anchor={
                  <TextInput
                    label="Role"
                    ref={roleInputRef}
                    value={parent.role}
                    onFocus={() => setRoleVisible(true)}
                    style={styles.input}
                    left={<TextInput.Icon icon="drama-masks" />}
                  />
                }
              >

                {['Mom', 'Dad', 'Other'].map((item) => (
                  <Menu.Item 
                    key={item} 
                    onPress={() => handleRoleSelect(item, index)}
                    title={item} 
                  />
                ))}
              </Menu>
            </View>
            <TextInput
              label="Email Address"
              value={parent.emailAddress}
              onChangeText={text => handleParentChange(index, 'emailAddress', text)}
              style={styles.input}
              left={<TextInput.Icon icon="email" />}
            />
          </Card.Content>
        ))}

      </Card>

      <Card style={styles.section}>
        <Card.Title 
          title="Babies"
          left={(props) => <Avatar.Icon {...props} icon="baby-bottle-outline" />}
          right={(props) => <IconButton icon="plus-box" onPress={addBaby} />}
        />
        <Card.Content>
          <View>
          {formData.babies.map((baby, index) => (
            <View key={index} style={styles.inputGroup}>
                <TextInput
                  label="Baby"
                  value={baby.name}
                  onChangeText={text => handleBabyChange(index, 'name', text)}
                  style={styles.input}
                  left={<TextInput.Icon icon="tag-text-outline" />}
                />
              <View style={styles.babyCard}>
                <Image source={getStageImage(baby.stage)} style={styles.image} resizeMode="contain" />
                <View style={styles.babyCardStats}>
                  <SegmentedButtons
                    value={baby.gender} // Set the current gender as the value
                    onValueChange={(value) => handleBabyChange(index, 'gender', value)} // Update gender on change
                    density="small"
                    buttons={[
                      {
                        value: 'male',
                        icon: 'gender-male',
                      },
                      {
                        value: 'female',
                        icon: 'gender-female',

                      },
                    ]}
                  />
                  <TextInput
                    label="Age"
                    editable={false}
                    value={baby.age}
                    style={styles.textInput}
                    underlineColor="transparent"
                    theme={{ colors: { background: 'transparent' } }} 
                    left={<TextInput.Icon icon="calendar-today" />}
                  />
                  <TextInput
                    label="Stage"
                    editable={false}
                    value={baby.stage}
                    style={styles.textInput}
                    underlineColor="transparent"
                    theme={{ colors: { background: 'transparent' } }} 
                    left={<TextInput.Icon icon="trending-up" />}
                  />
                </View>
              </View>

              <View style={styles.form}>
                <TextInput
                  label="Date of Birth"
                  value={baby.dob}
                  onChangeText={text => handleBabyChange(index, 'dob', text)}
                  style={styles.input}
                  left={<TextInput.Icon icon="cake" />}
                />
                <TextInput
                  label="Weight"
                  value={baby.weight}
                  onChangeText={text => handleBabyChange(index, 'weight', text)}
                  style={styles.input}
                  left={<TextInput.Icon icon="scale" />}
                />
                <TextInput
                  label="Height"
                  value={baby.height}
                  onChangeText={text => handleBabyChange(index, 'height', text)}
                  style={styles.input}
                  left={<TextInput.Icon icon="ruler" />}
                />
              </View>
            </View>
          ))}

          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    overflow: 'scroll',
    marginBottom: '5vh',
    gap: '0.5rem'
  },
  section: {
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 8,
  },
  form: {
    flex: 1,
  },
  input: {
    width: '100%',
    marginBottom: 8,
  },
  label: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    backgroundColor: 'transparent', 
    height: 40, 
  },
  value: {
    fontSize: 16,
    color: '#000', // Adjust as needed
  },
  babyCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 1,
    marginRight: 1
  },
  babyCardStats: {
    width: '30%',
    flex: 1,
    flexDirection: 'column',
    gap: '0.5rem',
    justifyContent: 'flex-start',
  },
  image: {
    width: '50%',
    height: 100,
    alignSelf: 'center',
    marginBottom: 16,
  },
});

export default UserSettingsTab;
