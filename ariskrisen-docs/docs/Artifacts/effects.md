---
sidebar_position: 4
---

# Эффекты

## Эффекты зелий (Potion Effects)

Пассивные эффекты, которые применяются пока артефакт в инвентаре.

### Синтаксис

```yaml
potion-effects:
  - effect: SPEED        # Тип эффекта
    level: 2              # Уровень (1-255, в игре = level-1)
```

### Полный список эффектов

| Эффект | Название в игре | Описание |
|--------|-----------------|---------|
| `SPEED` | Скорость | Увеличивает скорость передвижения |
| `SLOWNESS` | Замедление | Уменьшает скорость передвижения |
| `HASTE` | Спешка | Увеличивает скорость добычи |
| `MINING_FATIGUE` | Усталость | Замедляет добычу |
| `STRENGTH` | Сила | Увеличивает урон в ближнем бою |
| `INSTANT_HEALTH` | Мгновенное лечение | Мгновенно восстанавливает здоровье |
| `INSTANT_DAMAGE` | Мгновенный урон | Наносит мгновенный урон |
| `JUMP_BOOST` | Прыгучесть | Увеличивает высоту прыжка |
| `NAUSEA` | Тошнота | Искажает изображение |
| `REGENERATION` | Регенерация | Восстанавливает здоровье со временем |
| `RESISTANCE` | Сопротивление | Уменьшает входящий урон |
| `FIRE_RESISTANCE` | Огнестойкость | Защита от огня и лавы |
| `WATER_BREATHING` | Подводное дыхание | Позволяет дышать под водой |
| `INVISIBILITY` | Невидимость | Делает игрока невидимым |
| `BLINDNESS` | Слепота | Ограничивает видимость |
| `NIGHT_VISION` | Ночное зрение | Позволяет видеть в темноте |
| `HUNGER` | Голод | Увеличивает расход голода |
| `WEAKNESS` | Слабость | Уменьшает урон в ближнем бою |
| `POISON` | Яд | Наносит урон со временем |
| `WITHER` | Иссушение | Наносит урон и затемняет здоровье |
| `HEALTH_BOOST` | Увеличение здоровья | Добавляет дополнительные сердца |
| `ABSORPTION` | Поглощение | Щит из дополнительных сердец |
| `SATURATION` | Насыщение | Восстанавливает голод |
| `GLOWING` | Свечение | Делает сущности светящимися |
| `LEVITATION` | Левитация | Парение в воздухе |
| `LUCK` | Удача | Увеличивает шанс редкого лута |
| `UNLUCK` | Неудача | Уменьшает шанс редкого лута |
| `SLOW_FALLING` | Медленное падение | Замедляет падение |
| `CONDUIT_POWER` | Сила проводника | Подводное дыхание + спешка + ночное зрение |
| `DOLPHINS_GRACE` | Грация дельфина | Увеличивает скорость в воде |
| `RABBITS_JUMP` | Прыгучесть кролика | Увеличивает высоту прыжка |
| `SLOW` | Замедление | Замедляет атаку и передвижение |
| `ILLUSIONER` | Невидимость иллюзионера | Невидимость + слепота |

### Примеры

```yaml
potion-effects:
  - effect: SPEED
    level: 2        # Скорость II (level - 1)
  - effect: JUMP_BOOST
    level: 3        # Прыгучесть III
  - effect: REGENERATION
    level: 1        # Регенерация I
```

---

## Эффекты атаки (Attack Effects)

Эффекты, срабатывающие при атаке игрока.

### Синтаксис

```yaml
attack-effects:
  - type: IGNITE
    chance: 1.0      # Шанс срабатывания (0.0 - 1.0)
    duration: 60      # Длительность в тиках (20 тиков = 1 сек)
```

### Список эффектов атаки

| Тип | Описание | Параметры |
|-----|---------|-----------|
| `POTION` | Наложить эффект зелья на врага | `effect`, `level`, `duration` |
| `IGNITE` | Поджечь врага | `duration` |
| `KNOCKBACK` | Отбросить врага | `strength` |
| `LIFESTEAL` | Украсть HP у врага | `percent` |
| `POISON` | Отравить врага | `damage`, `duration` |
| `WITHER` | Наложить иссушение | `duration` |
| `SLOW` | Замедлить врага | `level`, `duration` |
| `WEAKNESS` | Ослабить врага | `level`, `duration` |
| `BLIND` | Ослепить врага | `duration` |
| `CRITICAL` | Гарантированный крит | `chance-bonus`, `damage-multiplier` |
| `LIGHTNING` | Удар молнии | `chance` |
| `EXPLOSION` | Взрыв на месте врага | `power`, `fire` |
| `SUMMON` | Призвать моба | `entity`, `count` |
| `THIEF` | Украсть предмет у врага | — |
| `PARTICLE_EFFECT` | Частицы | `particle`, `count` |

### Примеры

