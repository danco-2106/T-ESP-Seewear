// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

const NavigationDrawerHeader = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>

        <Image
          source={require('../../Image/navigation-drawer.png')}
          style={{
            height: 25,
            width: 25,
            marginLeft: 7,
            resizeMode: 'contain',
            alignSelf: 'center'
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;