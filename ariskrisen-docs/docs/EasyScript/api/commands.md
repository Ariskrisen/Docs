---
sidebar_position: 5
---

# API Команд

Позволяет регистрировать кастомные команды.

## Базовое использование

```javascript
commands.register("имя", "описание", "использование", (sender, args) => {
    // ваш код
});
```

### Параметры

| Параметр | Тип | Описание |
|----------|-----|----------|
| `имя` | String | Имя команды (без /) |
| `описание` | String | Описание в /help |
| `использование` | String | Пример использования |
| `callback` | Function | Функция-обработчик |

### Callback функция

```javascript
(sender, args) => {
    // sender - CommandSender (игрок или консоль)
    // args   - Array<String> - аргументы команды
}
```

## Примеры

### Простая команда

```javascript
commands.register("hello", "Приветствие", "/hello", (sender, args) => {
    sender.sendMessage("§bПривет от EasyScript!");
});
```

### Команда с аргументами

```javascript
commands.register("warp", "Телепорт на варп", "/warp <название>", (sender, args) => {
    if (args.length === 0) {
        sender.sendMessage("§cИспользование: /warp <название>");
        return;
    }
    
    const warpName = args[0];
    sender.sendMessage("§aТелепорт на §e" + warpName);
});
```

### Проверка игрока

```javascript
commands.register("fly", "Включить полет", "/fly", (sender, args) => {
    if (!(sender instanceof org.bukkit.entity.Player)) {
        sender.sendMessage("§cКоманда только для игроков!");
        return;
    }
    
    const player = sender;
    player.setAllowFlight(!player.getAllowFlight());
    player.sendMessage("§aПолет: " + (player.getAllowFlight() ? "включен" : "выключен"));
});
```

### Команда с несколькими аргументами

```javascript
commands.register("give", "Выдать предмет", "/give <игрок> <предмет> [кол-во]", (sender, args) => {
    if (args.length < 2) {
        sender.sendMessage("§cИспользование: /give <игрок> <предмет> [кол-во]");
        return;
    }
    
    const playerName = args[0];
    const itemName = args[1];
    const amount = args[2] ? parseInt(args[2]) : 1;
    
    const target = server.getPlayer(playerName);
    if (!target) {
        sender.sendMessage("§cИгрок не найден!");
        return;
    }
    
    const Material = Java.type('org.bukkit.Material');
    const ItemStack = Java.type('org.bukkit.inventory.ItemStack');
    
    const material = Material.matchMaterial(itemName);
    if (!material) {
        sender.sendMessage("§cНеверный предмет!");
        return;
    }
    
    const item = new ItemStack(material, amount);
    target.getInventory().addItem(item);
    
    sender.sendMessage("§aПредмет выдан!");
});
```

### Проверка пермишена

```javascript
commands.register("adminmsg", "Сообщение админам", "/adminmsg <текст>", (sender, args) => {
    if (!sender.hasPermission("easyscript.admin")) {
        sender.sendMessage("§cНет прав!");
        return;
    }
    
    const message = args.join(" ");
    server.broadcast("§c[Админ] §f" + sender.getName() + ": " + message, "easyscript.admin");
});
```

### Табуляция (autocomplete)

Для автодополнения используйте стандартный Bukkit API:

```javascript
const PlayerCommandPreprocessEvent = Java.type('org.bukkit.event.player.PlayerCommandPreprocessEvent');

events.on(PlayerCommandPreprocessEvent, (event) => {
    const msg = event.getMessage();
    if (msg.startsWith("/warp ")) {
        // Кастомная логика табуляции
    }
});
```

## Особенности

- Команды регистрируются динамически при загрузке скрипта
- При `/es reload` команды автоматически удаляются и пересоздаются
- Имя команды должно быть в нижнем регистре
