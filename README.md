# RAW Photography App

Визуальный PWA-прототип приложения для фотографов. Полноценный запуск без бэкенда — только дизайн + рабочий переключатель валюты ₽ / ₸.

## Запуск

```bash
npm install
npm run dev
```

Открыть → [http://localhost:3000](http://localhost:3000)

На десктопе рендерится как iPhone-фрейм. На мобильном — полноценный PWA.

## Установка как приложение (PWA)

**iPhone:** Safari → Поделиться → «На экран "Домой"»  
**Android:** Chrome → меню → «Добавить на главный экран»

## Страницы

| Экран | URL |
|-------|-----|
| Главная | `/dashboard` |
| Календарь | `/calendar` |
| Студии | `/studios` |
| Карточка студии | `/studios/[id]` |
| Подборки | `/collections` |
| Клиенты | `/clients` |
| Карточка клиента | `/clients/[id]` |
| Финансы | `/finance` |
| Схемы света | `/lighting` |
| AI Ассистент | `/ai` |
| Профиль | `/profile` |
| Тарифы | `/subscription` |

## Валюта

Переключатель **₽ / ₸** на главной и в профиле. Выбор сохраняется в localStorage.  
Курс: `1 ₽ = 5.5 ₸` — поменять в `src/store/currencyStore.ts`.

## Стек

- Next.js 15 · React 19 · TypeScript
- Tailwind CSS 3
- Zustand (стейт валюты)
- Recharts (графики)

## Деплой на Vercel

```bash
npx vercel
```
