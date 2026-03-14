---
sidebar_position: 8
---

# API Плейсхолдеров

Два способа работы с плейсхолдерами.

## 1. Обработка плейсхолдеров

Используется для обработки плейсхолдеров в строке.

### Методы

```javascript
// Стандартные плейсхолдеры: %player_name%
placeholder.setPlaceholders(player, "текст");

// Плейсхолдеры в фигурных скобках: {player_name}
placeholder.setBracketPlaceholders(player, "текст");
```

### Примеры

```javascript
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');

events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    
    // Простой плейсхолдер
    const msg1 = placeholder.setPlaceholders(player, "Привет, %player_name%!");
    player.sendMessage(msg1);
    
    // С несколькими плейсхолдерами
    const msg2 = placeholder.setPlaceholders(player, 
        "§6Привет, %player_name%! Баланс: %vault_eco_balance%$"
    );
    player.sendMessage(msg2);
    
    // Фигурные скобки
    const msg3 = placeholder.setBracketPlaceholders(player, 
        "Игрок: {player_name}, Здоровье: {player_health}"
    );
    player.sendMessage(msg3);
});
```

---

## 2. Кастомные плейсхолдеры

Регистрация своих плейсхолдеров для использования в других плагинах (DeluxeMenus, etc).

### Базовое использование

```javascript
papi.registerPlaceholder("префикс", (player, параметры) => {
    // Ваш код
    return "значение";
});
```

### Синтаксис плейсхолдера

```
%easyscript_<префикс>_<параметры>%
```

### Примеры

#### Простой плейсхолдер

```javascript
// Регистрация: %easyscript_deaths%
papi.registerPlaceholder("deaths", (player, params) => {
    if (!player.isOnline()) return "0";
    
    const p = player.getPlayer();
    return p.getStatistic(org.bukkit.Statistic.DEATHS).toString();
});
```

#### Плейсхолдер с параметрами

```javascript
// Регистрация: %easyscript_stat_kills% или %easyscript_stat_deaths%
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

#### Прогрессивные плейсхолдеры (для GUI)

```javascript
// Хранение данных игроков
let playerData = {};

function getPlayerLevel(uuid) {
    return playerData[uuid]?.level || 0;
}

// Регистрация: %easyscript_reached_1%, %easyscript_reached_2%, etc
papi.registerPlaceholder("reached", (player, level) => {
    const uuid = player.getUniqueId().toString();
    const playerLevel = getPlayerLevel(uuid);
    return playerLevel >= parseInt(level) ? "yes" : "no";
});

// Цвет для GUI: %easyscript_color_1%
papi.registerPlaceholder("color", (player, level) => {
    const uuid = player.getUniqueId().toString();
    const playerLevel = getPlayerLevel(uuid);
    return playerLevel >= parseInt(level) ? "LIME" : "GRAY";
});
```

#### Плейсхолдер с данными игрока

```javascript
const File = Java.type('java.io.File');
const Files = Java.type('java.nio.file.Files');

const DATA_FILE = new File(plugin.getDataFolder(), "stats.json");
let stats = {};

// Загрузка
if (DATA_FILE.exists()) {
    stats = JSON.parse(Files.readString(DATA_FILE.toPath()));
}

// Плейсхолдер: %easyscript_wins%
papi.registerPlaceholder("wins", (player, params) => {
    const uuid = player.getUniqueId().toString();
    return (stats[uuid]?.wins || 0).toString();
});
```

## Использование в GUI плагинах

### DeluxeMenus

```yaml
# placeholder_format: none
item_views:
  main_menu:
    items:
      stats:
        material: PLAYER_HEAD
        display_name: "Победы: %easyscript_wins%"
        lore:
          - "Уровень: %easyscript_level%"
```

### ServerSelectorPlus

```yaml
# placeholder_format: none
lines:
  - "%easyscript_online% игроков онлайн"
```

## Полезные примеры

### Плейсхолдер времени игры

```javascript
const Map = Java.type('java.util.HashMap');
let playTimes = new Map();

papi.registerPlaceholder("playtime", (player, params) => {
    const uuid = player.getUniqueId().toString();
    const ms = playTimes.get(uuid) || 0;
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    return hours + "ч " + minutes + "м";
});

// Обновление времени игры
events.on(org.bukkit.event.player.PlayerQuitEvent, (event) => {
    const uuid = event.getPlayer().getUniqueId().toString();
    const current = playTimes.get(uuid) || 0;
    playTimes.put(uuid, current + event.getPlayer().getStatistic(org.bukkit.Statistic.PLAY_ONE_TICK));
});
```
