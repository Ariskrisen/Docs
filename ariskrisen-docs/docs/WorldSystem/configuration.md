---
sidebar_position: 3
---

# Конфигурация ⚙️

Основной файл настроек находится по пути: `plugins/WorldSystem/config.yml`.

## 📋 Основные настройки

В конфиге можно настроить:
- Название и описание шаблонов миров.
- Стоимость создания мира (при наличии Vault).
- Границы миров (WorldBorder).
- Базу данных (MySQL или SQLite).

## 🗺 Шаблоны миров
В плагине предустановлено несколько шаблонов с разными биомами:
- `template_default`
- `template_meadows`
- `template_desert`
- `template_snow`

Вы можете изменять веса спавна биомов внутри каждого шаблона, чтобы настроить генерацию под себя.

---

### Пример настройки биома:
```yaml
templates:
  meadows:
    display_name: "<green>Луга"
    cost: 500
    biomes:
      - MEADOW: 10
      - FLOWER_FOREST: 5
```

## 🎯 Спавн в определённом биоме

Вы можете настроить, чтобы игрок заспавнился в определённом биоме при создании мира. Для этого добавьте параметр `spawn` в шаблон:

```yaml
templates:
  5:
    name: 'template_desert'
    spawn: DESERT    # Игрок заспавнится в пустыне
```

### Доступные биомы:
- DESERT, FOREST, TAIGA, PLAINS, SAVANNA, SNOWY_TAIGA, SNOWY_PLAINS, JUNGLE, OCEAN, RIVER, SWAMP, MANGROVE_SWAMP, BEACH, MOUNTAINS, BIRCH_FOREST, DARK_FOREST, FLOWER_FOREST, TAIGA, JUNGLE, BAMBOO_JUNGLE, BADLANDS, ERODED_BADLANDS, WOODED_BADLANDS, CRIMSON_FOREST, SOUL_SAND_VALLEY, WARPED_FOREST, BASALT_DELTAS, GIANT_TREE_TAIGA, SNOWY_BEACH, STONE_SHORE, MUSHROOM_FIELDS, ICE_SPIKES, CHERRY_GROVE, FROZEN_RIVER, SNOWY_SLOPES, FROZEN_PEAKS, JAGGED_PEAKS, и другие.

:::note
При использовании `spawn` игрок будет телепортирован в указанный биом при первом входе в мир. Если биом не найден в радиусе 1500 блоков, будет использован стандартный спавн мира.
:::
