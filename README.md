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

```js
GetStoredKeys(type);
return all the keys that you storied or created and you can filter the result using the type that you want to retrun 
{'All','APIKEY','RandomNum','RandomString'}

`for example :-
Map(10) {
  '143n-FYM2-WDLQ-KIjQ' => 'APIKEY',
  'OeYAfgCHDhDQiCEi' => 'RandomString',
  'WtBDOTbpPUfwKqMF' => 'RandomString',
  'pHXCDiLCczolBbTz' => 'RandomString',
  '1769094931461554' => 'RandomNum',
  '2981002676917991' => 'RandomNum',
  '1581619707313045' => 'RandomNum',
  'RSSJ-2HlV-SRXN-nLG9' => 'APIKEY',
  '5X68-XRuq-uUR1-wNhP' => 'APIKEY',
  'DX9K-FnVU-OU3K-0RGu' => 'APIKEY'
}

`
GetStoredKeys('APIKEY'); => return =>
 [
 'aOBn-UZLN-4G0E-GZnB',
  'NP6C-T10G-OL9c-Yh08',
  'hjl5-P92j-2M1X-GO60',
  'GcMK-jaAs-fKSZ-h4VB'
]


GetStoredKeys('RandomNum'); => return =>
[ '0661733995047648', '5713791441242471', '1316186320977653' ]
GetStoredKeys('RandomString'); => return =>
[ 'XJrHgQYfbwgHLLdH', 'neNRXsyqOMwcvgwH', 'hQspYznGjeStGZxM' ]

GetStoredKeys('All'); => return =>
{
  'aOBn-UZLN-4G0E-GZnB',
  'XJrHgQYfbwgHLLdH',
  'neNRXsyqOMwcvgwH',
  'hQspYznGjeStGZxM',
  '0661733995047648',
  '5713791441242471',
  '1316186320977653',
  'NP6C-T10G-OL9c-Yh08',
  'hjl5-P92j-2M1X-GO60',
  'GcMK-jaAs-fKSZ-h4VB'
}


```
