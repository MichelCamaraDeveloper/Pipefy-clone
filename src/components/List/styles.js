import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  opacity: ${props => props.done ? 0.6 : 1};
  /* Se o Props.done for true, entao aplica 0.6 de opacidade. senao, 1 (100%) */
  flex: 0 0 320px;
  /* Esse Flex equivale a esses 3 abaixo:
  //1-   flex-grow:0;
  //   O flex-grow determina a habilidade de um elemento esticar mais que o necessario,
  //   se 1 ele vai esticar para ocupar todo o espaco possivel, se 2 vai ocupar duas vezes mais espaco.
  //   O 0 diz que esse componete nao pode esticar

  //2-   flex-shrink:0;
  //   O flex-shrink determina a possibilidade desse elemento reduzir, 
  //   se 1 o elemento vai reduzir junto com o tamanho da tela, vai ocupar o minimo 
  //   possivel de espaco na tela, se 0 vai permanecer com a mesma largura e ira gerar
  //   uma barra de rolagem automatica.

  //3- flex-basic:  320px;
  // O flex-basic determina o tamanho base dese elemento.

//   // Aqui estou falando com o & + div, que eu quero estilizar toda Div que venha depois de outra Div
//   // Em grosso modo, estou estilizando a segunda div da tela */
   & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
   }

   header{
       display: flex;
       justify-content: space-between;
       align-items: center;
       height: 42px;

       h2 {
        font-weight: 500;
        font-size:16px;
        padding: 0 10px;
       }

       button{
        width:42px;
        height: 42px;
        border-radius: 18px;
        background: #3b5bfd;
        border: 0;
        cursor: pointer; 
       }
   }
   ul{
       margin-top: 30px;
   }
`;
