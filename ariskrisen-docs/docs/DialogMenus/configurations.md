---
sidebar_position: 2
---

# Конфигурация меню (YAML)

Настройка меню в DialogMenus интуитивно понятна. Каждый файл `.yml` в папке `plugins/DialogMenus/menus/` представляет собой отдельное меню.

## 📄 Общая структура

```yaml
title: "Заголовок" # Поддерживает MiniMessage и PAPI
type: notice # notice, confirmation, multi-action
can-close-with-escape: true # Можно ли закрыть на ESC

body:
  # Элементы контента
  element1:
    type: text
    content: "Текст сообщения"
  element2:
    type: item
    material: DIAMOND
```

---

## 🏗 Типы меню (`type`)

### 1. `notice`
Простое информационное окно. Использует один блок `button` для закрытия.
```yaml
type: notice
button:
  text: "ОК"
```

### 2. `confirmation`
Диалог "Да/Нет". Использует блоки `yes-button` и `no-button`.
```yaml
type: confirmation
yes-button:
  text: "<green>Принять"
no-button:
  text: "<red>Отклонить"
```

### 3. `multi-action`
Универсальное меню с любым количеством кнопок. Использует раздел `buttons`.
```yaml
type: multi-action
buttons:
  btn_1:
    text: "Кнопка 1"
  btn_2:
    text: "Кнопка 2"
```

---

## 💬 Поля ввода (`inputs`)

Вы можете добавить интерактивные элементы для взаимодействия с игроком.

### `text`
Обычное текстовое поле.
```yaml
inputs:
  my_text:
    type: text
    label: "Введите ваше имя"
```

### `number-range`
Ползунок (слайдер) для выбора числа.
```yaml
inputs:
  my_slider:
    type: number-range
    label: "Выберите количество"
    min: 0
    max: 100
    initial: 50
    step: 1.0 # По умолчанию 1.0 (целые числа)
```

### `choice`
Кнопка-переключатель для выбора одного варианта из списка.

```yaml
inputs:
  my_choice:
    type: choice
    label: "Ваш пол"
    options:
      male: "<blue>Мужчина"
      female: "<light_purple>Женщина"
      other: "Другое"
```
*В действиях (actions) используйте `<input:my_choice>`, чтобы получить ключ выбранного варианта (например, `male`).*
```

---

## 🎨 Мини-сообщения (MiniMessage)
Все текстовые поля поддерживают формат [MiniMessage](https://docs.adventure.kyori.net/minimessage/format.html).
Примеры:
- `<gold>Золотой текст</gold>`
- `<gradient:red:blue>Градиент</gradient>`
- `<bold>Жирный текст</bold>`
