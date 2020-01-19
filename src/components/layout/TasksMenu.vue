<template>
  <li class="dropdown tasks-menu">
<!--    <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">-->
<!--      <i class="fa fa-flag-o"></i>-->
<!--      <span class="label label-danger">{{ userInfo.tasks | count }} </span>-->
<!--    </a>-->
<!--    <ul class="dropdown-menu">-->
<!--      <li class="header">You have {{ userInfo.tasks | count }} task(s)</li>-->
<!--      <li v-if="userInfo.tasks.length > 0">-->
<!--        &lt;!&ndash; Inner menu: contains the tasks &ndash;&gt;-->
<!--        <ul class="menu">-->
<!--          <li>-->
<!--            &lt;!&ndash; Task item &ndash;&gt;-->
<!--            <a href="javascript:;">-->
<!--              &lt;!&ndash; Task title and progress text &ndash;&gt;-->
<!--              <h3>-->
<!--                Design some buttons-->
<!--                <small class="pull-right">20%</small>-->
<!--              </h3>-->
<!--              &lt;!&ndash; The progress bar &ndash;&gt;-->
<!--              <div class="progress xs">-->
<!--                &lt;!&ndash; Change the css width attribute to simulate progress &ndash;&gt;-->
<!--                <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">-->
<!--                  <span class="sr-only">20% Complete</span>-->
<!--                </div>-->
<!--              </div>-->
<!--            </a>-->
<!--          </li>-->
<!--          &lt;!&ndash; end task item &ndash;&gt;-->
<!--        </ul>-->
<!--      </li>-->
<!--      <li class="footer" v-if="userInfo.tasks.length > 0">-->
<!--        <a href="javascript:;">View all tasks</a>-->
<!--      </li>-->
<!--    </ul>-->
  </li>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TasksMenu',
  computed: {
    ...mapState([
      'userInfo'
    ])
  }
}
</script>
