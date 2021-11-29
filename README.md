# uniqueID
A module that return unique random characters which could be all be string or numbers. It can also generate random API keys separated by any special character of your choice at every length of character
And we make it unique using hashMap

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

# API 
```js
APIKEY(length,ch,div,string)
`Returns a 16 character with numbers unique API KEY.
you can change the length for the API and the chatacters that you want to use 

for example :-
APIKEY(8,'^',2,'abcd') // => ca^cd^cb^cb
APIKEY(8,'^',3,'abcd') // => dca^adc
APIKEY(9,'^',3,'abcd') // => aac^aab^cab

```

```js 
RandomNum() 
`Returns a 16  numbers unique numbers.
you can change the length for the numbers and the numbers that you want to use 

for example :-
RandomNum(8)        // => 77619850
RandomNum(9,"123") // => 231211123
 

```
  
```js 
RandomString() 
`Returns a  16 chatacters unique string.
you can change the length for the string and the chatacters that you want to use 

for example :-
RandomString(8)         // => EakAvoLE
RandomString(9,"abc")  // => bacbabbcb
RandomString(9,'aB@') // =>BBaB@aaaB

```
 