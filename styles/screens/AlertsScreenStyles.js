import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

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
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
    fontFamily: 'Inter',
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
    fontFamily: 'Inter',
  },

  time: {
    fontSize: 20,
    color: Colors.muted,
    fontFamily: 'Inter',
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
    fontSize: 20,
    fontFamily: 'Inter',
  },

  moderateText: {
    color: '#C99700',
    fontWeight: '700',
    fontSize: 20,
    fontFamily: 'Inter',
  },
});

export default styles;
