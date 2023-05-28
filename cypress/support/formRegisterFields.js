const { Chance } = require("chance")
const fakerDatas = new Chance()
// responsavel por todos os campos dinamicos do formulário de cadastro de usuário
const fieldsName = {
    taxvat: () => fakerDatas.cpf(),
    phone: () => '47999999999',
    first_name: () => fakerDatas.name(),
    last_name: () => fakerDatas.last(),
    'aniversário': () => fakerDatas.birthday({ string: true, american: false })
  };
  
  export default fieldsName;
  