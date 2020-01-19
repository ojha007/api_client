<template>
  <li class="dropdown messages-menu">
    <!--    <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">-->
    <!--      <i class="fa fa-envelope-o"></i>-->
    <!--      <span class="label label-success">{{ userInfo.messages | count }}</span>-->
    <!--    </a>-->
    <!--    <ul class="dropdown-menu">-->
    <!--      &lt;!&ndash;      <li class="header">You have {{ userInfo.messages | count }} message(s)</li>&ndash;&gt;-->
    <!--      &lt;!&ndash;      <li v-if="userInfo.messages.length > 0">&ndash;&gt;-->
    <!--      &lt;!&ndash; inner menu: contains the messages &ndash;&gt;-->
    <!--      <ul class="menu">-->
    <!--        &lt;!&ndash;          <message-item v-for="message in userInfo.messages"&ndash;&gt;-->
    <!--        &lt;!&ndash;              :key="message.id"&ndash;&gt;-->
    <!--        &lt;!&ndash;              :message="message"></message-item>&ndash;&gt;-->
    <!--      </ul>-->
    <!--      &lt;!&ndash; /.menu &ndash;&gt;-->
    <!--      </li>-->
    <!--      &lt;!&ndash;      <li class="footer" v-if="userInfo.messages.length > 0">&ndash;&gt;-->
    <!--      <a href="javascript:;">See All Messages</a>-->
    <!--      </li>-->
    <!--    </ul>-->
  </li>
</template>

<script>
    import {mapState} from 'vuex'
    import MessageItem from './MessageItem'

    export default {
      name: 'MessagesMenu',
      components: {
        MessageItem
      },
      computed: {
        ...mapState([
          'userInfo'
        ])
      }
    }
</script>
