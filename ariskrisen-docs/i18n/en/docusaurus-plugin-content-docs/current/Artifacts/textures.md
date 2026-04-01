---
sidebar_position: 6
---

# Textures

The plugin supports multiple ways to define textures for your artifacts.

## 1. CustomModelData (Java Edition)

Use the built-in `custom-model-data` parameter in the config:

```yaml
artifacts:
  my_custom_artifact:
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

:::info
CustomModelData works with any material. You need a Resource Pack that assigns textures to specific IDs.
:::

### Example item_model.json for Resource Pack

```json
{
  "parent": "minecraft:item/generated",
  "textures": {
    "layer0": "minecraft:item/glow_berries"
  },
  "overrides": [
    {"predicate": {"custom_model_data": 1001}, "model": "artifact/custom_item_1001"}
  ]
}
```

## 2. ItemsAdder

If you have [ItemsAdder](https://github.com/AI1229/ItemsAdder) installed, you can use custom items:

### ItemsAdder Setup

1. Create a `plugins/ItemsAdder/data/items.yml` file:

```yaml
items:
  my_artifact:
    display_name: "Speed Charm"
    permission: artifact.use
    lore:
      - "Increases speed"
    resource:
      material: GLOW_BERRIES
      generate: true
      textures:
        - item/my_artifact.png
```

2. In the Artifacts config, use:

```yaml
artifacts:
  speed_charm:
    material: "itemsadder:my_artifact"
    name: "§bSpeed Charm"
    lore:
      - "§7Increases movement speed"
    enabled: true
    effects:
      potion-effects:
        - effect: SPEED
          level: 1
```

### Namespace Format

Format: `namespace:id`

| Namespace | Plugin |
|-----------|--------|
| `itemsadder:` | ItemsAdder |
| `oraxen:` | Oraxen |
| `mmoitems:` | MMOItems |

## 3. Combining Methods

You can use an ItemsAdder material combined with CustomModelData from a Resource Pack:

```yaml
artifacts:
  super_artifact:
    material: "itemsadder:premium_item"
    custom-model-data: 5
    name: "§6§lSUPER ARTIFACT"
    lore:
      - "§7Rarest artifact"
    enabled: true
    effects:
      potion-effects:
        - effect: SPEED
          level: 3
```

## Method Comparison

| Method | Pros | Cons |
|--------|------|------|
| **CustomModelData** | Works natively without plugins | Requires custom Resource Pack |
| **ItemsAdder** | Simple setup, built-in GUI | Dependent on third-party plugin |
| **Combined** | Maximum flexibility | Harder to configure |

## Recommendations

1. **For simple servers**: Use CustomModelData with base materials
2. **For premium servers**: ItemsAdder + custom models
3. **For hardcore/advanced**: Full custom Resource Pack with item overrides
