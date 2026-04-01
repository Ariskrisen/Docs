---
sidebar_position: 5
---

# Configuration

## The config.yml File

```yaml
settings:
  # Effect update interval (ticks)
  update-interval: 5
  
  # Worlds where artifacts work (<all> = everywhere)
  enabled-worlds:
    - "<all>"
  
  # Slots where artifacts work
  enabled-slots:
    - 0    # Hotbar slot 1
    - 1    # Hotbar slot 2
    - 2    # Hotbar slot 3
    - 3    # Hotbar slot 4
    - 4    # Hotbar slot 5
    - 5    # Hotbar slot 6
    - 6    # Hotbar slot 7
    - 7    # Hotbar slot 8
    - 8    # Hotbar slot 9
    - 40   # Offhand
  
  # Enable armor slots
  enable-armor-slots: true
  
  # Show particles
  show-particles: true
  
  # Show messages
  show-messages: false
  
  # Debug mode
  debug: false
```

## Settings Description

### update-interval

Artifact effect update interval in ticks.

- `5` = updates every 0.25 seconds (recommended)
- `20` = updates every second
- `100` = updates every 5 seconds

:::tip
Lower value = more responsive effects, but more server load.
:::

### enabled-worlds

List of worlds where artifacts are active.

```yaml
enabled-worlds:
  - "world"           # Specific world
  - "world_nether"     # The Nether
  - "world_the_end"    # The End
  - "<all>"            # All worlds
```

### enabled-slots

Inventory slots where artifacts work.

| Slot | Description |
|------|-------------|
| 0-8 | Hotbar slots (1-9 in game) |
| 40 | Offhand (left hand) |
| 36 | Boots |
| 37 | Leggings |
| 38 | Chestplate |
| 39 | Helmet |

### enable-armor-slots

```yaml
enable-armor-slots: true   # Artifacts work in armor slots
enable-armor-slots: false # Hotbar and offhand only
```

## Complete config.yml Example

```yaml
# ============================================
#         ARTIFACT CONFIGURATION
# ============================================

settings:
  update-interval: 5
  enabled-worlds:
    - "<all>"
  enabled-slots:
    - 0
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 40
  enable-armor-slots: true
  show-particles: true
  show-messages: false
  debug: false

artifacts:
  speed_charm:
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
