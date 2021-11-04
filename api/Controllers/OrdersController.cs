using System;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;
using Api.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderRepository _orderRepository;

        public OrdersController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            return Ok(await _orderRepository.GetAll().Where(order => order.Status == Models.OrderStatus.New).ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetByIdAsync(string id)
        {
            var guid = Guid.Parse(id);
            return Ok(await _orderRepository.GetAll().FirstOrDefaultAsync(order => order.Id == guid));
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] Order order)
        {
            await _orderRepository.Add(order);
            await _orderRepository.Complete();
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAsync([FromBody] Order order)
        {
            _orderRepository.Update(order);
            await _orderRepository.Complete();
            return Ok();
        }
    }
}