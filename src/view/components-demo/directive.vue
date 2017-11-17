<template>
    <div>
        <div class="scroll-box">
            
        </div>
        
    </div>
</template>

<script>
    
    export default {
        data(){
            return {
                list: ['dasda',121,121,121,1212,1212,'dasda',121,121,121,1212,1212,'dasda',121,121,121,1212,1212,'dasda',121,121,121,1212,1212,'dasda',121,121,121,1212,1212,'dasda',121,121,121,1212,1212,'dasda',121,121,121,1212,1212,'dasda',121,121,121,1212,1212,'dasda',121,121,121,1212,1212,'dasda',121,121,121,1212,1212,'dasda',121,121,121,1212,1212,'dasda',121,121,121,1212,1212,'dasda',121,121,121,1212,1212,'dasda',121,121,121,1212,1212,'dasda',121,121,121,1212,1212,'dasda',121,121,121,1212,1212,'dasda',121,121,121,1212,1212,'end',0]     
            }
        },
        methods: {
            loadMore(){
                this.loading = true;
                  setTimeout(() => {
                    let last = this.list[this.list.length - 1];
                    for (let i = 1; i <= 10; i++) {
                      this.list.push(last + i);
                    }
                    this.loading = false;
                  }, 2500);
            }
        }
    }
</script>

<style>
</style>