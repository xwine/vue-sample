import xalert from './xalert'

const xview = {
    xalert
}

const comp = {
    install:function (Vue) {
        Object.keys(xview).forEach((key) => {
            Vue.component(key, xview[key]);
        });
    }
}

export default comp

