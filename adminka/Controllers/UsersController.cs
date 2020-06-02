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
            var users = _context.Usrs.Include(u => u.Roles).ThenInclude(r => r.Role).ToList();
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

            var user = await _context.Usrs.Where(u => u.Id == id).Include(u => u.Roles).ThenInclude(r => r.Role).ToListAsync();

            if (user == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<List<User>, List<UserView>>(user));
        }

        public void updateRoleUsers(List<RoleUser> oldRoleUsers, List<RoleUser> newRoleUsers)
        {
            _context.RoleUsrs.RemoveRange(oldRoleUsers);
            newRoleUsers.ForEach(roleUser => _context.RoleUsrs.Add(roleUser));
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser([FromRoute] int id, [FromBody] EditUserView editUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            User user = _mapper.Map<EditUserView, User>(editUser);
            List<RoleUser> allRoles = _context.RoleUsrs.Where(u => u.UserId == id).OrderBy(u => u.RoleId).ToList();

            if (allRoles.Count != user.Roles.Count)
            {
                updateRoleUsers(allRoles, user.Roles);
            }
            else
            {
                IEnumerable<int> rolesId = user.Roles.OrderBy(u => u.RoleId).Select(roleuser => roleuser.RoleId);
                IEnumerable<int> allRolesId = allRoles.OrderBy(u => u.RoleId).Select(roleuser => roleuser.RoleId);
                if (!allRolesId.SequenceEqual(rolesId))
                {
                    updateRoleUsers(allRoles, user.Roles);
                }
            }

            if (id != editUser.Id)
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

            return Ok(editUser);
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

            _context.Usrs.Add(newUser);
            newUser.Roles.ForEach(roleUser => _context.RoleUsrs.Add(roleUser));

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
            List<RoleUser> allRoles = _context.RoleUsrs.Where(u => u.UserId == id).OrderBy(u => u.RoleId).ToList();
            if (user == null)
            {
                return NotFound();
            }

            _context.Usrs.Remove(user);
            allRoles.ForEach(roleUser => _context.RoleUsrs.Remove(roleUser));
            await _context.SaveChangesAsync();

            return Ok(user);
        }

        private bool UserExists(int id)
        {
            return _context.Usrs.Any(e => e.Id == id);
        }
    }
}