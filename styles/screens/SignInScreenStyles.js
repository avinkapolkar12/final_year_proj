import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    marginBottom: 24,
    color: Colors.text,
    fontFamily: 'Inter',
  },
  link: {
    marginTop: 20,
    textAlign: 'center',
    color: Colors.muted,
    fontSize: 20,
    fontFamily: 'Inter',
  },
  linkBold: {
    color: Colors.primary,
    fontWeight: '600',
    fontFamily: 'Inter',
  },
});

export default styles;
