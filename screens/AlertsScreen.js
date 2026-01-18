import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../constants/colors';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    padding: 16,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  icon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  iconText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },

  time: {
    fontSize: 12,
    color: Colors.muted,
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  critical: {
    backgroundColor: '#FFE5E5',
  },

  moderate: {
    backgroundColor: '#FFF6CC',
  },

  criticalText: {
    color: '#D90429',
    fontWeight: '700',
    fontSize: 11,
  },

  moderateText: {
    color: '#C99700',
    fontWeight: '700',
    fontSize: 11,
  },
});
