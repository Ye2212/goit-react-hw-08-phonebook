(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[678],{9678:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return O}});var r,o,i,a,c,s=e(8152),p=e(2791),d=e(168),l=e(2499),u=l.Z.form(r||(r=(0,d.Z)(["\n  margin-bottom: 60px;\n  padding: 15px;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  // background-color: black;\n  // box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 1),\n  // 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),x=l.Z.label(o||(o=(0,d.Z)(["\n  margin: 0 10px 5px;\n  font-size: 12px;\n"]))),f=l.Z.span(i||(i=(0,d.Z)(["\n  font-weight: 600;\n  margin-bottom: 5px;\n  color: rgba(255, 255, 255, 0.737);\n"]))),h=l.Z.input(a||(a=(0,d.Z)(["\nwidth: 250px;\nheight: 25px;\ncolor: inherit;\nfont-weight: 700;\nbackground-color: transparent;\npadding: 0 10px 0 10px;\npadding: 0 10px 0 10px;\nfont-size: 20px;\nborder: 1px solid #fc02f9;\nborder-radius: 3px;\n// border-bottom: 1px solid #fc02f9;\nfont: inherit;\nfont-size: inherit;\noutline: none;\npadding-left: 4px;\npadding-right: 4px;\n&::placeholder {\n  font: inherit;\n}\n  }"]))),g=l.Z.button(c||(c=(0,d.Z)(["\n  padding: 10px;\n  margin-top: 15px;\n  background-color: #fc02f9;\n  border-radius: 3px;\n  // color: rgba(255, 255, 255, 0.737);\n  color: black;\n  font-weight: 700;\n  font-size: 12px;\n  border: none;\n  cursor: pointer;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    opacity: 0.7;\n  }\n"]))),b=e(3853),m=e(5984),Z=e(9434),j={getContacts:function(n){return n.contacts.items},getFilterValue:function(n){return n.contacts.filter},getLoading:function(n){return n.contacts.isLoading},getError:function(n){return n.contacts.error}},y=e(5036),v=e(3329);var w,k,C,z,_=function(){var n=(0,p.useState)(""),t=(0,s.Z)(n,2),e=t[0],r=t[1],o=(0,p.useState)(""),i=(0,s.Z)(o,2),a=i[0],c=i[1],d=(0,Z.v9)(j.getContacts),l=(0,Z.I0)(),w=function(){r(""),c("")};return(0,v.jsxs)(u,{onSubmit:function(n){n.preventDefault();var t={id:(0,m.x0)(),name:e,phone:a};if(d.some((function(n){return n.name.toLowerCase()===e.toLowerCase()})))return alert("".concat(e," is already in contacts"));l((0,y.je)(t)),alert("".concat(e," is added to your contacts")),w()},children:[(0,v.jsxs)(x,{children:[(0,v.jsx)(f,{children:"Name"}),(0,v.jsx)(h,{type:"text",name:"name",value:e,onChange:function(n){return r(n.currentTarget.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,v.jsxs)(x,{children:[(0,v.jsx)(f,{children:"Phone"}),(0,v.jsx)(h,{placeholder:"",type:"tel",name:"phone",value:a,onChange:function(n){return c(n.currentTarget.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,v.jsxs)(g,{type:"submit",children:[(0,v.jsx)("span",{style:{marginRight:"10px"},children:"Add"}),(0,v.jsx)(b.zy7,{})]})]})},A=l.Z.span(w||(w=(0,d.Z)(["\n  font-weight: 600;\n  margin-right: 10px;\n  color: rgba(255, 255, 255, 0.737);\n"]))),F=l.Z.span(k||(k=(0,d.Z)(["\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.737);\n"]))),L=l.Z.p(C||(C=(0,d.Z)(["\n  margin-right: 15px;\n"]))),I=l.Z.button(z||(z=(0,d.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 30px;\n  border-radius: 4px;\n  height: 30px;\n  padding: 10px;\n\n  border: none;\n  background-color: #fc02f9;\n  // opacity: 0.4;\n  color: black;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    opacity: 0.8;\n  }\n"]))),D=e(6355);var S,T,V=function(n){var t=n.name,e=n.phone,r=n.contactId,o=n.onDeleteContact;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(L,{children:[(0,v.jsx)(A,{children:t}),(0,v.jsx)(F,{children:e})]}),(0,v.jsx)(I,{type:"button",onClick:function(){return o(r)},children:(0,v.jsx)(D.Xm5,{})})]})},q=l.Z.ul(S||(S=(0,d.Z)(["\n  // margin: 10px auto 0;\n  padding: 15px;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  border-radius: 5px;\n  // background-color: black;\n"]))),E=l.Z.li(T||(T=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  :not(:last-child) {\n    margin-bottom: 10px;\n  }\n"])));var N,P,X,B=function(){var n=(0,Z.I0)(),t=(0,Z.v9)(j.getContacts),e=(0,Z.v9)(j.getFilterValue);(0,p.useEffect)((function(){n((0,y.VC)())}),[n]);var r=function(){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}();return(0,v.jsx)(q,{children:t&&r.map((function(t){var e=t.id,r=t.name,o=t.phone;return(0,v.jsx)(E,{children:(0,v.jsx)(V,{name:r,phone:o,onDeleteContact:n((0,y.xX)(e)),contactId:e})},e)}))})},J=e(1538),M=l.Z.label(N||(N=(0,d.Z)(["\n  font-size: 12px;\n  display: block;\n  margin: 0 auto;\n"]))),R=l.Z.p(P||(P=(0,d.Z)(["\n  font-weight: 600;\n  margin-bottom: 5px;\n  color: rgba(255, 255, 255, 0.737);\n"]))),$=l.Z.input(X||(X=(0,d.Z)(["\n  margin-bottom: 50px;\n  display: block;\n  width: 250px;\n  height: 25px;\n  color: inherit;\n  font-weight: 700;\n  background-color: transparent;\n  padding: 0 10px 0 10px;\n  padding: 0 10px 0 10px;\n  font-size: 20px;\n  border: 1px solid #fc02f9;\n  border-radius: 3px;\n  // border-bottom: 1px solid #fc02f9;\n  font: inherit;\n  font-size: inherit;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n  }\n"])));var G,H=function(){var n=(0,Z.I0)();return(0,v.jsxs)(M,{children:[(0,v.jsx)(R,{children:"Find contacts by name"}),(0,v.jsx)($,{type:"text",name:"filter",onChange:function(t){return n((0,J.changeFilter)(t.currentTarget.value))}})]})},K=l.Z.div(G||(G=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));function O(){return(0,v.jsxs)(K,{children:[(0,v.jsx)(_,{}),(0,v.jsx)(H,{}),(0,v.jsx)(B,{})]})}},1538:function(){}}]);
//# sourceMappingURL=678.9c388e23.chunk.js.map