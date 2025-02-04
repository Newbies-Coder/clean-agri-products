interface OrderItemProps {
  id: string;
  thumbnail: string;
  name: string;
  quantity: number;
  price: number;
}

const OrderItem: React.FC<OrderItemProps> = ({
  id,
  thumbnail,
  name,
  quantity,
  price,
}) => {
  return (
    <div className="flex items-center">
      <img src={thumbnail} className="w-16 max-w-full rounded-lg" alt={id} />
      <p className="mx-3 text-gray-800">{name}</p>
      <span className="text-primary font-medium">x{quantity}</span>
      <span className=" block ml-auto">
        ${(quantity * price).toFixed(2)}
      </span>
    </div>
  );
};

export default OrderItem;
