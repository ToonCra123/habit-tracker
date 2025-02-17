import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HabitEntry from './components/HabitEntry';
import HabitList from './components/HabitList';
import { Habit } from './types';
import { useState } from 'react';

export default function App() {
  const [habits, setHabits] = useState<Habit[]>([]);

  return (
    <View style={styles.container}>
      <View style={styles.area1}><Text style={styles.text}>Habit Tracker</Text></View>
      <View style={styles.area2}><HabitList habits={habits} /></View>
      <View style={styles.area3}><HabitEntry changeText={setHabits} currList={habits} /></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d4f4c',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  area1: {
    padding: 10,
    width: '100%',
    backgroundColor: '#2C3930',
    flex: .1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  area2: {
    backgroundColor: '#3F4F44',
    flex: .75,
    width: '100%',
    padding: 10,
  },
  area3: {
    backgroundColor: '#3F4F44',
    flex: .15,
    width: '100%',
  },
  text: {
    fontWeight: 'bold',
    color: '#DCD7C9',
    fontSize: 20,
  },
});
