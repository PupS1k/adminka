using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using adminka.Model;
using AutoMapper;
using adminka.ModelDTO;

namespace adminka.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserContext _context;
        private readonly IMapper _mapper;

        public UsersController(UserContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Users
        [HttpGet]
        public IEnumerable<UserView> GetUsers()
        {
            var users = _context.Users.Include(u => u.Roles).ThenInclude(r => r.Role).ToList();
            return _mapper.Map<List<User>, List<UserView>>(users);
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _context.Users.Where(u => u.Id == id).Include(u => u.Roles).ThenInclude(r => r.Role).ToListAsync();

            if (user == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<List<User>, List<UserView>>(user));
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser([FromRoute] int id, [FromBody] EditUserView editUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.RoleUsers.Where(roleUser => roleUser.UserId == id).ToList()
                .ForEach(deleted => _context.RoleUsers.Remove(deleted));

            User user = _mapper.Map<EditUserView, User>(editUser);


            if (id != editUser.Id)
            {
                return BadRequest();
            }

            _context.Users.Update(user);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        [HttpPost]
        public async Task<IActionResult> PostUser([FromBody] EditUserView user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            User newUser = _mapper.Map<EditUserView, User>(user);

            _context.Users.Add(newUser);
            newUser.Roles.ForEach(roleUser => _context.RoleUsers.Add(roleUser));

            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _context.Users.FindAsync(id);
            List<RoleUser> allRoles = _context.RoleUsers.Where(u => u.UserId == id).OrderBy(u => u.RoleId).ToList();
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            allRoles.ForEach(roleUser => _context.RoleUsers.Remove(roleUser));
            await _context.SaveChangesAsync();

            return Ok(user);
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}