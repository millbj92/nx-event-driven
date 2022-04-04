"use strict";(globalThis.webpackChunkmain=globalThis.webpackChunkmain||[]).push([["libs_design_styles_src_index_ts"],{"../../../libs/design/styles/src/index.ts":(e,t,o)=>{o.r(t),o.d(t,{AccentButton:()=>M,AccentLink:()=>T,AvatarContainer:()=>et,BallAnimation:()=>Te,BaseTheme:()=>F,BounceAnimation:()=>Me,Card:()=>s,CardBody:()=>m,CardDate:()=>c,CardFooter:()=>h,CardFooterContent:()=>g,CardFooterLink:()=>x,CardHeader:()=>l,CardImage:()=>p,CardTitle:()=>d,CardToolbar:()=>f,CircleImage:()=>Ve,Container:()=>V,ContainerTitle:()=>te,CubeSpinner:()=>pe,CustomThemeProvider:()=>Y,FormGroup:()=>v,FormInput:()=>w,FormLabel:()=>$,FormTextArea:()=>k,GlassmorphismContainer:()=>Q,HeadingTertiary:()=>ne,Input:()=>z,Link:()=>se,MessageLoadingIndicator:()=>Ie,Messenger:()=>qe,Nav:()=>O,NavBurger:()=>Z,NavButton:()=>U,NavButtons:()=>K,NavEnd:()=>P,NavLink:()=>X,NavMain:()=>A,NavMenu:()=>D,NavMenuItem:()=>W,NavStart:()=>I,NavTextPrimary:()=>N,NavTextSecondary:()=>E,OnHoverScrollContainer:()=>Ce,PinchedTooltip:()=>ke,PostButton:()=>B,PostForm:()=>b,SnackManager:()=>ve,Snackbar:()=>ye,StyledAgentFace:()=>Ke,StyledChatBox:()=>He,StyledChatBoxHeader:()=>Ye,StyledChatInner:()=>Je,StyledChatMessageContainer:()=>Fe,StyledChatMessageContent:()=>Ge,StyledCheckmarkContainer:()=>Pe,StyledMessage:()=>Ae,StyledMessageBoxAvatar:()=>Oe,StyledMessageBoxMenu:()=>Ue,StyledMessageBoxMenuButton:()=>Re,StyledMessageBoxMenuItems:()=>Ze,StyledMessageBoxSubmit:()=>We,StyledMessageInput:()=>Xe,StyledMessageList:()=>Qe,StyledMessageTimestamp:()=>Le,StyledMessage_Box:()=>De,StyledNewMessage:()=>Ne,StyledPersonalMessage:()=>Ee,StyledScrollBar:()=>Se,StyledScrollBarThumb:()=>_e,StyledScrollhost:()=>ze,StyledScrollhostContainer:()=>je,StyledSnackbar:()=>xe,StyledSnackbarActionButton:()=>ue,StyledSnackbarContent:()=>fe,Sub:()=>le,SubmitButton:()=>y,Subtitle:()=>re,Text:()=>ae,Title:()=>ie,Tooltip:()=>we,TooltipText:()=>$e,style:()=>Be});var i=o("webpack/sharing/consume/default/@styled-system/theme-get/@styled-system/theme-get"),r=o.n(i),n=o("webpack/sharing/consume/default/styled-components/styled-components"),a=o.n(n);const s=a().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  padding: 1rem;

  background-color: ${r()("colors.light_text")};
  border-radius: ${r()("radii.default")};
  box-shadow: ${r()("shadows.container")};
`,l=a().div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 40%;
  padding: 0.2rem;

  border-bottom: 1px solid ${r()("colors.primary")};
`,d=a().h1`
  font-size: 1.5rem;
  font-weight: bold;
`,c=a().sub`
  font-size: 0.8rem;
  margin-left: auto;
  color: #3448c5;
`,p=a().img`
  position: absolute;
  top: -3.75rem;
  left: 1.5rem;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
`,m=a().article`
  font-size: 1rem;
  padding: 2rem;
`,h=a().footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0.2rem;
  border-top: 1px solid ${r()("colors.primary")};
`,g=a().div`
  padding: 1rem;
  width: 100%;
  height: 100;
  display: flex;
`,x=a().span`
  display: flex;
  & > a {
    font-size: 1rem;
    color: ${r()("colors.primary")};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    &:hover,
    &:focus {
      color: ${r()("colors.secondary")};
    }
  }
`,f=a().div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;var u=o("../../../node_modules/styled-system/dist/index.esm.js");const b=a().form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8rem;
  ${u.bK};
`,y=a().input`
  width: 50%;
  height: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  background-color: ${r()("colors.accent")};
  color: ${r()("colors.white")};
  font-size: ${e=>e.theme.fontSizes[2]};
  font-family: ${r()("fonts.primary")};
  padding: 10px;
  border-radius: ${r()("radii.default")};
  box-shadow: ${r()("shadows.elevation_1")};
  margin-left: auto;

  &:hover {
    box-shadow: ${r()("shadows.elevation_2")};
    transform: translateY(-2px) scale(1.02);
  }

  &:active,
  &:focus {
    box-shadow: ${r()("shadows.elevation_3")};
    transform: translateY(0) scale(1);
  }

  &:disabled {
    background-color: ${r()("colors.gray_light")};
    color: ${r()("colors.gray_dark")};
    cursor: not-allowed;
  }
`,v=a().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-bottom: 2rem;
  position: relative;

  input {
    &::placeholder {
      opacity: 0;
    }
  }

  label {
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 10px;
    left: 10px;
    color: ${r()("colors.gray_light")};
    font-size: ${e=>e.theme.fontSizes[2]};
    font-family: ${r()("fonts.primary")};
    color: ${r()("colors.primary_text")};
    margin-bottom: 0.5rem;
  }

  input:focus ~ label,
  textarea:focus ~ label,
  input:not(:placeholder-shown) ~ label,
  textarea:not(placeholder-shown) ~ label {
    color: ${r()("colors.primary")};
    font-size: ${e=>e.theme.fontSizes[2]};
    font-family: ${r()("fonts.primary")};
    font-weight: ${r()("fontWeights.normal")};
    text-shadow: ${r()("shadows.elevation_1")};
    top: -0.25rem;
    left: 1px;
    transform: translateY(-100%);
  }
`,w=a().input`
  width: 100%;
  border: none;
  outline: none;
  background-color: ${r()("colors.gray_light")};
  color: ${r()("colors.primary_text")};
  font-size: ${e=>e.theme.fontSizes[2]};
  font-family: ${r()("fonts.primary")};
  padding: 10px;
  border-radius: ${r()("radii.default")};
  box-shadow: ${r()("shadows.elevation_1")};
  margin-left: auto;

  &:focus,
  &:active {
    border: 1px solid ${r()("colors.primary")};
  }
`,$=a().label`
  pointer-events: none;
`,k=a().textarea`
  width: 100%;
  height: 100%;
  outline: none;
  resize: none;
  margin-bottom: 0.5rem;
  padding: 10px;
  font-size: ${e=>e.theme.fontSizes[2]};
  background-color: ${r()("colors.white")};
  color: ${r()("colors.primary_text")};
  border-radius: ${r()("radii.default")};
  box-shadow: ${r()("shadows.elevation_1")};
  border: 1px solid ${r()("colors.gray_light")};

  &:focus,
  &:active {
    border: 1px solid ${r()("colors.primary")};
  }
`,z=a().input`
  margin: 0.5rem;
  padding: 0.5rem;
  outline: none;
  margin-bottom: 0.5rem;

  font-size: ${e=>e.theme.fontSizes[2]};
  background-color: ${r()("colors.white")};
  color: ${r()("colors.primary_text")};
  border-radius: ${r()("radii.default")};
  box-shadow: ${r()("shadows.elevation_1")};
  border: 1px solid ${r()("colors.gray_light")};

  &:focus,
  &:active {
    border: 1px solid ${r()("colors.primary")};
  }
`;var S=o("../../../node_modules/react/jsx-runtime.js"),_=o("webpack/sharing/consume/default/@super-rad-poc/desgn/icons/@super-rad-poc/desgn/icons"),j=o("../../../node_modules/react-router-dom/index.js");const C=a().button`
  width: 28px;
  height: 28px;
  padding: 7px;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.inverted?r()("colors.primary"):"transparent"};
  color: ${r()("colors.primary")};
  font-size: ${e=>e.theme.fontSizes[2]};
  font-family: ${r()("fonts.primary")};
  border-radius: ${e=>e.rounded?r()("radii.circle"):r()("radii.default")};
  box-shadow: ${r()("shadows.elevation_1")};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
    box-shadow: ${r()("shadows.elevation_2")};
  }

  &:active {
    transform: scale(1.1);
    box-shadow: ${r()("shadows.elevation_1")};
  }
  & > svg {
    width: 100%;
    height: 100%;
    fill: ${e=>e.inverted?r()("colors.white"):r()("colors.primary")};
    stroke: ${e=>e.inverted?r()("colors.primary"):r()("colors.white")};
  }
`,M=a().button`
  width: 8rem;
  height: 2rem;
  margin: 0;
  padding: 0.5rem;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${r()("colors.accent")};
  color: ${r()("colors.white")};
  font-size: ${e=>e.theme.fontSizes[2]};
  font-family: ${r()("fonts.primary")};
  border-radius: ${r()("radii.lg")};
  box-shadow: ${r()("shadows.elevation_1")};

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
    box-shadow: ${r()("shadows.elevation_2")};
  }

  &:active {
    transform: scale(1.1);
    box-shadow: ${r()("shadows.elevation_1")};
  }
`,T=a()(j.rU)`
  width: 8rem;
  height: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  margin: 0;
  padding: 0.5rem;
  border: none;
  text-decoration: none;
  cursor: pointer;

  background-color: ${r()("colors.accent")};
  color: ${r()("colors.white")};
  font-size: ${e=>e.theme.fontSizes[2]};
  font-family: ${r()("fonts.primary")};
  border-radius: ${r()("radii.lg")};
  box-shadow: ${r()("shadows.elevation_1")};

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
    box-shadow: ${r()("shadows.elevation_2")};
  }

  &:active {
    transform: scale(1.1);
    box-shadow: ${r()("shadows.elevation_1")};
  }
