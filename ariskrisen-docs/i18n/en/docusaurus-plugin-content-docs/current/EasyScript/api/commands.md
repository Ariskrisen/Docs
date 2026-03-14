---
sidebar_position: 5
---

# Commands API

Allows registering custom commands.

## Basic Usage

```javascript
commands.register("name", "description", "usage", (sender, args) => {
    // your code
});
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | String | Command name (without /) |
| `description` | String | Description shown in /help |
| `usage` | String | Usage example |
| `callback` | Function | Handler function |

### Callback Function

```javascript
(sender, args) => {
    // sender - CommandSender (player or console)
    // args   - Array<String> - command arguments
}
```

## Examples

### Simple Command

```javascript
commands.register("hello", "Greeting", "/hello", (sender, args) => {
    sender.sendMessage("§bHello from EasyScript!");
});
```

### Command with Arguments

```javascript
commands.register("warp", "Teleport to warp", "/warp <name>", (sender, args) => {
    if (args.length === 0) {
        sender.sendMessage("§cUsage: /warp <name>");
        return;
    }
    
    const warpName = args[0];
    sender.sendMessage("§aTeleporting to §e" + warpName);
});
```

### Player Check

```javascript
commands.register("fly", "Enable flight", "/fly", (sender, args) => {
    if (!(sender instanceof org.bukkit.entity.Player)) {
        sender.sendMessage("§cCommand for players only!");
        return;
    }
    
    const player = sender;
    player.setAllowFlight(!player.getAllowFlight());
    player.sendMessage("§aFlight: " + (player.getAllowFlight() ? "enabled" : "disabled"));
});
```

### Command with Multiple Arguments

```javascript
commands.register("give", "Give item", "/give <player> <item> [amount]", (sender, args) => {
    if (args.length < 2) {
        sender.sendMessage("§cUsage: /give <player> <item> [amount]");
        return;
    }
    
    const playerName = args[0];
    const itemName = args[1];
    const amount = args[2] ? parseInt(args[2]) : 1;
    
    const target = server.getPlayer(playerName);
    if (!target) {
        sender.sendMessage("§cPlayer not found!");
        return;
    }
    
    const Material = Java.type('org.bukkit.Material');
    const ItemStack = Java.type('org.bukkit.inventory.ItemStack');
    
    const material = Material.matchMaterial(itemName);
    if (!material) {
        sender.sendMessage("§cInvalid item!");
        return;
    }
    
    const item = new ItemStack(material, amount);
    target.getInventory().addItem(item);
    
    sender.sendMessage("§aItem given!");
});
```

### Permission Check

```javascript
commands.register("adminmsg", "Message to admins", "/adminmsg <text>", (sender, args) => {
    if (!sender.hasPermission("easyscript.admin")) {
        sender.sendMessage("§cNo permission!");
        return;
    }
    
    const message = args.join(" ");
    server.broadcast("§c[Admin] §f" + sender.getName() + ": " + message, "easyscript.admin");
});
```

### Tab Completion

For autocomplete, use standard Bukkit API:

```javascript
const PlayerCommandPreprocessEvent = Java.type('org.bukkit.event.player.PlayerCommandPreprocessEvent');

events.on(PlayerCommandPreprocessEvent, (event) => {
    const msg = event.getMessage();
    if (msg.startsWith("/warp ")) {
        // Custom tab completion logic
    }
});
```

## Features

- Commands are registered dynamically when script loads
- On `/es reload` commands are automatically removed and recreated
- Command name must be lowercase
