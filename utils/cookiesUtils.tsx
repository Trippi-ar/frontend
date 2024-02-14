import Cookies from 'js-cookie';

export interface Publication {
  id: string;
  name: string;
  quantity: number;
  price: number;
  date: Date;
  image: string;
}

export function setCartCookie(publications: Publication[]) {
  Cookies.set('cart', JSON.stringify(publications));
}

export function getCartCookie(): Publication[] | undefined {
  const cartCookie = Cookies.get('cart');
  if (cartCookie) {
    return JSON.parse(cartCookie);
  }
  return undefined;
}

export function addToCart(publication: Publication) {
  const existingCart = getCartCookie() || [];
  const existingItemIndex = existingCart.findIndex(item => item.id === publication.id);

  if (existingItemIndex !== -1) {
    const updatedCart = existingCart.map((item, index) => {
      if (index === existingItemIndex) {
        return {
          ...item,
          quantity: item.quantity + publication.quantity
        };
      }
      return item;
    });
    setCartCookie(updatedCart);
  } else {
    const updatedCart = [...existingCart, publication];
    setCartCookie(updatedCart);
  }
}

export function removeFromCart(publicationName: string) {
  const existingCart = getCartCookie() || [];
  const updatedCart = existingCart.filter((publication) => publication.name !== publicationName);
  setCartCookie(updatedCart);
}

export function clearCart() {
  Cookies.remove('cart');
}


export function getCookie(name: string) {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName.trim() === name) {
          return cookieValue;
      }
  }
  return '';
}