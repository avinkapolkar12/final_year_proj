import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/screens/AlertsScreenStyles';

const alerts = [
  {
    title: 'Patient exited home boundary',
    severity: 'Critical',
    time: '2 mins ago',
  },
  {
    title: 'Fall risk movement detected',
    severity: 'Critical',
    time: '10 mins ago',
  },
  {
    title: 'Missed medication reminder',
    severity: 'Moderate',
    time: '15 mins ago',
  },
  {
    title: 'Geofence Breached',
    severity: 'Critical',
    time: '30 mins ago',
  },

];

export default function AlertsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {alerts.map((alert, index) => (
        <View key={index} style={styles.card}>
          
          {/* Icon */}
          <View style={styles.icon}>
            <Text style={styles.iconText}>!</Text>
          </View>

          {/* Alert Info */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{alert.title}</Text>
            <Text style={styles.time}>{alert.time}</Text>
          </View>

          {/* Severity */}
          <View
            style={[
              styles.badge,
              alert.severity === 'Critical'
                ? styles.critical
                : styles.moderate,
            ]}
          >
            <Text
              style={[
                styles.badgeText,
                alert.severity === 'Critical'
                  ? styles.criticalText
                  : styles.moderateText,
              ]}
            >
              {alert.severity}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
