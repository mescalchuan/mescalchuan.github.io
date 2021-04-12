<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <h3 style="float:left;margin:16px 100px 16px 0;font-size:18px;line-height:18px;color:white;cursor:pointer;" @click="$router.push('/home')">迭部县</h3>
    <breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="require('../../assets/touxiang.png')" class="user-avatar">
          <!-- <i class="el-icon-caret-bottom" style="color: white;" /> -->
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item @click.native="changePassword">
            <span >密码设置</span>
            <i class="el-icon-setting" style="margin-left:5px;"/>
          </el-dropdown-item>
          <el-dropdown-item @click.native="logout">
            <span >安全退出</span>
            <i class="el-icon-right" style="margin-left:5px;"/>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <span style="color: white; font-weight: bold; float: right; margin-top: 16px; margin-right: 10px;font-size:14px;">{{ userName }} 欢迎您！</span>
    <el-drawer
      title="密码设置"
      :visible.sync="visible"
      direction="rtl"
      destroy-on-close
      append-to-body
      size="300px"
      custom-class="drawer"
      :modal="false"
      :show-close="false"
      :wrapper-closable="false"
      @opened="() => drawerOpen()"
      :before-close="handleClose">
      <div class="password-form">
        <el-form ref="authForm"
          :model="form"
          label-width="80px"
          style="margin-right: 20px;"
        >
          <el-form-item label="账户" prop="account">
            <el-input v-model="form.account" disabled/>
          </el-form-item>
          <el-form-item label="新密码" prop="password">
            <el-input v-model="form.password" type="password"/>
          </el-form-item>
          <el-form-item label="确认密码" prop="epassword">
            <el-input v-model="form.epassword" type="password"/>
          </el-form-item>
        </el-form>
        <div style="margin-left:20px;">
          <el-button type="primary" @click="save">保存</el-button>
        <el-button @click="visible = false">关闭</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import { updatePassword } from '@/api/account'
export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  data() {
    return {
      visible: false,
      form: {
        account: localStorage.getItem('un')
      }
    }
    
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ]),
    userName() {
      return localStorage.getItem('un')
    }
  },
  methods: {
    drawerOpen() {
      this.form.account = localStorage.getItem('un')
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    changePassword() {
      this.visible = true
    },
    handleClose() {
      this.form = {}
      this.visible = false
    },
    save() {
      if(!this.form.account) {
        this.$message({
          type: 'warning',
          message: '账户不能为空'
        })
      }
      else if(!this.form.password || !this.form.epassword) {
        this.$message({
          type: 'warning',
          message: '密码不能为空'
        })
      }
      else if(this.form.password != this.form.epassword) {
        this.$message({
          type: 'warning',
          message: '两次密码不一致'
        })
      }
      else {
        updatePassword({
          accountId: localStorage.getItem('ai'),
          password: this.form.password
        }).then(res => {
          this.$message({
            type: 'success',
            message: '修改成功'
          })
          this.visible = false
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #52b9c8;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 40px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