`,B=e=>(0,S.jsx)(C,Object.assign({type:"submit",value:"Post"},e,{children:(0,S.jsx)(_.PostIcon,{},void 0)}),void 0);var H=o("../../../node_modules/react-helmet/es/Helmet.js");function Y(e){const t=n.createGlobalStyle`
      body {
        color: ${(0,i.themeGet)("colors.primary_text")};
        font-family: ${(0,i.themeGet)("fonts.primary")};
      }
      html, body {
          height: 100%;
          width: 100%;
          padding: 0;
          margin: 0;
      }

      body, #root {
          height: 100%;
          display: flex;
          flex-direction: column;
      }
  `;return(0,S.jsx)(n.ThemeProvider,Object.assign({theme:e.theme},{children:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(H.q,{children:[(0,S.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"},void 0),(0,S.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"*"},void 0),(0,S.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",rel:"stylesheet"},void 0)]},void 0),(0,S.jsx)(t,{},void 0),e.children]},void 0)}),void 0)}const F={space:[0,4,8,16,32,64,128,256,512],colors:{primary:"#3448c5",primary_dark:"#0f1a61",primary_light:"#6678ec",secondary:"#d66853",secondary_dark:"#a63d2d",secondary_light:"#f28f6c",primary_text:"#171123",secondary_text:"#757575",white:"#FFFFFF",background:"#e8e9eb",accent:"#e20c69",gray:"#9b9b9b",gray_light:"#f5f5f5",light_text:"#fafafa",purple:"#553c87"},fonts:{primary:"Playfair Display, sans-serif",header:"Lato, sans-serif"},fontSizes:["12px","14px","16px","24px","32px","48px","64px","96px","128px"],fontWeights:{light:300,normal:400,medium:500,semiBold:600,bold:700,black:900},lineHeights:{sm:.75,solid:1,title:1.25,copy:1.5},letterSpacings:{normal:"normal",tracked:"0.1em",tight:"-0.05em",mega:"0.25em"},radii:{default:"0.25rem",md:"0.5rem",lg:"1rem",circle:"50%"},shadows:{elevation_1:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",elevation_2:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",elevation_3:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",elevation_4:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",elevation_5:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",container:"0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)",text_sm:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",text_md:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",text_lg:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"},buttons:{primary:{color:"white",backgroundColor:`${r()("colors.primary")}`},secondary:{color:"white",backgroundColor:`${r()("colors.secondary")}`},accent:{color:"white",backgroundColor:`${r()("colors.accent")}`}},zIndices:{mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500,godMode:9999}};var G=o("../../../node_modules/tslib/tslib.es6.js");const L=n.keyframes`
  0% {
    transform: translateX(0);
  }
  92% {
    transform: translateX(106%);
  }
  100% {
    transform: translateX(104%);
  }
