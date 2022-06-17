<template>
  <div class="messages">
    <div class="messages__controls">
      <div class="messages__controls-info">
        <user-info-status />
      </div>
    </div>
    <div class="messages__inner">
      <div class="messages__inner-in">
        <div class="message message-in">
          <div class="text">
            asd
          </div>
          <div class="controls">
            <div class="time">
              24:00
            </div>
          </div>
        </div>
      </div>
      <div class="messages__inner-out">
        <div class="message message-out">
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab placeat praesentium
            ratione saepe veritatis! Laudantium possimus quis voluptatibus. Harum laudantium
            provident recusandae! Asperiores dignissimos dolor esse obcaecati ratione sunt voluptatibus.
          </div>
          <div class="controls">
            <div class="time">
              23:00
            </div>
          </div>
        </div>
      </div>
      <div class="messages__inner-in">
        <div class="message message-in">
          <div class="text">
            asd
          </div>
          <div class="controls">
            <div class="time">
              24:00
            </div>
          </div>
        </div>
      </div>
      <div class="messages__inner-out">
        <div class="message message-out">
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab placeat praesentium
            ratione saepe veritatis! Laudantium possimus quis voluptatibus. Harum laudantium
            provident recusandae! Asperiores dignissimos dolor esse obcaecati ratione sunt voluptatibus.
          </div>
          <div class="controls">
            <div class="time">
              23:00
            </div>
          </div>
        </div>
      </div>
      <div class="messages__inner-in">
        <div class="message message-in">
          <div class="text">
            asd
          </div>
          <div class="controls">
            <div class="time">
              24:00
            </div>
          </div>
        </div>
      </div>
      <div class="messages__inner-out">
        <div class="message message-out">
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab placeat praesentium
            ratione saepe veritatis! Laudantium possimus quis voluptatibus. Harum laudantium
            provident recusandae! Asperiores dignissimos dolor esse obcaecati ratione sunt voluptatibus.
          </div>
          <div class="controls">
            <div class="time">
              23:00
            </div>
          </div>
        </div>
      </div>
      <div class="messages__inner-in">
        <div class="message message-in">
          <div class="text">
            asd
          </div>
          <div class="controls">
            <div class="time">
              24:00
            </div>
          </div>
        </div>
      </div>
      <div class="messages__inner-in">
        <div class="message message-in">
          <div class="text">
            asd
          </div>
          <div class="controls">
            <div class="time">
              24:00
            </div>
          </div>
        </div>
      </div>
      <div class="messages__inner-in">
        <div class="message message-in">
          <div class="text">
            asd
          </div>
          <div class="controls">
            <div class="time">
              24:00
            </div>
          </div>
        </div>
      </div>
      <div class="messages__inner-out">
        <div class="message message-out">
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab placeat praesentium
            ratione saepe veritatis! Laudantium possimus quis voluptatibus. Harum laudantium
            provident recusandae! Asperiores dignissimos dolor esse obcaecati ratione sunt voluptatibus.
          </div>
          <div class="controls">
            <div class="time">
              23:00
            </div>
          </div>
        </div>
      </div>
      <div class="messages__inner-in">
        <div class="message message-in">
          <div class="text">
            asd
          </div>
          <div class="controls">
            <div class="time">
              24:00
            </div>
          </div>
        </div>
      </div>
      <div class="messages__inner-out">
        <div class="message message-out">
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab placeat praesentium
            ratione saepe veritatis! Laudantium possimus quis voluptatibus. Harum laudantium
            provident recusandae! Asperiores dignissimos dolor esse obcaecati ratione sunt voluptatibus.
          </div>
          <div class="controls">
            <div class="time">
              23:00
            </div>
          </div>
        </div>
      </div>
      <div class="messages__inner-out">
        <div class="message message-out">
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab placeat praesentium
            ratione saepe veritatis! Laudantium possimus quis voluptatibus. Harum laudantium
            provident recusandae! Asperiores dignissimos dolor esse obcaecati ratione sunt voluptatibus.
          </div>
          <div class="controls">
            <div class="time">
              23:00
            </div>
          </div>
        </div>
      </div>
      <div class="messages__inner-out">
        <div class="message message-out">
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab placeat praesentium
            ratione saepe veritatis! Laudantium possimus quis voluptatibus. Harum laudantium
            provident recusandae! Asperiores dignissimos dolor esse obcaecati ratione sunt voluptatibus.
          </div>
          <div class="controls">
            <div class="time">
              23:00
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="messages__input">
      <textarea
        placeholder="Type a message or send a voice note"
        @input="onInput"
      />
    </div>
  </div>
</template>

<script>
import UserLogo from '@/components/common/UserLogo'
import UserInfoStatus from '@/components/common/UserInfoStatus'

export default {
  name: 'ChatMessages',
  components: { UserInfoStatus, UserLogo },
  methods: {
    onInput () {

    }
  }
}
</script>

<style scoped lang="scss">
  .messages {
    position: relative;
    display: grid;
    grid-template-rows: auto 80px;
    background-color: var(--selected-chat-background);
    overflow: hidden;

    &__controls {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      background-color: var(--primary-backgound);
      backdrop-filter: var(--backdrop-blur-filter-20);
      padding: 10px 20px;

      &-info {
        display: flex;
        align-items: flex-end;
        gap: 10px;
        font-size: 16px;
      }

      &-name {
        .name {
          font-weight: 600;
        }
        .status {
          font-size: 14px;
          color: #C7C7C7;
        }
      }
    }

    &__inner {
      display: flex;
      flex-direction: column-reverse;
      padding: 100px 30px 0 30px;
      overflow: hidden scroll;

      &-out {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 10px;
      }

      &-in {
        margin-bottom: 10px;
      }

      .message {
        max-width: 40%;
        min-width: 100px;
        border-radius: 25px;
        padding: 10px 20px 5px 20px;

        .text {
          margin-bottom: 5px;
          letter-spacing: .1px;
        }

        .time {
          font-weight: 600;
          font-size: 12px;
          opacity: .6;
        }

        .controls {
          display: flex;
          justify-content: flex-end;
        }
      }

      .message-in {
        margin-top: 10px;
        background-color: var(--in-mesage-background);

        * {
          color: var(--in-message-color);
        }
      }

      .message-out {
        margin-top: 10px;
        background-color: var(--out-message-background);

        * {
          color: var(--out-message-color);
        }
      }

      &::-webkit-scrollbar,
      &::-webkit-scrollbar-thumb {
        display: none;
      }
    }

    &__input {
      display: grid;
      background-color: var(--primary-backgound);
      padding: 15px;

      textarea {
        border-radius: 10px;
        padding: 10px 15px;
        resize: none;
      }
    }
  }
</style>
