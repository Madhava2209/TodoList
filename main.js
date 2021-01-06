
        new Vue({
            el : '#todo',
            data:{
                todoList:[],
                newItem: '',
                count:0
            },
            methods:{
                addTodo(item){
                    this.todoList.push(item)
                    this.newItem=''

                    localStorage.setItem('todo',JSON.stringify(this.todoList))
                },
                deleteTodo(id){
                    this.todoList.splice(id,1)
                    localStorage.setItem('todo',JSON.stringify(this.todoList));
                    this.getTodo()
                },
                getTodo(){
                    this.todoList = JSON.parse(localStorage.getItem('todo'))
                }
            
            },
            created(){
                this.getTodo()
            }
        })