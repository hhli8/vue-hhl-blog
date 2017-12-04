<template>
    <div>
        <div class="scroll-box bot">
            
            personal<br />
            aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />aaaaaaaaaaaaaaaaaaaaaaaa<br />
            end
        </div>
        <h-footer></h-footer>
    </div>
</template>

<script>
    import Axios from 'axios';
      import qs from 'qs'
    //import utils from '@/lib/utils';
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        mounted(){
          var params={name:'hhl',psd:'123456'};
          let out=Axios.get('/login',{params:params});
          out.then((res) => {
            //console.log(res);
            console.log(res.data);
          })
          
//        let out2=Axios.post('/login/abort', qs.stringify(params) );
//        console.log(out2);//Promise对象
//           
//        
//        out2.then((res) => {
//          console.log(res);
//          console.log(res.data);
//        })
          

        }
    }
</script>

<style lang="scss" scoped>
   
</style>