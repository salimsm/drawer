import * as React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';

type DrawerParamList = {
  Home: undefined;
  Notifications: undefined;
};

type HomeScreenProps = {
  navigation: NavigationProp<DrawerParamList, 'Home'>;
};

function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

type NotificationsScreenProps = {
  navigation: NavigationProp<DrawerParamList, 'Notifications'>;
};

function NotificationsScreen({navigation}: NotificationsScreenProps) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
