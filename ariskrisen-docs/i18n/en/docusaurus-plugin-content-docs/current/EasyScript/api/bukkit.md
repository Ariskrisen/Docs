---
sidebar_position: 9
---

# Bukkit API

Full access to Bukkit/Paper API via Java.type.

## Importing Classes

```javascript
// Main classes
const Bukkit = Java.type('org.bukkit.Bukkit');
const Server = Java.type('org.bukkit.Server');

// Entities
const Player = Java.type('org.bukkit.entity.Player');
const Entity = Java.type('org.bukkit.entity.Entity');

// Items
const ItemStack = Java.type('org.bukkit.inventory.ItemStack');
const Material = Java.type('org.bukkit.Material');

// Blocks
const Block = Java.type('org.bukkit.block.Block');
const BlockState = Java.type('org.bukkit.block.BlockState');

// Worlds
const World = Java.type('org.bukkit.World');
const Location = Java.type('org.bukkit.Location');

// Events
const Event = Java.type('org.bukkit.event.Event');

// Statistics
const Statistic = Java.type('org.bukkit.Statistic');
const GameMode = Java.type('org.bukkit.GameMode');

// Inventory
const Inventory = Java.type('org.bukkit.inventory.Inventory');
const InventoryHolder = Java.type('org.bukkit.inventory.InventoryHolder');
```

## Basic Examples

### Working with Player

```javascript
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');

events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    
    // Send message
    player.sendMessage("§aHello!");
    player.sendTitle("§bTitle", "§fSubtitle", 10, 40, 20);
    
    // Inventory
    const inventory = player.getInventory();
    const item = new ItemStack(Material.DIAMOND, 10);
    inventory.addItem(item);
    
    // Location
    const location = player.getLocation();
    const world = location.getWorld();
    const x = location.getX();
    
    // Health
    player.setHealth(20);
    player.setFoodLevel(20);
    
    // GameMode
    player.setGameMode(GameMode.CREATIVE);
});
```

### Working with World

```javascript
const World = Java.type('org.bukkit.World');
const Location = Java.type('org.bukkit.Location');

// Get world
const world = server.getWorld("world");
const worlds = server.getWorlds();

// Create location
const spawnLoc = new Location(world, 0, 64, 0);

// Spawn entity
const zombie = world.spawnEntity(spawnLoc, EntityType.ZOMBIE);

// Set time
world.setTime(1000);
world.setStorm(false);

// Get chunks
const chunk = world.getChunkAt(0, 0);
```

### Working with Items

```javascript
const ItemStack = Java.type('org.bukkit.inventory.ItemStack');
const Material = Java.type('org.bukkit.Material');
const Enchantment = Java.type('org.bukkit.enchantments.Enchantment');
const PotionEffectType = Java.type('org.bukkit.potion.PotionEffectType');

// Create item
const item = new ItemStack(Material.DIAMOND_SWORD);

// Set amount
item.setAmount(64);

// Set metadata
const meta = item.getItemMeta();
meta.setDisplayName("§bSuper Sword");
meta.setLore(["§7A powerful weapon"]);

// Add enchantment
meta.addEnchant(Enchantment.DAMAGE_ALL, 5, true);

item.setItemMeta(meta);

// Check material
if (item.getType() === Material.DIAMOND_SWORD) {
    // ...
}
```

### Working with Inventory

```javascript
// Create inventory
const inventory = server.createInventory(null, 27, "§aMy Inventory");

// Add items
const item1 = new ItemStack(Material.DIAMOND, 10);
const item2 = new ItemStack(Material.GOLD, 20);

inventory.setItem(0, item1);
inventory.addItem(item2);

// Get player inventory
const playerInventory = player.getInventory();
const helmet = playerInventory.getHelmet();
const boots = playerInventory.getBoots();

// Clear inventory
player.getInventory().clear();
```

### Working with Commands

```javascript
// Check sender type
if (sender instanceof org.bukkit.entity.Player) {
    const player = sender;
    // Player-specific logic
} else {
    // Console or other sender
    sender.sendMessage("§cThis command is for players only!");
}

// Get arguments
const args = event.getArgs(); // String[]
const firstArg = args[0];
const allArgs = args.join(" ");

// Check permission
if (sender.hasPermission("my.plugin.admin")) {
    // ...
}
```

### Working with Events

