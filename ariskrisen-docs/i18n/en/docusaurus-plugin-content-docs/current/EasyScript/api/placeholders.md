---
sidebar_position: 8
---

# Placeholders API

Two ways to work with placeholders.

## 1. Processing Placeholders

Used for processing placeholders in a string.

### Methods

```javascript
// Standard placeholders: %player_name%
placeholder.setPlaceholders(player, "text");

// Bracket placeholders: {player_name}
placeholder.setBracketPlaceholders(player, "text");
```

### Examples

```javascript
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');

events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    
    // Simple placeholder
    const msg1 = placeholder.setPlaceholders(player, "Hello, %player_name%!");
    player.sendMessage(msg1);
    
    // Multiple placeholders
    const msg2 = placeholder.setPlaceholders(player, 
        "§6Hello, %player_name%! Balance: %vault_eco_balance%$"
    );
    player.sendMessage(msg2);
    
    // Bracket placeholders
    const msg3 = placeholder.setBracketPlaceholders(player, 
        "Player: {player_name}, Health: {player_health}"
    );
    player.sendMessage(msg3);
});
```

---

## 2. Custom Placeholders

Register your own placeholders for use in other plugins (DeluxeMenus, etc).

### Basic Usage

```javascript
papi.registerPlaceholder("prefix", (player, params) => {
    // Your code
    return "value";
});
```

### Placeholder Syntax

```
%easyscript_<prefix>_<params>%
```

### Examples

#### Simple Placeholder

```javascript
// Register: %easyscript_deaths%
papi.registerPlaceholder("deaths", (player, params) => {
    if (!player.isOnline()) return "0";
    
    const p = player.getPlayer();
    return p.getStatistic(org.bukkit.Statistic.DEATHS).toString();
});
```

#### Placeholder with Parameters

```javascript
// Register: %easyscript_stat_kills% or %easyscript_stat_deaths%
papi.registerPlaceholder("stat", (player, params) => {
    if (!player.isOnline()) return "0";
    
    const p = player.getPlayer();
    const stat = org.bukkit.Statistic;
    
    switch(params) {
        case "kills": return p.getStatistic(stat.PLAYER_KILLS).toString();
        case "deaths": return p.getStatistic(stat.DEATHS).toString();
        case "level": return p.getLevel().toString();
        default: return "0";
    }
});
```

#### Progressive Placeholders (for GUI)

```javascript
// Store player data
let playerData = {};

function getPlayerLevel(uuid) {
    return playerData[uuid]?.level || 0;
}

// Register: %easyscript_reached_1%, %easyscript_reached_2%, etc
papi.registerPlaceholder("reached", (player, level) => {
    const uuid = player.getUniqueId().toString();
    const playerLevel = getPlayerLevel(uuid);
    return playerLevel >= parseInt(level) ? "yes" : "no";
});

// Color for GUI: %easyscript_color_1%
papi.registerPlaceholder("color", (player, level) => {
    const uuid = player.getUniqueId().toString();
    const playerLevel = getPlayerLevel(uuid);
    return playerLevel >= parseInt(level) ? "LIME" : "GRAY";
});
```

#### Placeholder with Player Data

```javascript
const File = Java.type('java.io.File');
const Files = Java.type('java.nio.file.Files');

const DATA_FILE = new File(plugin.getDataFolder(), "stats.json");
let stats = {};

// Load
if (DATA_FILE.exists()) {
    stats = JSON.parse(Files.readString(DATA_FILE.toPath()));
}

// Placeholder: %easyscript_wins%
papi.registerPlaceholder("wins", (player, params) => {
    const uuid = player.getUniqueId().toString();
    return (stats[uuid]?.wins || 0).toString();
});
```

## Usage in GUI Plugins

### DeluxeMenus

```yaml
# placeholder_format: none
item_views:
  main_menu:
    items:
      stats:
        material: PLAYER_HEAD
        display_name: "Wins: %easyscript_wins%"
        lore:
          - "Level: %easyscript_level%"
```

### ServerSelectorPlus

```yaml
# placeholder_format: none
lines:
  - "%easyscript_online% players online"
```

## Useful Examples

### Playtime Placeholder

```javascript
const Map = Java.type('java.util.HashMap');
let playTimes = new Map();

papi.registerPlaceholder("playtime", (player, params) => {
    const uuid = player.getUniqueId().toString();
    const ms = playTimes.get(uuid) || 0;
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    return hours + "h " + minutes + "m";
});

// Update playtime
events.on(org.bukkit.event.player.PlayerQuitEvent, (event) => {
    const uuid = event.getPlayer().getUniqueId().toString();
    const current = playTimes.get(uuid) || 0;
    playTimes.put(uuid, current + event.getPlayer().getStatistic(org.bukkit.Statistic.PLAY_ONE_TICK));
});
