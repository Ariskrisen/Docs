---
sidebar_position: 9
---

# Bukkit API

Полный доступ к Bukkit/Paper API через Java.type.

## Импорт классов

```javascript
// Основные классы
const Bukkit = Java.type('org.bukkit.Bukkit');
const Server = Java.type('org.bukkit.Server');

// Сущности
const Player = Java.type('org.bukkit.entity.Player');
const Entity = Java.type('org.bukkit.entity.Entity');

// Предметы
const ItemStack = Java.type('org.bukkit.inventory.ItemStack');
const Material = Java.type('org.bukkit.Material');

// Блоки
const Block = Java.type('org.bukkit.block.Block');
const BlockState = Java.type('org.bukkit.block.BlockState');

// Миры
const World = Java.type('org.bukkit.World');
const Location = Java.type('org.bukkit.Location');

// События
const Event = Java.type('org.bukkit.event.Event');

// Статистика
const Statistic = Java.type('org.bukkit.Statistic');
const GameMode = Java.type('org.bukkit.GameMode');

// Инвентарь
const Inventory = Java.type('org.bukkit.inventory.Inventory');
const InventoryHolder = Java.type('org.bukkit.inventory.InventoryHolder');
```

## Основные примеры

### Работа с игроком

```javascript
const PlayerJoinEvent = Java.type('org.bukkit.event.player.PlayerJoinEvent');

events.on(PlayerJoinEvent, (event) => {
    const player = event.getPlayer();
    
    // Информация об игроке
    const name = player.getName();
    const uuid = player.getUniqueId();
    const world = player.getWorld().getName();
    const location = player.getLocation();
    
    // Телепортация
    const spawn = server.getWorld("world").getSpawnLocation();
    player.teleport(spawn);
    
    // Изменение здоровья
    player.setHealth(20);
    player.setHealthScale(20);
    
    // Изменение еды
    player.setFoodLevel(20);
    player.setSaturation(10);
    
    // Опыт
    player.setLevel(10);
    player.setExp(0.5);
    
    // Игровой режим
    player.setGameMode(GameMode.CREATIVE);
    
    // Полет
    player.setAllowFlight(true);
    player.setFlying(false);
    
    // Инвентарь
    player.getInventory().clear();
    player.getInventory().addItem(new ItemStack(Material.DIAMOND, 10));
    player.updateInventory();
    
    // Эффекты
    player.addPotionEffect(org.bukkit.potion.PotionEffectType.SPEED.createEffect(60, 1));
    
    // Звуки
    player.playSound(player.getLocation(), "entity.player.levelup", 1, 1);
    
    // Титулы
    player.sendTitle("Заголовок", "Подзаголовок", 10, 60, 10);
    
    // Сообщения
    player.sendMessage("Привет!");
    player.sendActionBar("Сообщение внизу экрана");
});
```

### Работа с инвентарём

```javascript
const ItemStack = Java.type('org.bukkit.inventory.ItemStack');
const Material = Java.type('org.bukkit.Material');

// Создание предмета
const diamond = new ItemStack(Material.DIAMOND, 10);
const sword = new ItemStack(Material.DIAMOND_SWORD);

// С метаданными (название, лор)
const head = new ItemStack(Material.PLAYER_HEAD);
const meta = head.getItemMeta();
meta.setDisplayName("§6Особый предмет");
meta.setLore(["§7Легендарный меч", "§8+100 урона"]);
head.setItemMeta(meta);

// Добавление в инвентарь
player.getInventory().addItem(diamond);
player.getInventory().setItem(0, sword);

// Проверка наличия
const hasDiamond = player.getInventory().contains(Material.DIAMOND, 5);
const hasItem = player.getInventory().containsAtLeast(diamond, 1);

// Удаление
player.getInventory().removeItem(diamond);
player.getInventory().clear();
```

### Работа с мирами

