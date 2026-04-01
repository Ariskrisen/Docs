---
sidebar_position: 4
---

# Effects

## Potion Effects

Passive effects applied while the artifact is in the inventory.

### Syntax

```yaml
potion-effects:
  - effect: SPEED        # Effect type
    level: 2              # Level (1-255, in-game = level-1)
```

### Full Effects List

| Effect | In-game Name | Description |
|--------|--------------|-------------|
| `SPEED` | Speed | Increases movement speed |
| `SLOWNESS` | Slowness | Decreases movement speed |
| `HASTE` | Haste | Increases mining speed |
| `MINING_FATIGUE` | Mining Fatigue | Slows mining speed |
| `STRENGTH` | Strength | Increases melee damage |
| `INSTANT_HEALTH` | Instant Health | Instantly restores health |
| `INSTANT_DAMAGE` | Instant Damage | Deals instant damage |
| `JUMP_BOOST` | Jump Boost | Increases jump height |
| `NAUSEA` | Nausea | Distorts vision |
| `REGENERATION` | Regeneration | Restores health over time |
| `RESISTANCE` | Resistance | Reduces incoming damage |
| `FIRE_RESISTANCE` | Fire Resistance | Protection against fire and lava |
| `WATER_BREATHING` | Water Breathing | Allows breathing underwater |
| `INVISIBILITY` | Invisibility | Renders the player invisible |
| `BLINDNESS` | Blindness | Restricts vision |
| `NIGHT_VISION` | Night Vision | Allows seeing in the dark |
| `HUNGER` | Hunger | Increases hunger depletion |
| `WEAKNESS` | Weakness | Reduces melee damage |
| `POISON` | Poison | Deals damage over time |
| `WITHER` | Wither | Deals damage and turns health bar black |
| `HEALTH_BOOST` | Health Boost | Adds extra hearts |
| `ABSORPTION` | Absorption | Shield of extra hearts |
| `SATURATION` | Saturation | Replenishes food level |
| `GLOWING` | Glowing | Highlights entities |
| `LEVITATION` | Levitation | Floats upwards |
| `LUCK` | Luck | Increases chance for rare loot |
| `UNLUCK` | Bad Luck | Decreases chance for rare loot |
| `SLOW_FALLING` | Slow Falling | Slows descent speed |
| `CONDUIT_POWER` | Conduit Power | Underwater breathing + haste + night vision |
| `DOLPHINS_GRACE` | Dolphin's Grace | Increases underwater speed |
| `RABBITS_JUMP` | Rabbit's Jump | Increases jump height |
| `SLOW` | Slowness | Slows attacks and movement |
| `ILLUSIONER` | Illusioner's Invisibility | Invisibility + Blindness |

### Examples

```yaml
potion-effects:
  - effect: SPEED
    level: 2        # Speed II (level - 1)
  - effect: JUMP_BOOST
    level: 3        # Jump Boost III
  - effect: REGENERATION
    level: 1        # Regeneration I
```

---

## Attack Effects

Effects triggered when the player attacks.

### Syntax

```yaml
attack-effects:
  - type: IGNITE
    chance: 1.0      # Trigger chance (0.0 - 1.0)
    duration: 60      # Duration in ticks (20 ticks = 1 sec)
```

### Attack Effects List

| Type | Description | Parameters |
|------|-------------|------------|
| `POTION` | Apply potion effect to enemy | `effect`, `level`, `duration` |
| `IGNITE` | Set enemy on fire | `duration` |
| `KNOCKBACK` | Knockback enemy | `strength` |
| `LIFESTEAL` | Steal HP from enemy | `percent` |
| `POISON` | Poison enemy | `damage`, `duration` |
| `WITHER` | Apply wither effect | `duration` |
| `SLOW` | Slow down enemy | `level`, `duration` |
| `WEAKNESS` | Weaken enemy | `level`, `duration` |
| `BLIND` | Blind enemy | `duration` |
| `CRITICAL` | Guaranteed critical strike | `chance-bonus`, `damage-multiplier` |
| `LIGHTNING` | Strike lightning | `chance` |
| `EXPLOSION` | Explode at enemy location | `power`, `fire` |
| `SUMMON` | Summon a mob | `entity`, `count` |
| `THIEF` | Steal an item from enemy | — |
| `PARTICLE_EFFECT` | Spawn particles | `particle`, `count` |

