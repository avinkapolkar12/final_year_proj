import { View, Text } from 'react-native';
import styles from '../styles/screens/RoutinesScreenStyles';

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
