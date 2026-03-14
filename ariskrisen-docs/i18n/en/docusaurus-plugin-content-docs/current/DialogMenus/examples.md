---
sidebar_position: 5
---

# Examples

Below are examples of different menu types you can use as templates.

## 🎁 Daily Reward (Notice + PAPI)
**File:** `daily.yml`
```yaml
title: "<gold>Login Reward"
type: notice
body:
  msg:
    type: text
    content: "Hi, %player_name%! Your current balance: <green>%vault_balance%$"
  reward_icon:
    type: item
    material: GOLD_INGOT
    name: "<yellow>Your daily bonus"
button:
  text: "<green>Claim and close"
  action:
    - type: command
      value: "eco give %player_name% 100"
    - type: message
      value: "<green>You received 100$!"
    - type: close
```

## ⚔️ Arena Selector (Multi-Action)
**File:** `arenas.yml`
```yaml
title: "<red>Select Arena"
type: multi-action
body:
  info:
    type: text
    content: "Select the battleground:"
buttons:
  arena_1:
    text: "<yellow>Forest"
    hover: "Difficulty: Easy"
    action:
      - type: command
        value: "tp %player_name% 100 64 100"
      - type: close
  arena_2:
    text: "<red>Nether"
    hover: "Difficulty: HIGH"
    action:
      - type: command
        value: "tp %player_name% 500 64 500"
      - type: close
  cancel:
    text: "<gray>Back"
    action:
      type: open
      value: "main_menu"
```

## 🛒 Purchase Confirmation (Confirmation)
**File:** `buy_confirm.yml`
```yaml
title: "<yellow>Confirmation"
type: confirmation
body:
  text:
    type: text
    content: "Do you really want to buy this sword for <green>500$?"
yes-button:
  text: "<green>Buy!"
  action:
    - type: command
      value: "eco take %player_name% 500"
    - type: command
      value: "give %player_name% diamond_sword 1"
    - type: close
no-button:
  text: "<red>Cancel"
  action:
    type: close
```
