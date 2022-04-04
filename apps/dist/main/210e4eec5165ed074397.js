"use strict";(globalThis.webpackChunkmain=globalThis.webpackChunkmain||[]).push([["src_bootstrap_jsx"],{"./src/bootstrap.jsx":(e,t,s)=>{s.r(t);var i=s("webpack/sharing/consume/default/react-dom/react-dom"),o=s("../../../node_modules/react/jsx-runtime.js"),r=s("../../../node_modules/@apollo/client/link/http/createHttpLink.js"),n=s("../../../node_modules/@apollo/client/core/ApolloClient.js"),a=s("../../../node_modules/@apollo/client/cache/inmemory/inMemoryCache.js"),d=s("../../../node_modules/@apollo/client/react/context/ApolloProvider.js"),c=s("webpack/sharing/consume/default/@super-rad-poc/design/styles/@super-rad-poc/design/styles"),l=s("webpack/sharing/consume/default/react/react"),m=s.n(l),h=s("webpack/sharing/consume/default/styled-components/styled-components"),u=s.n(h),v=s("webpack/sharing/consume/default/@super-rad-poc/design/components/@super-rad-poc/design/components"),j=s("./src/images/mascot/mascot_sad.png"),p=s("webpack/sharing/consume/default/@styled-system/theme-get/@styled-system/theme-get"),g=s.n(p),x=s("../../../node_modules/react-router-dom/index.js");const f=u().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(0,p.themeGet)("colors.primary_text")};
  color: ${(0,p.themeGet)("colors.light_text")};
`,b=u().span`
  color: ${(0,p.themeGet)("colors.accent")};
  font-size: ${e=>e.theme.fontSizes[2]};

  & > a {
    color: ${(0,p.themeGet)("colors.accent")};
    font-size: ${e=>e.theme.fontSizes[2]};
    text-decoration: none;

    &:hover {
      color: ${(0,p.themeGet)("colors.light_text")};
    }
  }
`,w=u().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`;function y(){return(0,o.jsxs)(f,{children:[(0,o.jsx)(c.Title,Object.assign({color:"#fafafa"},{children:"Uh oh! - 404"}),void 0),(0,o.jsx)(c.Subtitle,Object.assign({color:"#fafafa"},{children:"Looks like we can't find that page."}),void 0),(0,o.jsxs)(w,{children:[(0,o.jsxs)("span",{children:["Please"," ",(0,o.jsxs)(b,{children:[(0,o.jsx)(x.rU,Object.assign({to:"/"},{children:"Go Home"}),void 0)," "]},void 0),"and try again."]},void 0),(0,o.jsx)("br",{},void 0),(0,o.jsxs)("sub",{children:["If this keeps happening, please"," ",(0,o.jsx)(b,{children:(0,o.jsx)("a",Object.assign({target:"_blank",href:"mailto:support@sociium.io"},{children:"contect support"}),void 0)},void 0)]},void 0)]},void 0),(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:j,style:{width:"10rem"},alt:"Sad Mascot"},void 0)},void 0)]},void 0)}var k=s("./src/images/circle.png"),O=s("../../../node_modules/@react-three/fiber/dist/react-three-fiber.esm.js"),N=s("../../../node_modules/@react-three/drei/core/useTexture.js"),S=s("./src/images/mascot/mascot_happy_1.png");const _=u().div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: #000;
`;function C(){const e=(0,N.m)({map:k}),t=(0,l.useRef)();let s=0;const i=(0,l.useCallback)(((e,t)=>3.5*Math.sin(.002*(Math.pow(e,2)+Math.pow(t,2)+s))),[.002,3.5,s]),r=500,n=(0,l.useMemo)((()=>{let e=[];for(let t=0;t<r;t++)for(let s=0;s<r;s++){let o=3*(t-250),r=3*(s-250),n=i(o,r);e.push(o,n,r)}return new Float32Array(e)}),[i]);return(0,O.xQ)((()=>{var e;s-=4;const o=null===(e=t.current)||void 0===e?void 0:e.array;let n=0;for(let e=0;e<r;e++)for(let t=0;t<r;t++){let s=3*(e-250),r=3*(t-250);o&&(o[n+1]=i(s,r)),n+=3}t.current&&(t.current.needsUpdate=!0)})),(0,o.jsxs)("points",{children:[(0,o.jsx)("bufferGeometry",Object.assign({attach:"geometry"},{children:(0,o.jsx)("bufferAttribute",{ref:t,attachObject:["attributes","position"],count:n.length/3,itemSize:3,array:n},void 0)}),void 0),(0,o.jsx)("pointsMaterial",Object.assign({attach:"material"},e,{color:43775,size:.5,sizeAttenuation:!0,transparent:!1,alphaTest:.5,opacity:1}),void 0)]},void 0)}function F(){return(0,o.jsxs)(O.Xz,Object.assign({camera:{position:[100,15,0],fov:65}},{children:[(0,o.jsx)("ambientLight",{intensity:.5},void 0),(0,o.jsx)(l.Suspense,Object.assign({fallback:null},{children:(0,o.jsx)(C,{},void 0)}),void 0)]}),void 0)}const T=()=>(0,o.jsx)(l.Suspense,Object.assign({fallback:(0,o.jsx)(v.LoadingSpinner,{},void 0)},{children:(0,o.jsx)(_,{children:(0,o.jsx)(F,{},void 0)},void 0)}),void 0),P=u().div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,A=u().img`
  width: 10rem;
