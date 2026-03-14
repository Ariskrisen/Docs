---
sidebar_position: 2
---

# Установка и настройка

## Требования

| Требование | Версия | Обязательно |
|------------|--------|-------------|
| Paper/Spigot | 1.21+ | ✅ Да |
| PlaceholderAPI | Любая | ✅ Да |
| Vault | Любая | ❌ Нет (для экономики) |

## Установка

1. **Скачайте** последнюю версию `EasyScript-X.X.jar`
2. **Положите** в папку `plugins/` вашего сервера
3. **Установите** PlaceholderAPI (скачайте с Spigot)
4. **Перезапустите** сервер

После первого запуска создастся папка:
```
plugins/
└── EasyScript/
    ├── config.yml
    └── scripts/
        └── border_logic.js  (пример)
```

## Структура проекта

```
plugins/EasyScript/
├── config.yml          # Конфигурация плагина
└── scripts/            # Ваши скрипты .js
    ├── main.js
    ├── my_script.js
    └── ...
```

## Права доступа

```yaml
# В permissions.yml или плагине на права
permissions:
  easyscript.admin:
    description: Доступ к командам управления
    default: op
```

## Команды плагина

| Команда | Описание |
|---------|----------|
| `/easyscript reload` | Перезагрузить все скрипты |
| `/easyscript list` | Список файлов скриптов |
| `/easyscript status` | Статус загрузки |
| `/es` | Алиас для easyscript |

## Следующие шаги

- [Быстрый старт](quickstart.md) — создайте первый скрипт
- [API событий](api/events.md) — обработка событий
- [API команд](api/commands.md) — создание команд
