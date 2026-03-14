---
sidebar_position: 7
---

# Scheduler API

Allows executing code with delay or asynchronously.

## Methods

| Method | Description |
|--------|-------------|
| `scheduler.runLater(ticks, callback)` | Execute after N ticks |
| `scheduler.runSync(callback)` | Execute synchronously (main thread) |
| `scheduler.runAsync(callback)` | Execute asynchronously |

> **Important**: 20 ticks = 1 second

## Examples

### Delayed Task

```javascript
// Execute after 10 seconds (200 ticks)
scheduler.runLater(200, () => {
    player.sendMessage("§aMessage after 10 seconds!");
});
```

### Synchronous Task

```javascript
// Execute on main server thread
scheduler.runSync(() => {
    const world = server.getWorlds().get(0);
    world.setTime(1000);
    server.broadcastMessage("§aTime changed!");
});
```

### Asynchronous Task

```javascript
// Execute in separate thread
scheduler.runAsync(() => {
    logger.info("Starting heavy operation...");
    
    // Simulate heavy work
    try {
        Thread.sleep(5000);
    } catch (e) {}
    
    logger.info("Operation complete!");
    
    // Return to main thread for Bukkit interaction
    scheduler.runSync(() => {
        server.broadcastMessage("§aDone!");
    });
});
```

### Timer (Repeating Task)

```javascript
// Timer in pure JS (needs manual implementation)
let timerTicks = 0;

events.on(org.bukkit.event.server.ServerTickEvent, (event) => {
    timerTicks++;
    
    // Every minute (1200 ticks)
    if (timerTicks >= 1200) {
        timerTicks = 0;
        server.broadcastMessage("§eA minute passed!");
    }
});
```

### Canceling Task

To cancel a task, save its ID:

```javascript
// Starting task returns ID
const taskId = scheduler.runLater(200, () => {
    // code
});

// Cancel (via Bukkit API)
Bukkit.getScheduler().cancelTask(taskId);
```

## Practical Examples

### Delay After Player Join

```javascript
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');

events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    
    // After 5 seconds - reminder
    scheduler.runLater(100, () => {
        if (player.isOnline()) {
            player.sendMessage("§eDon't forget to join our /discord!");
        }
    });
    
    // After 1 minute - check activity
    scheduler.runLater(1200, () => {
        if (player.isOnline()) {
            // Check player activity
        }
    });
});
```

### Command Cooldown

```javascript
let cooldowns = {};

commands.register("kit", "Get kit", "/kit", (sender, args) => {
    if (!(sender instanceof org.bukkit.entity.Player)) return;
    
    const player = sender;
    const uuid = player.getUniqueId().toString();
    const cooldownTime = 3600; // 1 hour in seconds
    
    if (cooldowns[uuid] && Date.now() < cooldowns[uuid]) {
        const remaining = Math.ceil((cooldowns[uuid] - Date.now()) / 1000);
        player.sendMessage("§cWait " + remaining + " seconds!");
        return;
    }
    
    // Give kit
    const ItemStack = Java.type('org.bukkit.inventory.ItemStack');
    const Material = Java.type('org.bukkit.Material');
    
    player.getInventory().addItem(new ItemStack(Material.DIAMOND, 10));
    player.sendMessage("§aKit received!");
    
    // Set cooldown
    cooldowns[uuid] = Date.now() + (cooldownTime * 1000);
});
```

## When to Use Which Method

| Situation | Method |
|-----------|--------|
| Delay after event | `runLater` |
| Database operations | `runAsync` |
| HTTP requests | `runAsync` |
| World/player modifications | `runSync` |
| Sending messages | `runSync` |