`,O=a().nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  width: 95%;
  padding: 1rem;
  padding-bottom: 0;
  z-index: 9999;
`,A=a().div`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.2rem;
  margin-right: 1rem;
  color: ${(0,i.themeGet)("colors.primary")};
`,N=a().span`
  margin-right: 0;
`,E=a().span`
  font-weight: normal;
`,I=a().div`
  margin-right: auto;
  & > a {
    color: ${(0,i.themeGet)("colors.primary")};
    text-decoration: none;

    &:hover,
    &:active,
    &:visited {
      color: ${(0,i.themeGet)("colors.primary")};
    }

    &:focus {
      outline: none;
    }
  }
`,P=a().div`
  margin-left: auto;
`,D=a().div`
  display: ${e=>e.isActive?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: 80px;
  left: 0;
  width: 100vw;
  border-radius: 4px;
  padding: 1rem;
  padding-top: 0;
  z-index: 1;
`,X=a()(j.rU)`
  font-size: 1rem;
  position: relative;
  width: 100%;
  height: 100%;
  text-decoration: none;
  outline: none;
  color: ${(0,i.themeGet)("colors.primary")};

  &:hover,
  &:active,
  &:visited {
    color: ${(0,i.themeGet)("colors.primary")};
  }

  &:focus {
    outline: none;
  }
`,W=a().div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
  cursor: pointer;

  & > a,
  span {
    font-size: 1rem;
    position: relative;
    width: 100%;
    height: 100%;
    text-decoration: none;
    outline: none;

    color: ${(0,i.themeGet)("colors.primary")};

    &::before {
      content: '';
      position: absolute;
      top: -7px;
      left: -105%;
      width: 100%;
      height: 175%;
      z-index: -1;
      background: hsla(232, 78%, 66%, 1);
      background: linear-gradient(
        45deg,
        hsla(232, 78%, 66%, 1) 0%,
        hsla(220, 7%, 92%, 0) 100%
      );
      background: -moz-linear-gradient(
        45deg,
        hsla(232, 78%, 66%, 1) 0%,
        hsla(220, 7%, 92%, 0) 100%
      );
      background: -webkit-linear-gradient(
        45deg,
        hsla(232, 78%, 66%, 1) 0%,
        hsla(220, 7%, 92%, 0) 100%
      );
    }
  }

  &:hover {
    & > a,
    span {
      color: ${(0,i.themeGet)("colors.white")};

      &::before {
        animation-name: ${L};
        animation-duration: 0.4s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
      }
    }
  }
