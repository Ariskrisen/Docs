---
sidebar_position: 3
---

# Actions

Actions define what happens when a player clicks a button in a dialog. You can use a single action or a chain of actions.

## 🔗 Single Action
```yaml
button:
  text: "Text"
  action:
    type: command
    value: "say Hello!"
```

## ⛓ Action Chain (Multi-Action)
Actions are executed sequentially from top to bottom.
```yaml
button:
  text: "Get bonus"
  action:
    - type: command
      value: "give %player_name% diamond 1"
    - type: message
      value: "<green>You got a diamond!"
    - type: close
```

---

## 🛠 Available Action Types

| Type | Value | Description |
| :--- | :--- | :--- |
| `command` | String (command) | Executes a command from the console. |
| `message` | MiniMessage text | Sends a message to the player's chat. |
| `url` | Link (URL) | Sends a clickable URL to the chat. |
| `close` | (empty) | Closes the current dialog. |
| `open` | Menu name | Opens another menu from the `menus/` folder. |

---

## 🧩 Variables & Placeholders

### Built-in
- `<player>` — player's nickname (deprecated, use PAPI).

### Input Variables (Inputs)
In actions, you can use the data the player has provided through the dialog's input fields:
- `<input:ID>` — is replaced with the value of the field matched by the given ID.

**Profile saving example:**
```yaml
inputs:
  age:
    type: number-range
    label: "Your age"
buttons:
  save:
    text: "Save"
    action:
      - type: command
        value: "profile set-age <player> <input:age>"
      - type: message
        value: "Age <input:age> saved!"
```

### PlaceholderAPI (PAPI)
If PlaceholderAPI is installed on your server, you can use any placeholders:
- `%player_name%`
- `%vault_balance%`
- `%essentials_nickname%`
- and hundreds of others.

Placeholders work inside:
- `title`
- `body` content elements.
- `text` and `hover` in buttons.
- `value` in actions (like in commands).
