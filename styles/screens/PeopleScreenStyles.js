import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, padding: 16 },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#DDD',
    marginRight: 12,
  },

  info: { flex: 1 },
  name: { fontWeight: '700', color: Colors.text, fontSize: 20, fontFamily: 'Inter' },
  role: { color: Colors.muted, fontSize: 20, fontFamily: 'Inter' },
  time: { color: Colors.muted, fontSize: 20, fontFamily: 'Inter' },
});

export default styles;
