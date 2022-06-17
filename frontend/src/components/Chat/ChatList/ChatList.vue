<template>
  <div class="list">
    <div class="list-search">
      <div class="list-search-inner">
        <input-component
          placeholder="Search or start a new chat"
          icon="manage_search"
        />
      </div>
    </div>
    <div class="list-container">
      <div class="list-item">
        <user-logo>
          <icon-component
            name="bookmark"
          />
        </user-logo>
        <div class="list-item-content">
          <div class="list-item-info">
            <div class="name">
              Saved messages
            </div>
            <div class="message">
              Bla bla bla bla blabblab blabblab blabblabblab
            </div>
          </div>
        </div>
      </div>
      <div class="list-item">
        <user-logo />
        <div class="list-item-content">
          <div class="list-item-info">
            <div class="name">
              Victor Poltoratchi
            </div>
            <div class="message">
              Bla bla bla bla blabblab blabblab blabblabblab
            </div>
          </div>
          <div class="list-item-state">
            <div class="time">
              22:33
            </div>
            <div class="counter">
              <span>22</span>
            </div>
          </div>
        </div>
      </div>
      <div class="list-item active">
        <user-logo />
        <div class="list-item-content">
          <div class="list-item-info">
            <div class="name">
              Victor Poltoratchi
            </div>
            <div class="message">
              Bla bla bla bla blabblab blabblab blabblabblab
            </div>
          </div>
          <div class="list-item-state">
            <div class="time">
              22:33
            </div>
            <div class="counter">
              <span>22</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconComponent from '@/components/common/IconComponent'
import UserLogo from '@/components/common/UserLogo'
import InputComponent from '@/components/common/InputComponent'

export default {
  name: 'ChatList',
  components: { InputComponent, IconComponent, UserLogo }
}
</script>

<style scoped lang="scss">
  .list {
    display: grid;
    grid-template-rows: auto 1fr;
    padding: 15px 0 15px 5px;
    grid-gap: 15px;
    background: var(--messages-background);
    backdrop-filter: var(--backdrop-blur-filter-20);

    &-search {
      &-inner {
        position: relative;
        display: grid;
        padding: 0 20px;
      }

      .icon {
        position: absolute;
        top: 50%;
        left: 35px;
        transform: translate(0, -50%);
        font-size: 30px;
        z-index: 1;
      }

      input {
        border-radius: 25px;
        padding: 10px 10px 10px 60px;
      }
    }

    &-container {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      font-weight: 600;
    }

    &-item {
      position: relative;
      display: grid;
      grid-template-columns: 60px 1fr;
      grid-gap: 12px;
      cursor: pointer;
      transition: all .3s ease-out;
      padding: 12px 0 12px 12px;
      border-radius: 20px 0 0 20px;

      &-content {
        display: grid;
        grid-template-columns: 250px auto;
        border-bottom: var(--chat-border);
      }

      &-info {
        padding: 5px 0;

        .name {
          margin-bottom: 10px;
          font-size: 16px;
        }

        .message {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: #C7C7C7;
        }
      }

      &-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px 0;

        .time {
          color: #C7C7C7;
          margin-bottom: 10px;
        }
        .counter {
          background: var(--orange);
          border: .5px solid var(--white);
          padding: 3px;
          border-radius: 22px;
          font-size: 10px;

          span {
            line-height: 1;
          }
        }
      }

      &:hover,
      &.selected {
        background-color: var(--selected-chat-background);
        box-shadow: var(--selected-chat-box-shadow);

        .list-item-content {
          border-color: var(--selected-chat-background);
        }
      }
    }
  }
</style>
