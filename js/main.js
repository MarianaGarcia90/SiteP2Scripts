function enviar(formDados) 
{   if (formDados.nome.value == "")   {     
    alert("Digite um valor para o campo \"Nome\".");     
    formDados.nome.focus();     
    return false;   
} 
 
  if (formDados.email.value == "")   {     
      alert("Digite um valor para o campo \"E-mail\".");     
      formDados.email.focus();     
      return false;   
    } 
 
  if (formDados.mensagem.value == "")   {     
      alert("Digite um valor para o campo \"Mensagem\".");     
      formDados.mensagem.focus();     
      return false;   
    } 
  alert("Mensagem enviada, em breve entraremos em contato.")   
  return true;
}