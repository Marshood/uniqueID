# uniqueID
A module that return unique random characters which could be all be string or numbers. It can also generate random API keys separated by any special character of your choice at every 4th character


# Installation 
```
 $ npm i uniqueapi_id
 $ npm i uniqueapi_id --save-dev
```
# Usage

```js
import {APIKEY,RandomNum,RandomString} from 'uniqueapi_id';

APIKEY();        // =>  f4cR-7qfs-ssYJ-1hEL
RandomNum();     // => 7880153464456115
RandomString(); // => lBuEmxWZGZLYQXfJ

APIKEY(length?: number, ch?: string, div?: number, string?: string) 
RandomNum: (length?: number, string?: string)
RandomNum: (length?: number, string?: string)
```