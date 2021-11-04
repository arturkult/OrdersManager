using System;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;
using Api.Persistence.EntityFramework;
using Api.Repositories.Interfaces;

namespace Api.Repositories.EntityFramework
{
    public class OrderRepository : IOrderRepository
    {
        private readonly ApplicationDbContext _context;

        public OrderRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task Add(Order order) => await _context.Orders.AddAsync(order);

        public async Task Complete()
        {
            await _context.SaveChangesAsync();
        }

        public IQueryable<Order> GetAll()
        {
            return _context.Orders.AsQueryable();
        }

        public ValueTask<Order> GetById(Guid id)
        {
            return _context.Orders.FindAsync(id);
        }

        public void Update(Order order)
        {
            _context.Update(order);
        }

        
    }
}