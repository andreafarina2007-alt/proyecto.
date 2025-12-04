import { useCart } from './CartContext';

const CartIcon = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ position: 'relative', cursor: 'pointer' }}>
      <span style={{ fontSize: '24px' }}>🛒</span>
      {totalItems > 0 && (
        <span
          style={{
            position: 'absolute',
            top: '-5px',
            right: '-10px',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 6px',
            fontSize: '12px'
          }}
        >
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
