import React, { useRef, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const webviewRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const PWA_URL = 'https://softmarket.biz/rcolfm/';

  const handleLoadStart = () => {
    setLoading(true);
    setError(false);
  };

  const handleLoadEnd = () => {
    setLoading(false);
  };

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#f8f9fc" />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Impossible de charger la page</Text>
          <Text style={styles.errorSubText}>Vérifiez votre connexion internet</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fc" />
      
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Radio Colfm</Text>
          <View style={styles.headerUnderline} />
        </View>
      </View>

      <WebView
        ref={webviewRef}
        source={{ uri: PWA_URL }}
        style={styles.webview}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
      />

      {loading && (
        <View style={styles.loaderOverlay}>
          <ActivityIndicator size="large" color="#2c3e66" />
          <Text style={styles.loaderText}>Chargement...</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fc',
  },
  header: {
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  headerContent: {
    paddingTop: 16,
    paddingBottom: 12,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e66',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  headerUnderline: {
    height: 3,
    width: 40,
    backgroundColor: '#2c3e66',
    borderRadius: 2,
  },
  webview: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loaderOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  loaderText: {
    marginTop: 12,
    fontSize: 14,
    color: '#2c3e66',
    fontWeight: '500',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#f8f9fc',
  },
  errorText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e66',
    marginBottom: 8,
    textAlign: 'center',
  },
  errorSubText: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});