`,q=a().div`
  display: block;
  position: relative;
  height: 50px;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;

  & input[type='checkbox'] {
    display: block;
    width: 34px;
    height: 24px;
    position: absolute;
    top: 0;
    left: 0;

    opacity: 0;
    cursor: pointer;
    z-index: 2;

    -webkit-touch-callout: none;
  }

  & span {
    display: block;
    width: 34px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background-color: ${(0,i.themeGet)("colors.primary")};
    border-radius: 4px;

    z-index: 1;
    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      opacity 0.55s ease;
  }

  & span:first-child {
    transform-origin: 0% 0%;
  }

  & span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  input:checked ~ span {
    opacity: 1;
    transform: rotate(-45deg) translate(-2px, -1px);
    background: ${(0,i.themeGet)("colors.primary_light")};
  }

  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  input:checked ~ span:nth-last-child(2) {
    transform: rotate(45deg) translate(-9px, -8px);
  }

  @media (min-width: 768px) {
    display: block;

    &:focus {
      outline: none;
    }
  }
`,K=a().div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;

  & > button:not(:last-child) {
    margin-right: 1rem;
  }
`,U=a().button`
  background: none;
  border: none;
  padding: 8px;
  margin: 0;
  cursor: pointer;
  outline: none;
  font-size: 1.3rem;
  font-weight: semi-bold;
  line-height: 1.2rem;
  color: ${(0,i.themeGet)("colors.primary_light")};

  &:hover {
    background-color: ${(0,i.themeGet)("colors.primary_light")};
    & > a,
    span {
      color: ${(0,i.themeGet)("colors.background")};
    }
  }

  & > a,
  span {
    color: ${(0,i.themeGet)("colors.primary_light")};
    text-decoration: none;
  }
`,Z=e=>{const{onClicked:t,isActive:o}=e;return(0,G._T)(e,["onClicked","isActive"]),(0,S.jsxs)(q,{children:[(0,S.jsx)("input",{onChange:t=>{e.onClicked()},checked:o,type:"checkbox"},void 0),(0,S.jsx)("span",{},void 0),(0,S.jsx)("span",{},void 0),(0,S.jsx)("span",{},void 0)]},void 0)};var R=o("../../../node_modules/polished/dist/polished.esm.js");const J=(0,u.qC)(u.bK,u.Dh,u.$_),Q=a().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  padding: 3.5rem;
  border-radius: ${r()("radii.md")};

  background: ${e=>(0,R.m4)(e.theme.colors.primary,.3)};
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  border: 1px solid ${e=>(0,R.m4)(e.theme.colors.primary_light,.4)};
  ${J};
