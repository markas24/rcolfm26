import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
  Share,
} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function CustomDrawer(props) {
  const WHATSAPP_NUMBER = '243854507945';
  const SITE_URL = 'https://softmarket.biz/rcolfm/';

  const contactWhatsApp = () => {
    const message = "Bonjour RCOLFM 93.6, je viens de l'application mobile. J'aimerais avoir plus d'informations.";
    const url = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
    
    Linking.openURL(url).catch(() => {
      const webUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      Linking.openURL(webUrl);
    });
  };

  const shareApp = async () => {
    try {
      const message = `📻 Découvrez RCOLFM 93.6 - La radio qui vous connecte !\n\nÉcoutez en direct et accédez aux archives :\n${SITE_URL}`;
      
      await Share.share({
        message: message,
        title: 'RCOLFM 93.6',
      });
    } catch (error) {
      Alert.alert('Erreur', 'Impossible de partager');
    }
  };

  const makeCall = () => {
    const url = `tel:${WHATSAPP_NUMBER}`;
    Linking.openURL(url).catch(() => {
      Alert.alert('Info', 'Votre appareil ne supporte pas les appels');
    });
  };

  const sendEmail = () => {
    const email = 'contact@rcolfm.com';
    const subject = 'Contact depuis l\'application RCOLFM';
    const body = 'Bonjour RCOLFM,\n\n';
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    Linking.openURL(url).catch(() => {
      Alert.alert('Info', 'Aucune application email trouvée');
    });
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
      {/* En-tête */}
      <View style={styles.drawerHeader}>
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <FontAwesome5 name="broadcast-tower" size={40} color="#c4302b" />
          </View>
          <Text style={styles.logoTitle}>RCOLFM 93.6</Text>
          <Text style={styles.logoSlogan}>La voix de la communauté</Text>
        </View>
      </View>

      {/* Menu items */}
      <View style={styles.drawerMenu}>
        <DrawerItemList {...props} />
      </View>

      {/* Séparateur */}
      <View style={styles.divider} />

      {/* Section Contact */}
      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>CONTACT RAPIDE</Text>
        
        <TouchableOpacity style={styles.actionButton} onPress={contactWhatsApp}>
          <Ionicons name="logo-whatsapp" size={24} color="#25D366" />
          <View style={styles.actionTextContainer}>
            <Text style={styles.actionTitle}>WhatsApp Direct</Text>
            <Text style={styles.actionSubtitle}>+243 854 507 945</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={makeCall}>
          <Ionicons name="call" size={24} color="#c4302b" />
          <View style={styles.actionTextContainer}>
            <Text style={styles.actionTitle}>Appel Téléphonique</Text>
            <Text style={styles.actionSubtitle}>+243 854 507 945</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={sendEmail}>
          <Ionicons name="mail" size={24} color="#34B7F1" />
          <View style={styles.actionTextContainer}>
            <Text style={styles.actionTitle}>Envoyer un Email</Text>
            <Text style={styles.actionSubtitle}>contact@rcolfm.com</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>
      </View>

      {/* Séparateur */}
      <View style={styles.divider} />

      {/* Section Partage */}
      <View style={styles.shareSection}>
        <Text style={styles.sectionTitle}>PARTAGER</Text>
        <TouchableOpacity style={styles.shareButton} onPress={shareApp}>
          <Ionicons name="share-social" size={20} color="#fff" />
          <Text style={styles.shareButtonText}>Partager l'Application</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.drawerFooter}>
        <Text style={styles.footerText}>© 2025 RCOLFM 93.6</Text>
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  drawerHeader: {
    backgroundColor: '#c4302b',
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoIcon: {
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  logoSlogan: {
    fontSize: 12,
    color: '#ffd700',
    textAlign: 'center',
  },
  drawerMenu: {
    paddingHorizontal: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 15,
    marginHorizontal: 20,
  },
  quickActions: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#999',
    marginBottom: 12,
    letterSpacing: 1,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  actionTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  actionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  actionSubtitle: {
    fontSize: 11,
    color: '#999',
    marginTop: 2,
  },
  shareSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c4302b',
    padding: 12,
    borderRadius: 10,
    gap: 10,
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  drawerFooter: {
    padding: 20,
    alignItems: 'center',
    marginTop: 'auto',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  versionText: {
    fontSize: 10,
    color: '#ccc',
    marginTop: 8,
  },
});