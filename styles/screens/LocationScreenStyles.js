import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  mapContainer: {
    flex: 1, // 50%
  },

  map: {
    flex: 1,
  },

  infoPanel: {
    flex: 1, // 50%
    padding: 20,
    borderTopWidth: 1,
    borderColor: Colors.border,
  },

  title: {
    fontSize: 40,
    fontWeight: '700',
    marginBottom: 10,
    color: Colors.text,
    fontFamily: 'Inter',
  },

  text: {
    fontSize: 20,
    color: Colors.muted,
    marginBottom: 6,
    fontFamily: 'Inter',
  },
});

export default styles;
