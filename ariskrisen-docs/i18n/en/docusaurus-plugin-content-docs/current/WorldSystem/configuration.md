---
sidebar_position: 3
---

# Configuration ⚙️

The main configuration file is located at: `plugins/WorldSystem/config.yml`.

## 📋 Core Settings

In the config you can adjust:
- Names and descriptions of world templates.
- Cost of world creation (with Vault).
- World boundaries (WorldBorder).
- Database (MySQL or SQLite).

## 🗺 World Templates
The plugin comes with several pre-installed templates with different biomes:
- `template_default`
- `template_meadows`
- `template_desert`
- `template_snow`

You can change biome spawn weights inside each template to customize generation.

---

### Biome Setting Example:
```yaml
templates:
  meadows:
    display_name: "<green>Meadows"
    cost: 500
    biomes:
      - MEADOW: 10
      - FLOWER_FOREST: 5
```

## 🎯 Spawn in Specific Biome

You can configure players to spawn in a specific biome when creating a world. Add the `spawn` parameter to the template:

```yaml
templates:
  5:
    name: 'template_desert'
    spawn: DESERT    # Player will spawn in desert biome
```

### Available Biomes:
- DESERT, FOREST, TAIGA, PLAINS, SAVANNA, SNOWY_TAIGA, SNOWY_PLAINS, JUNGLE, OCEAN, RIVER, SWAMP, MANGROVE_SWAMP, BEACH, MOUNTAINS, BIRCH_FOREST, DARK_FOREST, FLOWER_FOREST, TAIGA, JUNGLE, BAMBOO_JUNGLE, BADLANDS, ERODED_BADLANDS, WOODED_BADLANDS, CRIMSON_FOREST, SOUL_SAND_VALLEY, WARPED_FOREST, BASALT_DELTAS, GIANT_TREE_TAIGA, SNOWY_BEACH, STONE_SHORE, MUSHROOM_FIELDS, ICE_SPIKES, CHERRY_GROVE, FROZEN_RIVER, SNOWY_SLOPES, FROZEN_PEAKS, JAGGED_PEAKS, and others.

:::note
When using `spawn`, the player will be teleported to the specified biome on first world entry. If the biome is not found within 1500 blocks, the default world spawn will be used.
:::