`,V=a().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.5rem;
  width: 50%;
  border-radius: ${r()("radii.md")};
  ${J};
`,ee=(0,u.qC)(u.Dh,u.cp),te=a().div`
  font-size: 2em;
  ${ee};
`,oe=(0,u.qC)(u.cp,u.$_),ie=a().h1`
  font-size: ${e=>e.theme.fontSizes[5]};
  font-weight: ${r()("fontWeights.semiBold")};
  line-height: ${r()("lineHeights.title")};
  letter-spacing: ${r()("letterSpacings.tracked")};
  color: ${r()("colors.primary_text")};
  font-family: ${r()("fonts.header")};
  ${oe}
`,re=a().h2`
  font-size: ${e=>e.theme.fontSizes[4]};
  font-weight: ${r()("fontWeights.normal")};
  line-height: ${r()("lineHeights.title")};
  letter-spacing: ${r()("letterSpacings.tracked")};
  color: ${r()("colors.primary_text")};
  font-family: ${r()("fonts.header")};
  ${oe}
`,ne=a().h3`
  font-size: ${e=>e.theme.fontSizes[3]};
  font-weight: ${r()("fontWeights.semiBold")};
  line-height: ${r()("lineHeights.title")};
  letter-spacing: ${r()("letterSpacings.tracked")};
  color: ${r()("colors.primary_text")};
  font-family: ${r()("fonts.header")};
  ${oe}
`,ae=a().p`
  font-size: ${e=>e.theme.fontSizes[2]};
  font-weight: ${r()("fontWeights.normal")};
  line-height: ${r()("lineHeights.copy")};
  letter-spacing: ${r()("letterSpacings.normal")};
  color: ${r()("colors.primary_text")};
  font-family: ${r()("fonts.primary")};
  ${oe}
`,se=a()(j.rU)`
  color: ${r()("colors.accent")};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active {
    color: ${r()("colors.primary_light")};
  }
  &:focus {
    color: ${r()("colors.primary")};
  }
`,le=a().sub`
  font-size: ${e=>e.theme.fontSizes[0]};
  font-weight: ${r()("fontWeights.light")};
  line-height: ${r()("lineHeights.sm")};
  letter-spacing: ${r()("letterSpacings.tight")};
  color: ${r()("colors.primary_text")};
  font-family: ${r()("fonts.primary")};
  ${oe}
`,de=n.keyframes`
   0% {
      transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
   }

   50% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
   }

   100% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
   }
`,ce=a().div`
  width: 44px;
  height: 44px;
  animation-name: ${de};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  transform-style: preserve-3d;
  margin-bottom: 2rem;

  & > div {
    background-color: ${e=>(0,R.m4)(e.theme.colors.primary,.2)};
    height: 100%;
    position: absolute;
    width: 100%;
    border: 4px solid ${r()("colors.primary_light")};
  }

  & div:nth-of-type(1) {
    transform: translateZ(-25px) rotateY(180deg);
  }

  & div:nth-of-type(2) {
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
  }

  & div:nth-of-type(3) {
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
  }

  & div:nth-of-type(4) {
    transform: rotateX(90deg) translateY(-50%);
    transform-origin: top center;
  }

  & div:nth-of-type(5) {
    transform: rotateX(-90deg) translateY(50%);
    transform-origin: bottom center;
  }

  & > div:nth-of-type(6) {
    transform: translateZ(25px);
  }
`,pe=()=>(0,S.jsxs)(ce,{children:[(0,S.jsx)("div",{},void 0),(0,S.jsx)("div",{},void 0),(0,S.jsx)("div",{},void 0),(0,S.jsx)("div",{},void 0),(0,S.jsx)("div",{},void 0),(0,S.jsx)("div",{},void 0)]},void 0);var me=o("webpack/sharing/consume/default/react/react");const he=n.keyframes`
  0% {
    bottom: -3rem;
    opacity: 0;
  }
  100% {
    bottom: 1rem;
    opacity: 1;
  }
`,ge=n.keyframes`
  0% {
    bottom: 1rem;
    opacity: 1;
  }
  100% {
    bottom: 110%;
    opacity: 0;
  }
`,xe=a().div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: transparent;
  pointer-events: none;
`,fe=a().div`
  position: absolute;
  bottom: -3rem;
  width: 25%;
  left: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  padding: 1.5rem;
  background-color: ${r()("colors.primary_text")};
  border: ${e=>`1px solid ${(0,R.m4)(e.theme.colors.primary_light,.4)}`};
  border-radius: ${r()("radii.default")};
  box-shadow: ${r()("shadows.elevation_1")};
  pointer-events: ${e=>e.isOpen?"all":"none"};
  animation: ${he} 0.5s ease-in-out;
  ${e=>e.isClosing&&n.css`
      animation: ${ge} 0.5s ease-in-out;
    `}
  animation-fill-mode: forwards;
  ${u.bK};
