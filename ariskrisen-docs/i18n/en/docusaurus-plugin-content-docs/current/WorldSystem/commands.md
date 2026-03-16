---
sidebar_position: 2
---

# Commands & Permissions ⌨️

Manage the WorldSystem plugin using the main command `/ws`.

## 👤 Player Commands

| Command | Description | Permission |
| :--- | :--- | :--- |
| `/ws gui` | Open the main world management menu. | `ws.build` |
| `/ws get [template]` | Create or receive your world. | `ws.get` |
| `/ws home` | Teleport to your world. | `ws.tp` |
| `/ws leave` | Leave the private world (return to spawn). | (everyone) |
| `/ws info` | Show information about the current world. | (everyone) |
| `/ws addmember <player>` | Add a member to your world. | `ws.build` |
| `/ws delmember <player>` | Remove a member from your world. | `ws.build` |
| `/ws delete` | Completely delete your world. | `ws.delete` |
| `/ws tnt [true/false]` | Enable/disable TNT damage on your world. | `ws.build` |
| `/ws fire [true/false]` | Enable/disable fire damage on your world. | `ws.build` |
| `/ws players` | Open members management menu for your world. | (everyone) |
| `/ws sethome` | Set home location in your world. | `ws.sethome` |

## 🛠 Admin Commands

| Command | Description | Permission |
| :--- | :--- | :--- |
| `/ws tp <world>` | Teleport to any player's world. | `ws.tp.other` |
| `/ws get <player> <template>` | Create a world for a specific player. | `ws.get.admin` |
| `/ws reset` | Completely reset the plugin database. | `ws.*` |
| `/ws togglebuild` | Toggle build mode. | `ws.*` |

---

### Additional Permissions
- `ws.template.<name>` — permission to use a specific world template.
- `ws.*` — full access to all plugin features.
