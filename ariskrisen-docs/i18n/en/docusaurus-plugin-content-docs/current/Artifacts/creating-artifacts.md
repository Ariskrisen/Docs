---
sidebar_position: 3
---

# Creating Artifacts

## Quick Example

A minimal artifact with a speed effect:

```yaml
artifacts:
  my_first_artifact:
    material: SUGAR
    name: "§bSpeed Charm"
    lore:
      - "§7Increases movement speed"
    enabled: true
    effects:
      potion-effects:
        - effect: SPEED
          level: 1
```

## Complete Artifact Structure

```yaml
artifacts:
  artifact_id:           # Unique ID (lowercase only)
    material: DIAMOND    # Material (or namespace:itemsadder_id for ItemsAdder)
    name: "§eMy Item"    # Display name (with color codes)
    lore:                # Description (shown on hover)
      - "§7First line"
      - "§7Second line"
    enabled: true        # Enabled/Disabled
    custom-model-data: 0  # Custom texture ID (0 = standard)
    
    effects:             # Artifact effects
      potion-effects:    # Passive potion effects
        - ...
      attack-effects:    # Effects on attack
        - ...
      defense-effects:   # Effects when taking damage
        - ...
      passive-abilities: # Special abilities
        - ...
```

## Artifact Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `material` | String | Item material or `namespace:id` for ItemsAdder |
| `name` | String | Name (supports `§` color codes) |
| `lore` | `List<String>` | Description (shown in tooltip) |
| `enabled` | Boolean | Whether the artifact is enabled |
| `custom-model-data` | Integer | Texture ID (for Resource Packs) |

## Artifact Examples

### Potion Effect Artifact

```yaml
  speed_charm:
    material: SUGAR
    name: "§bSpeed Charm"
    lore:
      - "§7Increases speed"
      - ""
      - "§e§lPASSIVE: §bSpeed I"
    enabled: true
    effects:
      potion-effects:
        - effect: SPEED
          level: 1
```

### Attack Effect Artifact

```yaml
  fire_sword:
    material: DIAMOND_SWORD
    name: "§cFire Sword"
    lore:
      - "§7Ignites enemies on hit"
      - ""
      - "§e§lON ATTACK: §cIgnite"
    enabled: true
    effects:
      attack-effects:
        - type: IGNITE
          duration: 60
          chance: 1.0
```

### Defense Effect Artifact

```yaml
  guardian_charm:
    material: SHIELD
    name: "§9Guardian Charm"
    lore:
      - "§7Reduces incoming damage"
      - ""
      - "§e§lPASSIVE: §9-20% damage"
    enabled: true
    effects:
      defense-effects:
        - type: ABSORB
          percent: 20
          chance: 1.0
```

### Multi-Effect Artifact

```yaml
  super_charm:
    material: NETHER_STAR
    name: "§6Super Charm"
    lore:
      - "§7Combined artifact"
    enabled: true
    effects:
      potion-effects:
        - effect: SPEED
          level: 2
        - effect: JUMP_BOOST
          level: 1
      attack-effects:
        - type: LIFESTEAL
          percent: 10
          chance: 1.0
      defense-effects:
        - type: ABSORB
          percent: 10
          chance: 1.0
```

## Using ItemsAdder Textures

If you have ItemsAdder installed, you can use custom items directly:

```yaml
  my_custom_artifact:
    material: "itemsadder:my_custom_item"
    name: "§eUnique Item"
    lore:
      - "§7Custom texture from ItemsAdder"
    enabled: true
    effects:
      potion-effects:
        - effect: SPEED
          level: 1
```

## Using CustomModelData

For textures via Resource Pack:

```yaml
  textured_artifact:
    material: GLOW_BERRIES
    custom-model-data: 1001
    name: "§eTextured Artifact"
    lore:
      - "§7Features a custom texture"
    enabled: true
    effects:
      potion-effects:
        - effect: SPEED
          level: 1
```

:::tip
For CustomModelData you need a Resource Pack configured with the specific texture IDs. More details in the [Textures](textures.md) section.
:::

## Next Steps

- [Potion Effects](effects.md#potion-effects) — list of all potion effects
- [Attack Effects](effects.md#attack-effects) — effects on hit
- [Defense Effects](effects.md#defense-effects) — effects when taking damage
- [Passive Abilities](effects.md#passive-abilities) — special abilities
