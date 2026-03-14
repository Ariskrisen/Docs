---
sidebar_position: 7
---

# API Планировщика

Позволяет выполнять код с задержкой или асинхронно.

## Методы

| Метод | Описание |
|-------|----------|
| `scheduler.runLater(ticks, callback)` | Выполнить через N тиков |
| `scheduler.runSync(callback)` | Выполнить синхронно (главный поток) |
| `scheduler.runAsync(callback)` | Выполнить асинхронно |

> **Важно**: 20 тиков = 1 секунда

## Примеры

### Задача с задержкой

```javascript
// Выполнить через 10 секунд (200 тиков)
scheduler.runLater(200, () => {
    player.sendMessage("§aСообщение через 10 секунд!");
});
```

### Синхронная задача

```javascript
// Выполнить на главном потоке сервера
scheduler.runSync(() => {
    const world = server.getWorlds().get(0);
    world.setTime(1000);
    server.broadcastMessage("§aВремя изменено!");
});
```

### Асинхронная задача

```javascript
// Выполнить в отдельном потоке
scheduler.runAsync(() => {
    logger.info("Начинаем тяжелую операцию...");
    
    // Имитация тяжелой работы
    try {
        Thread.sleep(5000);
    } catch (e) {}
    
    logger.info("Операция завершена!");
    
    // Вернуться на главный поток для взаимодействия с Bukkit
    scheduler.runSync(() => {
        server.broadcastMessage("§aГотово!");
    });
});
```

### Таймер (повторяющаяся задача)

```javascript
// Таймер на чистом JS (нужно реализовать вручную)
let timerTicks = 0;

events.on(org.bukkit.event.server.ServerTickEvent, (event) => {
    timerTicks++;
    
    // Каждую минуту (1200 тиков)
    if (timerTicks >= 1200) {
        timerTicks = 0;
        server.broadcastMessage("§eПрошла минута!");
    }
});
```

### Отмена задачи

Для отмены задачи сохраните её ID:

```javascript
// Запуск задачи возвращает ID
const taskId = scheduler.runLater(200, () => {
    // код
});

// Отмена (через Bukkit API)
Bukkit.getScheduler().cancelTask(taskId);
```

## Практические примеры

### Задержка после входа игрока

```javascript
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');

events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    
    // Через 5 секунд - напоминание
    scheduler.runLater(100, () => {
        if (player.isOnline()) {
            player.sendMessage("§eНе забудьте заявить о себе в /discord!");
        }
    });
    
    // Через 1 минуту - проверка активности
    scheduler.runLater(1200, () => {
        if (player.isOnline()) {
            // Проверка активности игрока
        }
    });
});
```

### Кулдаун команды

```javascript
let cooldowns = {};

commands.register("kit", "Получить набор", "/kit", (sender, args) => {
    if (!(sender instanceof org.bukkit.entity.Player)) return;
    
    const player = sender;
    const uuid = player.getUniqueId().toString();
    const cooldownTime = 3600; // 1 час в секундах
    
    if (cooldowns[uuid] && Date.now() < cooldowns[uuid]) {
        const remaining = Math.ceil((cooldowns[uuid] - Date.now()) / 1000);
        player.sendMessage("§cПодождите " + remaining + " секунд!");
        return;
    }
    
    // Выдача набора
    const ItemStack = Java.type('org.bukkit.inventory.ItemStack');
    const Material = Java.type('org.bukkit.Material');
    
    player.getInventory().addItem(new ItemStack(Material.DIAMOND, 10));
    player.sendMessage("§aНабор выдан!");
    
    // Установка кулдауна
    cooldowns[uuid] = Date.now() + (cooldownTime * 1000);
});
```

## Когда использовать какой метод

| Ситуация | Метод |
|----------|-------|
| Задержка после события | `runLater` |
| Операции с БД | `runAsync` |
| HTTP запросы | `runAsync` |
| Изменение мира/игроков | `runSync` |
| Отправка сообщений | `runSync` |
