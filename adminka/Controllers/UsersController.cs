using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using adminka.Model;
using AutoMapper;

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
            var users = _context.Users.Include(u => u.Role).ToList();

            return _mapper.Map<List<User>, List<UserView>>(users);
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserDTO([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userDTO = await _context.Users.FindAsync(id);

            if (userDTO == null)
            {
                return NotFound();
            }

            return Ok(userDTO);
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserDTO([FromRoute] int id, [FromBody] User userDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userDTO.Id)
            {
                return BadRequest();
            }

            _context.Entry(userDTO).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserDTOExists(id))
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
        public async Task<IActionResult> PostUserDTO([FromBody] User userDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Users.Add(userDTO);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserDTO", new { id = userDTO.Id }, userDTO);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserDTO([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userDTO = await _context.Users.FindAsync(id);
            if (userDTO == null)
            {
                return NotFound();
            }

            _context.Users.Remove(userDTO);
            await _context.SaveChangesAsync();

            return Ok(userDTO);
        }

        private bool UserDTOExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}