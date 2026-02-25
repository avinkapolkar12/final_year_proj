import { View, Text, Pressable } from 'react-native';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import styles from '../styles/screens/SignUpScreenStyles';

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
