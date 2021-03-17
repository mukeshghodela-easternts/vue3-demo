<template>
  <h1>{{ message }}</h1>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <invite-form
    v-model:name="inviteName"
    v-model:email="inviteEmail"
  ></invite-form>
  <p>{{ inviteName }}</p>
  <p>{{ inviteEmail }}</p>
</template>

<script>
import InviteForm from "./InviteForm.vue";
import { reactive, ref } from "vue";

export default {
  components: {
    InviteForm,
  },
  props: {
    msg: String,
  },
  setup(props) {
    const state = reactive({ count: 0 });
    let inviteName = ref("");
    let inviteEmail = ref("");
    return {
      message: props.msg + " Customized Props",
      inviteEmail,
      inviteName,
      state,
    };
  },
};
</script>
