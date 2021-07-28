import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const UserScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16, backgroundColor: 'white'}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            User Page :D
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserScreen;