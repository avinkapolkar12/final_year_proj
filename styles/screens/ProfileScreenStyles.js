import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

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
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
    textAlign: 'center',
    fontFamily: 'Inter',
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#DDD',
  },

  name: { fontSize: 40, fontWeight: '700', marginTop: 12, color: Colors.text, fontFamily: 'Inter' },
  age: { fontSize: 20, color: Colors.muted, fontFamily: 'Inter' },

  tag: {
    backgroundColor: '#E6F8F5',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginVertical: 10,
  },

  tagText: { color: Colors.primary, fontWeight: '600', fontFamily: 'Inter', fontSize: 20 },

  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 20,
  },

  cardText: { color: Colors.text, lineHeight: 20, fontFamily: 'Inter', fontSize: 20 },

  sectionTitle: {
    alignSelf: 'flex-start',
    fontSize: 40,
    fontWeight: '700',
    marginBottom: 10,
    fontFamily: 'Inter',
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

  statusIcon: { fontSize: 20, fontFamily: 'Inter' },
  statusText: { fontSize: 20, fontWeight: '600', fontFamily: 'Inter' },
});

export default styles;
