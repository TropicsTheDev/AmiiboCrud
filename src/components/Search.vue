<template>
    <form @submit.prevent="search($event)">
        <input v-model="searchValue" placeholder="Mario"/>
        <button type="submit" >Search</button>
    </form>
</template>

<script>
    export default {
        name: "Search",
        data () {
            return {
                searchValue: ""
            }
        },
        methods: {
            search(event){
                //console.log(event);
                event.preventDefault();
                this.$emit("start-search", this.searchValue);
                // Emits a custom event to the parent
            }
        }
    }
</script>
<style scoped>
input, button{
    font-family: Arial;
    font-size: 20px;
    color: #2c3e50;
}
    button{
        background-color: #83FF33;
        box-shadow: 0px 2.5px 10px rgba(0,0,0, 0.50);
        border-radius: 15px;
        border: none;
        padding: 10px 20px;
        transition: .25s;
    }
    button:hover{
        /* Hover effects  */
        transform: scale(1.1);
        color: white;
        cursor: pointer;
    }
    input{
        padding: 10px;
        margin-right: 10px;
    }
</style>