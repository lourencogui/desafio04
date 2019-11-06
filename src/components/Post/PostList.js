import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        owner: {
          name: 'Guilherme',
          avatar: 'https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/52486488_1537670526367334_1704758655351521280_n.jpg?_nc_cat=107&_nc_oc=AQnO-RXQrwdy2PIOB2hY-1fwVbD9slmZlz0uWDc7TU13YPPleOoArXqxkJRv-HbXBHY&_nc_ht=scontent.fsjk2-1.fna&oh=9d25a10e42bbc4a30bf836ef207bdf56&oe=5DEF7A70',
        },
        content: 'Marcelo vira mal demais a bola e ela fica para Tau. O atacante toca na frente para Openda, só que o passe sai muito forte e fica com Areola',
        createdAt: '31 Set 2019',
        comments: [
          {
            id: 1,
            owner: {
              name: 'Gabriel',
              avatar: 'https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/45304152_1996828260404340_6040801322058383360_n.jpg?_nc_cat=107&_nc_oc=AQlwxOZoLP5yCNiFCXPBkW6M3hoUmIzgx587jicVLB--m-9ZrNjxASbE39ZoSJj9L18&_nc_ht=scontent.fsjk2-1.fna&oh=74d838d787bd911446bb64987b3c2c68&oe=5E3BB084',
            },
            content: 'Bola rolando no segundo tempo.',
            createdAt: '1 Out 2019',
          },
          {
            id: 2,
            owner: {
              name: 'Guilherme',
              avatar: 'https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/52486488_1537670526367334_1704758655351521280_n.jpg?_nc_cat=107&_nc_oc=AQnO-RXQrwdy2PIOB2hY-1fwVbD9slmZlz0uWDc7TU13YPPleOoArXqxkJRv-HbXBHY&_nc_ht=scontent.fsjk2-1.fna&oh=9d25a10e42bbc4a30bf836ef207bdf56&oe=5DEF7A70',
            },
            content: 'Di María é lançado novamente pela esquerda, entra na área e cruza buscando Mbappé, mas Donk faz o corte.',
            createdAt: '1 Out 2019',
          }
        ]
      },
      {
        id: 2,
        owner: {
          name: 'Gabriel',
          avatar: 'https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/45304152_1996828260404340_6040801322058383360_n.jpg?_nc_cat=107&_nc_oc=AQlwxOZoLP5yCNiFCXPBkW6M3hoUmIzgx587jicVLB--m-9ZrNjxASbE39ZoSJj9L18&_nc_ht=scontent.fsjk2-1.fna&oh=74d838d787bd911446bb64987b3c2c68&oe=5E3BB084',
        },
        content: 'Feghouli é lançado na área pela direita, faz o cruzamento mas Thiago Silva corta de cabeça.',
        createdAt: '2 Set 2019',
        comments: [
          {
            id: 3,
            owner: {
              name: 'Gabriel',
              avatar: 'https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/45304152_1996828260404340_6040801322058383360_n.jpg?_nc_cat=107&_nc_oc=AQlwxOZoLP5yCNiFCXPBkW6M3hoUmIzgx587jicVLB--m-9ZrNjxASbE39ZoSJj9L18&_nc_ht=scontent.fsjk2-1.fna&oh=74d838d787bd911446bb64987b3c2c68&oe=5E3BB084',
            },
            content: 'Cartão amarelo para Di María, por falta em Seri.',
            createdAt: '15 Set 2019',
          },
          {
            id: 4,
            owner: {
              name: 'Guilherme',
              avatar: 'https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/52486488_1537670526367334_1704758655351521280_n.jpg?_nc_cat=107&_nc_oc=AQnO-RXQrwdy2PIOB2hY-1fwVbD9slmZlz0uWDc7TU13YPPleOoArXqxkJRv-HbXBHY&_nc_ht=scontent.fsjk2-1.fna&oh=9d25a10e42bbc4a30bf836ef207bdf56&oe=5DEF7A70',
            },
            content: 'Contra-ataque do PSG, Choupo-Moting rola para Mbappé na esquerda, e o francês chuta de canhota para mais uma defesa de Muslera.',
            createdAt: '1 Out 2019',
          }
        ]
      },
    ]
  }
  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(p => <Post key={p.id} post={p} />)}
      </div>
    )
  }
}

export default PostList;