# RAW Photography App — PWA

Полноценное PWA-приложение для фотографов. Визуальный прототип с рабочей сменой валюты (₽ / ₸).

## Быстрый старт

### 1. Установите зависимости
```bash
npm install
```

### 2. Запустите dev-сервер
```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

### 3. Билд для продакшена
```bash
npm run build
npm run start
```

---

## Установка как PWA на iPhone

1. Откройте сайт в **Safari**
2. Нажмите кнопку «Поделиться» (квадрат со стрелкой)
3. Выберите **«На экран "Домой"»**
4. Нажмите **Добавить**

Приложение появится на главном экране как нативное.

---

## Установка как PWA на Android

1. Откройте сайт в **Chrome**
2. Нажмите меню (три точки)
3. Выберите **«Добавить на главный экран»**

---

## Структура проекта

```
src/
├── app/
│   ├── dashboard/      # Главная
│   ├── calendar/       # Календарь
│   ├── studios/        # Каталог студий
│   │   └── [id]/       # Карточка студии
│   ├── collections/    # Подборки
│   ├── clients/        # CRM клиенты
│   │   └── [id]/       # Карточка клиента
│   ├── finance/        # Финансы
│   ├── lighting/       # Схемы света
│   ├── ai/             # AI Ассистент
│   ├── profile/        # Профиль
│   └── subscription/   # Тарифы
├── components/
│   ├── layout/
│   │   └── BottomNav   # Нижняя навигация
│   └── ui/
│       ├── RawLogo         # Логотип
│       ├── CurrencySwitcher # Переключатель валюты
│       ├── StatusBar       # Статус-бар iOS
│       └── BonusPill       # Бонусная капсула
└── store/
    └── currencyStore   # Zustand: ₽ / ₸ (сохраняется в localStorage)
```

---

## Смена валюты

Переключатель **₽ / ₸** отображается:
- На главной странице (Dashboard) — справа в шапке
- На странице профиля — в правом углу
- Выбор сохраняется между сессиями (localStorage)

Курс конвертации: **1 ₽ = 5.5 ₸** (обновите в `src/store/currencyStore.ts`)

---

## Иконки PWA

Замените заглушки на реальные иконки:
- `public/icons/icon-192.png` — 192×192px
- `public/icons/icon-512.png` — 512×512px

Быстрая генерация через [pwa-asset-generator](https://github.com/elegantapp/pwa-asset-generator):
```bash
npx pwa-asset-generator public/logo.png public/icons
```

---

## Деплой на Vercel

```bash
npx vercel
```

Или через GitHub: подключите репозиторий на [vercel.com](https://vercel.com)

---

## Технологии

- **Next.js 15** — App Router
- **TypeScript** — типизация
- **Tailwind CSS 4** — стили
- **Zustand** — стейт валюты
- **Recharts** — графики в Финансах
- **next-pwa** — Service Worker, офлайн-режим
