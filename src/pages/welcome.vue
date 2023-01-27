<template>
    <v-row>
        <v-col cols="6" class="d-flex justify-center align-center">
            <v-img src="@/assets/img/hand-wave.png" max-height="400"></v-img>
        </v-col>
        <v-col cols="6" class="d-flex flex-column justify-center">
            <h2>Hello There!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolores.</p>
            <div class="d-flex flex-row my-4" style="gap: 1rem">
                <v-btn variant="outlined" icon="mdi-github"></v-btn>
                <v-btn variant="outlined" icon="mdi-linkedin"></v-btn>
                <v-btn variant="outlined" icon="mdi-instagram"></v-btn>
            </div>
        </v-col>
    </v-row>
</template>

<script>

export default {
    beforeMount(){
        this.$store.commit('SET_LAYOUT', 'default-layout')
    }
}

</script>