---
sidebar_position: 4
---

# Script Examples

Ready-to-use examples for learning and implementation.

## Contents

1. [Basic Examples](#basic-examples)
2. [Systems](#systems)
3. [Integrations](#integrations)

---

## Basic Examples

### Example 1: Player Welcome

```javascript
// plugins/EasyScript/scripts/welcome.js
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');

events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    
    // Simple message
    player.sendMessage("§aWelcome to the server!");
    
    // With placeholders
    const msg = placeholder.setPlaceholders(player, 
        "§6Hello, %player_name%! Balance: %vault_eco_balance%$"
    );
    player.sendMessage(msg);
});
```

### Example 2: Simple Command

```javascript
// plugins/EasyScript/scripts/commands.js
commands.register("heal", "Restore health", "/heal", (sender, args) => {
    if (!(sender instanceof org.bukkit.entity.Player)) {
        sender.sendMessage("§cPlayers only!");
        return;
    }
    
    const player = sender;
    player.setHealth(20);
    player.setFoodLevel(20);
    player.sendMessage("§aHealth restored!");
});
```

### Example 3: Delayed Tasks

```javascript
// plugins/EasyScript/scripts/delayed.js
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');

events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    
    // After 5 seconds
    scheduler.runLater(100, () => {
        if (player.isOnline()) {
            player.sendMessage("§eWelcome to our Discord!");
        }
    });
    
    // After 1 minute
    scheduler.runLater(1200, () => {
        if (player.isOnline()) {
            player.sendTitle("§bNavigation", "§7Use /warp to teleport", 10, 40, 20);
        }
    });
});
```

---

## Systems

### Example 4: Death Counter

```javascript
// plugins/EasyScript/scripts/deaths.js
const PlayerDeathEvent = Java.type('org.bukkit.event.entity.PlayerDeathEvent');

events.on(PlayerDeathEvent, (event) => {
    const player = event.getEntity();
    if (!(player instanceof org.bukkit.entity.Player)) return;
    
    // Get or create counter
    if (!deaths) var deaths = {};
    
    const name = player.getName();
    deaths[name] = (deaths[name] || 0) + 1;
    
    player.sendMessage("§cThis is death #" + deaths[name]);
    
    // Command to check deaths
    commands.register("deaths", "Check deaths", "/deaths", (sender, args) => {
        const targetName = args.length > 0 ? args[0] : sender.getName();
        const count = deaths[targetName] || 0;
        sender.sendMessage("§c" + targetName + " died " + count + " times");
    });
});
```

### Example 5: Level System

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
    player.sendMessage("§aYour level: " + level);
});

commands.register("level", "Player level", "/level", (sender, args) => {
    const uuid = sender.getUniqueId().toString();
    const data = playerLevels[uuid] || { level: 1, xp: 0 };
    sender.sendMessage("§6Level: " + data.level + " | XP: " + data.xp);
});

commands.register("setlevel", "Set level", "/setlevel <level>", (sender, args) => {
    if (!sender.hasPermission("easyscript.admin")) return;
    if (args.length === 0) return;
    
    const uuid = sender.getUniqueId().toString();
    const level = parseInt(args[0]);
    
    playerLevels[uuid] = { level: level, xp: 0 };
    saveData();
    sender.sendMessage("§aLevel set to " + level);
});
```

### Example 6: Command Cooldowns

```javascript
// plugins/EasyScript/scripts/cooldowns.js
let cooldowns = {};

commands.register("kit", "Get kit", "/kit", (sender, args) => {
    if (!(sender instanceof org.bukkit.entity.Player)) {
        sender.sendMessage("§cPlayers only!");
        return;
    }
    
    const player = sender;
    const uuid = player.getUniqueId().toString();
    const COOLDOWN = 3600; // seconds
    
    if (cooldowns[uuid]) {
        const remaining = Math.ceil((cooldowns[uuid] - Date.now()) / 1000);
        if (remaining > 0) {
            player.sendMessage("§cWait " + remaining + " seconds!");
            return;
        }
    }
    
    // Give kit
    const ItemStack = Java.type('org.bukkit.inventory.ItemStack');
    const Material = Java.type('org.bukkit.Material');
    
    player.getInventory().addItem(
        new ItemStack(Material.DIAMOND, 10),
        new ItemStack(Material.IRON_SWORD, 1),
        new ItemStack(Material.GOLDEN_APPLE, 5)
    );
    
    player.sendMessage("§aKit received!");
    
    // Set cooldown
    cooldowns[uuid] = Date.now() + (COOLDOWN * 1000);
});
```

### Example 7: Warp System

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

// Set warp
commands.register("setwarp", "Set warp", "/setwarp <name>", (sender, args) => {
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
    sender.sendMessage("§aWarp §e" + name + " §acreated!");
});

// Teleport to warp
commands.register("warp", "Teleport to warp", "/warp <name>", (sender, args) => {
    if (args.length === 0) {
        sender.sendMessage("§cAvailable warps: " + Object.keys(warps).join(", "));
        return;
    }
    
    const name = args[0].toLowerCase();
    const warp = warps[name];
    
    if (!warp) {
        sender.sendMessage("§cWarp not found!");
        return;
    }
    
    const world = server.getWorld(warp.world);
    const Location = Java.type('org.bukkit.Location');
    const loc = new Location(world, warp.x, warp.y, warp.z, warp.yaw, warp.pitch);
    
    sender.teleport(loc);
    sender.sendMessage("§aTeleported to §e" + name);
});
```

---

## Integrations

### Example 8: Custom Placeholders

```javascript
// plugins/EasyScript/scripts/placeholders.js

// Register: %easyscript_kills%
papi.registerPlaceholder("kills", (player, params) => {
    if (!player.isOnline()) return "0";
    const p = player.getPlayer();
    return p.getStatistic(org.bukkit.Statistic.PLAYER_KILLS).toString();
});

// Register: %easyscript_deaths%
papi.registerPlaceholder("deaths", (player, params) => {
    if (!player.isOnline()) return "0";
    const p = player.getPlayer();
    return p.getStatistic(org.bukkit.Statistic.DEATHS).toString();
});

// Progressive: %easyscript_reached_5%
papi.registerPlaceholder("reached", (player, level) => {
    const uuid = player.getUniqueId().toString();
    const playerLevel = playerLevels[uuid]?.level || 0;
    return playerLevel >= parseInt(level) ? "yes" : "no";
});
```

### Example 9: Working with Vault (Shop)

```javascript
// plugins/EasyScript/scripts/shop.js

function getEconomy() {
    const rsp = server.getServicesManager().getRegistration(
        Java.type('net.milkbowl.vault.economy.Economy').class
    );
    return rsp ? rsp.getProvider() : null;
}

// Balance
commands.register("balance", "Balance", "/balance", (sender, args) => {
    const econ = getEconomy();
    if (!econ) {
        sender.sendMessage("§cEconomy not available!");
        return;
    }
    
    const balance = econ.getBalance(sender);
    sender.sendMessage("§aYour balance: §e$" + balance);
});

// Transfer money
commands.register("pay", "Transfer money", "/pay <player> <amount>", (sender, args) => {
    if (args.length < 2) {
        sender.sendMessage("§cUsage: /pay <player> <amount>");
        return;
    }
    
    const econ = getEconomy();
    if (!econ) return;
    
    const target = server.getPlayer(args[0]);
    const amount = parseInt(args[1]);
    
    if (!target) {
        sender.sendMessage("§cPlayer not found!");
        return;
    }
    
    if (econ.getBalance(sender) < amount) {
        sender.sendMessage("§cInsufficient funds!");
        return;
    }
    
    econ.withdrawPlayer(sender, amount);
    econ.depositPlayer(target, amount);
    
    sender.sendMessage("§aYou transferred §e$" + amount + " §ato " + target.getName());
    target.sendMessage("§aYou received §e$" + amount + " §afrom " + sender.getName());
});
```

### Example 10: Blocked Commands

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
                player.sendMessage("§cThis command is not available!");
                logger.info(player.getName() + " tried to use " + msg);
                return;
            }
        }
    }
});
```

---

## Additional Examples

More examples available in:
- `src/main/resources/scripts/border_logic.js` — world border upgrade system
- `examples/main.js` — main plugin features
