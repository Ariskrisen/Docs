---
sidebar_position: 2
---

# Installation & Setup

## Requirements

| Requirement | Version | Required |
|------------|---------|----------|
| Paper/Spigot | 1.21+ | ✅ Yes |
| PlaceholderAPI | Any | ✅ Yes |
| Vault | Any | ❌ No (for economy) |

## Installation

1. **Download** the latest `EasyScript-X.X.jar`
2. **Place** it in your server's `plugins/` folder
3. **Install** PlaceholderAPI (download from Spigot)
4. **Restart** your server

After the first run, the following folder structure will be created:
```
plugins/
└── EasyScript/
    ├── config.yml
    └── scripts/
        └── border_logic.js  (example)
```

## Project Structure

```
plugins/EasyScript/
├── config.yml          # Plugin configuration
└── scripts/            # Your .js scripts
    ├── main.js
    ├── my_script.js
    └── ...
```

## Permissions

```yaml
# In permissions.yml or permissions plugin
permissions:
  easyscript.admin:
    description: Access to admin commands
    default: op
```

## Plugin Commands

| Command | Description |
|---------|-------------|
| `/easyscript reload` | Reload all scripts |
| `/easyscript list` | List script files |
| `/easyscript status` | Load status |
| `/es` | Alias for easyscript |

## Next Steps

- [Quick Start](quickstart.md) — create your first script
- [Events API](api/events.md) — handling events
- [Commands API](api/commands.md) — creating commands
