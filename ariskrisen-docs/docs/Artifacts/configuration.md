---
sidebar_position: 5
---

# Конфигурация

## Файл config.yml

```yaml
settings:
  # Интервал обновления эффектов (тики)
  update-interval: 5
  
  # Миры где работают артефакты (<all> = все)
  enabled-worlds:
    - "<all>"
  
  # Слоты где работают артефакты
  enabled-slots:
    - 0    # Слот хотбара 1
    - 1    # Слот хотбара 2
    - 2    # Слот хотбара 3
    - 3    # Слот хотбара 4
    - 4    # Слот хотбара 5
    - 5    # Слот хотбара 6
    - 6    # Слот хотбара 7
    - 7    # Слот хотбара 8
    - 8    # Слот хотбара 9
    - 40   # Оффхенд
  
  # Включить слоты брони
  enable-armor-slots: true
  
  # Показывать частицы
  show-particles: true
  
  # Показывать сообщения
  show-messages: false
  
  # Режим отладки
  debug: false
```

## Описание настроек

### update-interval

Интервал обновления эффектов артефактов в тиках.

- `5` = обновление каждые 0.25 секунды (рекомендуется)
- `20` = обновление каждую секунду
- `100` = обновление каждые 5 секунд

:::tip
Меньшее значение = более отзывчивые эффекты, но больше нагрузка на сервер.
:::

### enabled-worlds

Список миров где работают артефакты.

```yaml
enabled-worlds:
  - "world"           # Конкретный мир
  - "world_nether"     # Нижний мир
  - "world_the_end"    # Энд
  - "<all>"            # Все миры
```

### enabled-slots

Слоты в которых работают артефакты.

| Слот | Описание |
|------|---------|
| 0-8 | Слоты хотбара (1-9 в игре) |
| 40 | Оффхенд (левая рука) |
| 36 | Ботинки |
| 37 | Поножи |
| 38 | Нагрудник |
| 39 | Шлем |

### enable-armor-slots

```yaml
enable-armor-slots: true   # Артефакты работают в броне
enable-armor-slots: false # Только хотбар и оффхенд
```

## Полный пример config.yml

```yaml
# ============================================
#         КОНФИГУРАЦИЯ АРТЕФАКТОВ
# ============================================

settings:
  update-interval: 5
  enabled-worlds:
    - "<all>"
  enabled-slots:
    - 0
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 40
  enable-armor-slots: true
  show-particles: true
  show-messages: false
  debug: false

artifacts:
  speed_charm:
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
