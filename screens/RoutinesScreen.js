import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

export default function RoutinesScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.title}>Routine Name</Text>
        <Text style={styles.input}>Morning Patient Routine</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.time}>08:00  Morning Medication</Text>
        <Text style={styles.time}>13:30  Lunch</Text>
        <Text style={styles.time}>17:00  Evening Walk</Text>
      </View>

      <View style={styles.saveBtn}>
        <Text style={styles.saveText}>Save Routine</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, padding: 16 },

  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  title: { fontWeight: '700', marginBottom: 8 },
  input: { color: Colors.muted },

  time: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: Colors.border,
  },

  saveBtn: {
    backgroundColor: Colors.primary,
    padding: 14,
    borderRadius: 14,
    alignItems: 'center',
  },

  saveText: { color: '#fff', fontWeight: '700' },
});
