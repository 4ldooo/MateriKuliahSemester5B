import React, { useEffect, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';


const data = {
  nama: 'Ahmad Ali Murtadlo',
  nim: '2488010056',
  asalSekolah: 'SMA NEGERI 1 LEMAHABANG',
  citaCita: 'Fullstack Developer',
  rencana:
    'Belajar pemrograman secara konsisten, mengikuti proyek dan magang, ' +
    'membangun portofolio, serta memperluas jaringan di bidang teknologi.',
};

const GOLD = '#d4af37';

const Item = ({ icon, label, value, delay }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, { toValue: 1, duration: 600, delay, useNativeDriver: true }),
      Animated.timing(translateY, { toValue: 0, duration: 600, delay, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <Animated.View style={[styles.card, { opacity, transform: [{ translateY }] }]}>
      <View style={styles.iconBox}>
        <Ionicons name={icon} size={22} color={GOLD} />
      </View>
      <View style={styles.cardText}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </Animated.View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['#0f172a', '#1e1b4b', '#312e81']}
          style={styles.header}
        >
          <SafeAreaView style={styles.headerInner}>
            <Text style={styles.headerTag}>CURRICULUM VITAE</Text>

            <View style={styles.photoRing}>
              <Image source={require('./assets/foto.jpg')} style={styles.photo} />
            </View>

            <Text style={styles.name}>{data.nama}</Text>
            <View style={styles.badge}>
              <Ionicons name="rocket-outline" size={14} color="#0f172a" />
              <Text style={styles.badgeText}>{data.citaCita}</Text>
            </View>
          </SafeAreaView>
        </LinearGradient>

        <View style={styles.body}>
          <Item icon="card-outline" label="NIM" value={data.nim} delay={100} />
          <Item icon="school-outline" label="Asal Sekolah" value={data.asalSekolah} delay={250} />
          <Item icon="star-outline" label="Cita-cita" value={data.citaCita} delay={400} />
          <Item
            icon="trending-up-outline"
            label="Rencana Menggapai Cita-cita"
            value={data.rencana}
            delay={550}
          />
          <Text style={styles.footer}>© {new Date().getFullYear()} • {data.nama}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0b1020' },

  header: {
    paddingBottom: 48,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headerInner: { alignItems: 'center', paddingTop: 40 },
  headerTag: {
    color: GOLD,
    fontSize: 12,
    letterSpacing: 6,
    marginBottom: 24,
    fontWeight: '600',
  },

  photoRing: {
    width: 158,
    height: 158,
    borderRadius: 79,
    borderWidth: 3,
    borderColor: GOLD,
    padding: 5,
    marginBottom: 18,
    shadowColor: GOLD,
    shadowOpacity: 0.6,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 0 },
    elevation: 12,
  },
  photo: { width: '100%', height: '100%', borderRadius: 75 },

  name: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GOLD,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 12,
    gap: 6,
  },
  badgeText: { color: '#0f172a', fontWeight: '700', fontSize: 13 },

  body: { padding: 20, paddingTop: 28 },
  card: {
    flexDirection: 'row',
    backgroundColor: '#141a30',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: 'rgba(212,175,55,0.25)',
  },
  iconBox: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: 'rgba(212,175,55,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  cardText: { flex: 1, justifyContent: 'center' },
  label: {
    color: GOLD,
    fontSize: 11,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 4,
    fontWeight: '600',
  },
  value: { color: '#e2e8f0', fontSize: 15, lineHeight: 22 },

  footer: { color: '#64748b', textAlign: 'center', marginTop: 16, marginBottom: 30, fontSize: 12 },
});