using System.Diagnostics.CodeAnalysis;
using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Persistence.EntityFramework
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Order> Orders { get; set; }
        public ApplicationDbContext([NotNullAttribute] DbContextOptions options) : base(options)
        {
        }
    }
}