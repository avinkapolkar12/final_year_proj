import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Colors } from '../constants/colors';

export default function ProfileScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      

      {/* Avatar */}
      <View style={styles.avatar} />

      <Text style={styles.name}>Ajay Kumar</Text>
      <Text style={styles.age}>40 years old</Text>

      <View style={styles.tag}>
        <Text style={styles.tagText}>Alzheimer’s</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Ajay requires daily medication and often forgets to drink water. He is generally active but has shown increased confusion in the evenings.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Live Patient Status</Text>

      <View style={styles.statusRow}>
        <View style={styles.statusBox}>
          <Text style={styles.statusIcon}>＋</Text>
          <Text style={styles.statusText}>Active</Text>
        </View>
        <View style={styles.statusBox}>
          <Text style={styles.statusIcon}>📍</Text>
          <Text style={styles.statusText}>Within Zone</Text>
        </View>
        <View style={styles.statusBox}>
          <Text style={styles.statusIcon}>!</Text>
          <Text style={styles.statusText}>No Falls</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.topRow}>
        <Pressable style={styles.actionBtn} onPress={() => navigation.navigate('People')}>
          <Text style={styles.actionText}>👥 Known People</Text>
        </Pressable>

        <Pressable style={styles.actionBtn} onPress={() => navigation.navigate('Routines')}>
          <Text style={styles.actionText}>🕒 Routines</Text>
        </Pressable>

        <Pressable style={styles.actionBtn} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.actionText}>⚙ Settings</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { alignItems: 'center', padding: 20 },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },

  actionBtn: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    width: '32%',
    alignItems: 'center',
  },

  actionText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.text,
    textAlign: 'center',
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#DDD',
  },

  name: { fontSize: 22, fontWeight: '700', marginTop: 12, color: Colors.text },
  age: { fontSize: 14, color: Colors.muted },

  tag: {
    backgroundColor: '#E6F8F5',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginVertical: 10,
  },

  tagText: { color: Colors.primary, fontWeight: '600' },

  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 20,
  },

  cardText: { color: Colors.text, lineHeight: 20 },

  sectionTitle: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },

  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  statusBox: {
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },

  statusIcon: { fontSize: 18 },
  statusText: { fontSize: 12, fontWeight: '600' },
});
