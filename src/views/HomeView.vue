<template>
  <div class="home" v-loading="loading">
    <div class="top-title">
          <span class="text1">
            幸运礼包平台注册
          </span>
      <span class="text2">
                输入您的详细信息以完成注册
          </span>
    </div>

    <div class="form-input">
      <div class="input-item">
        <span class="tips">姓名</span>
        <input class="input-text" v-model="student.name"/>
      </div>
      <div class="input-item">
        <span class="tips">手机号码</span>
        <input class="input-text" v-model="student.phone"/>
      </div>
      <div class="input-item">
        <span class="tips">身份证号</span>
        <input class="input-text" v-model="student.idCard"/>
      </div>
    </div>
    <button class="sub-btn" @click="submitStudent">完成</button>
  </div>
</template>

<script>
// @ is an alias to /src

import {addStudent} from "@/api/studentApi";

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      student:{
        name:'',
        phone:'',
        idCard:''
      },
      loading:false
    }
  },
  methods: {
    submitStudent(){
      //校验姓名是否符合
      if (this.student.name.length<2){
        this.$message.error('姓名不符合规范')
        return
      }
      //校验手机号码是否符合
      let phoneReg = /^1[3456789]\d{9}$/
      if (!phoneReg.test(this.student.phone)){
        this.$message.error('手机号码不符合规范')
        return
      }
      //校验身份证号
      let idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      if (!idCardReg.test(this.student.idCard)){
        this.$message.error('身份证号不符合规范')
        return
      }
      addStudent(this.student).then(res=>{
        this.loading=true
        setTimeout(()=>{
          this.$message.success('注册成功')
           this.loading=false
        },5000)


      })
    }
  },
  created() {
    document.title="注册"

  }
}
</script>
<style scoped>
.sub-btn{
  width: 80%;
  border: none;
  background: #637fdc;
  color: white;
  height: 5%;
  min-height: 60px;
  border-radius: 5px;
  font-size: 1.3rem;
}
.input-item {
  width: 90%;
  margin: 5px auto;
  height: 30%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.tips {
  font-size: 1.5rem;
  color: #8d8d8d;
}

.input-text {
width: 100%;
border: none;
  height: 50%;
  min-height: 50px;
  border-bottom: 1px solid black; /* 设置下边框 */
  font-size: 1.2rem;
}

.home {
  height: 92vh;
  background: #426ded;
}

.top-title {
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.text1 {
  color: white;
  font-size: 2rem;
}

.text2 {
  margin-top: 10px;
  color: white;
  font-size: 1.3rem;
}

.form-input {
  height: 60%;
  background: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

</style>
