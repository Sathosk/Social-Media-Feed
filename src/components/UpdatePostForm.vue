<template>
    <transition name="fade">
        <div class="modal-overlay" @click="$emit('close-updateModal')">
            <div class="modal" @click.stop>
                <button class="close-button" @click="$emit('close-updateModal')">
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                </button>

                <form class="form-style" @submit.prevent="onSubmit">
                    <ul>
                        <li>
                            <input type="text" v-if="currentPost" v-model="post.name"
                                class="field-style field-split align-left" placeholder="Name" />
                            <input type="text" v-if="currentPost" v-model="post.email"
                                class="field-style field-split align-right" placeholder="Email" />
                        </li>

                        <li>
                            <textarea v-if="currentPost" v-model="post.content" class="field-style text-area"
                                placeholder="Message" maxlength="1000"></textarea>
                        </li>

                        <li style="margin-bottom: 0">
                            <input type="submit" value="Update Post" :disabled="submitted" />
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </transition>
</template>
  
<script>
export default {
    name: "AddPostModal",

    props: [
        'apiUrl',
        'currentPost'
    ],

    data() {
        return {
            post: {
                _id: this.currentPost._id,
                name: this.currentPost.name,
                email: this.currentPost.email,
                content: this.currentPost.content
            },
            submitted: false
        }
    },

    methods: {
        //  Method for custom submit of forms
        async onSubmit() {
            this.submitted = true; // Disable button to avoid multiple form submissions
            try {
                const response = await fetch(`${this.apiUrl}post/update`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.post)
                });

                const data = await response.json();

                if (data.message === 'Validation Error') throw new Error('Validation Error')

                console.log('Post Updated')
                if (response.ok) {
                    this.$emit('form-submitted', data.result); // Send post update to posts.vue and emit signal to close modal
                }

                this.submitted = false; // Enable button after request is finished
            } catch (error) {
                if (error === 'Validation Error') this.$emit('form-submission-error', error); // Send error to posts.vue to render alert
                
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