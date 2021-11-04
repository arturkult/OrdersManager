using System;

namespace Api.Models
{
    public class Order 
    {
        public Guid Id { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
        public string Phone { get; set; }
        public int Amount { get; set; }
        public int Cost { get; set; }
        public OrderStatus Status { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime DeliveryDate { get; set; }
    }
}