```yaml
# Вампирический клык
attack-effects:
  - type: LIFESTEAL
    percent: 10        # Украсть 10% урона как HP
    chance: 1.0

# Ядовитый клинок
attack-effects:
  - type: POISON
    damage: 2          # Уровень яда
    duration: 80       # 4 секунды
    chance: 1.0

# Критический удар
attack-effects:
  - type: CRITICAL
    chance-bonus: 0.15 # +15% к шансу крита
    damage-multiplier: 1.5 # +50% к крит урону
    chance: 1.0
```

---

## Эффекты защиты (Defense Effects)

Эффекты, срабатывающие при получении урона.

### Синтаксис

```yaml
defense-effects:
  - type: ABSORB
    percent: 20        # Процент поглощаемого урона
    chance: 1.0
```

### Список эффектов защиты

| Тип | Описание | Параметры |
|-----|---------|-----------|
| `ABSORB` | Поглотить часть урона | `percent` |
| `DODGE` | Увернуться от атаки | `chance` |
| `REFLECT` | Отразить урон атакующему | `percent` |
| `THORNS` | Нанести урон атакующему | `damage` |
| `COUNTER` | Контратака | `damage` |
| `KNOCKBACK` | Отбросить атакующего | `strength` |
| `POTION_TO_ATTACKER` | Эффект на атакующего | `effect`, `level`, `duration` |
| `ABSORPTION` | Временный щит | `hearts`, `duration` |
| `REGENERATE_ON_HIT` | Лечение при получении урона | `health` |
| `VAMPIRIC` | Вампиризм | `percent` |
| `LEVITATE` | Левитация атакующего | `duration`, `strength` |

### Примеры

```yaml
# Щит стража
defense-effects:
  - type: ABSORB
    percent: 20        # Поглотить 20% урона
    chance: 1.0
  - type: THORNS
    damage: 2          # Нанести 2 урона атакующему
    chance: 1.0

# Уклонение
defense-effects:
  - type: DODGE
    chance: 0.15       # 15% шанс увернуться
```

---

## Пассивные способности (Passive Abilities)

Специальные способности, работающие автоматически.

### Синтаксис

```yaml
passive-abilities:
  - type: WATER_BREATHING
```

### Список пассивных способностей

| Тип | Описание | Параметры |
|-----|---------|-----------|
| `WATER_BREATHING` | Подводное дыхание | — |
| `FIRE_RESISTANCE_PASSIVE` | Огнестойкость | — |
| `SLOW_FALLING` | Медленное падение | — |
| `INVISIBILITY_PASSIVE` | Невидимость | — |
| `LEVITATION` | Левитация | — |
| `CONDUIT_POWER` | Сила проводника | — |
| `HERO_OF_THE_VILLAGE` | Герой деревни | — |
| `SOUL_SPEED` | Скорость душ | `level` |
| `DEPTH_STRIDER` | Глубинный ходок | `level` |
| `FROST_WALKER` | Ледоход | `level` |
| `MAGNETIC` | Притягивание предметов | `range` |
| `DOUBLE_JUMP` | Двойной прыжок | `boost`, `cooldown` |
| `REGENERATION_PASSIVE` | Регенерация | `amount`, `interval` |
| `XP_BOOST` | Буст опыта | `multiplier` |
| `LOOT_BONUS` | Бонус лута | `chance` |
| `WITHER_REDUCTION` | Защита от wither | `percent` |
| `JUMP_BOOST` | Прыгучесть | `level` |
| `SHRINK` | Уменьшение размера | `scale-multiplier`, `health-multiplier`, `speed-multiplier`, `damage-multiplier` |
| `GROW` | Увеличение размера | `scale-multiplier`, `health-multiplier`, `speed-multiplier`, `damage-multiplier` |

### Примеры

```yaml
# Магнитный артефакт
passive-abilities:
  - type: MAGNETIC
    range: 5           # Радиус притягивания в блоках

# Двойной прыжок
passive-abilities:
  - type: DOUBLE_JUMP
    boost: 1.5          # Множитель скорости прыжка
    cooldown: 100       # Кулдаун в тиках
```

### SHRINK | Уменьшение

Уменьшает размер игрока, изменяя HP, скорость и урон.

```yaml
# Пример: Ртуть Гермеса
passive-abilities:
  - type: SHRINK
    scale-multiplier: 0.5      # Размер x0.5
    health-multiplier: 0.5      # HP x0.5 (10 сердец)
    speed-multiplier: 1.25     # Скорость x1.25
    damage-multiplier: 1.0       # Урон без изменения
```

| Параметр | Описание |
|----------|-----------|
| `scale-multiplier` | Множитель размера (0.5 = половина) |
| `health-multiplier` | Множитель HP (0.5 = 10 HP) |
| `speed-multiplier` | Множитель скорости (1.25 = +25%) |
| `damage-multiplier` | Множитель урона |

### GROW | Увеличение

Увеличивает размер игрока, изменяя HP, скорость и урон.

```yaml
# Пример: Кровь Титана
passive-abilities:
  - type: GROW
    scale-multiplier: 1.5      # Размер x1.5
    health-multiplier: 1.5      # HP x1.5 (30 сердец)
    speed-multiplier: 0.75     # Скорость x0.75
    damage-multiplier: 1.5     # Урон x1.5
```
```
