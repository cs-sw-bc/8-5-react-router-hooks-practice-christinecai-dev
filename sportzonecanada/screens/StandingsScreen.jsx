import { View, Text, StyleSheet, FlatList, useColorScheme} from 'react-native';

const standings = [
  { id: '1', position: '1', team: 'Florida Panthers', points: '112', wins: '54', emoji: '🐆' },
  { id: '2', position: '2', team: 'Boston Bruins', points: '109', wins: '52', emoji: '🐻' },
  { id: '3', position: '3', team: 'Edmonton Oilers', points: '104', wins: '49', emoji: '🛢️' },
  { id: '4', position: '4', team: 'Vancouver Canucks', points: '100', wins: '46', emoji: '🟢' },
  { id: '5', position: '5', team: 'Toronto Maple Leafs', points: '98', wins: '45', emoji: '🍁' },
  { id: '6', position: '6', team: 'Calgary Flames', points: '91', wins: '41', emoji: '🔥' },
  { id: '7', position: '7', team: 'Montreal Canadiens', points: '83', wins: '37', emoji: '🔴' },
];

const lightTheme = {
  screen: '#f6f8fa',
  card: '#ffffff',
  text: '#111827',
  muted: '#6b7280',
  accent: '#f4a261',
};

const darkTheme = {
  screen: '#0d1117',
  card: '#161b22',
  text: '#ffffff',
  muted: '#8b949e',
  accent: '#f4a261',
};

export default function StandingsScreen() {
//   const scheme = useColorScheme();
  const scheme = 'dark';
  const theme = scheme === 'dark' ? darkTheme : lightTheme;
  return (
    <View style={[styles.screen, {backgroundColor: theme.screen}]}>
      <Text style={[styles.heading, {color: theme.text}]}>📊 NHL Standings</Text>
      <View style={styles.header}>
        <Text style={[styles.headerText, {color: theme.muted}]}>#</Text>
        <Text style={[styles.headerText, { flex: 1, color: theme.muted }]}>Team</Text>
        <Text style={[styles.headerText, {color: theme.muted }]}>W</Text>
        <Text style={[styles.headerText, {color: theme.muted }]}>PTS</Text>
      </View>
      <FlatList
        data={standings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.row, { backgroundColor: theme.card }]}>
            <Text style={[styles.position, { color: theme.muted }]}>{item.position}</Text>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={[styles.team, { flex: 1, color: theme.text }]}>{item.team}</Text>
            <Text style={[styles.stat, { color: theme.text }]}>{item.wins}</Text>
            <Text style={[styles.stat, { color: '#f4a261', fontWeight: '700' }]}>{item.points}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0d1117', padding: 16 },
  heading: { fontSize: 28, fontWeight: '800', color: '#fff', marginBottom: 16, marginTop: 8 },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 8,
    gap: 12,
  },
  headerText: { fontSize: 12, color: '#8b949e', fontWeight: '700', width: 32, textAlign: 'center' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161b22',
    borderRadius: 14,
    padding: 14,
    marginBottom: 8,
    gap: 12,
  },
  position: { fontSize: 14, color: '#8b949e', width: 20, textAlign: 'center' },
  emoji: { fontSize: 22 },
  team: { fontSize: 15, fontWeight: '600', color: '#fff' },
  stat: { fontSize: 14, color: '#fff', width: 32, textAlign: 'center' },
});