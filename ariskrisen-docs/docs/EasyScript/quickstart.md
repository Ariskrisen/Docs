---
sidebar_position: 3
---

# Быстрый старт

Создайте ваш первый скрипт за 5 минут.

## Создание скрипта

1. Откройте папку `plugins/EasyScript/scripts/`
2. Создайте файл `hello.js`
3. Добавьте код:

```javascript
// Импорт класса события
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');

// Подписка на событие входа игрока
events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    player.sendMessage("§aДобро пожаловать на сервер!");
});
```

4. Перезагрузите скрипты: `/es reload`

## Что доступно в скриптах

### Глобальные объекты

| Объект | Описание |
|--------|----------|
| `plugin` | Экземпляр плагина |
| `server` | Bukkit Server |
| `logger` | Логгер |
| `events` | API событий |
| `commands` | API команд |
| `scheduler` | Планировщик |
| `placeholder` | PlaceholderAPI |
| `papi` | Кастомные плейсхолдеры |
| `Bukkit` | Класс org.bukkit.Bukkit |

## Пример: Команда приветствия

```javascript
// plugins/EasyScript/scripts/greeting.js

// Регистрация команды /hello
commands.register("hello", "Приветствие игрока", "/hello", (sender, args) => {
    sender.sendMessage("§bПривет от EasyScript!");
});
```

## Пример: Сообщение с задержкой

```javascript
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');

events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    
    // Мгновенное сообщение
    player.sendMessage("§aДобро пожаловать!");
    
    // Через 5 секунд
    scheduler.runLater(100, () => {
        if (player.isOnline()) {
            player.sendMessage("§eНе забудьте прочитать правила!");
        }
    });
});
```

## Пример: Использование плейсхолдеров

```javascript
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');

events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    
    // Обработка плейсхолдеров
    const msg = placeholder.setPlaceholders(player, 
        "§6Привет, %player_name%! Баланс: %vault_eco_balance%$"
    );
    
    player.sendMessage(msg);
});
```

## Пример: Создание кастомных плейсхолдеров

```javascript
// Регистрация плейсхолдера: %easyscript_deaths%
papi.registerPlaceholder("deaths", (player, params) => {
    if (!player.isOnline()) return "0";
    
    const p = player.getPlayer();
    return p.getStatistic(org.bukkit.Statistic.DEATHS).toString();
});

// Вызов: %easyscript_deaths% (сработает как с _, так и без)
```

:::note
Кастомные плейсхолдеры можно вызывать как с подчёркиванием в конце, так и без него:
- `%easyscript_deaths%`
- `%easyscript_deaths_%`

Оба варианта работают одинаково.
:::

## Горячая перезагрузка

После изменения скрипта выполните:
```
/es reload
```

Скрипты перезагрузятся без перезапуска сервера.

## Следующие шаги

- [API событий](api/events.md) — подробнее о событиях
- [Примеры](examples.md) — больше готовых скриптов
