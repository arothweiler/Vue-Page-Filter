import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        value: "Our Cool site",
        title: "We know what makes a great team.", 
        counter: 2, 
        pictures: [
            { pic: require("../assets/technologies/angular.png"), alt: "angular"},
            { pic: require("../assets/technologies/logo.png"), alt: "logo"},
            { pic: require("../assets/technologies/python.png"), alt: "vue"},
            { pic: require("../assets/technologies/django.png"), alt: "node"},
            { pic: require("../assets/technologies/php.png"), alt: "node"},
            { pic: require("../assets/technologies/wordpress.png"), alt: "node"}
        ],
        pictureHeader: require("../assets/technologies/wordpress.png"), 
        globalColor: ""
    }, 
    getters: {
        doubleCounter: state =>{
            return state.counter;
        },
        value: state => {
            return state.value;
        },
        title: state => {
            return state.title;
        },
        getPictures: state =>{
            return state.pictures;
        },
        getHeaderPicture: state =>{
            return state.pictureHeader;
        },
        getMainColorValue: state =>{
            return state.globalColor;
        },

    },
    mutations: {
        updateValue: (state, payload)=>{
            state.value = payload; 
        },
        updateValueTitle: (state, payload)=>{
            state.title = payload; 
        },
        setCurrentImage(state, val){
            state.pictureHeader = val;
        },
        changeGlobalColor: (state, payload)=>{
            state.globalColor = payload;
        }
    },
    actions: {
        updateValue({commit}, payload) {
            commit("updateValue", payload);
        },
        updateValueTitle({commit}, payload) {
            commit("updateValueTitle", payload);
        },
        changeGlobalColor({commit}, payload){
            commit("changeGlobalColor", payload)
        }    
    }  
})