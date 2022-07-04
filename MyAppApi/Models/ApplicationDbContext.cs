using System.Data.Entity;

namespace MyAppApi.Models
{
    public class ApplicationDbContext:DbContext
    {
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Group> Groups { get; set; }
    }
}