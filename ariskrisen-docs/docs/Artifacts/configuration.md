---
sidebar_position: 5
---

# Конфигурация

## Файл config.yml

```yaml
# Общие настройки плагина
settings:
  # Включить/выключить плагин полностью
  enabled: true
  
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

# Сообщения плагина (поддерживают цветовые коды &)
messages:
  # Сообщение когда артефакт активирован
  artifact-activated: "&aАртефакт &e%artifact% &aактивирован!"
  
  # Сообщение когда артефакт деактивирован
  artifact-deactivated: "&cАртефакт &e%artifact% &cдеактивирован."
  
  # Сообщение когда мешок заполнен
  bag-full: "&cМешок заполнен! Максимум &e%slots% &cартефактов."
  
  # Сообщение когда пытаешься положить не-артефакт в мешок
  bag-not-artifact: "&cВ мешок можно класть только артефакты!"
  
  # Сообщение когда из мешка удалены не-артефакты
  bag-cleaned: "&c⚠ Из аномального мешка удалены предметы, не являющиеся артефактами!"
  
  # Сообщение при клике на мешок
  bag-info: "&6Аномальный Мешок: &e%slots% слотов для артефактов!"

# Настройки аномальных мешков
bags:
  # Включить аномальные мешки
  enabled: true
  
  # Включить валидацию (удаление не-артефактов)
  validate-contents: true
  
  # Интервал валидации в тиках
  validation-interval: 60
  
  # Лимиты слотов по тирам
  tier-limits:
    tier-1: 2
    tier-2: 4
    tier-3: 6
    tier-4: 8
```

## Описание настроек

### settings

| Параметр | Тип | По умолчанию | Описание |
|----------|-----|--------------|----------|
| `enabled` | boolean | `true` | Включить/выключить плагин |
| `update-interval` | int | `5` | Интервал обновления эффектов |
| `enabled-worlds` | list | `<all>` | Список миров |
| `enabled-slots` | list | хотбар+offhand | Активные слоты |
| `enable-armor-slots` | boolean | `true` | Работа в броне |
| `show-particles` | boolean | `true` | Показывать частицы |
| `show-messages` | boolean | `false` | Показывать сообщения |
| `debug` | boolean | `false` | Режим отладки |

### update-interval

Интервал обновления эффектов артефактов в тиках.

- `5` = обновление каждые 0.25 секунды (рекомендуется)
- `20` = обновление каждую секунду
- `100` = обновление каждые 5 секунд

:::tip
Меньшее значение = более отзывчивые эффекты, но больше нагрузка на сервер.
:::

### messages

Все сообщения поддерживают:
- Цветовые коды `&a`, `&c` и т.д.
- Placeholder `%artifact%` — название артефакта
- Placeholder `%slots%` — количество слотов

### bags

| Параметр | Тип | По умолчанию | Описание |
|----------|-----|--------------|----------|
| `enabled` | boolean | `true` | Включить мешки |
| `validate-contents` | boolean | `true` | Валидация содержимого |
| `validation-interval` | int | `60` | Интервал валидации (тики) |
| `tier-limits` | object | 2/4/6/8 | Лимиты по тирам |

### enabled-worlds

Список миров где работают артефакты.

```yaml
enabled-worlds:
  - "world"           # Конкретный мир
  - "world_nether"    # Нижний мир
  - "world_the_end"   # Энд
  - "<all>"           # Все миры
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

## Полный пример config.yml

```yaml
# ============================================
#         КОНФИГУРАЦИЯ АРТЕФАКТОВ
# ============================================

settings:
  enabled: true
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

messages:
  artifact-activated: "&aАртефакт &e%artifact% &aактивирован!"
  artifact-deactivated: "&cАртефакт &e%artifact% &cдеактивирован."
  bag-full: "&cМешок заполнен! Максимум &e%slots% &cартефактов."
  bag-not-artifact: "&cВ мешок можно класть только артефакты!"
  bag-cleaned: "&c⚠ Из мешка удалены не-артефакты!"
  bag-info: "&6Аномальный Мешок: &e%slots% слотов!"

bags:
  enabled: true
  validate-contents: true
  validation-interval: 60
  tier-limits:
    tier-1: 2
    tier-2: 4
    tier-3: 6
    tier-4: 8

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
