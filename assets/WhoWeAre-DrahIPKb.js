import{d as f,r as k,o as g,a as d,c as l,b as e,F as _,e as W,n as I,t as i,u as m,p as w,f as y,_ as b,g as $,h as c,w as p,i as v,H as V,j as q,C as O,S as A,k as M,s as N,l as j}from"./index-BKTgPEqA.js";/* empty css                                                              */const u=[{name:"integrity",path:"/images/Values/integrity.png",description:"We are honest and have strong moral principles. We behave ethically and do the right thing, even behind closed doors."},{name:"Ownership",path:"/images/Values/Ownership.png",description:"We take initiative and are responsible for the growth and success of our team and organization."},{name:"Compassion",path:"/images/Values/compassion.png",description:"We understand what others are going through, we empathize with them, and we show them that we love and care for them. We selflessly want to do things to help them."},{name:"Reliability",path:"/images/Values/reliability.png",description:"We are more resilient as an organization because of our consistency. We work together more effectively as a team. We value efficiency to grow and thrive as an organization."},{name:"Uniqueness",path:"/images/Values/uniqueness.png",description:"Our approach is unique and engaging. We strive to offer one-of-a-kind value."},{name:"Fun",path:"/images/Values/fun.png",description:"We enjoy our work. We work hard and play hard too!"}],S=t=>(w("data-v-88000ee1"),t=t(),y(),t),B={class:"values"},C=S(()=>e("img",{class:"navy",src:"/images/navyMask.jpg"},null,-1)),z=S(()=>e("img",{class:"white",src:"/images/whiteMask.jpg"},null,-1)),E=[C,z],L={class:"header-t"},H={class:"description"},P={class:"header-t"},T={class:"text-t"},D={class:"res-desc"},F={class:"text-s"},Y=f({__name:"ValuesGrid",setup(t){let a=k("");return g(()=>{a.value=u[0].description;let r=document.querySelectorAll(".value");r[0].classList.add("active"),r.forEach((s,o)=>{s.addEventListener("click",()=>{a.value=u[o].description,n(o)})});const n=s=>{r.forEach((o,x)=>{x===s?o.classList.add("active"):o.classList.remove("active")})}}),(r,n)=>(d(),l(_,null,[e("div",B,[(d(!0),l(_,null,W(m(u),(s,o)=>(d(),l("div",{class:"value",key:o},[e("div",{class:"mask",style:I({maskImage:`url(${s.path})`})},E,4),e("h3",L,i(s.name),1),e("div",H,[e("h3",P,i(s.name),1),e("p",T,i(s.description),1)])]))),128))]),e("div",D,[e("p",F,i(m(a)),1)])],64))}}),G=b(Y,[["__scopeId","data-v-88000ee1"]]),h=t=>(w("data-v-3421cba8"),t=t(),y(),t),R={class:"whoWeAre-wrapper"},U={class:"first-wrapper"},J=h(()=>e("h1",{class:"sectionHeader"},"Who we are",-1)),K={class:"info"},Q={class:""},X=h(()=>e("h3",{class:"header-t"},"Our story",-1)),Z={class:"infowrapper"},ee={class:"text-s"},te=h(()=>e("h3",{class:"header-t"},"Our Technique",-1)),se={class:"infowrapper"},ae={class:"text-s"},oe=h(()=>e("h3",{class:"header-t"},"Vision",-1)),ne={class:"image-values-wrapper"},ie={class:"values-info-wrapper"},re={class:"second-wrapper"},ce={class:"infowrapper"},de={class:"text-s"},le=h(()=>e("h3",{class:"header-t"},"Mission",-1)),he={class:"infowrapper"},pe={class:"text-s"},ue={class:"values-wrapper"},_e=h(()=>e("h3",{class:"header-t"},"Values",-1)),me={class:"image-wrapper",style:{backgroundImage:"url(/images/whoWeArePage.jpg)"}},ve=f({__name:"InfoSection",setup(t){const a=k({clinics:25,successful_cases:6660,employees:68,our_story:"Our story of success started with Dr. Mahmoud`s simple dream of being the best physical therapy clinic in town. It grew over the years into a dream that came true with the establishment of the PT of the city in 2020. We reached 14 locations in a few years, all over New York, with the dedication of our partners and team and the trust of our patients. And to more success, we go.",our_technique:"We offer you a treatment plan specialized for each case to achieve the most effective results. You will be given detailed information about the nature of the case and injury, the treatment plan, tools, and devices you will use, as well as the expected outcome from the treatment. Our main concern is your comfort and wellness. You will be treated with the most recent evidence guidelines and the most advanced tools, techniques, and devices that will help you reach the treatment goal in the most convenient way and in the shortest duration of time.",vision:"Our vision is to be the best physical therapy clinic in the world, providing the best services and the most effective treatment plans to our patients. We aim to reach the highest level of patient satisfaction and to be the first choice for patients in need of physical therapy services. We are committed to providing the best care and the most advanced treatment plans to our patients, and to be the best place for our employees to work and grow.",mission:"Our mission is to provide the best physical therapy services to our patients, to help them recover from their injuries and to improve their quality of life. We are committed to providing the most effective treatment plans and the most advanced tools and techniques to our patients, to help them reach their treatment goals in the most convenient way and in the shortest duration of time. We are dedicated to providing the best care and the most advanced treatment plans to our patients, and to be the best place for our employees to work and grow."}),r=async()=>{let n=await V.get("content/whoWeAre");a.value=n.body};return g(()=>{r()}),(n,s)=>{const o=$("router-link");return d(),l("div",R,[e("div",U,[J,e("div",K,[e("div",Q,[X,e("div",Z,[e("p",ee,i(a.value.our_story),1)])]),e("div",null,[te,e("div",se,[e("p",ae,i(a.value.our_technique),1)])]),oe])]),e("div",ne,[e("div",ie,[e("div",re,[e("div",ce,[e("p",de,i(a.value.vision),1)]),e("div",null,[le,e("div",he,[e("p",pe,i(a.value.mission),1)])])]),e("div",ue,[_e,c(G)])]),e("div",me,[c(o,{to:"/booking",class:"btn btnfont"},{default:p(()=>[v("Book Now")]),_:1})])])])}}}),fe=b(ve,[["__scopeId","data-v-3421cba8"]]),ge=t=>(w("data-v-65f7d37d"),t=t(),y(),t),we={class:"whoWeAre-container"},ye={class:"service"},be=ge(()=>e("h3",{class:"header-t"},"Our Services",-1)),ke={class:"btns-container"},We=f({__name:"WhoWeAre",setup(t){return g(()=>{q()}),(a,r)=>{const n=$("router-link");return d(),l("div",we,[c(fe),e("div",ye,[be,c(A,{NoTitle:""})]),c(O,{NoIndicator:"",class:"carousel"},{default:p(()=>[(d(!0),l(_,null,W(m(N),s=>(d(),M(j,{class:"s-staff",staffMember:s},null,8,["staffMember"]))),256))]),_:1}),e("div",ke,[c(n,{"active-class":"navbar-link",class:"btn btnfont",to:"/booking"},{default:p(()=>[v(" Book Now ")]),_:1}),c(n,{"active-class":"navbar-link",class:"btn transparent btnfont",to:"/"},{default:p(()=>[v(" Back to Home Page ")]),_:1})])])}}}),xe=b(We,[["__scopeId","data-v-65f7d37d"]]);export{xe as default};