`,ue=a().button`
  height: 100%;
  border: none;
  outline: none;
  float: right;

  background-color: transparent;
  color: ${r()("colors.secondary_light")};
  font-size: ${e=>e.theme.fontSizes[2]};
  font-family: ${r()("fonts.primary")};
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }

  &:active {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
  }

  &:disabled:hover {
    transform: scale(1);
  }

  &:disabled:active {
    transform: scale(1);
  }

  &:disabled:focus {
    outline: none;
  }
`,be={isOpen:!0,createdAt:new Date,action:"close"},ye=({id:e,isOpen:t,message:o,action:i,createdAt:r,closeHandler:n,actionHandler:a})=>{const[s,l]=(0,me.useState)(t),[d,c]=(0,me.useState)(!1);(0,me.useEffect)((()=>{!0===s&&setTimeout((()=>{l(!1)}),5e3),!1===s&&p()}),[s]);const p=()=>{l(!1),c(!0),setTimeout((()=>{l(!1),n&&n()}),500)};return(0,S.jsx)(xe,{children:(0,S.jsxs)(fe,Object.assign({width:[1/3,1/4],isClosing:d,isOpen:s},{children:[(0,S.jsx)(ae,Object.assign({color:"white"},{children:o}),void 0),i&&(0,S.jsx)(ue,Object.assign({onClick:()=>{a&&a(),p()}},{children:i}),void 0)]}),void 0)},void 0)};ye.defaultProps=be;const ve=()=>{const[e,t]=(0,me.useState)([]);return(0,S.jsx)(S.Fragment,{children:e&&e.map((o=>(0,S.jsx)(ye,Object.assign({},o,{closeHandler:()=>{t(e.filter((e=>e.id!==o.id)))}}),o.id)))},void 0)},we=a().div`
    position: relative;
    display: inline-block;
    &:hover {
        .tooltip {
            visibility: visible;
            opacity: 1;
        }
    }
`,$e=a().div`
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 12px 0px 12px 0px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
`,ke=a().div`
position: relative;
padding: 15px;
margin: 50p 0 3em;
text-align: center;
background: #333;
color: #fff;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);

&::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 50%;
    width: 100px;
    height: 20px;
    margin: 0 0 0 -50px;
    background: #333;
}

&::after {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    width: 50%;
    height: 20px;
    background: #fff;
    -webkit-border-bottom-right-radius: 15px;
    -moz-border-radius-bottomright: 15px;
    border-bottom-right-radius: 15px;
}

& > * {
    ::before {
        content: "";
    position: absolute;
    top: -20px;
    right: 0;
    width: 50%;
    height: 20px;
    background: #fff;
    -webkit-border-bottom-left-radius: 15px;
    -moz-border-radius-bottomleft: 15px;
    border-bottom-left-radius: 15px;
    }
}
`,ze=a().div`
  ::webkit-scrollbar {
    display: none;
  }

  overflow: auto;
  height: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
  position: relative;
`,Se=a().div`
  width: 100%;
  height: 100%;
  right: 0;
  top: 9px;
  position: absolute;
  border-radius: 7px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.35);
`,_e=a().div`
  width: 8px;
  height: 20px;
  margin-left: 1px;
  position: absolute;
  border-radius: 7px;
  opacity: 1;
  top: 0;
  background-color: rgba(0, 0, 0, 0.55);
`,je=a().div`
  position: relative;
  height: 100%;
