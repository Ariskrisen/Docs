---
sidebar_position: 5
---

# Configuration

## config.yml file

```yaml
# General plugin settings
settings:
# Enable/disable the plugin completely
enabled: true

# Effect update interval (ticks)
update-interval: 5

# Worlds where artifacts work (<all> = all)
enabled-worlds:
- "<all>"

# Slots where artifacts work
enabled-slots:
- 0 # Hotbar slot 1
- 1 # Hotbar slot 2
- 2 # Hotbar slot 3
- 3 # Hotbar slot 4
- 4 # Hotbar slot 5
- 5 # Hotbar slot 6
- 6 # Hotbar slot 7
- 7 # Hotbar slot 8
- 8 # Hotbar slot 9
- 40 # Offhand

# Enable armor slots
enable-armor-slots: true

# Show particles
show-particles: true

# Show messages
show-messages: false

# Debug mode
debug: false

# Plugin messages (supports color codes &)
messages:
# Message when an artifact is activated
artifact-activated: "&aArtifact &e%artifact% &aactivated!"

# Message when an artifact is deactivated
artifact-deactivated: "&cArtifact &e%artifact% &cdeactivated."

# Message when the bag is full
bag-full: "&cBag is full! Maximum &e%slots% &cartifacts."

# Message when trying to put a non-artifact in the bag
bag-not-artifact: "&cOnly artifacts can be put in the bag!"

# Message when non-artifacts are removed from a bag
bag-cleaned: "&c⚠ Non-artifact items have been removed from the anomalous bag!"

# Message when clicking on the bag
bag-info: "&6Anomalous Bag: &e%slots% artifact slots!"

# Anomalous Bag Settings
bags:
# Enable anomalous bags
enabled: true

# Enable validation (removal of non-artifacts)
validate-contents: true

# Validation interval in ticks
validation-interval: 60

# Slot limits by tier
tier-limits:
tier-1: 2
tier-2: 4
tier-3: 6
tier-4: 8
```

## Description of settings

### settings

| Parameter | Type | Default | Description |
|----------|-----|--------------|-----------|
| `enabled` | boolean | `true` | Enable/Disable Plugin |
| `update-interval` | int | `5` | Effect Update Interval |
| `enabled-worlds` | list | `<all>` | World List |
| `enabled-slots` | list | hotbar+offhand | Active Slots |
| `enable-armor-slots` | boolean | `true` | Works in Armor |
| `show-particles` | boolean | `true` | Show Particles |
| `show-messages` | boolean | `false` | Show Messages |
| `debug` | boolean | `false` | Debug Mode |

### update-interval

Artifact effect update interval in ticks.

- `5` = update every 0.25 seconds (recommended)
- `20` = update every second
- `100` = update every 5 seconds

:::tip
Smaller value = more responsive effects, but higher server load.
:::

### messages

All messages support:
- Color codes `&a`, `&c`, etc.
- Placeholder `%artifact%` — artifact name
- Placeholder `%slots%` — number of slots

### bags

| Parameter | Type | Default | Description |
|----------|-----|-------------|-----------|
| `enabled` | boolean | `true` | Enable bags |
| `validate-contents` | boolean | `true` | Content validation |
| `validation-interval` | int | `60` | Validation interval (ticks) |
| `tier-limits` | object | 2/4/6/8 | Tier limits |

### enabled-worlds

List of worlds where artifacts work.

```yaml
enabled-worlds:
- "world" # Specific world
- "world_nether" # Nether
- "world_the_end" # End
- "<all>" # All worlds
```

### enabled-slots

Slots in which artifacts work.

| Slot | Description |
|------|--------|
| 0-8 | Hotbar Slots (1-9 in-game) |
| 40 | Offhand (left hand) |
| 36 | Boots |
| 37 | Leggings |
| 38 | Chest |
| 39 | Helmet |

## Complete example config.yml

```yaml
# ============================================================
# ARTIFACT CONFIGURATION
# ============================================================

settings: 
enabled: true 
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

messages:
artifact-activated: "Artifact &e%artifact% &aactivated!"
artifact-deactivated: "Artifact &e%artifact% &cdeactivated."
bag-full: "Bag is full! Maximum &e%slots% &cartifacts."
bag-not-artifact: "Only artifacts can be placed in the bag!"
bag-cleaned: "Non-artifacts have been removed from the bag!"
bag-info: "Anomalous Bag: &e%slots% slots!"

bags: 
enabled: true 
validate-contents: true 
validation-interval: 60 
tier-limits: 
tier-1:2 
tier-2: 4 
tier-3: 6 
tier-4: 8

artifacts: 
speed_charm: 
material: SUGAR 
name: "§bTalisman of Speed" 
lore: 
- "§7Increases movement speed" 
enabled: true 
effects: 
potion-effects: 
- effect: SPEED 
level: 1
```
