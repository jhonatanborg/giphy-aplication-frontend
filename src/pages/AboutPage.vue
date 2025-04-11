<template>
  <div class="q-pa-md">
    <q-card-section>
      <div class="row items-center q-gutter-sm">
        <q-avatar size="50px">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQFQOCYNcDtQ0A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728654113538?e=1749686400&v=beta&t=DlH_l67Qq9wQTH0ptyC9hoUYich4qkVRNemxQhwH2gc"
          />
        </q-avatar>
        <div>
          <div class="text-subtitle1">Jhonatan Borges</div>
          <div class="text-caption text-grey-7">github.com/jhonatanborg</div>
        </div>
      </div>
    </q-card-section>

    <q-card flat bordered class="bg-white q-pa-lg shadow-2">
      <q-card-section>
        <div class="text-h6 text-primary">Sobre o Desenvolvedor</div>
        <div class="text-body1 q-mt-sm">
          Meu nome é <strong>Jhonatan Borges</strong>, sou desenvolvedor front-end com experiência
          em Vue.js, Quasar, Tailwind, TypeScript e outras tecnologias modernas do ecossistema web.
          Tenho paixão por criar interfaces limpas, responsivas e focadas na experiência do usuário.
        </div>
      </q-card-section>

      <q-separator spaced />

      <q-card-section>
        <div class="text-h6 text-primary">Sobre o teste</div>
        <div class="text-body1 q-mt-sm">
          Este projeto foi desenvolvido como parte de um processo seletivo da empresa
          <strong>SGBR</strong>. O objetivo é consumir a API do GIPHY e construir uma aplicação
          interativa e organizada, utilizando Vue 3, Quasar Framework, TailwindCSS, Pinia, Axios e
          LocalStorage.
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
</script>
