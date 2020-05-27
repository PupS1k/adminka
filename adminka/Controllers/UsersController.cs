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
            var users = _context.Usrs.Include(u => u.Roles).ThenInclude(r => r.Role).Select(user => new UserView
            {
                Id = user.Id,
                Age = user.Age,
                FullName = user.FullName,
                UserName = user.UserName,
                Roles = user.Roles.Select(role => _mapper.Map<Role, RoleView>(role.Role)).ToList()
            }).ToList();

            return users;
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _context.Usrs.Where(u => u.Id == id).Include(u => u.Roles).ThenInclude(r => r.Role)
                .Select(usr => new UserView
                {
                    Id = usr.Id,
                    Age = usr.Age,
                    FullName = usr.FullName,
                    UserName = usr.UserName,
                    Roles = usr.Roles.Select(role => _mapper.Map<Role, RoleView>(role.Role)).ToList()
                }).ToListAsync();

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser([FromRoute] int id, [FromBody] User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

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
        public async Task<IActionResult> PostUser([FromBody] User user)
        {
            User newUser = new User
            {
                Age = user.Age,
                FullName = user.FullName,
                UserName = user.UserName,
                Roles = user.Roles.Select(roleuser => {
                    RoleUser newRoleUser = new RoleUser { RoleId = roleuser.RoleId, UserId = user.Id };
                    _context.RoleUsrs.Add(newRoleUser);
                    return newRoleUser;
                }).ToList()
            };

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            _context.Usrs.Add(newUser);

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

            var user = await _context.Usrs.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Usrs.Remove(user);
            await _context.SaveChangesAsync();

            return Ok(user);
        }

        private bool UserExists(int id)
        {
            return _context.Usrs.Any(e => e.Id == id);
        }
    }
}