```javascript
const World = Java.type('org.bukkit.World');
const Location = Java.type('org.bukkit.Location');

// Получение мира
const world = server.getWorld("world");
const nether = server.getWorld("world_nether");
const theEnd = server.getWorld("world_the_end");

// Спавн
const spawn = world.getSpawnLocation();

// Создание локации
const loc = new Location(world, 100, 64, -100);

// Работа с границей мира
const border = world.getWorldBorder();
border.setCenter(0, 0);
border.setSize(1000);
border.setWarningDistance(50);

// Время
world.setTime(1000);
world.setFullTime(0);
world.setStorm(false);

// Погода
world.setStorm(false);
world.setThundering(false);

// Создание частицы
world.spawnParticle(
    org.bukkit.Particle.valueOf("VILLAGER_HAPPY"),
    player.getLocation(),
    10
);
```

### Работа с блоками

```javascript
const Material = Java.type('org.bukkit.Material');
const Block = Java.type('org.bukkit.block.Block');

events.on(PlayerInteractEvent, (event) => {
    const block = event.getClickedBlock();
    if (!block) return;
    
    // Тип блока
    const type = block.getType();
    
    // Изменение блока
    block.setType(Material.DIAMOND_BLOCK);
    
    // Метаданные блока
    const state = block.getState();
    if (state instanceof org.bukkit.block.Sign) {
        const sign = state;
        sign.setLine(0, "§lЗаголовок");
        sign.setLine(1, "Строка 2");
        sign.update();
    }
});
```

### Работа с сущностями

```javascript
// Спавн моба
const Location = Java.type('org.bukkit.Location');

events.on(PlayerCommandPreprocessEvent, (event) => {
    if (event.getMessage() === "/spawnzombie") {
        const loc = event.getPlayer().getLocation();
        
        // Спавн зомби
        const zombie = loc.getWorld().spawnEntity(loc, org.bukkit.entity.EntityType.ZOMBIE);
        zombie.setCustomName("§cЗлой зомби");
        zombie.setCustomNameVisible(true);
        zombie.setHealth(50);
        
        event.setCancelled(true);
    }
});
```

### Работа с конфигом

```javascript
// Чтение
const greeting = plugin.getConfig().getString("messages.greeting");
const list = plugin.getConfig().getStringList("blacklist");
const number = plugin.getConfig().getInt("settings.max-players");

// Запись
plugin.getConfig().set("settings.custom-key", "value");
plugin.saveConfig();

// Перезагрузка
plugin.reloadConfig();
```

### Работа с файлами (JSON)

```javascript
const File = Java.type('java.io.File');
const Files = Java.type('java.nio.file.Files');
const StandardOpenOption = Java.type('java.nio.file.StandardOpenOption');

const DATA_FILE = new File(plugin.getDataFolder(), "data.json");

// Чтение
const content = Files.readString(DATA_FILE.toPath());
const data = JSON.parse(content);

// Запись
const newData = JSON.stringify(data, null, 2);
Files.writeString(
    DATA_FILE.toPath(),
    newData,
    StandardOpenOption.CREATE,
    StandardOpenOption.TRUNCATE_EXISTING
);
```

### Vault (экономика)

```javascript
const Bukkit = Java.type('org.bukkit.Bukkit');

// Получение экономики
const econClass = Java.type('net.milkbowl.vault.economy.Economy');
const rsp = Bukkit.getServicesManager().getRegistration(econClass);

if (rsp) {
    const econ = rsp.getProvider();
    
    // Баланс
    const balance = econ.getBalance(player);
    
    // Снятие
    econ.withdrawPlayer(player, 100);
    
    // Начисление
    econ.depositPlayer(player, 100);
    
    // Проверка
    if (econ.has(player, 50)) {
        // достаточно денег
    }
}
```

## Таблица соответствия типов

| Bukkit Java | JS EasyScript |
|-------------|---------------|
| `String` | `"текст"` |
| `int` | `parseInt()` |
| `double` | `parseFloat()` |
| `boolean` | `true/false` |
| `List<String>` | `Array` |
| `Map<String, Object>` | `Object` |
