using System;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;

namespace Api.Repositories.Interfaces
{
    public interface IOrderRepository
    {
        Task Add(Order order);
        void Update(Order order);
        IQueryable<Order> GetAll();
        ValueTask<Order> GetById(Guid id);
        Task Complete();
    }
}