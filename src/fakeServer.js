export async function getListOnApi() {
    return new Promise((resolve) => {
      resolve([
        {
          id: 1,
          title: 'item 1',
          price: 'R$ 1100',
          pictureUrl: "https://m.media-amazon.com/images/I/41897yAI4LL._SY445_SX342_.jpg",
          estoque: 100,
          description: 'Descrição do item 1',
        },
        {
          id: 2,
          title: 'item 2',
          price: 'R$ 2200',
          pictureUrl: "https://m.media-amazon.com/images/I/81jbivNEVML._SY466_.jpg",
          estoque: 40,
          description: 'Descrição do item 2',
        },
        {
          id: 3,
          title: 'item 3',
          price: 'R$ 3300',
          pictureUrl: "https://m.media-amazon.com/images/I/41kT95iZ81L._SY445_SX342_.jpg",
          estoque: 70,
          description: 'Descrição do item 3',
        }
      ]);
    });
  }
  
  export async function getItem(itemId) {
    // Simula uma chamada à API para obter os detalhes do item com base no ID
    return new Promise((resolve) => {
      // Suponha que a API retorne os detalhes do item com base no ID fornecido
      const itemDetails = {
        id: itemId,
        title: `Item ${itemId}`,
        price: 'R$ 999',
        pictureUrl: `https://example.com/item${itemId}.jpg`,
        estoque: 10,
        description: `Descrição do item ${itemId}`,
      };
      // Simula um pequeno atraso na resposta da API
      setTimeout(() => {
        resolve(itemDetails);
      }, 1000);
    });
  }
  