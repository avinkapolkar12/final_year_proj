import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Colors } from '../constants/colors';

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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, padding: 16 },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#DDD',
    marginRight: 12,
  },

  info: { flex: 1 },
  name: { fontWeight: '700', color: Colors.text },
  role: { color: Colors.muted, fontSize: 12 },
  time: { color: Colors.muted, fontSize: 12 },
});
