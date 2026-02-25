import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from '../styles/screens/LocationScreenStyles';

export default function LocationScreen() {
  const leafletHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
      <style>
        html, body, #map {
          height: 100%;
          margin: 0;
          padding: 0;
        }
      </style>
    </head>
    <body>
      <div id="map"></div>

      <script>
        const map = L.map('map').setView([15.2993, 74.1240], 10);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        L.marker([15.2993, 74.1240])
          .addTo(map)
          .bindPopup('You are here')
          .openPopup();
      </script>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      
      {/* TOP HALF — MAP */}
      <View style={styles.mapContainer}>
        <WebView
          originWhitelist={['*']}
          source={{ html: leafletHTML }}
          style={styles.map}
        />
      </View>

      {/* BOTTOM HALF — INFO PANEL */}
      <View style={styles.infoPanel}>
      </View>

    </View>
  );
}
