---
sidebar_position: 4
---

# Commands & Permissions

The DialogMenus plugin is managed using the main `/dialogmenus` command.

## ⌨️ Command List

| Command | Aliases | Description | Permission |
| :--- | :--- | :--- | :--- |
| `/dim reload` | `/dm reload`, `/dialogs reload` | Reloads all menus from the `menus/` folder. | `dialogmenus.reload` |
| `/dim open <player> <menu>` | `/dm open`, `/dialogs open` | Opens the target dialog for a player. | `dialogmenus.open` |

### Usage Examples:
- `/dim reload` — reload configurations after editing.
- `/dim open @s main_menu` — open the main menu to yourself.
- `/dim open Player1 shop` — open the shop for Player1.

---

## 🔐 Permissions

| Node | Description | Default |
| :--- | :--- | :--- |
| `dialogmenus.admin` | Full access to all plugin features. | OP |
| `dialogmenus.reload` | Allows using the reload command. | OP |
| `dialogmenus.open` | Allows opening menus (to self and others). | OP |

> [!TIP]
> If you want to give players the ability to open specific menus on their own (for example, via an NPC), it is recommended to use NPC plugins or scripts that execute the `/dim open %player% <menu>` command from the console.
