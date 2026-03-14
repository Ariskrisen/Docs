---
sidebar_position: 6
---

# API Событий

Позволяет подписываться на любые события Bukkit.

## Базовое использование

```javascript
// 1. Импорт класса события
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');

// 2. Подписка на событие
events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    player.sendMessage("Добро пожаловать!");
});
```

## Доступные события

### События игрока

| Событие | Класс | Описание |
|---------|-------|----------|
| Вход | `PlayerJoinEvent` | Игрок зашел на сервер |
| Выход | `PlayerQuitEvent` | Игрок покинул сервер |
| Смерть | `PlayerDeathEvent` | Игрок умер |
| Команда | `PlayerCommandPreprocessEvent` | Игрок ввел команду |
| Клик | `PlayerInteractEvent` | Игрок кликнул |
| Прыжок | `PlayerJumpEvent` | Игрок прыгнул |
| Телепорт | `PlayerTeleportEvent` | Игрок телепортировался |

### События блоков

| Событие | Класс | Описание |
|---------|-------|----------|
| Разрушение | `BlockBreakEvent` | Блок сломан |
| Установка | `BlockPlaceEvent` | Блок установлен |
| Взаимодействие | `BlockInteractEvent` | Взаимодействие с блоком |

### События сущностей

| Событие | Класс | Описание |
|---------|-------|----------|
| Взаимодействие | `EntityInteractEvent` | Взаимодействие с сущностью |
| Смерть сущности | `EntityDeathEvent` | Сущность умерла |

## Примеры

### Несколько событий в одном скрипте

```javascript
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');
const PlayerQuitEvent = Java.type('org.bukkit.event.player.PlayerQuitEvent');
const PlayerDeathEvent = Java.type('org.bukkit.event.entity.PlayerDeathEvent');

// Вход
events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    player.sendMessage("§aДобро пожаловать!");
});

// Выход
events.on(PlayerQuitEvent, (event) => {
    const player = event.getPlayer();
    logger.info(player.getName() + " вышел с сервера");
});

// Смерть
events.on(PlayerDeathEvent, (event) => {
    const player = event.getEntity();
    event.setDeathMessage("§c" + player.getName() + " умер!");
});
```

### Проверка типа игрока

```javascript
const EntityDamageEvent = Java.type('org.bukkit.event.entity.EntityDamageEvent');

events.on(EntityDamageEvent, (event) => {
    const entity = event.getEntity();
    
    // Проверяем, что это игрок
    if (entity instanceof org.bukkit.entity.Player) {
        const player = entity;
        player.sendMessage("§cВы получили урон!");
    }
});
```

### Отмена события

```javascript
const PlayerCommandPreprocessEvent = Java.type('org.bukkit.event.player.PlayerCommandPreprocessEvent');

events.on(PlayerCommandPreprocessEvent, (event) => {
    const msg = event.getMessage().toLowerCase();
    
    // Запретить команду /stop
    if (msg.startsWith("/stop")) {
        event.setCancelled(true);
        event.getPlayer().sendMessage("§cЭта команда недоступна!");
    }
});
```

## Работа с EventPriority

По умолчанию используется `NORMAL`. Для изменения приоритета нужно использовать Bukkit API напрямую:

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
```
