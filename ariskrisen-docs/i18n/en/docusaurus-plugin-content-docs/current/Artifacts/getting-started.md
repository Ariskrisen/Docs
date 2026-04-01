---
sidebar_position: 2
---

# Installation & Setup

## Requirements

| Requirement | Version | Required |
|-------------|---------|----------|
| Paper/Spigot | 1.21+ | ✅ Yes |
| ItemsAdder | 3.x | ❌ No (for custom textures) |

## Installation

1. **Download** the latest `ArtifactPlugin-X.X.jar`
2. **Place** it in your server's `plugins/` folder
3. **Restart** the server

After the first start, the following file will be created:
```
plugins/
└── ArtifactPlugin/
    └── config.yml
```

## Project Structure

```
plugins/ArtifactPlugin/
└── config.yml          # All artifacts and settings
```

### Command Examples

```bash
# Give an artifact to a player
/artifact give speed_charm PlayerName

# Give 5 artifacts to yourself
/artifact give speed_charm 5

# Give a Tier III bag
/artifact bag 3

# Give a bag to another player
/artifact bag 4 PlayerName
```

## Permissions

```yaml
permissions:
artifact.give:
description: Give artifacts
default: op
artifact.list:
description: View artifact list
default: true
artifact.info:
description: Artifact information
default: true
artifact.reload:
description: Reload config
default: op
```

## Anomalous Bags

### What are they?

Anomalous Bags are special bags (BUNDLES) that can store artifacts inside.

### How to obtain

```bash
/artifact bag 1 # Tier 1 bag (2 slots)
/artifact bag 2 # Tier 2 bag (4 slots)
/artifact bag 3 # Tier 3 bag (6 slots)
/artifact bag 4 # Tier 4 bag (8 slots)
```

### How to use

1. Get the bag with the command `/artifact bag <tier>`
2. Place artifacts inside
3. Place the bag in the hotbar
4. All artifacts inside will work!

### Restrictions

- The bag can only hold artifacts
- The number of slots is limited by the bag's tier
- Once full, no more can be added

## Next Steps

- [Creating Artifacts](creating-artifacts.md) — create your first artifact
- [Effects](effects.md) — a list of all available effects
- [Settings](configuration.md) — advanced configuration
