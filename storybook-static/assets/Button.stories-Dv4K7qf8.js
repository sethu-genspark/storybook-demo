import{j as a}from"./jsx-runtime-BjgbQsUx.js";import{f as x}from"./index-Dj6nxAlZ.js";import"./index-D2MAbzvX.js";const o=({children:r,onClick:e,variant:l="primary",size:p="md"})=>{const g={primary:{backgroundColor:"blue"},secondary:{backgroundColor:"gray"}},y={sm:{padding:"0.5rem"},md:{padding:"0.75rem"},lg:{padding:"1rem"}};return a.jsx("button",{style:{outline:"none",border:"none",cursor:"pointer",borderRadius:10,...g[l],...y[p]},onClick:e,children:r})};o.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const T={component:o,tags:["autodocs"],argTypes:{variant:{options:["primary","secondary"],control:{type:"select"}},size:{options:["sm","md","lg"],control:{type:"select"}}},args:{onClick:x()}},n={args:{buttonText:"Hello",variant:"primary",size:"md"},render:({buttonText:r,...e})=>a.jsx(o,{...e,children:r})},t={args:{buttonText:"Hello",variant:"secondary",size:"md"},render:({buttonText:r,...e})=>a.jsx(o,{...e,children:r})};var s,d,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    buttonText: 'Hello',
    variant: 'primary',
    size: 'md'
  },
  render: ({
    buttonText,
    ...args
  }) => {
    return <Button {...args}>{buttonText}</Button>;
  }
}`,...(i=(d=n.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var u,m,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    buttonText: 'Hello',
    variant: 'secondary',
    size: 'md'
  },
  render: ({
    buttonText,
    ...args
  }) => {
    return <Button {...args}>{buttonText}</Button>;
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const z=["Primary","Secondary"];export{n as Primary,t as Secondary,z as __namedExportsOrder,T as default};
