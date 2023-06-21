<template>
  <div class="main-content">
    <div class="main-content__head">
      <div class="main-content__head-row">
        <div class="main-content__title">Настройки
        </div>
      </div>
    </div>
    <div class="main-content__body">
      <div class="table-view">
        <table class="table">
          <thead class="table__head">
            <tr class="table__head-row">
              <th class="table__head-cell">Параметр
              </th>
              <th class="table__head-cell">Значение
              </th>
              <th class="table__head-cell table__head-cell_actions"><a
                  class="button button_no-text button_size_xs button_transparent" href="#">
                  <svg class="icon icon_type_cog">
                    <use xlink:href="i/sprite/sprite.svg#cog"></use>
                  </svg></a><a class="button button_no-text button_size_xs button_transparent" href="#">
                  <svg class="icon icon_type_filter">
                    <use xlink:href="i/sprite/sprite.svg#filter"></use>
                  </svg></a>
              </th>
            </tr>
          </thead>
          <tbody class="table__body">
            <tr class="table__body-row">
              <td class="table__body-cell">Название компании
              </td>
              <td class="table__body-cell">
                <div class="textbox textbox_size_s">
                  <label class="textbox__wrapper">
                    <input class="textbox__input" type="text" placeholder="Плейсхолдер"
                      value="ООО &quot;Иванов и партнеры&quot;">
                  </label>
                </div>
              </td>
              <td class="table__body-cell table__body-cell_actions"><a
                  class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                  <svg class="icon icon_type_refresh">
                    <use xlink:href="i/sprite/sprite.svg#refresh"></use>
                  </svg></a>
              </td>
            </tr>
            <tr class="table__body-row">
              <td class="table__body-cell">Валюта по-умолчанию
              </td>
              <td class="table__body-cell">ООО "Иванов и партнеры"
              </td>
              <td class="table__body-cell table__body-cell_actions"><a
                  class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                  <svg class="icon icon_type_refresh">
                    <use xlink:href="i/sprite/sprite.svg#refresh"></use>
                  </svg></a>
              </td>
            </tr>
            <tr class="table__body-row">
              <td class="table__body-cell">Валюта по-умолчанию
              </td>
              <td class="table__body-cell">
                <div class="dropdown-select dropdown-select_size_s">
                  <div class="dropdown-select__wrapper">
                    <div class="dropdown-select__input-wrapper">
                      <input class="dropdown-select__input" type="text" placeholder="Плейсхолдер" value="₽">
                      <div class="dropdown-select__arrow">
                        <svg class="icon icon_type_chevron-down">
                          <use xlink:href="i/sprite/sprite.svg#chevron-down"></use>
                        </svg>
                      </div>
                    </div>
                    <div class="dropdown-select__list-wrapper">
                      <div class="dropdown-select__list">
                        <div class="dropdown-select__list-item">Пункт 1
                        </div>
                        <div class="dropdown-select__list-item">Пункт 2
                        </div>
                        <div class="dropdown-select__list-item">Очень-очень-очень длинный пункт с огромным и большим
                          названием
                        </div>
                        <div class="dropdown-select__list-item dropdown-select__list-item_active">Пункт 3
                        </div>
                        <div class="dropdown-select__list-item">Пункт 4
                        </div>
                        <div class="dropdown-select__list-item">Пункт 5
                        </div>
                        <div class="dropdown-select__list-item">Пункт 6
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="table__body-cell table__body-cell_actions"><a
                  class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                  <svg class="icon icon_type_refresh">
                    <use xlink:href="i/sprite/sprite.svg#refresh"></use>
                  </svg></a>
              </td>
            </tr>
            <tr class="table__body-row">
              <td class="table__body-cell">Разрешить пользователям самостоятельную регистрацию
              </td>
              <td class="table__body-cell">
                <div class="radio-group">
                  <div class="radio-group__wrapper">
                    <div class="radio-group__controls">
                      <div class="radio-group__control">
                        <label class="radio">
                          <input type="radio" name="setting-1" value="1" checked="checked">
                          <div class="radio__input"></div>
                          <div class="radio__label">Да
                          </div>
                        </label>
                      </div>
                      <div class="radio-group__control">
                        <label class="radio">
                          <input type="radio" name="setting-1" value="2">
                          <div class="radio__input"></div>
                          <div class="radio__label">Нет
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="table__body-cell table__body-cell_actions"><a
                  class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                  <svg class="icon icon_type_refresh">
                    <use xlink:href="i/sprite/sprite.svg#refresh"></use>
                  </svg></a>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="pagination">
          <div class="pagination__column">
            <div class="pagination__text pagination__text_range">0 — 10
            </div>
            <div class="pagination__text">из 1200 записей
            </div>
          </div>
          <div class="pagination__column">
            <div class="pagination__text">страница
            </div>
            <div class="pagination__controls"><a class="button button_size_xs button_no-text" href="#">
                <svg class="icon icon_type_chevron-left">
                  <use xlink:href="i/sprite/sprite.svg#chevron-left"></use>
                </svg></a>
              <div class="textbox textbox_size_s textbox_text-center">
                <label class="textbox__wrapper">
                  <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="1">
                </label>
              </div><a class="button button_size_xs button_no-text" href="#">
                <svg class="icon icon_type_chevron-right">
                  <use xlink:href="i/sprite/sprite.svg#chevron-right"></use>
                </svg></a>
            </div>
            <div class="pagination__text">из 120
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>