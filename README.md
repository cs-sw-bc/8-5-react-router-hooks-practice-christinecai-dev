# Assignment – Lesson 5
## SportZone Canada 🍁

Build a multi-screen Canadian sports app using React Navigation. You will be given four pre-written screens. Your job is to wire up navigation and add hooks.

---

## Setup

```bash
npx create-expo-app sportzonecanada --template blank
cd sportzonecanada
```

Create a `screens/` folder and copy each screen below into its own file.

---

## Starter Screens

Copy these files into your `screens/` folder as-is. Do not modify them.

### screens/TeamsScreen.jsx

```jsx
import { View, Text, StyleSheet, FlatList } from 'react-native';

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
  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>🏒 Canadian Teams</Text>
      <FlatList
        data={teams}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.sub}>{item.city} · {item.league}</Text>
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
    borderLeftColor: '#e63946',
  },
  emoji: { fontSize: 32 },
  name: { fontSize: 17, fontWeight: '700', color: '#fff' },
  sub: { fontSize: 13, color: '#8b949e', marginTop: 2 },
});
```

---

### screens/PlayersScreen.jsx

```jsx
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
```

---

### screens/StandingsScreen.jsx

```jsx
import { View, Text, StyleSheet, FlatList } from 'react-native';

const standings = [
  { id: '1', position: '1', team: 'Florida Panthers', points: '112', wins: '54', emoji: '🐆' },
  { id: '2', position: '2', team: 'Boston Bruins', points: '109', wins: '52', emoji: '🐻' },
  { id: '3', position: '3', team: 'Edmonton Oilers', points: '104', wins: '49', emoji: '🛢️' },
  { id: '4', position: '4', team: 'Vancouver Canucks', points: '100', wins: '46', emoji: '🟢' },
  { id: '5', position: '5', team: 'Toronto Maple Leafs', points: '98', wins: '45', emoji: '🍁' },
  { id: '6', position: '6', team: 'Calgary Flames', points: '91', wins: '41', emoji: '🔥' },
  { id: '7', position: '7', team: 'Montreal Canadiens', points: '83', wins: '37', emoji: '🔴' },
];

export default function StandingsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>📊 NHL Standings</Text>
      <View style={styles.header}>
        <Text style={styles.headerText}>#</Text>
        <Text style={[styles.headerText, { flex: 1 }]}>Team</Text>
        <Text style={styles.headerText}>W</Text>
        <Text style={styles.headerText}>PTS</Text>
      </View>
      <FlatList
        data={standings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.position}>{item.position}</Text>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={[styles.team, { flex: 1 }]}>{item.team}</Text>
            <Text style={styles.stat}>{item.wins}</Text>
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
```

---

### screens/ScheduleScreen.jsx

```jsx
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
```

---

## Tasks

### Task 1 – Navigation

Install React Navigation and wire up `App.jsx`. You must choose **one** of the following navigators and justify your choice in a comment at the top of `App.jsx`:

- Stack Navigator
- Tab Navigator
- Drawer Navigator

Think about which one makes the most sense for a sports app with these four sections. There is no wrong answer — your reasoning matters.

**Install for all three navigators:**
```bash
npx expo install @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/native-stack
```

**Additional installs depending on your choice:**
```bash
# Tabs
npm install @react-navigation/bottom-tabs

# Drawer
npx expo install react-native-reanimated react-native-worklets react-native-gesture-handler
npm install @react-navigation/drawer
```

Your `App.jsx` must:
- Wrap everything in `NavigationContainer`
- Register all four screens
- Style the header to match the dark theme (`#0d1117` background, white text)

---

### Task 2 – useWindowDimensions

Add `useWindowDimensions` to `TeamsScreen.jsx`:

- Get the current screen `width` and `height`
- Display them somewhere on screen
- If the width is greater than the height (landscape), show **2 columns** of team cards
- If portrait, show **1 column**

> Remember: add `key={columns}` to your FlatList when using `numColumns`

---

### Task 3 – useColorScheme

Add `useColorScheme` to `StandingsScreen.jsx`:

Define two theme objects — one for light mode and one for dark mode — and apply them to the screen and card backgrounds and text colors.

Test by going to **Settings → Display & Brightness** on your device and switching between Light and Dark.

> Note: `useColorScheme` may not respond in Expo Go. If it doesn't, hardcode `const scheme = 'light'` and swap manually to show both themes work.

---

## Submission Checklist

- [ ] All four screens visible and working
- [ ] Navigator choice justified in a comment in `App.jsx`
- [ ] `useWindowDimensions` added to `TeamsScreen` — columns change based on orientation
- [ ] `useColorScheme` added to `StandingsScreen` — light and dark themes both defined and applied
