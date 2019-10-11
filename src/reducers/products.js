//List of product
var initialState =[
    {
        id: 1,
        name : 'iphone 7 plus',
        image: 'https://images.fpt.shop/unsafe/fit-in/465x465/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/1/21/636836609818617272_ip7-plus-hong-1.png',
        description: 'Sản phẩm do apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name : 'Samsung note 10+',
        image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/n/o/note_10_plus_xanh.jpg',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 300,
        inventory: 12,
        rating: 5
    },
    {
        id: 3,
        name : 'Xiaomi k20 pro',
        image: 'https://msg2viw9dj.vcdn.com.vn/uploads/2019/05/thumb_K20Pro_2.jpg',
        description: 'Sản phẩm do Xiaomi sản xuất',
        inventory: 22,
        price: 200,
        rating:3
    }
];//Array of product

//function
const products=(state=initialState,action)=>{
    //switch of action type
    switch(action.type){
        default:return [...state];
    }
}

export default products;
