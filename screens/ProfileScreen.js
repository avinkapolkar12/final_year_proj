import { View, Text, ScrollView, Pressable } from 'react-native';
import styles from '../styles/screens/ProfileScreenStyles';

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
