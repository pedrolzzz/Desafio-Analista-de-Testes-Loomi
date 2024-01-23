Ao abrir a pasta no editor de codigo usar o comando npx Cypress open para iniciar o Cypress
Escolher a opção E2E Testing
os testes foram realizados em 3 browses chegando no mesmo resultado
Chrome v120, Edge v120 e Electron v114 - Escolher o de sua preferencia 
Depois Clicar em "Star E2E Testing in ..."
Na aba specs é onde esta localizado os testes
Separei o testes de acordo com as suas funcionalidades
Recomendo Começar pelo Teste de Login - > kasa_login
Depois o Teste de Busca - > kasa_busca
Depois o Teste de Favorito  -> kasa_favorito
Depois o Teste de Calendario - > kasa_calendario
e Por ultimo o Teste de Melhores Momentos -> kasa_melhoresMomentos

obs:
Como alguns bugs foram encotrados por Exemplo se eu buscar melhores momentos de um campeonato 
que é confirmado que existe melhores momentos o site resulta que não existe melhores momentos 
dando erro no teste 
E antes de Entregar o site começou a ter problema em remover uma partida do calendario 
apresentando um erro de não foi possivel remover resultando erros nos testes automaticos 

