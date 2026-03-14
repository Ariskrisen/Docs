---
sidebar_position: 3
---

# Quick Start

Create your first script in 5 minutes.

## Creating a Script

1. Open the `plugins/EasyScript/scripts/` folder
2. Create a file named `hello.js`
3. Add the following code:

```javascript
// Import the event class
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');

// Subscribe to player join event
events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    player.sendMessage("§aWelcome to the server!");
});
```

4. Reload the scripts: `/es reload`

## What's Available in Scripts

### Global Objects

| Object | Description |
|--------|-------------|
| `plugin` | Plugin instance |
| `server` | Bukkit Server |
| `logger` | Logger |
| `events` | Events API |
| `commands` | Commands API |
| `scheduler` | Scheduler |
| `placeholder` | PlaceholderAPI |
| `papi` | Custom placeholders |
| `Bukkit` | org.bukkit.Bukkit class |

## Example: Greeting Command

```javascript
// plugins/EasyScript/scripts/greeting.js

// Register /hello command
commands.register("hello", "Player greeting", "/hello", (sender, args) => {
    sender.sendMessage("§bHello from EasyScript!");
});
```

## Example: Delayed Message

```javascript
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');

events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    
    // Instant message
    player.sendMessage("§aWelcome!");
    
    // After 5 seconds
    scheduler.runLater(100, () => {
        if (player.isOnline()) {
            player.sendMessage("§eDon't forget to read the rules!");
        }
    });
});
```

## Example: Using Placeholders

```javascript
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');

events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    
    // Process placeholders
    const msg = placeholder.setPlaceholders(player, 
        "§6Hello, %player_name%! Balance: %vault_eco_balance%$"
    );
    
    player.sendMessage(msg);
});
```

## Hot Reload

After modifying a script, run:
```
/es reload
```

Scripts will reload without restarting the server.

## Next Steps

- [Events API](api/events.md) — more about events
- [Examples](examples.md) — more ready-to-use scripts
