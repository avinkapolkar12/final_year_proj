import { View, Text, StyleSheet, Pressable } from 'react-native';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import { Colors } from '../constants/colors';

export default function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <AppInput placeholder="Name" />
      <AppInput placeholder="Email" />
      <AppInput placeholder="Password" secureTextEntry />

      <AppButton title="Sign Up" onPress={() => navigation.replace('Main')} />

      <Pressable onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.link}>
          Already have an account? <Text style={styles.linkBold}>Sign In</Text>
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
    color: Colors.text,
  },
  link: {
    marginTop: 20,
    textAlign: 'center',
    color: Colors.muted,
  },
  linkBold: {
    color: Colors.primary,
    fontWeight: '600',
  },
});
