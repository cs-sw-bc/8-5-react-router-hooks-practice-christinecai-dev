import { View, Text, StyleSheet, FlatList } from 'react-native';

const schedule = [
  { id: '1', home: 'Toronto Maple Leafs 🍁', away: 'Montreal Canadiens 🔴', date: 'May 10', time: '7:00 PM' },
  { id: '2', home: 'Vancouver Canucks 🟢', away: 'Calgary Flames 🔥', date: 'May 11', time: '9:00 PM' },
  { id: '3', home: 'Edmonton Oilers 🛢️', away: 'Toronto Raptors 🦖', date: 'May 12', time: '8:00 PM' },
  { id: '4', home: 'BC Lions 🦁', away: 'Toronto Argonauts 🏈', date: 'May 14', time: '4:00 PM' },
  { id: '5', home: 'Montreal Canadiens 🔴', away: 'Vancouver Canucks 🟢', date: 'May 15', time: '7:30 PM' },
];

export default function ScheduleScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>📅 Upcoming Games</Text>
      <FlatList
        data={schedule}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.dateBox}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <View style={styles.matchup}>
              <Text style={styles.team}>{item.home}</Text>
              <Text style={styles.vs}>vs</Text>
              <Text style={styles.team}>{item.away}</Text>
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
    backgroundColor: '#161b22',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    gap: 16,
    alignItems: 'center',
  },
  dateBox: {
    alignItems: 'center',
    backgroundColor: '#e63946',
    borderRadius: 10,
    padding: 10,
    minWidth: 64,
  },
  date: { fontSize: 13, fontWeight: '800', color: '#fff' },
  time: { fontSize: 11, color: '#ffccd5', marginTop: 2 },
  matchup: { flex: 1 },
  team: { fontSize: 14, fontWeight: '600', color: '#fff' },
  vs: { fontSize: 12, color: '#8b949e', marginVertical: 4 },
});