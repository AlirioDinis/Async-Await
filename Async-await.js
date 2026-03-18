function getuser(id) {
  return fetch(`http://localhost:3000/api/user/${id}`)
    .then(res => res.json())
    .catch(err => console.log(err));
}

async function ShowUserName(id) {
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = "<p>A carregar...</p>";

  const User = await getuser(id);

  if (!User) {
    resultado.innerHTML = "<p>Utilizador não encontrado.</p>";
    return;
  }

  resultado.innerHTML = `
    <div class="card">
      <h2>${User.name}</h2>
      <p><strong>Username:</strong> ${User.username}</p>
      <p><strong>Email:</strong> ${User.email}</p>
      <p><strong>Telefone:</strong> ${User.phone}</p>
      <p><strong>Website:</strong> ${User.website}</p>
      <p><strong>Cidade:</strong> ${User.address.city}</p>
      <p><strong>Empresa:</strong> ${User.company.name}</p>
    </div>
  `;
}

// Evento do botão
document.getElementById("btn-buscar").addEventListener("click", () => {
  const id = document.getElementById("input-id").value;

  if (!id) {
    document.getElementById("resultado").innerHTML = "<p>Digite um ID válido.</p>";
    return;
  }

  ShowUserName(id);
});