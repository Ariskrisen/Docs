---
sidebar_position: 6
---

# Events API

Allows subscribing to any Bukkit event.

## Basic Usage

```javascript
// 1. Import the event class
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');

// 2. Subscribe to event
events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    player.sendMessage("Welcome!");
});
```

## Available Events

### Player Events

| Event | Class | Description |
|-------|-------|-------------|
| Join | `PlayerJoinEvent` | Player joined |
| Quit | `PlayerQuitEvent` | Player quit |
| Death | `PlayerDeathEvent` | Player died |
| Command | `PlayerCommandPreprocessEvent` | Player ran a command |
| Click | `PlayerInteractEvent` | Player clicked |
| Jump | `PlayerJumpEvent` | Player jumped |
| Teleport | `PlayerTeleportEvent` | Player teleported |

### Block Events

| Event | Class | Description |
|-------|-------|-------------|
| Break | `BlockBreakEvent` | Block was broken |
| Place | `BlockPlaceEvent` | Block was placed |
| Interact | `BlockInteractEvent` | Interacted with block |

### Entity Events

| Event | Class | Description |
|-------|-------|-------------|
| Interact | `EntityInteractEvent` | Interacted with entity |
| Death | `EntityDeathEvent` | Entity died |

## Examples

### Multiple Events in One Script

```javascript
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');
const PlayerQuitEvent = Java.type('org.bukkit.event.player.PlayerQuitEvent');
const PlayerDeathEvent = Java.type('org.bukkit.event.entity.PlayerDeathEvent');

// Join
events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    player.sendMessage("§aWelcome!");
});

// Quit
events.on(PlayerQuitEvent, (event) => {
    const player = event.getPlayer();
    logger.info(player.getName() + " left the server");
});

// Death
events.on(PlayerDeathEvent, (event) => {
    const player = event.getEntity();
    event.setDeathMessage("§c" + player.getName() + " died!");
});
```

### Checking Player Type

```javascript
const EntityDamageEvent = Java.type('org.bukkit.event.entity.EntityDamageEvent');

events.on(EntityDamageEvent, (event) => {
    const entity = event.getEntity();
    
    // Check if it's a player
    if (entity instanceof org.bukkit.entity.Player) {
        const player = entity;
        player.sendMessage("§cYou took damage!");
    }
});
```

### Cancelling Events

```javascript
const PlayerCommandPreprocessEvent = Java.type('org.bukkit.event.player.PlayerCommandPreprocessEvent');

events.on(PlayerCommandPreprocessEvent, (event) => {
    const msg = event.getMessage().toLowerCase();
    
    // Block /stop command
    if (msg.startsWith("/stop")) {
        event.setCancelled(true);
        event.getPlayer().sendMessage("§cThis command is not available!");
    }
});
```

## Working with EventPriority

By default, `NORMAL` is used. To change priority, use Bukkit API directly:

```javascript
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');
const EventPriority = Java.type('org.bukkit.event.EventPriority');

org.bukkit.plugin.PluginManager.registerEvent(
    PlayerJoinEvent,
    listenerObject,
    EventPriority.HIGH,
    (listener, event) => {
        if (event instanceof PlayerJoinEvent) {
            callback.execute(event);
        }
    },
    plugin
);
