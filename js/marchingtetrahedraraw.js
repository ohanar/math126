var cube_vertices=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],tetra_list=[[0,2,3,7],[0,6,2,7],[0,4,6,7],[0,6,1,2],[0,1,6,4],[5,6,1,4]];marchingTetrahedra=function(a,r,e){var s=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],h=[[0,2,3,7],[0,6,2,7],[0,4,6,7],[0,6,1,2],[0,1,6,4],[5,6,1,4]];if(!e){e=[[0,0,0],a]}var v=[0,0,0];var t=[0,0,0];for(var c=0;c<3;++c){v[c]=(e[1][c]-e[0][c])/a[c];t[c]=e[0][c]}var u=[],n=[],b=0,f=new Float32Array(8),o=new Int32Array(12),p=[0,0,0];function k(a,r){var e=f[a],h=f[r],c=s[a],n=s[r],b=[p[0],p[1],p[2]],o=e-h;if(Math.abs(o)>1e-6){o=e/o}for(var k=0;k<3;++k){b[k]=v[k]*(b[k]+c[k]+o*(n[k]-c[k]))+t[k]}u.push(b);return u.length-1}for(p[2]=0;p[2]<a[2]-1;++p[2],b+=a[0])for(p[1]=0;p[1]<a[1]-1;++p[1],++b)for(p[0]=0;p[0]<a[0]-1;++p[0],++b){for(var c=0;c<8;++c){var i=s[c];f[c]=r(v[0]*(p[0]+i[0])+t[0],v[1]*(p[1]+i[1])+t[1],v[2]*(p[2]+i[2])+t[2])}for(var c=0;c<h.length;++c){var l=h[c],g=0;if(f[l[0]]<0)g|=1;if(f[l[1]]<0)g|=2;if(f[l[2]]<0)g|=4;if(f[l[3]]<0)g|=8;switch(g){case 0:case 15:break;case 14:n.push([k(l[0],l[1]),k(l[0],l[3]),k(l[0],l[2])]);break;case 1:n.push([k(l[0],l[1]),k(l[0],l[2]),k(l[0],l[3])]);break;case 13:n.push([k(l[1],l[0]),k(l[1],l[2]),k(l[1],l[3])]);break;case 2:n.push([k(l[1],l[0]),k(l[1],l[3]),k(l[1],l[2])]);break;case 12:n.push([k(l[1],l[2]),k(l[1],l[3]),k(l[0],l[3]),k(l[0],l[2])]);break;case 3:n.push([k(l[1],l[2]),k(l[0],l[2]),k(l[0],l[3]),k(l[1],l[3])]);break;case 4:n.push([k(l[2],l[0]),k(l[2],l[1]),k(l[2],l[3])]);break;case 11:n.push([k(l[2],l[0]),k(l[2],l[3]),k(l[2],l[1])]);break;case 5:n.push([k(l[0],l[1]),k(l[1],l[2]),k(l[2],l[3]),k(l[0],l[3])]);break;case 10:n.push([k(l[0],l[1]),k(l[0],l[3]),k(l[2],l[3]),k(l[1],l[2])]);break;case 6:n.push([k(l[2],l[3]),k(l[0],l[2]),k(l[0],l[1]),k(l[1],l[3])]);break;case 9:n.push([k(l[2],l[3]),k(l[1],l[3]),k(l[0],l[1]),k(l[0],l[2])]);break;case 7:n.push([k(l[3],l[0]),k(l[3],l[1]),k(l[3],l[2])]);break;case 8:n.push([k(l[3],l[0]),k(l[3],l[2]),k(l[3],l[1])]);break}}}var w=new Float32Array(n.length*3*3);var y=new Float32Array(n.length*3*3);for(var c=0,A=0;c<n.length;c++,A+=9){var F=n[c];var m=u[F[0]];var M=u[F[1]];var _=u[F[2]];w[A]=m[0];w[A+1]=m[1];w[A+2]=m[2];w[A+3]=M[0];w[A+4]=M[1];w[A+5]=M[2];w[A+6]=_[0];w[A+7]=_[1];w[A+8]=_[2];var d=[_[0]-M[0],_[1]-M[1],_[2]-M[2]];var q=[m[0]-M[0],m[1]-M[1],m[2]-M[2]];var I=[d[1]*q[2]-d[2]*q[1],-d[0]*q[2]+d[2]*q[0],d[0]*q[1]-d[1]*q[0]];var T=Math.sqrt(I[0]*I[0]+I[1]*I[1]+I[2]*I[2]);var b=[I[0]/T,I[1]/T,I[2]/T];y[A]=b[0];y[A+1]=b[1];y[A+2]=b[2];y[A+3]=b[0];y[A+4]=b[1];y[A+5]=b[2];y[A+6]=b[0];y[A+7]=b[1];y[A+8]=b[2]}return{positions:w,normals:y}};