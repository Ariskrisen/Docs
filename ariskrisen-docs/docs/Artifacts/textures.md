---
sidebar_position: 6
---

# Текстуры

Плагин поддерживает несколько способов задания текстур для артефактов.

## 1. CustomModelData (Java Edition)

Используйте встроенный параметр `custom-model-data` в конфиге:

```yaml
artifacts:
  my_custom_artifact:
    material: GLOW_BERRIES
    custom-model-data: 1001
    name: "§eАртефакт"
    lore:
      - "§7Имеет кастомную текстуру"
    enabled: true
    effects:
      potion-effects:
        - effect: SPEED
          level: 1
```

:::info
CustomModelData работает с любым материалом. Вам нужен Resource Pack который назначает текстуры на определённые ID.
:::

### Пример item_model.json для Resource Pack

```json
{
  "parent": "minecraft:item/generated",
  "textures": {
    "layer0": "minecraft:item/glow_berries"
  },
  "overrides": [
    {"predicate": {"custom_model_data": 1001}, "model": "artifact/custom_item_1001"}
  ]
}
```

## 2. ItemsAdder

Если у вас установлен [ItemsAdder](https://github.com/AI1229/ItemsAdder), используйте кастомные предметы:

### Настройка ItemsAdder

1. Создайте файл `plugins/ItemsAdder/data/items.yml`:

```yaml
items:
  my_artifact:
    display_name: "Талисман Скорости"
    permission: artifact.use
    lore:
      - "Увеличивает скорость"
    resource:
      material: GLOW_BERRIES
      generate: true
      textures:
        - item/my_artifact.png
```

2. В конфиге Artifacts используйте:

```yaml
artifacts:
  speed_charm:
    material: "itemsadder:my_artifact"
    name: "§bТалисман Скорости"
    lore:
      - "§7Увеличивает скорость передвижения"
    enabled: true
    effects:
      potion-effects:
        - effect: SPEED
          level: 1
```

### Формат namespace

Формат: `namespace:id`

| Namespace | Плагин |
|----------|--------|
| `itemsadder:` | ItemsAdder |
| `oraxen:` | Oraxen |
| `mmoitems:` | MMOItems |

## 3. Комбинирование

Можно использовать ItemsAdder материал + CustomModelData из Resource Pack:

```yaml
artifacts:
  super_artifact:
    material: "itemsadder:premium_item"
    custom-model-data: 5
    name: "§6§lСУПЕР АРТЕФАКТ"
    lore:
      - "§7Редчайший артефакт"
    enabled: true
    effects:
      potion-effects:
        - effect: SPEED
          level: 3
```

## Сравнение методов

| Метод | Плюсы | Минусы |
|-------|-------|--------|
| **CustomModelData** | Работает без доп. плагинов | Нужен Resource Pack |
| **ItemsAdder** | Простая настройка, GUI | Зависимость от плагина |
| **Комбинирование** | Максимальная гибкость | Сложнее настройка |

## Рекомендации

1. **Для простых серверов**: Используйте CustomModelData с базовыми материалами
2. **Для премиум серверов**: ItemsAdder + кастомные модели
3. **Для хардкорных**: Полный Resource Pack с override моделями
