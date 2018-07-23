/*let format = s = s => s.replace(/\/|、| ，|电 话 ：/g, ' ').trim().replace(/\s+/g, ' ').split(' ');
let v = database.map(
    x => {
        //city
        if (x.city && x.city.indexOf('市') == -1) {
            x.city = x.city.concat('市');
        }
        //county
        if (x.county) {
            x.county = x.county.replace(/外营业部|营业部|网点|省际|省|、长北|二部|一部|际/g, '').trim();
        }
        //address
        if (x.address) {
            x.address = x.address.replace(/地址：/g, '').trim();
        }
        //phone
        if (x.phone) {
            x.phone = format(String(x.phone));
        }
        return x;
    }
);
console.table(v);
*/