<table style="width: 100%;">
  <tr>
    <td style="text-align: center; border: none;"> 
        Министерство образования и науки РФ <br/>
        ГБПОУ РМЭ "Йошкар-Олинский Технологический колледж 
    </td>
  </tr>
  <tr>
    <td style="text-align: center; border: none; height: 45em;">
        <h2>
            Курс лекций по предмету <br/>
            "Проектирование и разработка информационных систем"
        </h2>
    </td>
  </tr>
  <tr>
    <td style="text-align: right; border: none; height: 20em;">
        <div style="float: right;" align="left">
            <b>Разработал</b>: <br/>
            Колесников Евгений Иванович
        </div>
    </td>
  </tr>
  <tr>
    <td style="text-align: center; border: none; height: 1em;">
        г.Йошкар-Ола, 2021
    </td>
  </tr>
</table>

<div style="page-break-after: always;"></div>

# https://github.com/kolei/PiRIS

# Содержание

<!-- 

TODO

https://dev.mysql.com/downloads/windows/installer/8.0.html

- ERD
- SQL: основы, триггеры, представления
- импорт данных
- сервер АПИ на PHP
- сетевые запросы C#, Kotlin (встроенными средствами)

- Паттерны для новичков: MVC vs MVP vs MVVM https://habr.com/ru/post/215605/

- что-то про интеграционное тестирование https://pozitivmag.ru/aksessuary/vidy-testirovaniya-i-podhody-k-ih-primeneniyu-integracionnoe/


https://docs.microsoft.com/ru-ru/visualstudio/test/isolating-code-under-test-with-microsoft-fakes?view=vs-2019

https://habr.com/ru/post/151185/

http://sergeyteplyakov.blogspot.com/2014/01/microsoft-fakes-state-verification.html

 -->

