---
sidebar_position: 2
---

# Configuration (YAML)

Configuring menus in DialogMenus is intuitive. Each `.yml` file in the `plugins/DialogMenus/menus/` folder represents a separate menu.

## 📄 General Structure

```yaml
title: "Title" # Supports MiniMessage and PAPI
type: notice # notice, confirmation, multi-action
can-close-with-escape: true # Can be closed with ESC

body:
  # Content elements
  element1:
    type: text
    content: "Message text"
  element2:
    type: item
    material: DIAMOND
```

---

## 🏗 Menu Types (`type`)

### 1. `notice`
A simple info window. Uses a single `button` block to close.
```yaml
type: notice
button:
  text: "OK"
```

### 2. `confirmation`
A "Yes/No" dialog. Uses `yes-button` and `no-button` blocks.
```yaml
type: confirmation
yes-button:
  text: "<green>Accept"
no-button:
  text: "<red>Decline"
```

### 3. `multi-action`
A universal menu with any amount of buttons. Uses the `buttons` section.
```yaml
type: multi-action
buttons:
  btn_1:
    text: "Button 1"
  btn_2:
    text: "Button 2"
```

---

## 💬 Inputs (`inputs`)

You can add interactive elements to interact with the player.

### `text`
A normal text field.
```yaml
inputs:
  my_text:
    type: text
    label: "Enter your name"
```

### `number-range`
A slider for picking a number.
```yaml
inputs:
  my_slider:
    type: number-range
    label: "Select amount"
    min: 0
    max: 100
    initial: 50
    step: 1.0 # Default is 1.0 (integers)
```

### `choice`
A toggle-button to pick one option from a list.

```yaml
inputs:
  my_choice:
    type: choice
    label: "Your gender"
    options:
      male: "<blue>Male"
      female: "<light_purple>Female"
      other: "Other"
```
*In actions, use `<input:my_choice>` to get the key of the selected option (e.g., `male`).*
```

---

## 🎨 MiniMessage
All text fields support the [MiniMessage](https://docs.adventure.kyori.net/minimessage/format.html) format.
Examples:
- `<gold>Gold text</gold>`
- `<gradient:red:blue>Gradient</gradient>`
- `<bold>Bold text</bold>`
