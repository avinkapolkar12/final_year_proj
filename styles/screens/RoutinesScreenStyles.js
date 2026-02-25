import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

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

  title: { fontWeight: '700', marginBottom: 8, fontSize: 40, fontFamily: 'Inter', color: Colors.text },
  input: { color: Colors.muted, fontSize: 20, fontFamily: 'Inter' },

  time: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: Colors.border,
    fontSize: 20,
    fontFamily: 'Inter',
    color: Colors.text,
  },

  saveBtn: {
    backgroundColor: Colors.primary,
    padding: 14,
    borderRadius: 14,
    alignItems: 'center',
  },

  saveText: { color: '#fff', fontWeight: '700', fontSize: 20, fontFamily: 'Inter' },
});

export default styles;