`,L=()=>{const[e,t]=(0,x.lr)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.SnackManager,{},void 0),(0,o.jsx)(T,{},void 0),(0,o.jsxs)(P,{children:[(0,o.jsxs)(c.ContainerTitle,{children:[(0,o.jsx)(c.Title,Object.assign({color:"white",style:{marginBottom:"0",width:"100%",textAlign:"center"}},{children:"Welcome"}),void 0),(0,o.jsx)(c.Subtitle,Object.assign({color:"white",style:{width:"100%",textAlign:"center"}},{children:"To Sociium"}),void 0)]},void 0),(0,o.jsx)(A,{src:S,alt:"mascot"},void 0),(0,o.jsx)(c.AccentLink,Object.assign({to:"/login",style:{width:"auto",padding:"1.5rem",marginTop:"2rem"}},{children:"Click here to get started"}),void 0)]},void 0)]},void 0)};var I=s("webpack/sharing/consume/default/@super-rad-poc/common/hooks/@super-rad-poc/common/hooks"),$=s("../../../node_modules/react-router/index.js");const R=({logout:e})=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.NavButton,Object.assign({onClick:()=>e()},{children:(0,o.jsx)("span",{children:"Logout"},void 0)}),void 0),(0,o.jsx)(c.NavButton,{children:(0,o.jsx)(x.rU,Object.assign({to:"/profile"},{children:"Profile"}),void 0)},void 0)]},void 0),E=({loginWithRedirect:e})=>(0,o.jsx)(c.NavButton,{children:(0,o.jsx)(x.rU,Object.assign({to:"/login"},{children:"Login"}),void 0)},void 0),G=({logout:e})=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.NavMenuItem,{children:(0,o.jsx)(x.rU,Object.assign({to:"/profile"},{children:"Profile"}),void 0)},void 0),(0,o.jsx)(c.NavMenuItem,{children:(0,o.jsx)("span",Object.assign({onClick:()=>e()},{children:"Logout"}),void 0)},void 0)]},void 0),M=()=>(0,o.jsx)(c.NavMenuItem,{children:(0,o.jsx)(c.NavLink,Object.assign({to:"/login"},{children:"Login"}),void 0)},void 0),z=()=>{const{isAuthenticated:e,setIsAuthenticated:t}=(0,I.useStore)(),[s,i]=(0,l.useState)(!1),[r,n]=(0,l.useState)(!1),a=(0,l.useRef)(null),d=(0,I.useWindowSize)(),{onLogout:m,token:h}=(0,v.useAuth)(),u=(0,$.TH)();return(0,l.useEffect)((()=>{i(!1)}),[u]),(0,I.useClickedOutside)([a],(function(){i(!1)})),(0,l.useEffect)((()=>{t(!!h),d&&d.width&&(d.width>768?(n(!1),i(!1)):n(!0))}),[d,h]),(0,o.jsxs)(c.Nav,Object.assign({ref:a},{children:[(0,o.jsx)(c.NavStart,{children:(0,o.jsx)(x.rU,Object.assign({to:"/"},{children:(0,o.jsx)(c.NavMain,{children:(0,o.jsxs)("span",Object.assign({style:{cursor:"pointer"}},{children:[(0,o.jsx)(c.NavTextPrimary,{children:"Soci"},void 0),(0,o.jsx)(c.NavTextSecondary,{children:"ium"},void 0)]}),void 0)},void 0)}),void 0)},void 0),(0,o.jsxs)(c.NavEnd,{children:[!r&&(0,o.jsxs)(c.NavButtons,{children:[(0,o.jsx)(c.NavButton,{children:(0,o.jsx)(x.rU,Object.assign({to:e?"/home":"/"},{children:"Home"}),void 0)},void 0),e?(0,o.jsx)(R,{logout:()=>m((()=>{}))},void 0):(0,o.jsx)(E,{loginWithRedirect:()=>m((()=>{}))},void 0)]},void 0),r&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.NavBurger,{isActive:s,onClicked:()=>i(!s)},void 0),(0,o.jsxs)(c.NavMenu,Object.assign({isActive:s},{children:[(0,o.jsx)(c.NavMenuItem,{children:(0,o.jsx)(x.rU,Object.assign({to:e?"/home":"/"},{children:"Home"}),void 0)},void 0),e?(0,o.jsx)(G,{logout:()=>()=>{}},void 0):(0,o.jsx)(M,{},void 0)]}),void 0)]},void 0)]},void 0)]}),void 0)};var B="/home/brandon/Projects/nx-event-driven/apps/main/ui/src/remote-utils.jsx";const W=({remoteName:e,moduleName:t})=>{const[i,o]=(0,l.useState)(m().createElement(m().Fragment,null,m().createElement("p",{__self:void 0,__source:{fileName:B,lineNumber:72,columnNumber:7}},"Loading...")));return(0,l.useEffect)((()=>{(async e=>{const t=`${window.location.port}/${e}`,i=`${window.location.protocol}//${window.location.hostname}`;return await(e=>new Promise((t=>{if(!e)return;const s=document.createElement("script");s.src=e,s.type="text/javascript",s.async=!0,s.onload=()=>{t(!0)},s.onerror=()=>{t(!1)},document.head.appendChild(s)})))(`${i}:${t}/remoteEntry.js`),await(async(e,t=".")=>{await s.I("default");const i=window[e];return i?(await i.init(s.S.default),(await window[e].get(t))()):void console.log(NO_REMOTE_ERROR)})(e)})([e]).then((e=>{o(e[t])}))}),[e]),i},D=({remoteName:e,moduleName:t})=>m().createElement(W,{remoteName:e,moduleName:t,__self:void 0,__source:{fileName:B,lineNumber:86,columnNumber:3}}),q=Object.assign(Object.assign({},c.BaseTheme),{colors:Object.assign({},c.BaseTheme.colors)});var U=s("../../../node_modules/@apollo/link-context/lib/bundle.esm.js"),H=s("../../../node_modules/tslib/tslib.es6.js"),Z=s("../../../node_modules/axios/index.js"),Y=s.n(Z);const V=u().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${g()("colors.primary_text")};
  color: ${g()("colors.light_text")};
