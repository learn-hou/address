function fn(arr) {
    /* //['arr[0].city'] = ['arr[0].county'],
    a[arr[0].city] = [];  //'a':[];
    a[arr[0].city].push(arr[0].county);//'a':[a-1]

    // ['arr[1].city']=['arr[1].county'],
    a[arr[1].city] = [];
    a[arr[1].city].push(arr[1].county);
    // ['arr[2].city']=['arr[2].county']
    a[arr[2].city].push(arr[2].county);
    */
     let  k,v,a={};
     k=arr[0].city; v=arr[0].county;
     if(!a[k]){a[k]=[];};   //a[k]相当于啊a[0]下标表示   'A':[a-1.a-2]
     a[k].push(v);
    k=arr[1].city; v=arr[1].county;
    if(!a[k]){a[k]=[];};
    a[k].push(v);

}

//定义一个数组
// let brr = [
// //     {city: '古交市', county: '古交营业部'},
// //     {city: '吕梁市', county: '娄烦营业部'},
// //     {city: '吕梁市', county: '清徐营业部'},
// //
// // ];
//定义新的对象

//遍历数组
/*
for (let key in a) {
   console.log(key);
   a[key].forEach(x => console.log(x));
};
*/
 /*
function   f(num){
    //135    2:15
    let  h=parseInt(num/60);
    let  m=num%60;
    return   h.concat(':').concat(m);
}
//消除相同的县城
 A：{‘A-1’：true},
 B：{‘B-1’：true,'B-2’：true},
*/
//把原始数据进行变形，为了给页面提供合适的数据

 function   f(arr){
     let  k , v , a={};
     arr.forEach(item=> {
             k = item.city;
             v = item.county;
             if(!a[k]){
                 a[k]={ };
                 }
                 if(!a[k][v])
                 {a[k][v]=true;};
         }
     );
     return  a;
 }
let o =f(database);
 //遍历数组，以及追加数据
for(let  city  in  o){
     let  countyArry=o[city];
    magic('div','city',city,'.content' );
     for(let  county  in  countyArry  ){
         if(county !=='undefined'  ) {
             magic('div', 'city-list', county, '.content');
         }
    };
}
