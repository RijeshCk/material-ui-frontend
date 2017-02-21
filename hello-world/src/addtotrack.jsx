import React from 'react';
function addtotrack(){
	fetch("url",{
					method:'POST',
					headers:{
								'Accept':'application/json',
								'Content-Type':'application/json'
							}
							,body:JSON.stringify({"key":value})})
}