`,J=u().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`,K=()=>{const[e]=(0,x.lr)(),t=e.get("token"),[s,i]=(0,l.useState)(!0),r=(0,$.s0)(),[n,a]=(0,l.useState)(null);return(0,l.useEffect)((()=>{t?(0,H.mG)(void 0,void 0,void 0,(function*(){try{yield Y().post("http://localhost:5002/verify/",{token:t}),i(!1),setTimeout((()=>{r("/login")}),5e3)}catch(e){a(e)}})):a("No token provided")}),[t]),(0,o.jsx)("div",{children:s?(0,o.jsx)(v.LoadingSpinner,{},void 0):(0,o.jsx)("div",{children:n?(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Error"},void 0),(0,o.jsx)("p",{children:n},void 0)]},void 0):(0,o.jsxs)(V,{children:[(0,o.jsx)(c.Title,Object.assign({color:"#fafafa"},{children:"Verification Successful!"}),void 0),(0,o.jsx)("p",Object.assign({color:"#fafafa"},{children:"In order to keep everyone safe, we require that you verify your email before you can log in."}),void 0),(0,o.jsxs)(J,{children:[(0,o.jsx)("p",Object.assign({color:"#fafafa"},{children:"Please check your email for a verification link."}),void 0),(0,o.jsxs)("p",{children:["You will be automatically redirected to the login page in a couple seconds."," "]},void 0),(0,o.jsxs)("p",{children:[" ","Otherwise, you can also ",(0,o.jsx)(x.rU,Object.assign({to:"/login"},{children:"click here"}),void 0)]},void 0)]},void 0),(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:S,style:{width:"10rem"},alt:"Sad Mascot"},void 0)},void 0)]},void 0)},void 0)},void 0)};var Q=s("./src/images/mascot/mascot_face.png"),X=s("./src/images/mascot/mascot_hello.png"),ee=s("../../../node_modules/jwt-decode/build/jwt-decode.esm.js"),te=s("../../../node_modules/class-transformer/esm5/index.js");class se{constructor(e,t,s,i,o,r,n,a,d,c,l,m,h,u,v,j,p,g,x,f,b,w,y,k,O){this.id=e,this.email=t,this.password=s,this.firstName=i,this.lastName=o,this.verification=r,this.friendRequestIds=n,this.createdAt=a,this.updatedAt=d,this.isActive=c,this.isBanned=l,this.verified=m,this.banDuration=h,this.middle_name=u,this.nickname=v,this.preferred_username=j,this.profile=p,this.picture=g,this.website=x,this.birthdate=f,this.gender=b,this.zoneInfo=w,this.locale=y,this.phone_number=k,this.phone_number_verified=O}}const ie=u().div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`,oe=()=>{const[e,t]=(0,l.useState)(""),[s,i]=(0,l.useState)(""),[r,n]=(0,l.useState)(""),[a,d]=(0,l.useState)(!1),m=(0,$.s0)(),{onLogin:h}=(0,v.useAuth)(),[u,j]=(0,l.useState)(!1),{setToken:p,setUser:g}=(0,I.useStore)();return(0,o.jsxs)(ie,{children:[a&&(0,o.jsx)(c.CubeSpinner,{},void 0),u?(0,o.jsxs)("div",Object.assign({style:{display:"flex",justifyContent:"center",alignItems:"center"}},{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(c.Title,{children:"Success!"},void 0),(0,o.jsx)(c.Subtitle,{children:"You are now logged in."},void 0),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"We are redirecting you now. If it takes to long, you can "},void 0),(0,o.jsx)(c.Link,Object.assign({to:"/"},{children:"click here"}),void 0)]},void 0)]},void 0),(0,o.jsx)("div",Object.assign({style:{flex:"1 1 auto"}},{children:(0,o.jsx)("img",{src:X,style:{width:"8rem"},alt:"mascot"},void 0)}),void 0)]}),void 0):(0,o.jsxs)(c.Card,{children:[(0,o.jsxs)(c.CardHeader,Object.assign({style:{display:"flex",flexDirection:"column"}},{children:[(0,o.jsx)("img",{style:{width:"8rem",position:"absolute",top:"-7rem",left:"5rem"},src:Q,alt:"Mascot Face"},void 0),(0,o.jsx)(c.CardTitle,{children:"Login"},void 0)]}),void 0),(0,o.jsxs)(c.CardBody,{children:[(0,o.jsxs)("form",Object.assign({onSubmit:t=>(t=>{t.preventDefault(),n(""),d(!0),h({email:e,password:s},((e,t)=>{if(t&&n(t.message),e){d(!1),j(!0),p(e);const t=(0,ee.Z)(e);g((0,te.d8)(se,t.data)),console.log(e),setTimeout((()=>{m("/home")}),5e3)}}))})(t),style:{marginBottom:".5rem"}},{children:[(0,o.jsxs)(c.FormGroup,{children:[(0,o.jsx)(c.FormInput,{style:{width:"auto"},type:"email",className:"form-control",id:"email",autoComplete:"email",placeholder:"Email",value:e,onChange:e=>t(e.target.value)},void 0),(0,o.jsx)(c.FormLabel,Object.assign({htmlFor:"email"},{children:"Email"}),void 0)]},void 0),(0,o.jsxs)(c.FormGroup,{children:[(0,o.jsx)(c.FormInput,{style:{width:"auto"},type:"password",autoComplete:"current-password",className:"form-control",id:"password",placeholder:"Password",value:s,onChange:e=>i(e.target.value)},void 0),(0,o.jsx)(c.FormLabel,Object.assign({htmlFor:"password"},{children:"Password"}),void 0)]},void 0),(0,o.jsx)(c.SubmitButton,{style:{width:"100%"},type:"submit",disabled:a},void 0)]}),void 0),(0,o.jsxs)("span",Object.assign({style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}},{children:[(0,o.jsx)("pre",{children:"Need an account? "},void 0)," ",(0,o.jsx)(c.Link,Object.assign({to:"/register"},{children:"Register"}),void 0)]}),void 0)]},void 0)]},void 0),r&&(0,o.jsx)(c.Snackbar,{message:r},void 0)]},void 0)},re="http://localhost:5002/register";var ne,ae=s("../../../node_modules/joi/dist/joi-browser.min.js"),de=s("webpack/sharing/consume/default/@super-rad-poc/desgn/icons/@super-rad-poc/desgn/icons");const ce=ae.object({email:ae.string().email({tlds:{allow:!1}}).required(),password:null===(ne=ae.string().min(8))||void 0===ne?void 0:ne.message("Password must be at least 8 characters long").pattern(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/).message("Password must contain at least one special character").pattern(/(?=.*[a-z])(?=.*[A-Z])/).message("Password must contain at least one lowercase and one uppercase character").required(),firstName:ae.string().required(),lastName:ae.string().required()}),le=u().div`
  position: relative;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`,me=u().form`
  display: grid;
  grid-template-columns: 1fr minmax(25px, 50px) 1fr;
  gap: 8px;
  grid-auto-rows: minmax(3rem, auto);
`,he=u().div`
  position: relative;
  right: -40px;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 0 8px;
  border-left: 1px solid #ccc;

  span:not(:last-child) {
    margin-bottom: 3rem;
  }
`,ue=u().span`
  display: flex;
  align-items: flex-start;
  width: 100%;
`,ve=()=>{const[e,t]=(0,l.useState)(""),[s,i]=(0,l.useState)(""),[r,n]=(0,l.useState)(""),[a,d]=(0,l.useState)(""),[m,h]=(0,l.useState)(""),[u,v]=(0,l.useState)(""),[j,p]=(0,l.useState)(!1),{token:g,setToken:x}=(0,I.useStore)(),{}=(0,$.s0)(),[f,b]=(0,l.useState)(!1),[w,y]=(0,l.useState)(!1),[k,O]=(0,l.useState)(!1),[N,S]=(0,l.useState)(!1),[_,C]=(0,l.useState)(!1),[F,T]=(0,l.useState)(!1),[P,A]=(0,l.useState)(!1),L=(0,$.s0)();return(0,l.useEffect)((()=>{s.length>=8?b(!0):b(!1),s.match(/[A-Z]/)?y(!0):y(!1),s.match(/[a-z]/)?O(!0):O(!1),s.match(/[0-9]/)?S(!0):S(!1),s.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)?C(!0):C(!1),s.length>0&&s===r?A(!0):A(!1),T(!!(f&&w&&k&&N&&_&&P))}),[e,s,a,m,r]),(0,o.jsxs)(le,{children:[(0,o.jsxs)(c.Card,Object.assign({style:{marginTop:"2rem"}},{children:[(0,o.jsxs)(c.CardHeader,Object.assign({style:{display:"flex",flexDirection:"column"}},{children:[(0,o.jsx)("img",{style:{width:"8rem",position:"absolute",top:"-5rem",left:"2rem"},src:Q,alt:"Mascot Face"},void 0),(0,o.jsx)(c.CardTitle,{children:"Register"},void 0)]}),void 0),(0,o.jsx)(c.CardBody,{children:(0,o.jsxs)("div",Object.assign({style:{display:"flex",flexDirection:"row",justifyContent:"center",marginBottom:"1rem",width:"100%"}},{children:[(0,o.jsxs)(me,Object.assign({onSubmit:t=>(0,H.mG)(void 0,void 0,void 0,(function*(){t.preventDefault(),p(!0);const{error:i,value:o}=ce.validate({email:e,password:s,firstName:a,lastName:m});if(i)return v(i.message),void p(!1);try{const t=yield fetch(`${re}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:s,confirmPassword:r,firstName:a,lastName:m})}),i=yield t.json();i.error?v(i.error):(v(""),L("/confirm"))}catch(e){v("Something went wrong")}p(!1)}))},{children:[(0,o.jsxs)(c.FormGroup,Object.assign({style:{gridColumn:"1",gridRow:"1",width:"100%"}},{children:[(0,o.jsx)(c.FormInput,{type:"text",autoComplete:"firstName",required:!0,className:"form-control",id:"firstName",name:"firstName",placeholder:"First Name",value:a,onChange:e=>d(e.target.value)},void 0),(0,o.jsx)(c.FormLabel,Object.assign({htmlFor:"firstName"},{children:"First Name"}),void 0)]}),void 0),(0,o.jsx)("span",{},void 0),(0,o.jsxs)(c.FormGroup,Object.assign({style:{gridColumn:"3",gridRow:"1",width:"100%"}},{children:[(0,o.jsx)(c.FormInput,{type:"text",required:!0,autoComplete:"lastName",className:"form-control",id:"lastName",name:"lastName",placeholder:"Last Name",value:m,onChange:e=>h(e.target.value)},void 0),(0,o.jsx)(c.FormLabel,Object.assign({htmlFor:"lastName"},{children:"Last Name"}),void 0)]}),void 0),(0,o.jsxs)(c.FormGroup,Object.assign({style:{gridColumn:"1 / -1",gridRow:"2",width:"100%"}},{children:[(0,o.jsx)(c.FormInput,{type:"email",required:!0,autoComplete:"email",className:"form-control",name:"email","aria-required":!0,id:"email",placeholder:"Email",value:e,onChange:e=>t(e.target.value)},void 0),(0,o.jsx)(c.FormLabel,Object.assign({htmlFor:"email"},{children:"Email"}),void 0)]}),void 0),(0,o.jsxs)(c.FormGroup,Object.assign({style:{gridColumn:"1 /-1",gridRow:"3",width:"100%"}},{children:[(0,o.jsx)(c.FormInput,{type:"password",className:"form-control",id:"password",autoComplete:"new-password",placeholder:"Password",name:"password",value:s,onChange:e=>i(e.target.value)},void 0),(0,o.jsx)(c.FormLabel,Object.assign({htmlFor:"password"},{children:"Password"}),void 0)]}),void 0),(0,o.jsx)("span",{},void 0),(0,o.jsxs)(c.FormGroup,Object.assign({style:{gridColumn:"1 / -1",gridRow:"4",width:"100%"}},{children:[(0,o.jsx)(c.FormInput,{type:"password",required:!0,autoComplete:"new-password",className:"form-control",name:"confirmPassword",id:"confirmPassword",placeholder:"Confirm Password",value:r,onChange:e=>n(e.target.value)},void 0),(0,o.jsx)(c.FormLabel,Object.assign({htmlFor:"password"},{children:"Confirm Password"}),void 0)]}),void 0),(0,o.jsx)(c.SubmitButton,{type:"submit",style:{width:"100%",gridColumn:"1 / -1",gridRow:"5"},disabled:j},void 0),(0,o.jsxs)("div",Object.assign({style:{gridColumn:"1 / -1",gridRow:"6",display:"flex",flexDirection:"row",alignItems:"center"}},{children:[(0,o.jsx)("pre",{children:"Already have an account?"},void 0)," ",(0,o.jsx)(c.Link,Object.assign({to:"/login"},{children:"Login"}),void 0)]}),void 0)]}),void 0),(0,o.jsxs)(he,{children:[(0,o.jsxs)(ue,{children:[(0,o.jsx)(de.CheckIcon,{stroke:F||w&&k?"#00C853":"#D50000",strokeWidth:2,style:{width:"16px",marginRight:"2px",marginTop:"2px"}},void 0),(0,o.jsx)("sub",{children:"Password must contain both uppercase and lowercase characters"},void 0)]},void 0),(0,o.jsxs)(ue,{children:[(0,o.jsx)(de.CheckIcon,{stroke:F||N?"#00C853":"#D50000",strokeWidth:2,style:{width:"16px",marginRight:"2px",marginTop:"2px"}},void 0),(0,o.jsx)("sub",{children:"Password must contain at least one number"},void 0)]},void 0),(0,o.jsxs)(ue,{children:[(0,o.jsx)(de.CheckIcon,{stroke:F||_?"#00C853":"#D50000",strokeWidth:2,style:{width:"16px",marginRight:"2px",marginTop:"2px"}},void 0),(0,o.jsx)("sub",{children:"Password must contain at least one special character"},void 0)]},void 0),(0,o.jsxs)(ue,{children:[(0,o.jsx)(de.CheckIcon,{stroke:F||f?"#00C853":"#D50000",strokeWidth:2,style:{width:"16px",marginRight:"2px",marginTop:"2px"}},void 0),(0,o.jsx)("sub",{children:"Password must be at least 8 characters long"},void 0)]},void 0),(0,o.jsxs)(ue,{children:[(0,o.jsx)(de.CheckIcon,{stroke:F||P?"#00C853":"#D50000",strokeWidth:2,style:{width:"16px",marginRight:"2px",marginTop:"2px"}},void 0),(0,o.jsx)("sub",{children:"Confirm Password must match Password"},void 0)]},void 0)]},void 0)]}),void 0)},void 0)]}),void 0),j&&(0,o.jsx)(c.CubeSpinner,{},void 0),u&&(0,o.jsx)(c.Snackbar,{message:u},void 0)]},void 0)};var je=s("./src/images/mascot/mascot_explain.png");const pe=u().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(0,p.themeGet)("colors.primary_text")};
  color: ${(0,p.themeGet)("colors.light_text")};
