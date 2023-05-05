import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Bertine',
      sobrenome: 'Castor',
      email: 'bertinecastor6@gmail.com',
      idade: 48,
      peso: 65,
      altura: 1.74,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
