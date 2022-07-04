using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using MyAppApi.Models;
using System.Data.Entity;
using System.Threading.Tasks;

namespace MyAppApi.Controllers
{
    public class ContactsController : ApiController
    {
        private ApplicationDbContext _context;
        ContactsController() {
            _context = new ApplicationDbContext();
        }

        public async Task<IHttpActionResult> Get() {
            return Ok(await _context.Contacts.Include(i => i.Group).ToListAsync());
        }

        [HttpGet]
        [Route("api/contacts/favourites")]
        public async Task<IHttpActionResult> GetFavouriteContacts() {
            return Ok(await _context.Contacts.Include(c => c.Group).Where(c => c.Fevourite == true).ToListAsync());
        }

        [HttpGet]
        [Route("api/contacts/group/{gid}")]
        public async Task<IHttpActionResult> GetGroupContacts(int gid)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var contacts =  await _context.Contacts.Include(c => c.Group).Where(c => c.GroupId == gid).ToListAsync();
            return Ok(contacts);
        }
        public async Task<IHttpActionResult> Get(int id) {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var contact =  await _context.Contacts.Include(i => i.Group).SingleOrDefaultAsync(c => c.Id == id);
            if (contact == null)
                return NotFound();
            return Ok(contact);
        }

        public async Task<IHttpActionResult> Post(Contact contact) {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            _context.Contacts.Add(contact);
            await _context.SaveChangesAsync();
            return Ok(ModelState);
        }

        public async Task<IHttpActionResult> Put(int id, Contact contact) {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            Contact contactInDb = _context.Contacts.SingleOrDefault(c => c.Id == id);
            if (contactInDb != null)
            {
                contactInDb.Name = contact.Name;
                contactInDb.Number = contact.Number;
                contactInDb.Email = contact.Email;
                contactInDb.Address = contact.Address;
                contactInDb.Fevourite = contact.Fevourite;
                contactInDb.GroupId = contact.GroupId;
                await _context.SaveChangesAsync();
                return Ok(ModelState);
            }
            else
                return NotFound();
        }

        public async Task<IHttpActionResult> Delete(int id) {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            Contact contact = _context.Contacts.SingleOrDefault(c => c.Id == id);
            if (contact != null)
            {
                _context.Contacts.Remove(contact);
                await _context.SaveChangesAsync();
                return Ok();
            }
            else
                return NotFound();
        }
    }
}
