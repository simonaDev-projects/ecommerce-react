import w1_image from './p1.jpg'
import w2_image from './p2.jpg'
import w3_image from './p3.jpg'
import w4_image from './p4.jpg'

import m1_image from './p5.jpg'
import m2_image from './p6.jpg'
import m3_image from './p7.jpg'
import m4_image from './p8.jpg'
import m5_image from './p9.jpg'
import m6_image from './p10.jpg'
import m7_image from './p11.jpg'
import m8_image from './p12.jpg'

import k1_image from './p13.jpg'
import k2_image from './p14.jpg'
import k3_image from './p15.jpg'
import k4_image from './p16.jpg'
import k5_image from './p17.jpg'
import k6_image from './p18.jpg'
import k7_image from './p19.jpg'

let all_products = [
   {
      id: 1,
      name: "Moteriškas drabužis (vienas)",
      descriction: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio cum fugiat aut cupiditate ea sint laboriosam modi alias blanditiis?",
      category: "women",
      image: w1_image,
      new_price: 80.00,
      old_price: 92.00
   },
   {
      id: 2,
      name: "Moteriškas drabužis (du)",
      descriction: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio cum fugiat aut cupiditate ea sint laboriosam modi alias blanditiis?",
      category: "women",
      image: w2_image,
      new_price: 60.00,
      old_price: 78.99
   },
   {
      id: 3,
      name: "Moteriškas drabužis (trys)",
      descriction: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio cum fugiat aut cupiditate ea sint laboriosam modi alias blanditiis?",
      category: "women",
      image: w3_image,
      new_price: 100.00,
      old_price: 192.00
   },
   {
      id: 4,
      name: "Moteriškas drabužis (vienas)",
      descriction: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio cum fugiat aut cupiditate ea sint laboriosam modi alias blanditiis?",
      category: "women",
      image: w4_image,
      new_price: 65.00,
      old_price: 88.00
   },
   {
      id: 5,
      name: "Vyriškas drabužis (vienas)",
      descriction: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio cum fugiat aut cupiditate ea sint laboriosam modi alias blanditiis?",
      category: "men",
      image: m1_image,
      new_price: 65.00,
      old_price: 88.00
   },
   {
      id: 6,
      name: "Vyriškas drabužis (du)",
      descriction: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio cum fugiat aut cupiditate ea sint laboriosam modi alias blanditiis?",
      category: "men",
      image: m2_image,
      new_price: 65.00,
      old_price: 88.00
   },
   {
      id: 7,
      name: "Vyriškas drabužis (trys)",
      descriction: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio cum fugiat aut cupiditate ea sint laboriosam modi alias blanditiis?",
      category: "men",
      image: m3_image,
      new_price: 65.00,
      old_price: 88.00
   },
   {
      id: 8,
      name: "Vyriškas drabužis (keturi)",
      descriction: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio cum fugiat aut cupiditate ea sint laboriosam modi alias blanditiis?",
      category: "men",
      image: m4_image,
      new_price: 65.00,
      old_price: 88.00
   },
   {
      id: 9,
      name: "Vyriškas drabužis (penki)",
      descriction: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio cum fugiat aut cupiditate ea sint laboriosam modi alias blanditiis?",
      category: "men",
      image: m5_image,
      new_price: 65.00,
      old_price: 88.00
   },
   {
      id: 10,
      name: "Vyriškas drabužis (šeši)",
      descriction: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio cum fugiat aut cupiditate ea sint laboriosam modi alias blanditiis?",
      category: "men",
      image: m6_image,
      new_price: 65.00,
      old_price: 88.00
   },
   {
      id: 11,
      name: "Vyriškas drabužis (septyni)",
      descriction: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio cum fugiat aut cupiditate ea sint laboriosam modi alias blanditiis?",
      category: "men",
      image: m7_image,
      new_price: 65.00,
      old_price: 88.00
   },
   {
      id: 12,
      name: "Vyriškas drabužis (aštuoni)",
      descriction: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio cum fugiat aut cupiditate ea sint laboriosam modi alias blanditiis?",
      category: "men",
      image: m8_image,
      new_price: 65.00,
      old_price: 88.00
   },
   {
      id: 13,
      name: "Vaikiškas drabužis (vienas)",
      descriction: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio cum fugiat aut cupiditate ea sint laboriosam modi alias blanditiis?",
      category: "kid",
      image: k1_image,
      new_price: 65.00,
      old_price: 88.00
   },
   {
      id: 14,
      name: "Vaikiškas drabužis (du)",
      descriction: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio cum fugiat aut cupiditate ea sint laboriosam modi alias blanditiis?",
      category: "kid",
      image: k2_image,
      new_price: 65.00,
      old_price: 88.00
   },
   {
      id: 15,
      name: "Vaikiškas drabužis (trys)",
      descriction: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio cum fugiat aut cupiditate ea sint laboriosam modi alias blanditiis?",
      category: "kid",
      image: k3_image,
      new_price: 65.00,
      old_price: 88.00
   },
   {
      id: 16,
      name: "Vaikiškas drabužis (keturi)",
      descriction: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio cum fugiat aut cupiditate ea sint laboriosam modi alias blanditiis?",
      category: "kid",
      image: k4_image,
      new_price: 65.00,
      old_price: 88.00
   },
   {
      id: 17,
      name: "Vaikiškas drabužis (penki)",
      descriction: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio cum fugiat aut cupiditate ea sint laboriosam modi alias blanditiis?",
      category: "kid",
      image: k5_image,
      new_price: 65.00,
      old_price: 88.00
   },
   {
      id: 18,
      name: "Vaikiškas drabužis (šeši)",
      descriction: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio cum fugiat aut cupiditate ea sint laboriosam modi alias blanditiis?",
      category: "kid",
      image: k6_image,
      new_price: 65.00,
      old_price: 88.00
   },
   {
      id: 19,
      name: "Vaikiškas drabužis (septyni)",
      descriction: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio cum fugiat aut cupiditate ea sint laboriosam modi alias blanditiis?",
      category: "kid",
      image: k7_image,
      new_price: 65.00,
      old_price: 88.00
   },
];

export default all_products;


