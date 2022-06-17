<template>
  <modal-component
    modal-name="settings"
    title="Settings"
  >
    <template #content>
      <div class="inner">
        <user-info-status
          :size="100"
          direction="column"
        />
        <div class="settings">
          <clickable-list-item
            v-for="item in $options.settingsList"
            :key="item.icon"
            :title="item.title"
            :icon="item.icon"
            :emit-action="item.emit"
            class="settings__item"
          />
        </div>
      </div>
    </template>
  </modal-component>
</template>

<script>
import ClickableListItem from '@/components/common/ClickableListItem'
import ModalComponent from '@/components/common/ModalComponent'
import UserInfoStatus from '@/components/common/UserInfoStatus'
import UserLogo from '@/components/common/UserLogo'
import { emitterKey } from '@/global'

const settingsList = [
  { emit: 'editPerson', icon:'person', switch: false, title: 'Edit profile' }
]

export default {
  name: 'SettingsModal',
  settingsList,
  components: {
    ClickableListItem,
    ModalComponent,
    UserInfoStatus,
    UserLogo
  }
}
</script>

<style scoped lang="scss">
  .user {
    padding: 20px 0;
    border-bottom: 1px solid var(--in-mesage-background);
  }

  .settings {
    margin-top: 10px;
    padding: 10px 0;

    &__item {
      border-radius: 15px;
      overflow: hidden;
    }
  }
</style>
