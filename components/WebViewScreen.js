import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Share,
  Alert,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';

export default function WebViewScreen({ navigation }) {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // Fonction de partage WhatsApp
  const shareOnWhatsApp = async () => {
    try {
      const message = "🎵 Écoutez RCOLFM 93.6 - La voix de la communauté !\n\nhttps://softmarket.biz/rcolfm/";
      
      Alert.alert(
        "Partager sur WhatsApp",
        "Choisissez comment partager",
        [
          {
            text: "Ouvrir WhatsApp",
            onPress: () => {
              const url = `whatsapp://send?text=${encodeURIComponent(message)}`;
              Linking.openURL(url).catch(() => {
                Linking.openURL(`https://wa.me/?text=${encodeURIComponent(message)}`);
              });
            }
          },
          {
            text: "Partager via lien",
            onPress: () => {
              Share.share({
                message: message,
                title: "RCOLFM 93.6",
              });
            }
          },
          {
            text: "Annuler",
            style: "cancel"
          }
        ]
      );
    } catch (error) {
      Alert.alert("Erreur", "Impossible de partager");
    }
  };

  // Ajouter bouton de partage dans le header
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          onPress={shareOnWhatsApp}
          style={styles.headerButton}
        >
          <Ionicons name="logo-whatsapp" size={24} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ uri: 'https://softmarket.biz/rcolfm/index.php' }}
        style={styles.webview}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        allowsBackForwardNavigationGestures={true}
        pullToRefreshEnabled={true}
      />
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#c4302b" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  headerButton: {
    marginRight: 15,
    padding: 8,
  },
});