```javascript
const PlayerInteractEvent = Java.type('org.bukkit.event.player.PlayerInteractEvent');

events.on(PlayerInteractEvent, (event) => {
    const player = event.getPlayer();
    const action = event.getAction();
    const block = event.getBlock();
    const item = event.getItem();
    
    // Check action
    if (action === org.bukkit.event.block.Action.RIGHT_CLICK_BLOCK) {
        // Right click
    }
    
    // Check item
    if (item && item.getType() === Material.BLAZE_ROD) {
        // Blaze rod clicked
    }
});
```

## Advanced Examples

### Creating Custom Entities

```javascript
const World = Java.type('org.bukkit.World');
const Location = Java.type('org.bukkit.Location');
const EntityType = Java.type('org.bukkit.entity.EntityType');

events.on(org.bukkit.event.entity.EntitySpawnEvent, (event) => {
    const entity = event.getEntity();
    
    if (entity.getType() === EntityType.ZOMBIE) {
        const zombie = entity;
        zombie.setCustomName("§cAngry Zombie");
        zombie.setCustomNameVisible(true);
        zombie.setBaby();
    }
});
```

### Working with NBT Tags

```javascript
const NBTCompressedStreamTools = Java.type('net.minecraft.nbt.NBTCompressedStreamTools');
const NBTTagCompound = Java.type('net.minecraft.nbt.NBTTagCompound');

const item = player.getInventory().getItemInMainHand();

// Note: Working with NBT requires deep understanding of CraftBukkit
// Use libraries when possible
```

### Using Scoreboards

```javascript
const Scoreboard = Java.type('org.bukkit.scoreboard.Scoreboard');
const Objective = Java.type('org.bukkit.scoreboard.Objective');
const Score = Java.type('org.bukkit.scoreboard.Score');

const scoreboard = server.getScoreboardManager().getMainScoreboard();
const objective = scoreboard.getObjective("kills") || scoreboard.registerNewObjective("kills", "dummy");

const score = objective.getScore(player.getName());
score.setScore(score.getScore() + 1);
```

### Working with Persistent Data

```javascript
const PersistentDataAdapter = Java.type('org.bukkit.persistence.PersistentDataAdapter');
const PersistentDataContainer = Java.type('org.bukkit.persistence.PersistentDataContainer');

// Get player's persistent data
const pdc = player.getPersistentDataContainer();

// Store data
pdc.set(new NamespacedKey(plugin, "my_key"), PersistentDataAdapter.STRING, "value");

// Read data
const value = pdc.get(new NamespacedKey(plugin, "my_key"), PersistentDataAdapter.STRING);
```

### Creating Particles

```javascript
const Particle = Java.type('org.bukkit.Particle');
const Location = Java.type('org.bukkit.Location');

// Create particle effect
player.getWorld().spawnParticle(
    Particle.VILLAGER_HAPPY,
    player.getLocation().add(0, 2, 0),
    10, // count
    0.5, // offsetX
    0.5, // offsetY
    0.5  // offsetZ
);
```

### Playing Sounds

```javascript
const Sound = Java.type('org.bukkit.Sound');
const SoundCategory = Java.type('org.bukkit.SoundCategory');

player.playSound(player.getLocation(), Sound.ENTITY_PLAYER_LEVELUP, SoundCategory.MASTER, 1.0, 1.0);
```

## Useful Tips

### Getting All Online Players

```javascript
const players = server.getOnlinePlayers();
for (const p of players) {
    p.sendMessage("§aHello everyone!");
}
```

### Checking Chunk Loaded

```javascript
const chunk = world.getChunkAt(x, z);
if (chunk.isLoaded()) {
    // Work with chunk
}
```

### Scheduling Repeating Tasks

```javascript
let tick = 0;

events.on(org.bukkit.event.server.ServerTickEvent, (event) => {
    tick++;
    if (tick % 1200 === 0) { // Every minute
        server.broadcastMessage("§eA minute has passed!");
    }
});
```

### Working with Configuration

```javascript
// Get config
const config = plugin.getConfig();
const value = config.getString("settings.greeting");

// Set config
config.set("settings.greeting", "Hello!");
plugin.saveConfig();
```

## Performance Tips

1. **Cache frequently used classes**: Store `Java.type()` results in variables
2. **Use Async for heavy operations**: Don't block the main thread
3. **Minimize world iterations**: Use specific queries instead of iterating all entities
4. **Reuse objects**: Don't create new objects in loops when possible
