module.exports = function (plop) {
    plop.setGenerator('new', {
      description: 'Cria um novo projeto',
      prompts: [
        {
          type: 'input',
          name: 'nomeDoProjeto',
          message: 'Qual é o nome do projeto?'
        }
      ],
      actions: [
        {
          type: 'addMany',
          destination: '{{nomeDoProjeto}}',
          base: 'templates',
          templateFiles: 'templates/**'
        }
      ]
    });
  };
  