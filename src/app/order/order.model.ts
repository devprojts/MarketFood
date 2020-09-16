class Order{
constructor(
        public address: string,
        public number: number,
        public optionalAdress: string,
        public paymentOption: string,
        public OrderItems: OrderItem[] = []

        ){}


}

class OrderItem{
    constructor(public quantity: number, public menuId: string ){}
}

