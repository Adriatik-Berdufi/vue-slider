const {createApp} = Vue;
const app = createApp({
    data(){
        return{
            activeImage: 0,
            images : ['./img/01.webp','./img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp' ,],
            autoplay : false,
        };
    },
    methods: {
        nextImage(){this.activeImage = (this.activeImage >= this.images.length - 1) ? 0 : this.activeImage + 1;},
        prevImage(){this.activeImage = (this.activeImage <= 0) ? this.images.length - 1 : 0;},
        thumb(index){this.activeImage = index;},
        outoPlay(){this.autoplay = setInterval(() => {this.nextImage();}, 1000);},    
        stopAutoPlay(){clearInterval(this.autoplay);},
    },
});
app.mount('#app');

