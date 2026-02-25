import { View, Text, Switch } from 'react-native';
import styles from '../styles/screens/SettingsScreenStyles';

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