`;function Ce(e){var{children:t,className:o}=e,i=(0,G._T)(e,["children","className"]);const[r,n]=(0,me.useState)(!1),[a,s]=(0,me.useState)(20),[l,d]=(0,me.useState)(0),[c,p]=(0,me.useState)(0),[m,h]=(0,me.useState)(!1),g=(0,me.useCallback)((()=>{!r&&n(!0)}),[r]),x=(0,me.useCallback)((()=>{r&&n(!1)}),[r]),f=(0,me.useCallback)((e=>{m&&(e.preventDefault(),h(!1))}),[m]),u=(0,me.useCallback)((e=>{if(m){e.preventDefault(),e.stopPropagation();const t=v.current,{scrollHeight:o,offsetHeight:i}=t;let r=e.clientY-c,n=r*(o/i);p(e.clientY),d(Math.min(Math.max(0,l+r),i-a)),t.scrollTop=Math.min(t.scrollTop+n,o-i)}}),[m,c,a,l]),b=(0,me.useCallback)((e=>{e.preventDefault(),e.stopPropagation(),p(e.clientY),h(!0),console.log("handleScrollThumbMouseDown")}),[]),y=(0,me.useCallback)((()=>{if(!v)return;const e=v.current,{scrollTop:t,scrollHeight:o,offsetHeight:i}=e;let r=parseInt(t,10)/parseInt(o,10)*i;r=Math.min(r,i-a),d(r)}),[]),v=(0,me.useRef)();return(0,me.useEffect)((()=>{const e=v.current,{clientHeight:t,scrollHeight:o}=e,i=t/o,r=Math.max(i*t,20);return s(r),e.addEventListener("scroll",y,!0),function(){e.removeEventListener("scroll",y,!0)}}),[]),(0,me.useEffect)((()=>(document.addEventListener("mousemove",u),document.addEventListener("mouseup",f),document.addEventListener("mouseleave",f),function(){document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",f),document.removeEventListener("mouseleave",f)})),[u,f]),(0,S.jsxs)(je,Object.assign({onMouseOver:g,onMouseOut:x},{children:[(0,S.jsx)(ze,Object.assign({ref:v},i,{children:t}),void 0),(0,S.jsx)(Se,Object.assign({style:{opacity:r?1:0}},{children:(0,S.jsx)(_e,{style:{height:a,top:l},onMouseDown:b},void 0)}),void 0)]}),void 0)}const Me=n.keyframes`
0% {
  transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
4.7% {
  transform: matrix3d(0.45, 0, 0, 0, 0, 0.45, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
9.41% {
  transform: matrix3d(0.883, 0, 0, 0, 0, 0.883, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
14.11% {
  transform: matrix3d(1.141, 0, 0, 0, 0, 1.141, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
18.72% {
  transform: matrix3d(1.212, 0, 0, 0, 0, 1.212, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
24.32% {
  transform: matrix3d(1.151, 0, 0, 0, 0, 1.151, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
29.93% {
  transform: matrix3d(1.048, 0, 0, 0, 0, 1.048, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
35.54% {
  transform: matrix3d(0.979, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
41.04% {
  transform: matrix3d(0.961, 0, 0, 0, 0, 0.961, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
52.15% {
  transform: matrix3d(0.991, 0, 0, 0, 0, 0.991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
63.26% {
  transform: matrix3d(1.007, 0, 0, 0, 0, 1.007, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
85.49% {
  transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
100% {
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
`,Te=n.keyframes`
from {
  transform: translateY(0) scaleY(.8);
}
to {
  transform: translateY(-6px);
}
`,Be={ball:n.css`
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    /*  background: rgba(255, 255, 255, .5);*/
    background: #888;
    z-index: 2;
    margin-top: 4px;
    animation: ${Te} 0.45s cubic-bezier(0, 0, 0.15, 0.7) alternate
      infinite;
  `},He=a().div`
  position: relative;
  width: 100%;
  height: calc(100% - 15px);
  max-height: 500px;
  z-index: 10;
  overflow: hidden;

  background: transparent;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Ye=a().div`
  flex: 0 1 45px;
  position: relative;
  z-index: 2;
  width: 100%;
  border-bottom: 1px solid #ccc;
  color: #777;
  padding-top: 50px;
  padding-bottom: 5px;
  background-color: #fff;
  text-transform: uppercase;
  text-align: center;

  h1,
  h2 {
    font-weight: normal;
    font-size: 14px;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 11px;
    letter-spacing: 1px;
  }
`,Fe=a().div`
  flex: 1 1 auto;
  overflow: hidden;
  position: relative;
  width: 100%;
`,Ge=a().div`
  position: absolute;
  top: 0;
  left: 0;
  height: 101%;
  width: 100%;
`,Le=a().div`
  position: absolute;
  bottom: -20px;
  font-size: 10px;
  color: #555;
  right: 30px;
  margin-right: 0.4rem;
  /* color: rgba(255, 255, 255, .7);*/
`,Oe=a().figure`
  position: absolute;
  z-index: 1;
  bottom: -15px;
  left: -35px;
  -webkit-border-radius: 28px;
  -moz-border-radius: 28px;
  border-radius: 28px;
  width: 30px;
  height: 30px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${r()("colors.primary","#009E7F")} solid 2px;
  img {
    width: 100%;
    border-radius: 30px;
    height: auto;
  }
`,Ae=a().div`
  clear: both;
  float: left;
  min-width: 5rem;
  padding: 6px 10px 7px;
  -webkit-border-radius: 20px 20px 20px 0;
  -moz-border-radius: 20px 20px 20px 0;
  border-radius: 20px 20px 20px 0;
  background: #eee; /*rgba(0, 0, 0, 0.1);*/
  margin: 8px 0;
  font-size: 14px;
  line-height: 1.4;
  margin-left: 35px;
  position: relative;
  border: 1px solid #ccc;
  margin-bottom: 1.5rem;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  &:last-child {
    margin-bottom: 30px;
  }
`,Ne=a()(Ae)`
  transform: scale(0);
  transform-origin: 0 0;
  animation: ${Me} 500ms linear both;
`,Ee=a()(Ne)`
  float: right;
  text-align: right;
  background: linear-gradient(120deg, #ddd, #eee);
  background: #fff;
  border: 1px solid #4a90e2;
  -webkit-border-radius: 20px 20px 0 20px;
  -moz-border-radius: 20px 20px 0 20px;
  border-radius: 20px 20px 0 20px;
`,Ie=a().div`
  &::before {
    ${Be.ball}
    border: none;
    animation-delay: ${e=>e.delay}s;
  }
  & > span {
    display: block;
    font-size: 0;
    width: 20px;
    height: 10px;
    position: relative;
    &::before {
      ${Be.ball}
      margin-left: -7px;
    }
    &::after {
      ${Be.ball}
      margin-left: 7px;
      animation-delay: ${e=>e.delay}s;
    }
  }
`,Pe=a().div`
  position: absolute;
  bottom: -20px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,De=a().div`
  flex: 0 1 42px;
  width: 90%;
  background: #fff;
  margin: 2px auto;
  padding: 10px;
  position: relative;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  height: 14px;
  border: 1px solid #ccc;
`,Xe=a().textarea`
  background: none;
  border: none;
  outline: none;
  resize: none;

  font-size: 15px;
  height: 24px;
  margin: 0;
  padding-right: 20px;
  width: 265px;
  color: #444;

  &:focus {
    outline: none;
    ::-webkit-input-placeholder {
      color: transparent;
    }
  }
`,We=a().button`
  position: absolute;
  z-index: 1;
  top: 9px;
  right: 10px;
  color: #4a90e2;
  border: none;
  background: #fff;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 1;
  padding: 6px 10px;
  border-radius: 5px;
  outline: none !important;
  transition: background 0.2s ease;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #333;
  }
`,qe=a().div`
  opacity: 1;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  height: calc(100% - 60px) !important;
  max-height: 460px !important;
  min-height: 220px !important;
  width: 320px;
  /*  transform: translateY(0);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
  */
  background: rgba(255, 255, 255, 0.9);
  position: fixed;
  right: 20px;
  bottom: 20px;
  margin: auto;
  z-index: 10;
  box-shadow: 2px 10px 40px rgba(22, 20, 19, 0.4);
  /*  transform: translateX(300px);*/
  transition: 0.3s all ease-out 0.1s, transform 0.2s ease-in;
  -webkit-transition: 0.3s all ease-out 0.1s, transform 0.2s ease-in;
  -moz-transition: 0.3s all ease-out 0.1s, transform 0.2s ease-in;

  div {
    font-size: 14px;
    color: #232323;
  }
`,Ke=a().div`
  position: absolute;
  left: 0;
  top: -50px;
  right: 0;
  margin: auto;
  width: 101px;
  height: 50px;
  background: transparent;
  z-index: 12;
`,Ue=a().div``,Ze=a().span`
  color: #111;
  z-index: 12;
  font-size: 14px;
  text-align: center;
  position: absolute;
  right: 0;
  top: 40px;
  height: 86px;
  line-height: 40px;
  background: #fff;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  width: 48px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: 0.3s all ease-in-out;
  -webkit-transition: 0.3s all ease-in-out;

  opacity: ${e=>e.isActive?1:0};

  a {
    cursor: pointer;
    text-decoration: none;
    color: #111;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #4a90e2;
    }
  }
`,Re=a().div`
  font-size: 30px !important;
  z-index: 12;
  text-align: right;
  color: #333;
  content: '...';
  display: block;
  width: 40px;
  line-height: 25px;
  height: 40px;
  border-top-right-radius: 20px;
  /* border-top-left-radius: 20px; */
  position: absolute;
  right: 0;
  padding-right: 10px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  -webkit-transition: 0.3s all ease-in-out;
  background: ${e=>e.isActive?"#ccc":"transparent"};
`,Je=a().div`
  position: relative;
  height: 100%;
  max-width: 100%;
  outline: 0;
  direction: ltr;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  overflow-y: scroll;
  overflow-x: hidden;
`,Qe=a().div`
  position: relative;
  top: -1px;
  left: 0px;
  margin-right: 0px;
`,Ve=a().img`
  display: block;
  width: 80px;
  height: 80px;
  overflow: hidden;
  margin: 1em auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 99em;
  border: 1px solid #fff;
`,et=a().figure`
  z-index: 1;
  border-radius: 28px;
  width: 30px;
  height: 30px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${r()("colors.primary","#009E7F")} solid 2px;
  img {
    width: 100%;
    border-radius: 30px;
    height: auto;
  }
`}}]);
//# sourceMappingURL=5067a96dac0e0f55b72e.js.map