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

## Permissions

```yaml
permissions:
  artifact.give:
    description: Give artifacts
    default: op
  artifact.list:
    description: View the list of artifacts
    default: true
  artifact.reload:
    description: Reload the config
    default: op
```

## Next Steps

- [Creating Artifacts](creating-artifacts.md) — create your first artifact
- [Effects](effects.md) — list of all available effects
- [Configuration](configuration.md) — advanced configuration
