using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using adminka.Model;

namespace adminka.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {
        private readonly UserContext _context;

        public RolesController(UserContext context)
        {
            _context = context;
        }

        // GET: api/Roles
        [HttpGet]
        public IEnumerable<Role> GetRoles()
        {
            return _context.Roles;
        }

        // GET: api/Roles/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRoleDTO([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var roleDTO = await _context.Roles.FindAsync(id);

            if (roleDTO == null)
            {
                return NotFound();
            }

            return Ok(roleDTO);
        }

        // PUT: api/Roles/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRoleDTO([FromRoute] int id, [FromBody] Role roleDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != roleDTO.Id)
            {
                return BadRequest();
            }

            _context.Entry(roleDTO).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoleDTOExists(id))
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

        // POST: api/Roles
        [HttpPost]
        public async Task<IActionResult> PostRoleDTO([FromBody] Role roleDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Roles.Add(roleDTO);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRoleDTO", new { id = roleDTO.Id }, roleDTO);
        }

        // DELETE: api/Roles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoleDTO([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var roleDTO = await _context.Roles.FindAsync(id);
            if (roleDTO == null)
            {
                return NotFound();
            }

            _context.Roles.Remove(roleDTO);
            await _context.SaveChangesAsync();

            return Ok(roleDTO);
        }

        private bool RoleDTOExists(int id)
        {
            return _context.Roles.Any(e => e.Id == id);
        }
    }
}