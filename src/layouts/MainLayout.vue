<script setup lang="ts">
const menuItems = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/favorites', label: 'Favoritos', icon: 'groups' },
  { to: '/categories', label: 'Categorias', icon: 'category' },
  { to: '/about', label: 'Sobre', icon: 'emoji_objects' },
];
</script>
<template>
  <q-layout class="bg-grey-2">
    <!-- TopBar -->
    <q-header elevated class="bg-primary text-white w-full">
      <q-toolbar class="justify-between">
        <div class="q-mx-md">
          <img
            src="https://jhonatanborg.sgmaster.com.br/logo-master.svg"
            alt="Logo SGAM"
            height="15"
            width="100"
          />
        </div>

        <div class="flex items-center gap-2 q-mx-md">
          <span class="text-caption uppercase">JHONATAN BORGES</span>
          <q-avatar color="white" text-color="primary" size="32px" class="q-ml-sm">
            <q-icon name="person" />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Sidebar -->
    <q-drawer
      show-if-above
      behavior="desktop"
      side="left"
      class="bg-[#001233] text-white"
      :width="220"
    >
      <div class="px-3 pt-6">
        <div v-for="item in menuItems" :key="item.to">
          <q-item
            clickable
            v-ripple
            :to="item.to"
            exact
            class="my-2 rounded-lg transition-all duration-200"
            :class="{
              'bg-[#007BFF] shadow-md text-white': $route.path === item.to,
              'text-gray-400 hover:bg-[#1a2b4c] hover:text-white': $route.path !== item.to,
            }"
          >
            <q-item-section avatar>
              <q-icon :name="item.icon" size="22px" />
            </q-item-section>
            <q-item-section class="font-medium">
              {{ item.label }}
            </q-item-section>
          </q-item>
        </div>
      </div>
    </q-drawer>

    <!-- Main content -->
    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>



<style scoped>
.rounded-borders {
  border-radius: 9999px 0 0 9999px;
}
</style>
