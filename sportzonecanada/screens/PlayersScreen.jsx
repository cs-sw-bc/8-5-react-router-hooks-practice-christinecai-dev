import { View, Text, StyleSheet, FlatList } from 'react-native';

const players = [
  { id: '1', name: 'Connor McDavid', team: 'Edmonton Oilers', position: 'Centre', emoji: '🛢️' },
  { id: '2', name: 'Auston Matthews', team: 'Toronto Maple Leafs', position: 'Centre', emoji: '🍁' },
  { id: '3', name: 'Sidney Crosby', team: 'Pittsburgh Penguins', position: 'Centre', emoji: '🐧' },
  { id: '4', name: 'Pascal Siakam', team: 'Toronto Raptors', position: 'Forward', emoji: '🦖' },
  { id: '5', name: 'Alphonso Davies', team: 'Bayern Munich', position: 'Defender', emoji: '⚽' },
  { id: '6', name: 'Josh Allen', team: 'Buffalo Bills', position: 'Quarterback', emoji: '🏈' },
];

export default function PlayersScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>⭐ Star Players</Text>
      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.sub}>{item.position} · {item.team}</Text>
            </View>
          </View>
        )}
      />
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
    borderLeftColor: '#f4a261',
  },
  emoji: { fontSize: 32 },
  name: { fontSize: 17, fontWeight: '700', color: '#fff' },
  sub: { fontSize: 13, color: '#8b949e', marginTop: 2 },
});