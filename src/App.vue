<template>

  <header-component @queryChange="searchChange"/>
  <posts-component :count="postCount" :posts="posts" :apiUrl="API_URL" :searchInput="searchInput" 
  @newPost="newPost" @removePost="removePost" @updatedPost="updatedPost" @showMore="this.showMore" />
  
</template>

<script>
  import HeaderComponent from './components/Header.vue'
  import PostsComponent from './components/Posts.vue'

  export default {
    name: 'app',
    components: {
      'header-component': HeaderComponent,
      'posts-component': PostsComponent
    },

    data() {
      return {
        API_URL: "https://zealous-hen-pumps.cyclic.app/api/", // API base URL
        posts: [], // All posts array
        postCount: 6, // Variable to limit number of posts on the page
        searchInput: '',
      }
    },

    methods: {
        // Method to fetch all posts from API and render client side
        getPosts: async function () {
            const response = await fetch(this.API_URL + "post/all")
            const posts = await response.json();          
            
            this.posts = posts.result;
            this.sortPost(this.posts);
        },

        searchChange: function (searchInput) {
          this.searchInput = searchInput;
        },

        // Method to increase number of posts showing on the webpage
        showMore: function () {
            this.postCount +=2
        },

        // Method do add new posts client side
        newPost: function (newPost) {
            this.posts.push(newPost)
            this.sortPost(this.posts);
        },

        // Method to update posts client side
        updatedPost: function(post) {
            const index = this.posts.findIndex(obj => obj._id === post._id);
            this.posts[index] = post;
        },

        // Method to sort posts client side
        sortPost(posts) {
            posts.sort((a,b) => {
                if (a.timeStamp < b.timeStamp) return 1;
                if (a.timeStamp > b.timeStamp) return -1;
                return 0;
            })
      },

        // Method to delete posts
        async removePost(postId) {
            try {
                const index = this.posts.findIndex(obj => obj._id === postId);
                const response = await fetch(`${this.API_URL}post/remove`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({_id: postId, cloudinaryId: this.posts[index].cloudinaryId})
                });

                this.posts.splice(index, 1); 
            } catch (error) {
                console.error(error);
            }
        }

    },

    beforeMount() {
      this.getPosts();

    },
  }
</script>

<style lang="scss">
  body {
    background-color: #F0F2F5;
    font-family: "Rockwell", serif;
  }

  h3 {
    color: #171717;
    font-size: 28px;
    font-weight: 700;
  }
</style>
