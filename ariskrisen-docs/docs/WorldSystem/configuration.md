---
sidebar_position: 3
---

# Конфигурация ⚙️

Основной файл настроек находится по пути: `plugins/WorldSystem/config.yml`.

## 📋 Основные настройки

В конфиге можно настроить:
- Название и описание шаблонов миров.
- Стоимость создания мира (при наличии Vault).
- Границы миров (WorldBorder).
- Базу данных (MySQL или SQLite).

## 🗺 Шаблоны миров
В плагине предустановлено несколько шаблонов с разными биомами:
- `template_default`
- `template_meadows`
- `template_desert`
- `template_snow`

Вы можете изменять веса спавна биомов внутри каждого шаблона, чтобы настроить генерацию под себя.

---

### Пример настройки биома:
```yaml
templates:
  meadows:
    display_name: "<green>Луга"
    cost: 500
    biomes:
      - MEADOW: 10
      - FLOWER_FOREST: 5
```
