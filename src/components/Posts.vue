<template>
    <section class="main-content">
        <section class="post-container" v-for="(post, index) in posts.slice(0, count)" :key="post._id">
            <header class="post-header">
                <div class="profile-pic">
                    <img :src="post.profilePic ? post.profilePic : '/src/assets/images/defaultProfile.png'" alt="profile picture">
                </div>
                <div class="name-email">
                    <h4>{{ post.name[0].toUpperCase() + post.name.slice(1)}}</h4>
                    <b>{{ post.email }}</b>
                </div>
                <div class="edit-delete-button">
                    <button class="update-delete-button" @click=updatePost(post)>
                        <font-awesome-icon icon="fa-solid fa-pen-to-square" class="icon-color"/>
                    </button>
                    <button class="update-delete-button" @click="$emit('removePost', index)">
                        <font-awesome-icon icon="fa-solid fa-trash" class="icon-color"/>
                    </button>
                </div>
            </header>
            <div class="divider"></div>
            <section class="post-content">
                <p>{{ post.content }}</p>
            </section>
            <footer class="post-footer">
                <span class="timestamp"><b>Created at: </b>{{ convertTimeStamp(post.timeStamp) }}</span>
                <div>
                    <button @click="increaseLike(post)">
                        <font-awesome-icon icon="fa-solid fa-thumbs-up" class="icon-color"/>
                    </button>
                    <span>{{ post.like }}</span>
                </div>
            </footer>
        </section>

        <div class="see-more-container" @click="$emit('showMore')">
            <button class="see-more-button" v-if="count < posts.length">See More</button>
            <button class="see-more-button" v-if="count >= posts.length && count > 6" @click="returnToTop">Latest Post</button>
        </div>

        <button class="add-button" data-hover="Create a new post" @click="showPostModal = true">
            <font-awesome-icon icon="fa-solid fa-plus" class="icon-color"/>
        </button>


        <transition name="fade">
            <AddPostForm-component v-if="showPostModal" @form-submission-error="showErrorAlert" @form-submitted="handleFormSubmission" @close-modal="showPostModal = false" :apiUrl="apiUrl"/>
        </transition>

        <transition name="fade">
            <UpdatePostForm-component v-if="showUpdateModal" 
            @form-submission-error="showErrorAlert" @form-submitted="handleUpdateFormSubmission" @close-updateModal="showUpdateModal = false" 
            :apiUrl="apiUrl" :currentPost="currentPost"/>
        </transition>
    </section>
</template>

<script>
    import AddPostForm from './AddPostForm.vue'
    import UpdatePostForm from './UpdatePostForm.vue'

    export default {
        name: 'PostsComponent',
        props: [
            'posts',
            'apiUrl',
            'count'
        ],
        components: {
            'AddPostForm-component': AddPostForm,
            'UpdatePostForm-component': UpdatePostForm,

        },

        data () {
            return { 
                showPostModal: false,
                showUpdateModal: false,
                currentPost: undefined,
                convertedTimeStamp: ''
            }
        },

        methods: {
            // Method to convert date format
            convertTimeStamp(timeStamp) {
                let date = new Date(timeStamp);
               return date.toString();
            },

            // Method to show alert if field is invalid
            showErrorAlert(error) {
                if (error.message = 'Validation Error') alert('Please insert a name, email.');
            },

            // Method to close modal and send new post to app.vue
            handleFormSubmission(newPost) {
                this.showPostModal = false;
                this.$emit('newPost', newPost);
            },

            // Method to close modal and send updated post to app.vue
            handleUpdateFormSubmission(updatedPost) {
                this.showUpdateModal = false;
                this.$emit('updatedPost', updatedPost);
            },

            // Method to open UpdatePostForm and send current post to UpdatePostForm component
            updatePost(post) {
                this.currentPost = post;
                this.showUpdateModal = true;
            },

            // Method to increase likes locally and on database
            async increaseLike(post) {
                try {
                    post.like++
                    const payload = {
                        _id: post._id,
                        like: post.like
                    }

                    const response = await fetch(`${this.apiUrl}post/update`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(payload)
                    });

                    const data = await response.json();

                    if (response.ok) {
                        this.$emit('form-submitted');
                    }
                    

                } catch (error) {
                    console.error(error);
                }
                
            },

            // Method to show latest posts
            returnToTop: function () {
                window.scrollTo(0, 0);
            },
        },
    }
