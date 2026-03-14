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
