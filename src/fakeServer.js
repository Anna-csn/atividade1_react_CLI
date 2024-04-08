export async function  getListOnApi(){
    return new Promise ((resolve) => {
        resolve([{
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
           }])
        })
}