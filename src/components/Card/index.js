import React, { useRef, useContext } from 'react';
//Componente que permite o drag-in-drop na tela, 
//ela ja vem com a parte de Hooks integrada
import {useDrag, useDrop} from 'react-dnd';
import BoardContext from '../Board/context';

import { Container, Label } from './styles';

export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  // Essa const é uma array, isDragging é um elemento e dragRef é a referencia de
  // chamada dessa const no return.
  const[{isDragging}, dragRef]=useDrag({
    item:{ type: 'CARD', index, listIndex },
    collect: monitor =>({
      isDragging: monitor.isDragging(),
    }),
  });

  const[, dropRef]= useDrop({
    accept:'CARD',
    hover(item, monitor) {
      const draggedIndex = item.index;
      const targetIndex = index;
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;




      if(draggedIndex === targetIndex && draggedListIndex === targetListIndex){
        return;
      }

      // Para descobrir o tamanho do elemento, nesse CacheStorage, o tamanho do card
      const targetSize = ref.current.getBoundingClientRect();
      //Realizando um calculo para saber o ponto central do card;
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top; 

      if(draggedIndex < targetIndex && draggedTop < targetCenter){
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter){
        return;
      }


      move(draggedListIndex,targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;

    }
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={ isDragging}>
      <header>
        {data.labels.map(label=><Label key={label} color={label}/>)}
      </header>
      <p>{data.content}</p>
      {/* Se data.user for TRUE(ususario tiver imagem), tiver imagem mostra.  */}
      {data.user && <img src={data.user} alt="" /> }
    </Container>
  );
}
