using MyAppApi.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Data.Entity;
using System.Threading.Tasks;


namespace MyAppApi.Controllers
{
    public class GroupsController : ApiController
    {
        private ApplicationDbContext _context;
        GroupsController()
        {
            _context = new ApplicationDbContext();
        }
        public async Task<IHttpActionResult> Get()
        {
            return Ok(await _context.Groups.ToListAsync());
        }
        public async Task<IHttpActionResult> Get(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var group = await _context.Groups.SingleOrDefaultAsync(g => g.Id == id);
            if (group == null)
                return NotFound();
            return Ok(group);
        }

        public async Task<IHttpActionResult> Post(Group group)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.Groups.Add(group);
            await _context.SaveChangesAsync();
            return Ok(ModelState);
        }

        public async Task<IHttpActionResult> Put(int id, Group group)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            Group groupInDb = await _context.Groups.SingleOrDefaultAsync(g => g.Id == id);
            if (groupInDb != null)
            {
                groupInDb.Name = group.Name;
                groupInDb.Description = group.Description;

                await _context.SaveChangesAsync();
                return Ok(ModelState);
            }
            else
                return NotFound();
        }

        public async Task<IHttpActionResult> Delete(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            Group group = _context.Groups.SingleOrDefault(g => g.Id == id);
            if (group != null)
            {
                _context.Groups.Remove(group);
                await _context.SaveChangesAsync();
                return Ok(ModelState);
            }
            else
                return NotFound();
        }
    }
}
