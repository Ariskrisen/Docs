---
sidebar_position: 3
---

# Создание артефактов

## Быстрый пример

Минимальный артефакт с эффектом скорости:

```yaml
artifacts:
  my_first_artifact:
    material: SUGAR
    name: "§bТалисман Скорости"
    lore:
      - "§7Увеличивает скорость передвижения"
    enabled: true
    effects:
      potion-effects:
        - effect: SPEED
          level: 1
```

## Полная структура артефакта

```yaml
artifacts:
  artifact_id:           # Уникальный ID (только lowercase)
    material: DIAMOND    # Материал (или namespace:itemsadder_id для ItemsAdder)
    name: "§eМоё Название"  # Отображаемое имя (с цветовыми кодами)
    lore:                # Описание (показывается при наведении)
      - "§7Первая строка"
      - "§7Вторая строка"
    enabled: true        # Включен/выключен
    custom-model-data: 0  # Кастомная текстура (0 = стандартная)
    
    effects:             # Эффекты артефакта
      potion-effects:    # Пассивные эффекты зелий
        - ...
      attack-effects:    # Эффекты при атаке
        - ...
      defense-effects:   # Эффекты при получении урона
        - ...
      passive-abilities: # Специальные способности
        - ...
```

## Параметры артефакта

| Параметр | Тип | Описание |
|----------|-----|---------|
| `material` | String | Материал предмета или `namespace:id` для ItemsAdder |
| `name` | String | Название (поддерживает `§` цветовые коды) |
| `lore` | `List<String>` | Описание (показывается в tooltip) |
| `enabled` | Boolean | Включен ли артефакт |
| `custom-model-data` | Integer | ID текстуры (для JavaScript/textures MCP) |

## Примеры артефактов

### Артефакт с эффектом зелья

```yaml
  speed_charm:
    material: SUGAR
    name: "§bТалисман Скорости"
    lore:
      - "§7Увеличивает скорость"
      - ""
      - "§e§lПАССИВНО: §bСкорость I"
    enabled: true
    effects:
      potion-effects:
        - effect: SPEED
          level: 1
```

### Артефакт с эффектом при атаке

```yaml
  fire_sword:
    material: DIAMOND_SWORD
    name: "§cОгненный Меч"
    lore:
      - "§7Поджигает врагов при ударе"
      - ""
      - "§e§lПРИ АТАКЕ: §cПоджог"
    enabled: true
    effects:
      attack-effects:
        - type: IGNITE
          duration: 60
          chance: 1.0
```

### Артефакт с защитными эффектами

```yaml
  guardian_charm:
    material: SHIELD
    name: "§9Талисман Защитника"
    lore:
      - "§7Уменьшает входящий урон"
      - ""
      - "§e§lПАССИВНО: §9-20% урона"
    enabled: true
    effects:
      defense-effects:
        - type: ABSORB
          percent: 20
          chance: 1.0
```

### Артефакт с несколькими эффектами

```yaml
  super_charm:
    material: NETHER_STAR
    name: "§6Супер Талисман"
    lore:
      - "§7Комбинированный артефакт"
    enabled: true
    effects:
      potion-effects:
        - effect: SPEED
          level: 2
        - effect: JUMP_BOOST
          level: 1
      attack-effects:
        - type: LIFESTEAL
          percent: 10
          chance: 1.0
      defense-effects:
        - type: ABSORB
          percent: 10
          chance: 1.0
```

## Использование ItemsAdder текстур

Если у вас установлен ItemsAdder, вы можете использовать кастомные предметы:

```yaml
  my_custom_artifact:
    material: "itemsadder:my_custom_item"
    name: "§eУникальный Предмет"
    lore:
      - "§7Кастомная текстура из ItemsAdder"
    enabled: true
    effects:
      potion-effects:
        - effect: SPEED
          level: 1
```

## Использование CustomModelData

Для текстур через Resource Pack:

```yaml
  textured_artifact:
    material: GLOW_BERRIES
    custom-model-data: 1001
    name: "§eАртефакт с Текстурой"
    lore:
      - "§7Имеет кастомную текстуру"
    enabled: true
    effects:
      potion-effects:
        - effect: SPEED
          level: 1
```

:::tip
Для CustomModelData вам нужен Resource Pack с определёнными ID текстур. Подробнее в разделе [Текстуры](textures.md).
:::

## Следующие шаги

- [Эффекты зелий](effects.md#эффекты-зелий-potion-effects) — список всех эффектов зелий
- [Эффекты атаки](effects.md#эффекты-атаки-attack-effects) — эффекты при ударе
- [Эффекты защиты](effects.md#эффекты-защиты-defense-effects) — эффекты при получении урона
- [Пассивные способности](effects.md#пассивные-способности-passive-abilities) — специальные возможности
