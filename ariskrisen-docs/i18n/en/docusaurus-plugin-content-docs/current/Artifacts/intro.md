---
sidebar_position: 1
---

# Artifacts ✨

> Passive artifacts for Paper 1.21+

**Artifacts** is a plugin that adds unique passive artifacts that work just by being in the player's inventory.

## Overview

- [Installation](getting-started.md) — how to install the plugin
- [Creating Artifacts](creating-artifacts.md) — guide on creating artifacts
- [Effects](effects.md) — complete list of effects
- [Configuration](configuration.md) — plugin configuration

## Commands

| Command | Description |
|---------|---------|
| `/artifact give <id> [player] [amount]` | Give an artifact |
| `/artifact list` | List of all artifacts |
| `/artifact info <id>` | Information about an artifact |
| `/artifact reload` | Reload configuration |

## Requirements

| Dependency | Required |
|------------|-------------|
| Paper/Spigot 1.21+ | ✅ Yes |
| ItemsAdder | ❌ No (optional for textures) |

## Anomalous Bags

Anomalous Bags allow you to store artifacts within them and use their effects.

### Bag Tiers

| Tier | Slots | Description |
|-----|--------|---------|
| I | 2 | Starter Bag |
| II | 4 | Advanced Bag |
| III | 6 | Rare Bag |
| IV | 8 | Legendary Bag |

### Features

- The bag functions like a regular bag (BUNDLE)
- You can only put artifacts inside it
- All artifacts inside are passive

### How to use

1. Give the bag: `/artifact bag 2`
2. Add artifacts to the bag by dragging them
3. The artifact bag works in the hotbar
