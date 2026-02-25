import { View, Text, ScrollView, Image } from 'react-native';
import styles from '../styles/screens/PeopleScreenStyles';

const people = [
  { name: 'Arun', role: 'Brother', time: '2m' },
  { name: 'Sofie', role: 'Wife', time: '15m' },
  { name: 'Lee', role: 'Son', time: '17m' },
  { name: 'Kim', role: 'Daughter', time: '17m' },
  { name: 'Damon', role: 'Friend', time: '2h' },
];

export default function PeopleScreen() {
  return (
    <ScrollView style={styles.container}>
      {people.map((p, i) => (
        <View key={i} style={styles.card}>
          <View style={styles.avatar} />
          <View style={styles.info}>
            <Text style={styles.name}>{p.name}</Text>
            <Text style={styles.role}>{p.role}</Text>
          </View>
          <Text style={styles.time}>{p.time}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
