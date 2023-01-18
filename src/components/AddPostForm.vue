<template>
    <transition name="fade">
        <div class="modal-overlay" @click="$emit('close-modal')">
            <div class="modal" @click.stop>
                <button class="close-button" @click="$emit('close-modal')">
                    <font-awesome-icon icon="fa-solid fa-xmark"/>
                </button>

                <form class="form-style" @submit.prevent="onSubmit" enctype="multipart/form-data">
                    <ul>
                        <li class="input-file-container">
                            <label>Upload Profile Picture:</label>
                            <input type="file" ref="file" class="input-file">
                        </li>
                        <li>
                            <input type="text" v-model="formData.name" class="field-style field-split align-left" placeholder="Name" />
                            <input type="text" v-model="formData.email" class="field-style field-split align-right" placeholder="Email" />

                        </li>

                        <li>
                            <textarea v-model="formData.content" class="field-style" placeholder="Message" maxlength="1000"></textarea>
                        </li>

                        <li style="margin-bottom: 0">
                            <input type="submit" value="Send Message" :disabled="submitted"/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </transition>
</template>
  
  <script>
    export default {
        name: "AddPostForm",

        props: [
        'apiUrl'
        ],

        data() {
            return {
                formData: {
                    name: '',
                    email: '',
                    content: ''
                },
                submitted: false
            }
        },

        methods: {
            //  Method for custom submit of forms
            async onSubmit () {
                this.submitted = true; // Disable button to avoid multiple form submissions
                try {
                    // Create formData that can handle images
                    const formData = new FormData();
                    formData.append('profile-pic', this.$refs.file.files[0]);
                    formData.append('name', this.formData.name);
                    formData.append('email', this.formData.email);
                    formData.append('content', this.formData.content);

                    const response = await fetch(`${this.apiUrl}post/createPost`, {
                        method: 'POST',
                        body: formData
                    });

                    const data = await response.json();
                    
                    if (data.message === 'Validation Error') throw new Error('Validation Error');

                    if (response.ok) {
                        this.$emit('form-submitted', data.result);
                    }

                    this.submitted = false; // Enable button after request is finished
                } catch (error) {
                    this.$emit('form-submission-error', error);
                    console.error(error);
                    this.submitted = false;
                }
            }
        }
    }
  </script>

<style scoped>
    @import '../assets/formModal.css'
</style>