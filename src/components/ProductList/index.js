import React, { useState, useEffect } from 'react';
import ProductItem from '../ProductItem';
import ProductDetail from '../ProductDetail';
import './index.css';

const getListingProducts={
  "products": [
      {
          "id": "65e722ef17ecfb3a54e4bccd",
          "shopifyId": 6980692672564,
          "title": "Red Rose Bedhseet Set",
          "MRP": {
              "currency": "INR",
              "value": 2999
          },
          "price": {
              "value": 2400,
              "currency": "INR"
          },
          "brand": [
              {
                  "id": "65e57d913726edcc09f4209f",
                  "name": "COTTON CURIO"
              }
          ],
          "discountPercent": 20,
          "images": [
              {
                  "id": 29904275308596,
                  "position": 1,
                  "width": 1385,
                  "height": 1806,
                  "src": "https://cdn.shopify.com/s/files/1/0597/2023/7108/products/12_2.jpg?v=1667047768"
              },
              {
                  "id": 29904275243060,
                  "position": 2,
                  "width": 1400,
                  "height": 1867,
                  "src": "https://cdn.shopify.com/s/files/1/0597/2023/7108/products/12_1.jpg?v=1667047789"
              }
          ],
          "vendor": "Cotton Curio"
      },
      {
          "id": "652f8325e983495d5454d91a",
          "shopifyId": 7797348466826,
          "title": "Kamet Photo frame",
          "MRP": {
              "currency": "INR",
              "value": 1099
          },
          "price": {
              "value": 989,
              "currency": "INR"
          },
          "brand": [
              {
                  "id": "6303a7ec82ad229d0daf005d",
                  "name": "House This"
              }
          ],
          "discountPercent": 10,
          "images": [
              {
                  "id": 32993225965706,
                  "position": 1,
                  "width": 1080,
                  "height": 1440,
                  "src": "https://cdn.shopify.com/s/files/1/0334/2781/6586/files/PF1KMTNTRSTDS23_1.jpg?v=1697613485"
              },
              {
                  "id": 32993225769098,
                  "position": 2,
                  "width": 1080,
                  "height": 1440,
                  "src": "https://cdn.shopify.com/s/files/1/0334/2781/6586/files/PF1KMTNTRSTDS23_2.jpg?v=1697613484"
              },
              {
                  "id": 32993225736330,
                  "position": 3,
                  "width": 1080,
                  "height": 1440,
                  "src": "https://cdn.shopify.com/s/files/1/0334/2781/6586/files/PF1KMTNTRSTDS23_3.jpg?v=1697613484"
              },
              {
                  "id": 32993225900170,
                  "position": 4,
                  "width": 1080,
                  "height": 1440,
                  "src": "https://cdn.shopify.com/s/files/1/0334/2781/6586/files/PF1KMTNTRSTDS23_4.jpg?v=1697613485"
              },
              {
                  "id": 32993225998474,
                  "position": 5,
                  "width": 1080,
                  "height": 1440,
                  "src": "https://cdn.shopify.com/s/files/1/0334/2781/6586/files/PF1KMTNTRSTDS23_5.jpg?v=1697613486"
              }
          ],
          "vendor": "housethis"
      },
      {
          "id": "645f7c07bd480a8cd4f62c63",
          "shopifyId": 7680825688262,
          "title": "White Ceramic House Wax Melt/ Oil Burner / Tea Light Holder - TOH",
          "MRP": {
              "currency": "INR",
              "value": 1099
          },
          "price": {
              "value": 1044,
              "currency": "INR"
          },
          "brand": [
              {
                  "id": "645f783dccad61e8bdb7e7d4",
                  "name": "The Orby House"
              }
          ],
          "discountPercent": 5,
          "images": [
              {
                  "id": 39779917725980,
                  "position": 1,
                  "width": 1933,
                  "height": 2577,
                  "src": "https://cdn.shopify.com/s/files/1/0558/4830/4838/products/image_5dec3fea-ec89-4afb-b8e4-e3385bc186ec.jpg?v=1678486494"
              },
              {
                  "id": 39779908092188,
                  "position": 2,
                  "width": 2730,
                  "height": 3413,
                  "src": "https://cdn.shopify.com/s/files/1/0558/4830/4838/products/image_608ac1f8-6032-4a50-ade0-a0f5d370c966.jpg?v=1678486501"
              },
              {
                  "id": 39779938959644,
                  "position": 3,
                  "width": 3456,
                  "height": 5184,
                  "src": "https://cdn.shopify.com/s/files/1/0558/4830/4838/products/image_3568f6e8-9c80-4e4b-8f9a-cfeddb181f16.jpg?v=1678486513"
              }
          ],
          "vendor": "THE ORBY HOUSE"
      },
      {
          "id": "65f13d117f2139514f271f3d",
          "shopifyId": 8935110115622,
          "title": "Hoa Sphere - Table Lamp, Modern Scandinavian Design, Premium Metallic Finish, Easy Installation",
          "MRP": {
              "currency": "INR",
              "value": 8500
          },
          "price": {
              "value": 7199,
              "currency": "INR"
          },
          "brand": [
              {
                  "id": "65e70826d36584aba6e4e19e",
                  "name": "FIG LIVING"
              }
          ],
          "discountPercent": 15,
          "images": [
              {
                  "id": 45225027207462,
                  "position": 1,
                  "width": 2810,
                  "height": 2810,
                  "src": "https://cdn.shopify.com/s/files/1/0809/7359/4918/files/FIG-01-006-GR_1.jpg?v=1704830622"
              },
              {
                  "id": 45225027272998,
                  "position": 2,
                  "width": 2810,
                  "height": 2810,
                  "src": "https://cdn.shopify.com/s/files/1/0809/7359/4918/files/FIG-01-006-GR_2.jpg?v=1704830622"
              },
              {
                  "id": 45225027469606,
                  "position": 3,
                  "width": 2442,
                  "height": 2440,
                  "src": "https://cdn.shopify.com/s/files/1/0809/7359/4918/files/FIG-01-006-GR_3.jpg?v=1704830623"
              },
              {
                  "id": 45225079603494,
                  "position": 4,
                  "width": 2732,
                  "height": 2732,
                  "src": "https://cdn.shopify.com/s/files/1/0809/7359/4918/files/FIG-01-006-BR_1.jpg?v=1704830651"
              },
              {
                  "id": 45225079898406,
                  "position": 5,
                  "width": 2732,
                  "height": 2732,
                  "src": "https://cdn.shopify.com/s/files/1/0809/7359/4918/files/FIG-01-006-BR_2.jpg?v=1704830652"
              },
              {
                  "id": 45225079636262,
                  "position": 6,
                  "width": 2504,
                  "height": 2504,
                  "src": "https://cdn.shopify.com/s/files/1/0809/7359/4918/files/FIG-01-006-BR_3.jpg?v=1704830652"
              },
              {
                  "id": 45225111159078,
                  "position": 7,
                  "width": 2634,
                  "height": 2634,
                  "src": "https://cdn.shopify.com/s/files/1/0809/7359/4918/files/FIG-01-006-BL_1.jpg?v=1704830668"
              },
              {
                  "id": 45225110274342,
                  "position": 8,
                  "width": 2634,
                  "height": 2634,
                  "src": "https://cdn.shopify.com/s/files/1/0809/7359/4918/files/FIG-01-006-BL_2.jpg?v=1704830668"
              },
              {
                  "id": 45225109750054,
                  "position": 9,
                  "width": 2312,
                  "height": 2312,
                  "src": "https://cdn.shopify.com/s/files/1/0809/7359/4918/files/FIG-01-006-BL_3.jpg?v=1704830667"
              },
              {
                  "id": 46238697947430,
                  "position": 10,
                  "width": 3375,
                  "height": 3375,
                  "src": "https://cdn.shopify.com/s/files/1/0809/7359/4918/files/105.png?v=1711538898"
              },
              {
                  "id": 46238698078502,
                  "position": 11,
                  "width": 3375,
                  "height": 3375,
                  "src": "https://cdn.shopify.com/s/files/1/0809/7359/4918/files/106.png?v=1711538899"
              },
              {
                  "id": 46238698045734,
                  "position": 12,
                  "width": 3375,
                  "height": 3375,
                  "src": "https://cdn.shopify.com/s/files/1/0809/7359/4918/files/107.png?v=1711538899"
              },
              {
                  "id": 46238698012966,
                  "position": 13,
                  "width": 3375,
                  "height": 3375,
                  "src": "https://cdn.shopify.com/s/files/1/0809/7359/4918/files/108.png?v=1711538899"
              }
          ],
          "vendor": "FIG Living"
      },
      {
          "id": "6349413e29b251d1ff816f34",
          "shopifyId": 7550931861642,
          "title": "Mulaga Pink Kitchen Set",
          "MRP": {
              "currency": "INR",
              "value": 1599
          },
          "price": {
              "value": 1279,
              "currency": "INR"
          },
          "brand": [
              {
                  "id": "6303a7ec82ad229d0daf005d",
                  "name": "House This"
              }
          ],
          "discountPercent": 20,
          "images": [
              {
                  "id": 30982276841610,
                  "position": 1,
                  "width": 1080,
                  "height": 1440,
                  "src": "https://cdn.shopify.com/s/files/1/0334/2781/6586/products/KTSMLGPIKSTDS22_1.jpg?v=1665135218"
              },
              {
                  "id": 30982276874378,
                  "position": 2,
                  "width": 1080,
                  "height": 1440,
                  "src": "https://cdn.shopify.com/s/files/1/0334/2781/6586/products/KTSMLGPIKSTDS22_2.jpg?v=1665135218"
              },
              {
                  "id": 30982276907146,
                  "position": 3,
                  "width": 1080,
                  "height": 1440,
                  "src": "https://cdn.shopify.com/s/files/1/0334/2781/6586/products/KTSMLGPIKSTDS22_3.jpg?v=1665135218"
              },
              {
                  "id": 30982276939914,
                  "position": 4,
                  "width": 1080,
                  "height": 1440,
                  "src": "https://cdn.shopify.com/s/files/1/0334/2781/6586/products/KTSMLGPIKSTDS22_4.jpg?v=1665135218"
              }
          ],
          "vendor": "housethis"
      }]
}

function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://api.furrl.in/api/v2/listing/getListingProducts`);
      const data = await response.json();
      console.log(data);
      setProducts(prevProducts => [...prevProducts, ...data]);
    };

    fetchProducts();
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setPage(prevPage => prevPage + 1);
  };

  const handleProductClick = (productId) => {
    const product = getListingProducts["products"].find((p) => p.id === productId);
    console.log(productId,product,selectedProduct);
    setSelectedProduct(product);
    console.log(selectedProduct);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div className='init'>
      <img src="https://cdn.furrl.in/vibes/VibeCard_HomeHunts.jpg" className="top" />
    </div>
    <div className='middle'>
    <h4 className='products'>Products</h4>
    </div>
    <p className='nop'>5 products</p>
    <div className='tabs'>
      <p className='item active'>All</p>
      <p className='item'>Home</p>
      <p className='item'>Apparel</p>
      <p className='item'>Accesories</p>
    </div>
    {!selectedProduct&&
    <div className="product-list">
      {getListingProducts["products"].map(product => (
        <ProductItem key={product.id} product={product} onProductClick={handleProductClick} />
      ))}
    </div>
    }
    {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={handleCloseDetail}
        />
      )}
    </>
  );
}

export default ProductList;
