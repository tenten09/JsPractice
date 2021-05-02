'use strict';

{ 
 const point = {
   x: 100,
   y: 190,
 };
  
 const keys = Object.keys(point);
 keys.forEach(key => {
    console.log(`key: ${key} Value: ${point[key]}`)
 });

 const points = [
   {x: 30, y: 20},
   {x: 20, y: 30},
   {x: 40, y: 60},
 ];
 console.log(points[1].y);
}