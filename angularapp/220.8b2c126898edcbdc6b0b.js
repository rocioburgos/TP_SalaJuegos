"use strict";(self.webpackChunksala_juegos=self.webpackChunksala_juegos||[]).push([[220],{2220:(C,d,n)=>{n.r(d),n.d(d,{RegistroModule:()=>R});var u=n(8583),l=n(9895),m=n(8239);class c{constructor(i,o,r,s){this.nombre=o,this.email=r,this.clave=s,this.uid=i}}var e=n(7716),p=n(8091),h=n(6692),a=n(3679);function v(t,i){if(1&t&&(e.TgZ(0,"div",10),e.TgZ(1,"div",11),e._uU(2,"Error"),e.qZA(),e.TgZ(3,"div",12),e.TgZ(4,"p",13),e._uU(5),e.qZA(),e.qZA(),e.qZA()),2&t){const o=e.oxw();e.xp6(5),e.hij(" ",o.descripcion_error," ")}}const f=[{path:"",component:(()=>{class t{constructor(o,r,s){this.router=o,this.authSrv=r,this.jugadoresSrv=s,this.show_error=!1,this.descripcion_error="",this.clave="",this.nombre="",this.email=""}ngOnInit(){}onRegistro(){var o=this;return(0,m.Z)(function*(){try{if(yield o.authSrv.registerUser(o.email,o.clave)){let g=new c("",o.nombre,o.email,o.clave);o.jugadoresSrv.registrarNuevoJugador(g),localStorage.setItem("usuario_juegos",JSON.stringify({email:o.email,sesion:"activa"})),o.router.navigate(["/home"])}}catch(r){o.show_error=!0,o.descripcion_error="Error al registrar el usuario. Vuelva a intentar.",console.log(r)}})()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(l.F0),e.Y36(p.e),e.Y36(h.M))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-registro"]],decls:12,vars:4,consts:[[1,"padding-all"],[1,"header"],["class","card text-white bg-danger",4,"ngIf"],[1,"design-w3l"],[1,"mail-form-agile"],["method","post",3,"ngSubmit"],["type","text","name","nombre","placeholder","Nombre",1,"padding",3,"ngModel","ngModelChange"],["type","email","name","email","placeholder","Email",1,"padding",3,"ngModel","ngModelChange"],["type","password","name","clave","placeholder","Contrase\xf1a",1,"padding",3,"ngModel","ngModelChange"],["type","submit","value","Registrarse"],[1,"card","text-white","bg-danger"],[1,"card-header"],[1,"card-body"],[1,"card-text"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h1"),e._uU(3,"Registro"),e.qZA(),e.qZA(),e.YNc(4,v,6,1,"div",2),e.TgZ(5,"div",3),e.TgZ(6,"div",4),e.TgZ(7,"form",5),e.NdJ("ngSubmit",function(){return r.onRegistro()}),e.TgZ(8,"input",6),e.NdJ("ngModelChange",function(g){return r.nombre=g}),e.qZA(),e.TgZ(9,"input",7),e.NdJ("ngModelChange",function(g){return r.email=g}),e.qZA(),e.TgZ(10,"input",8),e.NdJ("ngModelChange",function(g){return r.clave=g}),e.qZA(),e._UZ(11,"input",9),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(4),e.Q6J("ngIf",r.show_error),e.xp6(4),e.Q6J("ngModel",r.nombre),e.xp6(1),e.Q6J("ngModel",r.email),e.xp6(1),e.Q6J("ngModel",r.clave))},directives:[u.O5,a._Y,a.JL,a.F,a.Fj,a.JJ,a.On],styles:[""]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.Bz.forChild(f)],l.Bz]}),t})(),R=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.ez,Z,a.u5]]}),t})()}}]);