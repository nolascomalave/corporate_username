function destilde(text:string):string{
	let a:string = '[áäàâ]',
        e:string = '[éèêë]',
        i:string = '[íïîì]',
        o:string = '[óòôö]',
        u:string = '[úûùü]';

	text = text.replace(eval('/'+a+'/gi'), 'a');
	text = text.replace(eval('/'+e+'/gi'), 'e');
	text = text.replace(eval('/'+i+'/gi'), 'i');
	text = text.replace(eval('/'+o+'/gi'), 'o');
	text = text.replace(eval('/'+u+'/gi'), 'u');

	return text.replace(/ñ/gi, 'nh');
}

function username(name:string, fname:string, array:[string]):string{
    let abc:string = 'abcdefghijklmnñopqrstuvwxyz',
        username:string|string[] = destilde(fname+name.charAt(0)).toLowerCase(),
        initialUserName:string = username,
        iterations:[number] = [0];

    do{
        let add:string = '';
        for(let i=0; i<iterations.length; i++){
            add+= abc.charAt(iterations[i]);
        }

        if(iterations.length<2){
            if(!array.some(el => el.toLocaleLowerCase() === username)) return username;
        }

        username = initialUserName+add;

        for(let j:number = 0; j<27; j++){
            username = username.slice(0, username.length-1) + abc.charAt(j);

            if(!array.some(el => el.toLocaleLowerCase() === username)) return username;

            if(iterations.length>1){
                for(let i:number = iterations.length; i>0; i--){
                    if(iterations[i-1]<26){
                        iterations[i-1]++;
                        break;
                    }else{
                        iterations[i-1]=0;
                        if(i-1==0){
                            iterations.push(0);
                            break;
                        }
                    }
                }
            }else{
                iterations.push(0);
            }
        }
    }while(true);
}
