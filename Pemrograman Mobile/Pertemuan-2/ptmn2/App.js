import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const data = {
  nama: 'Ahmad Ali Murtadlo',
  nim: '2488010056',
  asalSekolah: 'SMA NEGERI 1 LEMAHABANG',
  citaCita: 'Fullstack Developer',
  rencana:
    'Belajar pemrograman secara konsisten, mengikuti proyek dan magang, ' +
    'membangun portofolio, serta memperluas jaringan di bidang teknologi.',
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Image source={require('./assets/foto.jpg')} style={styles.photo} />
          <Text style={styles.name}>{data.nama}</Text>
        </View>

        <Text style={styles.label}>NIM</Text>
        <Text style={styles.value}>{data.nim}</Text>

        <Text style={styles.label}>Asal Sekolah</Text>
        <Text style={styles.value}>{data.asalSekolah}</Text>

        <Text style={styles.label}>Cita-cita</Text>
        <Text style={styles.value}>{data.citaCita}</Text>

        <Text style={styles.label}>Rencana Menggapai Cita-cita</Text>
        <Text style={styles.value}>{data.rencana}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 24 },

  header: { alignItems: 'center', marginBottom: 16 },
  photo: { width: 120, height: 120, borderRadius: 60 },
  name: { fontSize: 22, fontWeight: 'bold', marginTop: 14, textAlign: 'center' },

  label: { fontSize: 13, color: '#666', marginTop: 16 },
  value: { fontSize: 16, color: '#000', marginTop: 2, lineHeight: 22 },
});