</script>

<style lang="scss" scoped>
    .main-content {
        width: 100%;

        .icon-color {
            color: #13425e;
        }

        .post-container {
        margin: 20px auto;
        padding: 20px;
        width: 40%;
        min-width: 450px;
        background-color: white;
        border-radius: 12px;
        box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.3);

            .post-header {
                
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 15px;
                height: 50px;
                background: white;

                .profile-pic {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    

                    img {
                        width: 45px;
                        height: 45px;
                        object-fit: cover;
                        border-radius: 50%;
                        box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.3);
                    }
                }

                .name-email {
                    flex: 2;
                    h4 {
                        line-height: 1;
                        font-size: 20px;
                        font-weight: bold;
                    }

                    b {
                        font-size: 13px;
                        font-weight: 600;
                        color: rgb(101, 103, 107);
                    }
                }

                .edit-delete-button {

                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 10px;

                    .update-delete-button {
                        padding: 0;
                        border: none;
                        background-color: inherit;
                        cursor: pointer;
                    }
                    
                    svg {
                        width: 20px;
                        height: 20px;
                    }
                }
            }

            .divider {
                width: 100%;
                margin: 20px auto;
                height: 1px;
                background-color: #216288;
                opacity: 0.2;
            }
            .post-content {
                width: 100%;
                margin-bottom: 15px;
                word-wrap: break-word;
                white-space: pre-wrap;
            }

            .post-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 10px;

                .timestamp {
                    font-size: 11px;
                }

                .timestamp  b{
                    font-weight: bold;
                }

                button {
                    border: none;
                    background-color: #f1f1f1;
                    margin-right: 10px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
                }

                button:hover {
                    background-color: #e6e6e6;
                    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
                }

                button:active {
                    background-color: #e6e6e6;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                }
            }
        }

        .add-button {
            position: fixed;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;

            height: 50px;
            width: 50px;
            border-radius: 50%;
            bottom: 50px;
            right: 40px;

            border: none;
            background-color: #f1f1f1;
            transition: all 0.3s cubic-bezier(.25,.8,.25,1);
            box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.4);
        }

        .add-button:before {
            position: fixed;
            bottom: 62.5px;
            right: 100px;
            content: attr(data-hover);
            font-size: 15px;
            visibility: hidden;
            opacity: 0;
            width: auto;
            background-color: black;
            color: white;
            text-align: center;
            border-radius: 5px;
            padding: 5px;
            transition: opacity 1s ease-in-out;
        }

        .add-button:hover:before {
            opacity: 1;
            visibility: visible;
        }

        .add-button:hover {
            background-color: #e6e6e6;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        }

        .add-button:active {
            background-color: #e6e6e6;
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        }

        .see-more-container {
            width: 100%;
            display: flex;
            justify-content: center;
            padding-bottom: 20px;

            .see-more-button {
                padding: 20px;
                font-family: inherit;
                font-size: 15px;
                font-weight: bold;
                color: #13425e;
                height: 50px;
                border-radius: 10px;
                cursor: pointer;
                line-height: .9;

                border: none;
                background-color: #f1f1f1;
                transition: all 0.3s cubic-bezier(.25,.8,.25,1);
                box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.4);
            }

            .see-more-button:hover:before {
                opacity: 1;
                visibility: visible;
            }

            .see-more-button:hover {
                background-color: #e6e6e6;
                box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
            }

            .see-more-button:active {
                background-color: #e6e6e6;
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            }

        }
    }
</style>