import { View, Text, StyleSheet, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks';

const teams = [
  { id: '1', name: 'Toronto Maple Leafs', city: 'Toronto', league: 'NHL', emoji: '🍁' },
  { id: '2', name: 'Montreal Canadiens', city: 'Montreal', league: 'NHL', emoji: '🔴' },
  { id: '3', name: 'Vancouver Canucks', city: 'Vancouver', league: 'NHL', emoji: '🟢' },
  { id: '4', name: 'Calgary Flames', city: 'Calgary', league: 'NHL', emoji: '🔥' },
  { id: '5', name: 'Edmonton Oilers', city: 'Edmonton', league: 'NHL', emoji: '🛢️' },
  { id: '6', name: 'Toronto Raptors', city: 'Toronto', league: 'NBA', emoji: '🦖' },
  { id: '7', name: 'Toronto Argonauts', city: 'Toronto', league: 'CFL', emoji: '🏈' },
  { id: '8', name: 'BC Lions', city: 'Vancouver', league: 'CFL', emoji: '🦁' },
];

export default function TeamsScreen() {
const {width, height} =useWindowDimensions();
const orientation = useDeviceOrientation();
const columns = width < height ? 1 : 2;;
  const cardWidth = (width-48)/columns;

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>🏒 Canadian Teams</Text>
      <FlatList
        data={teams}
        key={`cols-${columns}`}
        numColumns={columns}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, {width:cardWidth}]}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.sub}>{item.city} · {item.league}</Text>
            </View>
          </View>
        )}
      />
      <Text style={styles.dimensions}>Screen Width: {width}</Text>
      <Text style={styles.dimensions}>Screen Height: {height}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0d1117', padding: 16 },
  heading: { fontSize: 28, fontWeight: '800', color: '#fff', marginBottom: 16, marginTop: 8 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161b22',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    gap: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#e63946',
  },
  emoji: { fontSize: 32 },
  name: { fontSize: 17, fontWeight: '700', color: '#fff' },
  sub: { fontSize: 13, color: '#8b949e', marginTop: 2 },
  dimensions: {
  color: '#fff',
  marginTop: 8,
}
});