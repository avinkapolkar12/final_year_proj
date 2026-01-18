import { View, Text, StyleSheet, Switch } from 'react-native';
import { Colors } from '../constants/colors';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.item}>Edit Geofence</Text>
        <Text style={styles.item}>Set Reminder Schedule</Text>
        <Text style={styles.item}>Emergency Contacts</Text>
        <Text style={styles.item}>Voice Feedback Tone</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.item}>Object Detection</Text>
          <Switch value={true} />
        </View>
        <View style={styles.row}>
          <Text style={styles.item}>Face Detection</Text>
          <Switch value={true} />
        </View>
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

  item: {
    fontSize: 14,
    paddingVertical: 10,
    color: Colors.text,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