* [МДК. 05.01 Проектирование и дизайн информационных систем](#мдк-0501-проектирование-и-дизайн-информационных-систем)

* [МДК. 05.02 Разработка кода ИС](#мдк-0502-разработка-кода-информационных-систем)

* [МДК. 05.03 Тестирование информационных систем](#мдк-0503-тестирование-информационных-систем)

# МДК. 05.01 Проектирование и дизайн информационных систем

## Тема 5.1.1. Основы проектирования информационных систем

<!-- https://sites.google.com/site/anisimovkhv/learning/pris/lecture -->

### Лекции

<!-- TODO расковырять "практику и методику..." из доки -->

1. [Основные понятия и определения ИС.](articles/5_1_1_1_intro2.md)
    
1. [~~Жизненный цикл информационных систем.~~](articles/5_1_1_2_lifecycle.md)

1. [~~Организация и методы сбора информации.~~](articles/5_1_1_3_get_info.md)

1. [Анализ предметной области. Основные понятия системного и структурного анализа.](articles/5_1_1_4_analiz.md)

1. [~~Постановка задачи обработки информации. Основные виды, алгоритмы и процедуры обработки информации, модели и методы решения задач обработки информации.~~](articles/5_1_1_5_obr_inf.md)

1. [~~Основные модели построения информационных систем, их структура, особенности и области применения.~~](articles/5_1_1_6_models.md)

1. [~~Сервисно - ориентированные архитектуры. Анализ интересов клиента. Выбор вариантов решений~~](articles/5_1_1_7_soa.md)

1. [~~Методы и средства проектирования информационных систем.~~](articles/5_1_1_8_methods.md)

1. [~~Case-средства для моделирования деловых процессов (бизнес-процессов).~~](articles/5_1_1_9_case.md)

1. [~~Проектирование информационных систем на основе унифицированного языка моделирования UML~~](articles/5_1_1_10_uml.md)

1. [UML](./articles/uml.md)

1. [Диаграмма вариантов использования (прецедентов, use case)](articles/5_1_1_10_uml_use_case.md)

1. [Спецификация вариантов использования (прецедентов)](articles/5_1_1_10_uml_uc_spec.md)

1. [Диаграмма состояний](./articles/uml_state.md)

1. [Прототипы экранов и окон пользовательского интерфейса (wireframe)](./articles/wireframe.md)

1. ДИАГРАММЫ КЛАССОВ АНАЛИЗА (дальше используются обозначения из этой диаграммы)

1. [Диаграммы взаимодействия (последовательности и коммуникации)](./articles/uml_sequence.md)

1. [Диаграмма деятельности](./articles/uml_activity.md) недописана 

1. [Диаграмма классов](./articles/uml_class_alt.md)

1. [НЕ ДОПИСАНО! Модель проектирования (диаграммы классов, диаграммы деятельности)](articles/uml_mp_dc_dd.md)

1. [~~Особенности информационного, программного и технического обеспечения различных видов информационных систем. Экспертные системы. Системы реального времени~~](articles/5_1_1_11.md)

1. [~~Оценка экономической эффективности информационной системы. Стоимостная оценка проекта. Классификация типов оценок стоимости: оценка порядка величины, концептуальная оценка, предварительная оценка, окончательная оценка, контрольная оценка.~~](articles/5_1_1_12.md)

1. [~~Основные процессы управления проектом. Средства управления проектами~~](articles/5_1_1_13.md)

### Контрольные вопросы

* назовите основные элементы диаграммы прецедентов
* Что такое **данные**?
* Что такое **информационная система**?

## Тема 5.1.2. Проектирование баз данных

### Лекции

1. [Основы проектирования баз данных.](articles/5_1_1_1_erd2.md)

1. [Словарь данных](articles/5_1_1_1_data_dictionary.md)

1. [Создание ER-диаграммы в среде MySQL Workbench](articles/5_1_1_1_erd_workbench.md)

1. [Основы SQL](./articles/sql_for_beginner.md)

1. [Создание базы данных. Импорт данных.](./articles/sql_import.md)

1. [Импорт данных (вариант 22).](./articles/sql_import_22.md)

1. [Представления (View)](./articles/sql_view.md)

1. [Хранимые процедуры. Триггеры.](./articles/sql_trigger.md)

<!-- 
https://office-menu.ru/uroki-sql Уроки SQL

В "основы" добавить 
- count и функции работы со временем (between)  
-->

### Контрольные вопросы

* Что такое **домен**?
* Что входит в классическую ER-диаграмму?
* Какие виды **ключей** Вы знаете?
* Назовите этапы проектирования БД.

### ~~Лабораторные~~

1. ~~Практическая работа «Анализ предметной области различными методами: контент-анализ, вебометрический анализ, анализ ситуаций, моделирование и др.»~~
1. ~~Практическая работа «Изучение устройств автоматизированного сбора информации»~~
1. ~~Практическая работа «Оценка экономической эффективности информационной системы»~~
1. ~~Практическая работа «Разработка модели архитектуры информационной системы»~~
1. ~~Практическая работа «Обоснование выбора средств проектирования информационной системы»~~
1. ~~Практическая работа «Описание бизнес-процессов заданной предметной области»~~

<details>

~~<summary><h2>Тема 5.1.2. Система обеспечения качества информационных систем</h2></summary>~~

### ~~Лекции~~

1. [~~Основные понятия качества информационной системы. Национальный стандарт обеспечения качества автоматизированных информационных систем~~](articles/5_1_2_1.md)

1. ~~Международная система стандартизации и сертификации качества продукции. Стандарты группы ISO.~~

1. ~~Методы контроля качества в информационных системах. Особенности контроля в различных видах систем~~

1. ~~Автоматизация систем управления качеством разработки.~~

1. [~~Обеспечение безопасности функционирования информационных систем~~](articles/5_1_2_5.md)

1. ~~Стратегия развития бизнес-процессов. Критерии оценивания предметной области и методы определения стратегии развития бизнес-процессов. Модернизация в информационных системах~~

<!-- [не дописано про госты]: _ -->
<!-- [https://sites.google.com/site/anisimovkhv/learning/pris/lecture/tema1#p12]: _ -->

### ~~Лабораторные~~
1. ~~Практическая работа «Построение модели управления качеством процесса изучения модуля «Проектирование и разработка информационных систем»»~~
2. ~~Практическая работа «Реинжиниринг методом интеграции»~~
3. ~~Практическая работа «Разработка требований безопасности информационной системы»~~
4. ~~Практическая работа «Реинжиниринг бизнес-процессов методом горизонтального и/или вертикального сжатия»~~

</details>

<details>

~~<summary><h2>Тема 5.1.3. Разработка документации информационных систем</h2></summary>~~

### ~~Лекции~~

1. ~~Перечень и комплектность документов на информационные системы согласно ЕСПД и ЕСКД. Задачи документирования.~~

1. ~~Предпроектная стадия разработки. Техническое задание на разработку: основные разделы.~~

1. ~~Построение и оптимизация сетевого графика.~~

1. ~~Проектная документация. Техническая документация. Отчетная документация~~

1. [~~Пользовательская документация.~~](./articles/5_1_3_5.md) ~~Маркетинговая документация.~~ 

1. ~~Самодокументирующиеся программы.~~ 

1. ~~Назначение, виды и оформление сертификатов.~~

### ~~Лабораторные~~
1. ~~Практическая работа «Проектирование спецификации информационной системы индивидуальному заданию»~~
1. ~~Практическая работа «Разработка общего функционального описания программного средства по индивидуальному заданию»~~
1. ~~Практическая работа «Разработка руководства по инсталляции программного средства по индивидуальному заданию»~~
1. ~~Практическая работа «Разработка руководства пользователя программного средства по индивидуальному заданию»~~
1. ~~Лабораторная работа «Изучение средств автоматизированного документирования»~~

</details>

## Тема 5.1.4. C# и MySQL.

1. [Создание подключения к БД MySQL. Получение данных с сервера.](./articles/cs_mysql_connection3.md)

1. [Вывод данных согласно макету (ListView, Image). Вывод данных плиткой.](./articles/cs_layout2.md)

1. [Пагинация, сортировка, фильтрация, поиск](./articles/cs_pagination2.md)<!-- datepicker -->

1. [Подсветка элементов по условию. Дополнительные выборки. Массовая смена цены продукции.](./articles/cs_coloring2.md)

1. [Создание, изменение продукции](./articles/cs_edit_product2.md)

1. [Вывод списка материалов продукта. CRUD материалов продукта](./articles/cs_product_material.md)

## Тема 5.1.5. Разработка своего API.

1. [API. PHP-сервер. GET-запрос.](./articles/api_php.md)

<!-- переделать на asp.net -->

## Тема 5.1.6. C#, разбор заданий предыдущих лет.

<!-- 1. [Сессия 1. Создание БД. Импорт данных. Окно авторизации](./articles/wsr_1.md) -->
1. [HTTP запросы в C#. Получение списка материалов выбранного продукта](./articles/cs_http.md)

2. [C# Параллельное программирование и асинхронность](./articles/cs_async_await.md)

<!-- 

Создание базы данных
+ Импорт данных
Авторизация, главное окно
+ Форма ввода данных, список с фильтрацией, поиском и сортировкой
+ HTTP-запросы, разбор JSON, XML
+ Разработка АПИ (php-сервер)
+ Мобильное приложение
+ ER-диаграмма
+ Проектирование (Use-case, UML)
Формирование отчетов (PDF)
Формирование графиков
+ Тестирование
+ Библиотека классов

-->

## Документация

1. [Руководство пользователя](./articles/user_manual.md)

# МДК. 05.02 Разработка кода информационных систем

## Тема 5.1.4. Разработка мобильных приложений. Android Studio. Kotlin.

1. [Основы языка Kotlin](./articles/kotlin.md)

1. [Первый проект в Android Studio](./articles/android_studio.md)

1. [Стили и темы. Ресурсы. Фигуры. Обработчики событий.](./articles/themes.md)

1. [Смена ориентации, жизненный цикл activity, сохранение данных](./articles/layout_orientation.md)

1. [Проект погода (начало): геолокация, http(s)-запросы, разбор json, ImageView.](./articles/weather.md)

1. [Intent (намерение)](./articles/intents.md)

1. [Проект погода (продолжение): SplashScreen (заставка). Выбор города. Выбор и отображение массива значений (почасовая, ежедневная). Разбор XML.](./articles/weather2.md)

1. [Фрагменты](./articles/fragments.md)

1. [Android Navigation. Знакомство с BottomNavigationView.](./articles/android_bottom_navigation.md)

1. [Анимация](./articles/animation.md)

1. TODO по итогам курсов сюда сделать каршеринг [Проект "база". Авторизация на сервере (Basic auth, token).](./articles/android_auth.md)

1. [Работа с картами](./articles/map_yandex.md)

1. [Wear OS](./articles/wear_os.md)

1. [Android TV](./articles/android_tv.md)

1. [Разбор заданий прошлых лет](./articles/f6_demo_1.md)

<!-- 

1. [Принципы навигации внутри и между андроид-приложениями](./articles/navigation.md)

1. [ViewPager, Fragments, Tabs](./articles/pager.md)

TODO

темы DayNight
ViewPager
swype вниз (обновление списка)
tablayout

поиск (фильтрация) - строка поиска и выпадающий список
операции с датой

- swype вниз (обновление списка) (бастраков)

-->

# МДК. 05.03 Тестирование информационных систем

## Тема 5.3.1 Отладка и тестирование информационных систем

### Лекции

1. [Тестирование и тестировщики](articles/5_3_1_1_intro.md)<!-- тут_ещё_вспомнаем_про_библиотеку_классов -->

1. [Жизненный цикл тестирования](articles/5_3_1_2_lifecycle.md)<!-- большой_объем -->

1. [Виды и методы тестирования](articles/5_3_1_3_vidy.md) (в том числе автоматизированные)

1. [Тестовые сценарии, тестовые варианты. Оформление результатов тестирования.](articles/5_3_1_4_testcase.md)

1. Инструментарии анализа качества программных продуктов в среде разработки.

1. [Обработка исключительных ситуаций. Методы и способы идентификации сбоев и ошибок.](articles/5_3_1_6_exceptions.md)


1. Выявление ошибок системных компонентов (по ФГОС, но не представляю что давать)

1. [Реинжиниринг бизнес-процессов в информационных системах.](articles/5_3_1_8_reengeniring.md)

1. [Создание библиотеки классов](articles/5_3_1_9_classlib.md)

1. [Создание UNIT-тестов](./articles/5_3_1_10_unit_test.md)

1. [Fake data. Тестирование методов получающих внешние данные из удалённых источников](./articles/fake_unit_test.md)

### Лабораторнo-практические работы

1. [Создание проекта по индивидуальному заданию. Разработка Unit-тестов для проекта](./articles/5_3_1_10_unit_test_lab.md)
1. Лабораторная работа «Разработка тестового сценария проекта»
2. Лабораторная работа «Разработка тестовых пакетов»
3. Лабораторная работа «Использование инструментария анализа качества»
4. Лабораторная работа «Анализ и обеспечение обработки исключительных ситуаций»
5. Лабораторная работа «Функциональное тестирование»
6. Лабораторная работа «Тестирование безопасности»
7. Лабораторная работа «Нагрузочное тестирование, стрессовое тестирование»
8. Лабораторная работа «Тестирование интеграции»
9. Лабораторная работа «Конфигурационное тестирование»
10. Лабораторная работа «Тестирование установки»


# [Учебная практика](articles/praktika_I.md)

# [Курсовой проект](articles/kp2.md)

<!-- 
-- создание базы и пользователя для MSSQL
DECLARE @userName AS VARCHAR(50) = 'test'
DECLARE @password AS VARCHAR(50) = 'qzesc'
-- создаю базу
DECLARE @createDB AS VARCHAR(50) = 'CREATE DATABASE {userName}'
SET @createDB = REPLACE(@createDB, '{userName}', @userName)
EXECUTE (@createDB)
-- создаю логин
DECLARE @createLogin AS VARCHAR(150) = 'CREATE LOGIN {userName} WITH PASSWORD=''{password}'', CHECK_POLICY = OFF'
SET @createLogin = REPLACE(@createLogin, '{userName}', @userName)
SET @createLogin = REPLACE(@createLogin, '{password}', @password)
EXECUTE (@createLogin)
-- создаю пользователя
DECLARE @createUser AS VARCHAR(MAX) = '
USE {userName}
CREATE USER {userName} FOR LOGIN {userName};
EXEC sp_addrolemember ''db_owner'', ''{userName}'';
Grant Execute on Schema :: dbo TO [{userName}];
'
SET @createUser = REPLACE(@createUser, '{userName}', @userName)
EXECUTE (@createUser)
-->