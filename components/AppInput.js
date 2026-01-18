import { TextInput, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

export default function AppInput(props) {
  return <TextInput style={styles.input} placeholderTextColor={Colors.muted} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    padding: 14,
    marginTop: 12,
    fontSize: 15,
  },
});
