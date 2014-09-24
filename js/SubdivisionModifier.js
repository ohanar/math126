THREE.SubdivisionModifier=function(e){this.subdivisions=e===undefined?1:e};THREE.SubdivisionModifier.prototype.modify=function(e){var a=this.subdivisions;while(a-->0){this.smooth(e)}delete e.__tmpVertices;e.computeFaceNormals();e.computeVertexNormals()};(function(){var e=!true;var a=["a","b","c"];function n(e,a,n){var i=Math.min(e,a);var r=Math.max(e,a);var o=i+"_"+r;return n[o]}function i(e,a,n,i,r,o){var t=Math.min(e,a);var s=Math.max(e,a);var c=t+"_"+s;var f;if(c in i){f=i[c]}else{var d=n[t];var l=n[s];f={a:d,b:l,newEdge:null,faces:[]};i[c]=f}f.faces.push(r);o[e].edges.push(f);o[a].edges.push(f)}function r(e,a,n,r){var o,t,s,c;for(o=0,t=e.length;o<t;o++){n[o]={edges:[]}}for(o=0,t=a.length;o<t;o++){s=a[o];i(s.a,s.b,e,r,s,n);i(s.b,s.c,e,r,s,n);i(s.c,s.a,e,r,s,n)}}function o(e,a,n,i){e.push(new THREE.Face3(a,n,i))}THREE.SubdivisionModifier.prototype.smooth=function(i){var t=new THREE.Vector3;var s,c;var f,d;var l,v,u,h,g,b;var m,p;var p,E,w;s=i.vertices;c=i.faces;m=new Array(s.length);p={};r(s,c,m,p);E=[];var y,M,S,H;var R,T,V;for(u in p){M=p[u];S=new THREE.Vector3;R=3/8;T=1/8;V=M.faces.length;if(V!=2){R=.5;T=0;if(V!=1){if(e)console.warn("Subdivision Modifier: Number of connected faces != 2, is: ",V,M)}}S.addVectors(M.a,M.b).multiplyScalar(R);t.set(0,0,0);for(g=0;g<V;g++){H=M.faces[g];for(b=0;b<3;b++){y=s[H[a[b]]];if(y!==M.a&&y!==M.b)break}t.add(y)}t.multiplyScalar(T);S.add(t);M.newEdge=E.length;E.push(S)}var _,x,N;var F,k,A,j;w=[];for(u=0,h=s.length;u<h;u++){A=s[u];k=m[u].edges;l=k.length;_;if(l==3){_=3/16}else if(l>3){_=3/(8*l)}x=1-l*_;N=_;if(l<=2){if(l==2){if(e)console.warn("2 connecting edges",k);x=3/4;N=1/8}else if(l==1){if(e)console.warn("only 1 connecting edge")}else if(l==0){if(e)console.warn("0 connecting edges")}}j=A.clone().multiplyScalar(x);t.set(0,0,0);for(g=0;g<l;g++){F=k[g];y=F.a!==A?F.a:F.b;t.add(y)}t.multiplyScalar(N);j.add(t);w.push(j)}f=w.concat(E);var q=w.length,z,B,C;d=[];for(u=0,h=c.length;u<h;u++){H=c[u];z=n(H.a,H.b,p).newEdge+q;B=n(H.b,H.c,p).newEdge+q;C=n(H.c,H.a,p).newEdge+q;o(d,z,B,C);o(d,H.a,z,C);o(d,H.b,B,z);o(d,H.c,C,B)}i.vertices=f;i.faces=d}})();