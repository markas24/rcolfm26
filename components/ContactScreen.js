import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
  ScrollView,
} from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

export default function ContactScreen() {
  const WHATSAPP_NUMBER = '243854507945';
  const EMAIL = 'contact@rcolfm.com';
  const PHONE = '+243854507945';

  const copyToClipboard = async (text, type) => {
    await Clipboard.setStringAsync(text);
    Alert.alert('Copié !', `${type} copié dans le presse-papier`);
  };

  const contactWhatsApp = () => {
    const message = "Bonjour RCOLFM 93.6, je viens de l'application mobile.";
    const url = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
    
    Linking.openURL(url).catch(() => {
      const webUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      Linking.openURL(webUrl);
    });
  };

  const makeCall = () => {
    const url = `tel:${WHATSAPP_NUMBER}`;
    Linking.openURL(url).catch(() => {
      Alert.alert('Info', 'Votre appareil ne supporte pas les appels');
    });
  };

  const sendEmail = () => {
    const subject = 'Contact depuis l\'application RCOLFM';
    const body = 'Bonjour RCOLFM,\n\n';
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    Linking.openURL(url).catch(() => {
      Alert.alert('Info', 'Aucune application email trouvée');
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 name="broadcast-tower" size={60} color="#c4302b" />
        <Text style={styles.title}>RCOLFM 93.6</Text>
        <Text style={styles.subtitle}>Contactez-nous</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📱 WhatsApp</Text>
        <Text style={styles.cardText}>Réponse rapide garantie</Text>
        <TouchableOpacity style={styles.whatsappButton} onPress={contactWhatsApp}>
          <Ionicons name="logo-whatsapp" size={24} color="#fff" />
          <Text style={styles.buttonText}>Envoyer un message</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.copyButton} 
          onPress={() => copyToClipboard(WHATSAPP_NUMBER, 'Numéro WhatsApp')}
        >
          <MaterialIcons name="content-copy" size={18} color="#666" />
          <Text style={styles.copyText}>Copier le numéro</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📞 Appel Téléphonique</Text>
        <Text style={styles.cardText}>Du lundi au vendredi, 9h-18h</Text>
        <TouchableOpacity style={styles.callButton} onPress={makeCall}>
          <Ionicons name="call" size={24} color="#fff" />
          <Text style={styles.buttonText}>Appeler maintenant</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.copyButton} 
          onPress={() => copyToClipboard(PHONE, 'Numéro de téléphone')}
        >
          <MaterialIcons name="content-copy" size={18} color="#666" />
          <Text style={styles.copyText}>Copier le numéro</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>✉️ Email</Text>
        <Text style={styles.cardText}>Réponse sous 48h</Text>
        <TouchableOpacity style={styles.emailButton} onPress={sendEmail}>
          <Ionicons name="mail" size={24} color="#fff" />
          <Text style={styles.buttonText}>Envoyer un email</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.copyButton} 
          onPress={() => copyToClipboard(EMAIL, 'Adresse email')}
        >
          <MaterialIcons name="content-copy" size={18} color="#666" />
          <Text style={styles.copyText}>Copier l'email</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>📻 Horaires d'antenne</Text>
        <Text style={styles.infoText}>Lundi - Vendredi: 6h - 22h</Text>
        <Text style={styles.infoText}>Samedi - Dimanche: 8h - 20h</Text>
        <View style={{ marginVertical: 10 }} />
        <Text style={styles.infoTitle}>📍 Adresse</Text>
        <Text style={styles.infoText}>Kinshasa, RDC</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c4302b',
    marginTop: 15,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#fff',
    margin: 15,
    marginBottom: 0,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 12,
    color: '#999',
    marginBottom: 15,
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10,
    gap: 10,
  },
  callButton: {
    backgroundColor: '#c4302b',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10,
    gap: 10,
  },
  emailButton: {
    backgroundColor: '#34B7F1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10,
    gap: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 8,
    gap: 5,
  },
  copyText: {
    color: '#666',
    fontSize: 12,
  },
  infoCard: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c4302b',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
});