---
sidebar_position: 2
---

# Установка и настройка

## Требования

| Требование | Версия | Обязательно |
|------------|--------|-------------|
| Paper/Spigot | 1.21+ | ✅ Да |
| ItemsAdder | 3.x | ❌ Нет (для кастомных текстур) |

## Установка

1. **Скачайте** последнюю версию `ArtifactPlugin-X.X.jar`
2. **Положите** в папку `plugins/` вашего сервера
3. **Перезапустите** сервер

После первого запуска создастся файл:
```
plugins/
└── ArtifactPlugin/
    └── config.yml
```

## Структура проекта

```
plugins/ArtifactPlugin/
└── config.yml          # Все артефакты и настройки
```

## Права доступа

```yaml
permissions:
  artifact.give:
    description: Выдача артефактов
    default: op
  artifact.list:
    description: Просмотр списка артефактов
    default: true
  artifact.reload:
    description: Перезагрузка конфига
    default: op
```

## Следующие шаги

- [Создание артефактов](creating-artifacts.md) — создайте свой первый артефакт
- [Эффекты](effects.md) — список всех доступных эффектов
- [Настройки](configuration.md) — расширенная конфигурация
