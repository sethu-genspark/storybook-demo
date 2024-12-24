import{j as a}from"./jsx-runtime-BjgbQsUx.js";import"./index-D2MAbzvX.js";function o({children:r,orientation:e="horizontal"}){const i={horizontal:{display:"flex",flexDirection:"row",gap:"1rem"},vertical:{display:"flex",flexDirection:"column",gap:"1rem"}};return a.jsx("div",{style:{...i[e]},children:r})}o.__docgenInfo={description:"",methods:[],displayName:"Stack",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}}}};const g={component:o,tags:["autodocs"],argTypes:{numberOfChildren:{options:[1,5,10],control:{type:"select"}},orientation:{options:["horizontal","vertical"],control:{type:"select"}}},args:{numberOfChildren:5}},n={args:{orientation:"horizontal"},render:({numberOfChildren:r,...e})=>a.jsx(o,{...e,children:p(r)})},t={args:{orientation:"vertical"},render:({numberOfChildren:r,...e})=>a.jsx(o,{...e,children:p(r)})};function p(r){return Array(r).fill(null).map((e,i)=>a.jsx("div",{style:{width:100,height:100,backgroundColor:"red"}},i))}var l,s,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  render: ({
    numberOfChildren,
    ...args
  }) => {
    return <Stack {...args}>{createChildren(numberOfChildren)}</Stack>;
  }
}`,...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var d,u,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: ({
    numberOfChildren,
    ...args
  }) => {
    return <Stack {...args}>{createChildren(numberOfChildren)}</Stack>;
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const x=["Horizontal","Vertical"];export{n as Horizontal,t as Vertical,x as __namedExportsOrder,g as default};
