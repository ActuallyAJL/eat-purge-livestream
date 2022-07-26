using Microsoft.AspNetCore.Mvc;
using System;
using eat_purge_livestream.Models;
using eat_purge_livestream.Repositories;

namespace eat_purge_livestream.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReactionController : ControllerBase
    {
        private readonly IReactionRepository _reactionRepository;
        public ReactionController(IReactionRepository reactionRepository)
        {
            _reactionRepository = reactionRepository;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var reaction = _reactionRepository.Get(id);
            if (reaction == null)
            {
                return NotFound();
            }
            return Ok(reaction);
        }

        [HttpPost]
        public IActionResult Post(Reaction reaction)
        {
            _reactionRepository.Add(reaction);
            return CreatedAtAction("Get", new { id = reaction.Id }, reaction);
        }
    }
}
