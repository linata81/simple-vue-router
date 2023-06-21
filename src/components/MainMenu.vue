<script setup>
import ProfileView from '../views/ProfileView.vue';
import MainMenuItem from './MainMenuItem.vue';

import {useRouter} from 'vue-router'
const myRouter = useRouter();

function handleClick(){
  myRouter.push({name: 'Users', params: {id: 5}})
}
</script>

<template>
  <div class="main-menu">
    <div class="main-menu__profile-item"><a class="main-menu__link" href="profile.html">
        <div class="user-avatar user-avatar_size_s">
          <div class="user-avatar__wrapper"><img class="user-avatar__image" src="i/avatar-example.jpg" alt="avatar">
          </div>
        </div>
        <div class="main-menu__link-title">Иван Иванов
        </div>
      </a><a class="main-menu__link" href="#logout">></a>
    </div>
    
    <!-- <MainMenuItem @click="handleClick()" /> -->
    <!-- <MainMenuItem @click="$router.push('/users/2')" /> -->
    <MainMenuItem @click="$router.push({name: 'Users', params: {id: 3}})" />
    
    <!-- <div class="main-menu__item"><a class="main-menu__link" href="users.html">
        <svg class="icon icon_type_user-group">
          <use xlink:href="i/sprite/sprite.svg#user-group"></use>
        </svg>
        <div class="main-menu__link-title">Пользователи
        </div>
        <div class="main-menu__control">></div>
      </a>
    </div> -->
    <div class="main-menu__item  main-menu__item_active"><a class="main-menu__link" href="company-groups.html">
        <svg class="icon icon_type_office-building">
          <use xlink:href="i/sprite/sprite.svg#office-building"></use>
        </svg>
        <div class="main-menu__link-title">Группы компаний
        </div>
        <div class="main-menu__control">></div>
      </a>
    </div>
    <div class="main-menu__item"><a class="main-menu__link" href="contractors.html">
        <svg class="icon icon_type_share">
          <use xlink:href="i/sprite/sprite.svg#share"></use>
        </svg>
        <div class="main-menu__link-title">Контрагенты
        </div>
        <div class="main-menu__control">></div>
      </a>
    </div>
    <div class="main-menu__item"><a class="main-menu__link" href="contracts.html">
        <svg class="icon icon_type_document-text">
          <use xlink:href="i/sprite/sprite.svg#document-text"></use>
        </svg>
        <div class="main-menu__link-title">Контракты
        </div>
        <div class="main-menu__control">></div>
      </a>
    </div>
    <div class="main-menu__item"><a class="main-menu__link" href="deals.html">
        <svg class="icon icon_type_receipt-tax">
          <use xlink:href="i/sprite/sprite.svg#receipt-tax"></use>
        </svg>
        <div class="main-menu__link-title">Сделки
        </div>
        <div class="main-menu__control">></div>
      </a>
    </div>
    <div class="main-menu__item  main-menu__item_has-sub-items main-menu__item_expanded"><a class="main-menu__link"
        href="settings.html">
        <svg class="icon icon_type_cog">
          <use xlink:href="i/sprite/sprite.svg#cog"></use>
        </svg>
        <div class="main-menu__link-title">Настройки
        </div>
        <div class="main-menu__control">
          <!-- <svg class="icon icon_type_plus">
            <use xlink:href="i/sprite/sprite.svg#plus"></use>
          </svg>
          <svg class="icon icon_type_minus">
            <use xlink:href="i/sprite/sprite.svg#minus"></use>
          </svg> -->
          -
        </div>
      </a>
      <div class="main-menu__sub-items">
        <div class="main-menu__item"><a class="main-menu__link" href="settings-roles.html">
            <svg class="icon icon_type_shield-exclamation">
              <use xlink:href="i/sprite/sprite.svg#shield-exclamation"></use>
            </svg>
            <div class="main-menu__link-title">Роли и права
            </div>
            <div class="main-menu__control">>
              <!-- <svg class="icon icon_type_chevron-right">
                <use xlink:href="i/sprite/sprite.svg#chevron-right"></use>
              </svg> -->
            </div>
          </a>
        </div>
        <div class="main-menu__item  main-menu__item_active"><a class="main-menu__link"
            href="settings-deal-statuses.html">
            <svg class="icon icon_type_view-boards">
              <use xlink:href="i/sprite/sprite.svg#view-boards"></use>
            </svg>
            <div class="main-menu__link-title">Статусы сделок
            </div>
            <div class="main-menu__control">>
              <!-- <svg class="icon icon_type_chevron-right">
                <use xlink:href="i/sprite/sprite.svg#chevron-right"></use>
              </svg> -->
            </div>
          </a>
        </div>
        <div class="main-menu__item"><a class="main-menu__link" href="settings-custom-fields.html">
            <svg class="icon icon_type_table">
              <use xlink:href="i/sprite/sprite.svg#table"></use>
            </svg>
            <div class="main-menu__link-title">Настройка доп. полей
            </div>
            <div class="main-menu__control">>
              <!-- <svg class="icon icon_type_chevron-right">
                <use xlink:href="i/sprite/sprite.svg#chevron-right"></use>
              </svg> -->
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>