//Sintaxe do async-await 

function PrimeiraFuncao() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log("Esperou isso aqui!")
            resolve()
        }, 5000)
    })
}

//Funcão async-await
async function SegundaFuncao() {
    console.log("Iniciou")
   await PrimeiraFuncao()
    console.log("Terminou!")
}

//Invococamos a função
SegundaFuncao() 

//Prático

/*
Não funcional(mas serve de bom estudo de caso)
function getuser(id) {
    return fetch(`http://reqres.in/api/users?id=${id}`)
    .then(data => data.json())
    .catch( err =>
        console.log(err))

    }

    async function ShowUserName(id) {
        const User = await getuser(id)
        
        console.log(`O nome do usuário é: ${User.data.first_name}`)
    }

    ShowUserName(3) 
*/

   function getuser(id) {
    return fetch(`http://localhost:3000/api/user/${id}`)
      .then(res => res.json())
      .catch(err => console.log(err));
  }
  
  /*
  Exibe apenas o nome do Usuário
  async function ShowUserName(id) {
    const User = await getuser(id);
    console.log(`O nome do usuário é: ${User.name}`); // ← sem .data
  }
  */
  async function ShowUserName(id) {
    const User = await getuser(id);
    console.log(`Nome: ${User.name}`);
    console.log(`Username: ${User.username}`);
    console.log(`Email: ${User.email}`);
  }
  ShowUserName(3);