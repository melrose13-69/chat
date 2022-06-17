<template>
  <div
    class="user"
    :class="direction"
  >
    <user-logo :size="size" />
    <div class="user__info">
      <div class="user__info-name">
        Victor Poltoratchi
      </div>
      <div class="user__info-status">
        Online
      </div>
    </div>
  </div>
</template>

<script>
import UserLogo from '@/components/common/UserLogo'

export default {
  name: 'UserInfoStatus',
  components: { UserLogo },
  props: {
    direction: {
      type: String,
      default: 'line',
      validator: v => ['line', 'column'].includes(v)
    },
    size: {
      type: Number,
      default: 60
    }
  }
}
</script>

<style scoped lang="scss">
  .user {
    display: flex;
    gap: 10px;
    font-size: 16px;

    &.line {
      align-items: flex-end;
    }

    &.column {
      flex-direction: column;
      align-items: center;

      .user__info {
        align-items: center;

        &-name {
          margin-bottom: 5px;
        }
      }
    }

    &__info {
      display: flex;
      flex-direction: column;

      &-name {
        font-weight: 600;
      }

      &-status {
        font-size: 14px;
        color: var(--gray);
      }
    }
  }
</style>
