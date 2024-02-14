new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: ['Comprar leche', 'Pasear al perro', 'Hacer ejercicio'],
        textColor: 'blue' // textColor debe estar definido y tener un valor inicial
    },
    methods: {
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push(this.newTask);
                this.newTask = '';
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        }
    }
});
