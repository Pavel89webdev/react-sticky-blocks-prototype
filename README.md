# react-sticky-blocks-prototype
Prototype to solve a problem: how easy set a lot of sticky bock side by side in React (v16+)

# Как пользоваться:

1. Задать блоку к которому должны прилипать блоки с position: sticky, атрибут id={STICKY_ROOT_ID}, импортировать значение константы из файла /src/MainContent.js

2. Любому блоку внутри MainContent можно задать position: sticky и они при прокрутке прилипнут к блоку из первого пункта друг за другом.

## Дополнительные требования:

- блок из первого пункта и блоки из второго должны иметь один контекст наложения (CSS). Например иметь однинакового родителя со свойством position:relative. 