`,ge=(u().span`
  color: ${(0,p.themeGet)("colors.accent")};
  font-size: ${e=>e.theme.fontSizes[2]};

  & > a {
    color: ${(0,p.themeGet)("colors.accent")};
    font-size: ${e=>e.theme.fontSizes[2]};
    text-decoration: none;

    &:hover {
      color: ${(0,p.themeGet)("colors.light_text")};
    }
  }
`,u().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`);function xe(){const e=(0,$.s0)();return l.useEffect((()=>{setTimeout((()=>{e("/")}),5e3)})),(0,o.jsxs)(pe,{children:[(0,o.jsx)(c.Title,Object.assign({color:"#fafafa"},{children:"Thanks for signing up!"}),void 0),(0,o.jsx)("p",Object.assign({color:"#fafafa"},{children:"In order to keep everyone safe, we require that you verify your email before you can log in."}),void 0),(0,o.jsxs)(ge,{children:[(0,o.jsx)("p",Object.assign({color:"#fafafa"},{children:"Please check your email for a verification link."}),void 0),(0,o.jsxs)("p",{children:["You will be automatically redirected to the home page in a couple seconds."," "]},void 0),(0,o.jsxs)("p",{children:[" ","Otherwise, you can also ",(0,o.jsx)(c.Link,Object.assign({to:"/"},{children:"click here"}),void 0)]},void 0)]},void 0),(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:je,style:{width:"10rem"},alt:"Sad Mascot"},void 0)},void 0)]},void 0)}const fe=({children:e})=>{const{token:t}=(0,v.useAuth)(),s=(0,r.L)({uri:"http://localhost:3333/graphql"}),i=(0,U.v)(((e,{headers:s})=>({headers:Object.assign(Object.assign({},s),{authorization:t?`Bearer ${t}`:null})}))),c=new n.f({link:i.concat(s),cache:new a.h,connectToDevTools:!0});return(0,o.jsx)(d.e,Object.assign({client:c},{children:e}),void 0)},be=u().div`
  //overflow: hidden;
`,we=()=>{const{isAuthenticated:e}=(0,I.useStore)();return(0,o.jsx)(v.AuthProvider,{children:(0,o.jsx)(c.CustomThemeProvider,Object.assign({theme:q},{children:(0,o.jsx)(fe,{children:(0,o.jsxs)(l.Suspense,Object.assign({fallback:(0,o.jsx)(v.LoadingSpinner,{},void 0)},{children:[(0,o.jsx)(z,{},void 0),(0,o.jsxs)(be,{children:[(0,o.jsxs)($.Z5,{children:[(0,o.jsx)($.AW,{path:"/",element:(0,o.jsx)(L,{},void 0)},void 0),(0,o.jsx)($.AW,{path:"/login",element:(0,o.jsx)(oe,{},void 0)},void 0),(0,o.jsx)($.AW,{path:"/register",element:(0,o.jsx)(ve,{},void 0)},void 0),(0,o.jsx)($.AW,{path:"/verify",element:(0,o.jsx)(K,{},void 0)},void 0),(0,o.jsx)($.AW,{path:"/confirm",element:(0,o.jsx)(xe,{},void 0)},void 0),(0,o.jsx)($.AW,{path:"/home",element:(0,o.jsx)(v.ProtectedRoute,{isAuthenticated:e,outlet:(0,o.jsx)(D,{remoteName:"home",moduleName:"Home"},void 0)},void 0)},void 0),(0,o.jsx)($.AW,{path:"/profile",element:(0,o.jsx)(v.ProtectedRoute,{isAuthenticated:e,outlet:(0,o.jsx)(D,{remoteName:"profile",moduleName:"Profile"},void 0)},void 0)},void 0),(0,o.jsx)($.AW,{path:"*",element:(0,o.jsx)(y,{},void 0)},void 0)]},void 0),(0,o.jsx)(D,{remoteName:"messages",moduleName:"Messages"},void 0)]},void 0)]}),void 0)},void 0)}),void 0)},void 0)};var ye="/home/brandon/Projects/nx-event-driven/apps/main/ui/src/bootstrap.jsx";i.render(m().createElement(x.VK,{__self:void 0,__source:{fileName:ye,lineNumber:7,columnNumber:3}},m().createElement(we,{__self:void 0,__source:{fileName:ye,lineNumber:8,columnNumber:5}})),document.getElementById("root"))},"./src/images/circle.png":(e,t,s)=>{e.exports=s.p+"8e033c5dd2fd51875d15.png"},"./src/images/mascot/mascot_explain.png":(e,t,s)=>{e.exports=s.p+"e6912e7144db63c46271.png"},"./src/images/mascot/mascot_face.png":(e,t,s)=>{e.exports=s.p+"7e26a0a196da3d721424.png"},"./src/images/mascot/mascot_happy_1.png":(e,t,s)=>{e.exports=s.p+"8faeee9c7dfde9ce051e.png"},"./src/images/mascot/mascot_hello.png":(e,t,s)=>{e.exports=s.p+"c0cf79c827ed4403b20e.png"},"./src/images/mascot/mascot_sad.png":(e,t,s)=>{e.exports=s.p+"4ab785e80eede8efb9a1.png"}}]);
//# sourceMappingURL=210e4eec5165ed074397.js.map