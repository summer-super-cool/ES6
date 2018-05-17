/*
* 封装fetch
* 更快，更简单的请求数据
*/

// class EasyHttp{
//     get(url){
//         return new Promise((resolve,reject) => (
//             fetch(url)
//                 .then(res => res.json())
//                 .then(data => resolve(data))
//                 .then(err => reject(err))
//         ))
//     }

//     post(url,data){
//         return new Promise((resolve,reject) => (
//             fetch(url,{
//                 method:"POST",
//                 headers:{
//                     'Content-type':'application/json'
//                 },
//                 body:JSON.stringify(data)
//             })
//                 .then(res => res.json())
//                 .then(data => resolve(data))
//                 .then(err => reject(err))
//         ))
//     }

//     //put
//     put(url,data){
//         return new Promise((resolve,reject) => (
//             fetch(url,{
//                 method:"PUT",
//                 headers:{
//                     'Content-type':'application/json'
//                 },
//                 body:JSON.stringify(data)
//             })
//                 .then(res => res.json())
//                 .then(data => resolve(data))
//                 .then(err => reject(err))
//         ))
//     }

//     //delete
//     delete(url){
//         return new Promise((resolve,reject) => (
//             fetch(url,{
//                 method:"DELETE",
//                 headers:{
//                     'Content-type':'application/json'
//                 }
//             })
//                 .then(res => res.json())
//                 .then(data => resolve('数据删除成功!'))
//                 .then(err => reject(err))
//         ))
//     }

// }

/**
 * 封装fetch
 * 更快,更简单的请求数据
 *
 * @version 2.0.0
 * @author  米斯特吴
 * @license MIT
 *
 **/

class EasyHttp{
    // get 
    async get(url){
      const response = await fetch(url);
      const resData = await response.json();
      return resData;
    }
 
    // post
    async post(url,data){
       const response = await fetch(url,{
          method:"POST",
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(data)
        });
       const resData = await response.json();
       return resData;
   }
 
   // put
   async put(url,data){
       const response = await fetch(url,{
          method:"PUT",
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(data)
        });
 
        const resData = await response.json();
        return resData;    
   }
 
   // delete
   async delete(url){
       const response = await fetch(url,{
         method:"DELETE",
         headers:{
           'Content-type':'application/json'
         }
       })
       const resData = await "数据删除成功!";
       return resData;
   }
  }