### Examples

```yaml
# Vampiric Fang
attack-effects:
  - type: LIFESTEAL
    percent: 10        # Steal 10% of damage as HP
    chance: 1.0

# Poison Blade
attack-effects:
  - type: POISON
    damage: 2          # Poison level
    duration: 80       # 4 seconds
    chance: 1.0

# Critical Strike
attack-effects:
  - type: CRITICAL
    chance-bonus: 0.15 # +15% crit chance
    damage-multiplier: 1.5 # +50% crit damage
    chance: 1.0
```

---

## Defense Effects

Effects triggered when taking damage.

### Syntax

```yaml
defense-effects:
  - type: ABSORB
    percent: 20        # Percentage of damage absorbed
    chance: 1.0
```

### Defense Effects List

| Type | Description | Parameters |
|------|-------------|------------|
| `ABSORB` | Absorb a portion of damage | `percent` |
| `DODGE` | Dodge an attack | `chance` |
| `REFLECT` | Reflect damage back to attacker | `percent` |
| `THORNS` | Deal damage to attacker | `damage` |
| `COUNTER` | Counter-attack | `damage` |
| `KNOCKBACK` | Knockback the attacker | `strength` |
| `POTION_TO_ATTACKER` | Apply effect on attacker | `effect`, `level`, `duration` |
| `ABSORPTION` | Temporary shield | `hearts`, `duration` |
| `REGENERATE_ON_HIT` | Heal when taking damage | `health` |
| `VAMPIRIC` | Vampirism on hit | `percent` |
| `LEVITATE` | Levitate attacker | `duration`, `strength` |

### Examples

```yaml
# Guardian Shield
defense-effects:
  - type: ABSORB
    percent: 20        # Absorb 20% of damage
    chance: 1.0
  - type: THORNS
    damage: 2          # Deal 2 damage to attacker
    chance: 1.0

# Evasion
defense-effects:
  - type: DODGE
    chance: 0.15       # 15% dodge chance
```

---

## Passive Abilities

Special abilities that function automatically.

### Syntax

```yaml
passive-abilities:
  - type: WATER_BREATHING
```

### Passive Abilities List

| Type | Description | Parameters |
|------|-------------|------------|
| `WATER_BREATHING` | Water Breathing | — |
| `FIRE_RESISTANCE_PASSIVE` | Fire Resistance | — |
| `SLOW_FALLING` | Slow Falling | — |
| `INVISIBILITY_PASSIVE` | Invisibility | — |
| `LEVITATION` | Levitation | — |
| `CONDUIT_POWER` | Conduit Power | — |
| `HERO_OF_THE_VILLAGE` | Hero of the Village | — |
| `SOUL_SPEED` | Soul Speed | `level` |
| `DEPTH_STRIDER` | Depth Strider | `level` |
| `FROST_WALKER` | Frost Walker | `level` |
| `MAGNETIC` | Attract nearby items | `range` |
| `DOUBLE_JUMP` | Double Jump | `boost`, `cooldown` |
| `REGENERATION_PASSIVE` | Regeneration | `amount`, `interval` |
| `XP_BOOST` | Experience boost | `multiplier` |
| `LOOT_BONUS` | Loot bonus | `chance` |
| `WITHER_REDUCTION` | Wither protection | `percent` |
| `JUMP_BOOST` | Jump Boost | `level` |

### Examples

```yaml
# Magnetic Artifact
passive-abilities:
  - type: MAGNETIC
    range: 5           # Attraction radius in blocks

# Double Jump
passive-abilities:
  - type: DOUBLE_JUMP
    boost: 1.5          # Jump boost multiplier
    cooldown: 100       # Cooldown in ticks
```
