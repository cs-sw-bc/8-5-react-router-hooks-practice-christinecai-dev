import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlayersScreen from './screens/PlayersScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import StandingsScreen from './screens/StandingsScreen';
import TeamsScreen from './screens/TeamsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Bottom tabs fit this app because Players, Schedule, Standings, and Teams
// are top-level sections users may switch between frequently.



export default function App() {
  const Tabs = createBottomTabNavigator();

  return (
   <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
       <Tabs.Navigator
        screenOptions={{

          headerStyle: { backgroundColor: '#0d1117' },

          headerTintColor: '#fff',

          headerTitleStyle: { fontWeight: '800' },

           tabBarStyle: { backgroundColor: '#38157fff', borderTopColor: '#919813ff' },

          tabBarActiveTintColor: '#5b4fff',

          tabBarInactiveTintColor: '#8888aa',
        }}
      >
          <Tabs.Screen name="Players" component={PlayersScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="people-outline" size={size} color={color} />}}></Tabs.Screen>
          <Tabs.Screen name="Schedule" component={ScheduleScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="stopwatch-outline" size={size} color={color} />}}></Tabs.Screen>
          <Tabs.Screen name="Standings" component={StandingsScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="flag-outline" size={size} color={color} />}}></Tabs.Screen>
          <Tabs.Screen name="Teams" component={TeamsScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="people-circle-outline" size={size} color={color} />}}></Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
