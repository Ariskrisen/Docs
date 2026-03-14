---
sidebar_position: 4
---

# Примеры скриптов

Готовые примеры для изучения и использования.

## Содержание

1. [Базовые примеры](#базовые-примеры)
2. [Системы](#системы)
3. [Интеграции](#интеграции)

---

## Базовые примеры

### Пример 1: Приветствие игрока

```javascript
// plugins/EasyScript/scripts/welcome.js
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');

events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    
    // Простое сообщение
    player.sendMessage("§aДобро пожаловать на сервер!");
    
    // С плейсхолдерами
    const msg = placeholder.setPlaceholders(player, 
        "§6Привет, %player_name%! Баланс: %vault_eco_balance%$"
    );
    player.sendMessage(msg);
});
```

### Пример 2: Простая команда

```javascript
// plugins/EasyScript/scripts/commands.js
commands.register("heal", "Восстановить здоровье", "/heal", (sender, args) => {
    if (!(sender instanceof org.bukkit.entity.Player)) {
        sender.sendMessage("§cТолько для игроков!");
        return;
    }
    
    const player = sender;
    player.setHealth(20);
    player.setFoodLevel(20);
    player.sendMessage("§aЗдоровье восстановлено!");
});
```

### Пример 3: Задачи с задержкой

```javascript
// plugins/EasyScript/scripts/delayed.js
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');

events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    
    // Через 5 секунд
    scheduler.runLater(100, () => {
        if (player.isOnline()) {
            player.sendMessage("§eДобро пожаловать в наш Discord!");
        }
    });
    
    // Через 1 минуту
    scheduler.runLater(1200, () => {
        if (player.isOnline()) {
            player.sendTitle("§bНавигация", "§7Используй /warp для телепортации", 10, 40, 20);
        }
    });
});
```

---

## Системы

### Пример 4: Счетчик смертей

```javascript
// plugins/EasyScript/scripts/deaths.js
const PlayerDeathEvent = Java.type('org.bukkit.event.entity.PlayerDeathEvent');

events.on(PlayerDeathEvent, (event) => {
    const player = event.getEntity();
    if (!(player instanceof org.bukkit.entity.Player)) return;
    
    // Получаем или создаем счетчик
    if (!deaths) var deaths = {};
    
    const name = player.getName();
    deaths[name] = (deaths[name] || 0) + 1;
    
    player.sendMessage("§cЭто ваша смерть №" + deaths[name]);
    
    // Команда для проверки
    commands.register("deaths", "Проверить смерти", "/deaths", (sender, args) => {
        const targetName = args.length > 0 ? args[0] : sender.getName();
        const count = deaths[targetName] || 0;
        sender.sendMessage("§c" + targetName + " умер " + count + " раз");
    });
});
```

### Пример 5: Система уровней

```javascript
// plugins/EasyScript/scripts/levels.js
const File = Java.type('java.io.File');
const Files = Java.type('java.nio.file.Files');
const StandardOpenOption = Java.type('java.nio.file.StandardOpenOption');
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');

const DATA_FILE = new File(plugin.getDataFolder(), "player_levels.json");
let playerLevels = {};

function loadData() {
    if (DATA_FILE.exists()) {
        playerLevels = JSON.parse(Files.readString(DATA_FILE.toPath()));
    }
}

function saveData() {
    Files.writeString(DATA_FILE.toPath(), JSON.stringify(playerLevels, null, 2),
        StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING);
}

loadData();

events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    const uuid = player.getUniqueId().toString();
    
    if (!playerLevels[uuid]) {
        playerLevels[uuid] = { level: 1, xp: 0 };
        saveData();
    }
    
    const level = playerLevels[uuid].level;
    player.sendMessage("§aВаш уровень: " + level);
});

commands.register("level", "Уровень игрока", "/level", (sender, args) => {
    const uuid = sender.getUniqueId().toString();
    const data = playerLevels[uuid] || { level: 1, xp: 0 };
    sender.sendMessage("§6Уровень: " + data.level + " | XP: " + data.xp);
});

commands.register("setlevel", "Установить уровень", "/setlevel <уровень>", (sender, args) => {
    if (!sender.hasPermission("easyscript.admin")) return;
    if (args.length === 0) return;
    
    const uuid = sender.getUniqueId().toString();
    const level = parseInt(args[0]);
    
    playerLevels[uuid] = { level: level, xp: 0 };
    saveData();
    sender.sendMessage("§aУровень установлен на " + level);
});
```

### Пример 6: Кулдаун команд

```javascript
// plugins/EasyScript/scripts/cooldowns.js
let cooldowns = {};

commands.register("kit", "Получить набор", "/kit", (sender, args) => {
    if (!(sender instanceof org.bukkit.entity.Player)) {
        sender.sendMessage("§cТолько для игроков!");
        return;
    }
    
    const player = sender;
    const uuid = player.getUniqueId().toString();
    const COOLDOWN = 3600; // секунды
    
    if (cooldowns[uuid]) {
        const remaining = Math.ceil((cooldowns[uuid] - Date.now()) / 1000);
        if (remaining > 0) {
            player.sendMessage("§cПодождите " + remaining + " секунд!");
            return;
        }
    }
    
    // Выдача набора
    const ItemStack = Java.type('org.bukkit.inventory.ItemStack');
    const Material = Java.type('org.bukkit.Material');
    
    player.getInventory().addItem(
        new ItemStack(Material.DIAMOND, 10),
        new ItemStack(Material.IRON_SWORD, 1),
        new ItemStack(Material.GOLDEN_APPLE, 5)
    );
    
    player.sendMessage("§aНабор выдан!");
    
    // Установка кулдауна
    cooldowns[uuid] = Date.now() + (COOLDOWN * 1000);
});
```

### Пример 7: Система варпов

```javascript
// plugins/EasyScript/scripts/warps.js
const File = Java.type('java.io.File');
const Files = Java.type('java.nio.file.Files');
const StandardOpenOption = Java.type('java.nio.file.StandardOpenOption');

const WARPS_FILE = new File(plugin.getDataFolder(), "warps.json");
let warps = {};

function loadWarps() {
    if (WARPS_FILE.exists()) {
        warps = JSON.parse(Files.readString(WARPS_FILE.toPath()));
    }
}

function saveWarps() {
    Files.writeString(WARPS_FILE.toPath(), JSON.stringify(warps, null, 2),
        StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING);
}

loadWarps();

// Установка варпа
commands.register("setwarp", "Установить варп", "/setwarp <название>", (sender, args) => {
    if (!sender.hasPermission("easyscript.admin")) return;
    if (args.length === 0) return;
    
    const name = args[0].toLowerCase();
    const loc = sender.getLocation();
    
    warps[name] = {
        world: loc.getWorld().getName(),
        x: loc.getX(),
        y: loc.getY(),
        z: loc.getZ(),
        yaw: loc.getYaw(),
        pitch: loc.getPitch()
    };
    
    saveWarps();
    sender.sendMessage("§aВарп §e" + name + " §aсоздан!");
});

// Телепорт на варп
commands.register("warp", "Телепорт на варп", "/warp <название>", (sender, args) => {
    if (args.length === 0) {
        sender.sendMessage("§cДоступные варпы: " + Object.keys(warps).join(", "));
        return;
    }
    
    const name = args[0].toLowerCase();
    const warp = warps[name];
    
    if (!warp) {
        sender.sendMessage("§cВарп не найден!");
        return;
    }
    
    const world = server.getWorld(warp.world);
    const Location = Java.type('org.bukkit.Location');
    const loc = new Location(world, warp.x, warp.y, warp.z, warp.yaw, warp.pitch);
    
    sender.teleport(loc);
    sender.sendMessage("§aТелепорт на §e" + name);
});
```

---

## Интеграции

### Пример 8: Кастомные плейсхолдеры

```javascript
// plugins/EasyScript/scripts/placeholders.js

// Регистрация: %easyscript_kills%
papi.registerPlaceholder("kills", (player, params) => {
    if (!player.isOnline()) return "0";
    const p = player.getPlayer();
    return p.getStatistic(org.bukkit.Statistic.PLAYER_KILLS).toString();
});

// Регистрация: %easyscript_deaths%
papi.registerPlaceholder("deaths", (player, params) => {
    if (!player.isOnline()) return "0";
    const p = player.getPlayer();
    return p.getStatistic(org.bukkit.Statistic.DEATHS).toString();
});

// Прогрессивные: %easyscript_reached_5%
papi.registerPlaceholder("reached", (player, level) => {
    const uuid = player.getUniqueId().toString();
    const playerLevel = playerLevels[uuid]?.level || 0;
    return playerLevel >= parseInt(level) ? "yes" : "no";
});
```

### Пример 9: Работа с Vault (магазин)

```javascript
// plugins/EasyScript/scripts/shop.js

function getEconomy() {
    const rsp = server.getServicesManager().getRegistration(
        Java.type('net.milkbowl.vault.economy.Economy').class
    );
    return rsp ? rsp.getProvider() : null;
}

// Баланс
commands.register("balance", "Баланс", "/balance", (sender, args) => {
    const econ = getEconomy();
    if (!econ) {
        sender.sendMessage("§cЭкономика недоступна!");
        return;
    }
    
    const balance = econ.getBalance(sender);
    sender.sendMessage("§aВаш баланс: §e$" + balance);
});

// Перевод денег
commands.register("pay", "Перевод денег", "/pay <игрок> <сумма>", (sender, args) => {
    if (args.length < 2) {
        sender.sendMessage("§cИспользование: /pay <игрок> <сумма>");
        return;
    }
    
    const econ = getEconomy();
    if (!econ) return;
    
    const target = server.getPlayer(args[0]);
    const amount = parseInt(args[1]);
    
    if (!target) {
        sender.sendMessage("§cИгрок не найден!");
        return;
    }
    
    if (econ.getBalance(sender) < amount) {
        sender.sendMessage("§cНедостаточно средств!");
        return;
    }
    
    econ.withdrawPlayer(sender, amount);
    econ.depositPlayer(target, amount);
    
    sender.sendMessage("§aВы перевели §e$" + amount + " §aигроку " + target.getName());
    target.sendMessage("§aВы получили §e$" + amount + " §aот " + sender.getName());
});
```

### Пример 10: Запрещённые команды

```javascript
// plugins/EasyScript/scripts/blocked-commands.js
const PlayerCommandPreprocessEvent = Java.type('org.bukkit.event.player.PlayerCommandPreprocessEvent');

const BLOCKED = ["/stop", "/restart", "/reload", "/pl", "/plugins", "/ver", "/version"];

events.on(PlayerCommandPreprocessEvent, (event) => {
    const msg = event.getMessage().toLowerCase();
    const player = event.getPlayer();
    
    for (const cmd of BLOCKED) {
        if (msg.startsWith(cmd)) {
            if (!player.hasPermission("easyscript.bypass")) {
                event.setCancelled(true);
                player.sendMessage("§cЭта команда недоступна!");
                logger.info(player.getName() + " попытался использовать " + msg);
                return;
            }
        }
    }
});
```

---

## Дополнительные примеры

Больше примеров смотрите в:
- `src/main/resources/scripts/border_logic.js` — система улучшения границ мира
- `examples/main.js` — основные возможности плагина
