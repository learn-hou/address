//搜索
document.querySelector('.input1').oninput=function( e ){
               create(search(e.target.value));
};
//搜查
let search = function ( k ) {
    return database.filter(
        v =>{
            let total = v.city + v.county + v.address + (v.phone && v.phone.join(' '));
            return  total.indexOf(k) !== -1;
            }
    );
};
// console.table(search(prompt( )));

//创建
let create = arr => {
    document.querySelector('.content').innerHTML = '';
    arr.forEach(
        v => {
            if (v.county) {
                let content = ` <a href="tel:${(v.phone) ? v.phone[0] : '114'}"></a>
                <h2 >${v.name.concat(v.county)}</h2>
                <h3 >${v.address ? v.address : '暂无此地址'}</h3>
                <img src="img/2.png" />
                `;
                magic('div', 'list', content, '.content');
            }

        }
    );
};
create(database);
//console.table(search(keyValue));

