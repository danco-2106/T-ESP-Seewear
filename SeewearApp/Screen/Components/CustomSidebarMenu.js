import React from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-community/async-storage';

const CustomSidebarMenu = (props) => {
  return (
    <View style={stylesSidebar.sideMenuContainer}>
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
            label={({color}) => 
                <Text style={{color: '#d8d8d8'}}>
                Déconnexion
                </Text>
            }
            onPress={() => {
                props.navigation.toggleDrawer();
                Alert.alert(
                'Déconnexion',
                'Est-tu sûr de vouloir te déconnecter?',
                [
                    {
                    text: 'Retour',
                    onPress: () => {
                        return null;
                    },
                    },
                    {
                    text: 'Confirmer',
                    onPress: () => {
                        AsyncStorage.clear();
                        props.navigation.replace('Auth');
                    },
                    },
                ],
                {cancelable: false},
                );
            }}
            />
        </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#db6872',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});